import React from 'react'
import styles from '../../styles/AuthForms.module.css';
import { Field, reduxForm } from 'redux-form';
import main from '../../styles/App.module.css';
import { requiredField, minFieldLength, maxFieldLength, mailRequired } from '../../utils/validators/validation';
import { Input } from '../../common/FormControls/FormControls';
import { useDispatch } from 'react-redux';
import { AuthHttp } from '../../http/AuthHttp';
import { authentication } from '../../reducers/AuthReducer'
import { Link, useNavigate } from 'react-router-dom';
import { setProfileData } from '../../reducers/ProfileReducer'

let Login = props => {
  const { handleSubmit } = props;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (formData) => {
    try {
      const { data } = await AuthHttp.login(formData);
      localStorage.setItem("accessToken", data?.token);
      dispatch(authentication({ isAuth: true }));
      dispatch(setProfileData({ ...data }));
      navigate('/')
    } catch (error) {
      alert(error?.response?.data?.message || "Error occurred login")
    }
  };



  return (
    <div className={styles.auth}>
      <div className={main.wrapper}>
        <div className={styles.authForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.authForm_Name}>Login</h2>
            <div className={styles.formPart}>
              <label htmlFor="firstName">Email:</label>
              <Field name="login" component={Input} type="text" validate={[requiredField, mailRequired, maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="lastName">Password: </label>
              <Field name="password" component={Input} type="text" validate={[requiredField, minFieldLength(8), maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="email">Remember Me</label>
              <Field name="remember" component={Input} type="checkbox" />
            </div>
            <button type="submit" className={styles.formSubmitBtn}>Submit</button>
            <div className={styles.suggestionBlock}>
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Login = reduxForm({
  form: 'login'
})(Login)

export default Login;