// routes/AppRouter.js
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import ProductPageContainer from '../containers/ProductPageContainer';
import Header from '../components/Header/Header';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import Footer from '../components/Footer/Footer';
import NotFound from './NotFound'
import Cart from '../components/Cart/Cart'
import PrivateRoute from './PrivateRoute'

import AdminRouter from './AdminRouter'
import Catalog from '../components/UserCatalog/Catalog';


const AppRouter = () => {

  useEffect(() => {
    const isAdminRoute = window.location.pathname.includes('admin');
    const header = document.querySelector('#main--header');
    const footer = document.querySelector('#main--footer');
  
    if (isAdminRoute && header && footer) {
      header.style.display = 'none';
      footer.style.display = 'none';
    } else if (header && footer) {
      header.style.display = 'block'; 
      footer.style.display = 'block';
    }
  }, []);
  

  return (
    <Router>
      <Header />
      <Routes>

        <Route
          path="/admin/*"
          element={<AdminRouter />}
        />

        <Route exact path="/" element={<HomeContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductPageContainer />} />


        <Route path="/catalog" element={<Catalog />} />
        {/*<Route path="/contact" exact component={Contact} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/checkout" component={CheckoutContainer} />
        {/* <PrivateRoute path="/profile" component={() => <div>Profile Page</div>} /> */}

        <Route
          path="*"
          element={<NotFound />}
        />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
