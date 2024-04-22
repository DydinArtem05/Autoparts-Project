import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import { authentication } from '../reducers/AuthReducer'
import { setProfileData } from '../reducers/ProfileReducer'
import { AuthHttp } from '../http/AuthHttp';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("accessToken")

    if (token ) {
      AuthHttp.refresh({token})
        .then(({ data }) => {
          dispatch(authentication({ isAuth: true }));
          dispatch(setProfileData({ ...data  }));
        })
        .catch(() => {
          localStorage.setItem("accessToken", '');
          dispatch(authentication({ isAuth: false }));
        })
    }
  }, [])


  return (
    <AuthContext.Provider >
      {children}
    </AuthContext.Provider>
  );
};



export { AuthProvider, AuthContext };
