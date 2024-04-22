// routes/PrivateRoute.js
import React, { useState } from 'react';
import { Route, redirect, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  
  const {isAuth} = useSelector(s => s.AuthReducer)
  const accessToken = localStorage.getItem('accessToken')

  

  return (
    isAuth || accessToken ? children : <Navigate to="/" replace />
 );

};

export default PrivateRoute;
