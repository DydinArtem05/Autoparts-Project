import { TextField } from '@mui/material'
import styles from '../../styles/Admin.module.css';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthHttp } from '../../http/AuthHttp'
import { authentication } from '../../reducers/AuthReducer'
import { setProfileData, setProfileDefaultData } from '../../reducers/ProfileReducer';
import { Field, reduxForm } from 'redux-form'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Input } from '../../common/FormControls/FormControls';
import { requiredField, mailRequired, maxFieldLength } from '../../utils/validators/validation'

let AdminAuth = props => {
  const { handleSubmit } = props;
  const [login, setLogin] = useState('test@test.test')
  const [password, setPassword] = useState('testtest')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async () => {
    try {
      const { data } = await AuthHttp.login({
        login,
        password,
      });


      localStorage.setItem("accessToken", data?.token);
      dispatch(authentication({ isAuth: true }));
      dispatch(setProfileData({ ...data }));
      navigate('/admin/statistic')
    } catch (error) {
      alert(error?.response?.data?.message || "Error occurred login")
    }
  };



  return (
    <div className={styles.admin__auth}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Войти как Администратор</h4>
        <Field name="Login" component={Input} type="text" value={login} validate={[requiredField, mailRequired, maxFieldLength(30)]} onChange={e => setLogin(e.target.value)} />
        <Field name="Password" component={Input} type="password" value={password} validate={[requiredField, maxFieldLength(30)]} onChange={e => setPassword(e.target.value)} />
        <Button type='submit' variant="outlined">Войти</Button>
      </form>
    </div>
  )
}

AdminAuth = reduxForm({
  form: 'AdminAuth'
})(AdminAuth);


export default AdminAuth;