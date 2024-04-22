import React from 'react'
import { Field, reduxForm } from 'redux-form';
import styles from '../../styles/AuthForms.module.css';
import { requiredField, minFieldLength, maxFieldLength, mailRequired } from '../../utils/validators/validation';
import { Input } from '../../common/FormControls/FormControls';
import main from '../../styles/App.module.css';
import { AuthHttp } from '../../http/AuthHttp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authentication } from '../../reducers/AuthReducer'
import { setProfileData } from '../../reducers/ProfileReducer'

let Register = props => {
  const { handleSubmit, submitting } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = async (formData) => {
    try {
      const { data } = await AuthHttp.registration(formData);
      localStorage.setItem("accessToken", data?.token);
      dispatch(authentication({ isAuth: true }));
      dispatch(setProfileData({ ...data }));
      navigate('/')
    } catch (error) {
      alert(error?.response?.data?.message || "Error occurred registration")
    }
  };


  return (
    <div className={styles.auth}>
      <div className={main.wrapper}>
        <div className={styles.authForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Registration</h2>
            <div className={styles.formPart}>
              <label htmlFor="email">Email:</label>
              <Field name="login" component={Input} type="text" validate={[requiredField, mailRequired, maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="firstName">Name:</label>
              <Field name="name" component={Input} type="text" validate={[requiredField, minFieldLength(2), maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="Surname">Surname:</label>
              <Field name="surname" component={Input} type="text" validate={[minFieldLength(2), maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart}>
              <label htmlFor="lastName">Password: </label>
              <Field name="password" component={Input} type="text" validate={[requiredField, minFieldLength(8), maxFieldLength(30)]} />
            </div>
            <div className={styles.formPart + " " + styles.formPart_checkbox}>
              <label htmlFor="email">Remember Me</label>
              <Field name="remember" component={Input} type="checkbox" />
            </div>
            <button type="submit" disabled={submitting} className={styles.formSubmitBtn}>Submit</button>
            <div className={styles.suggestionBlock}>
              Have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

Register = reduxForm({
  form: 'register'
})(Register)

export default Register;