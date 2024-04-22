import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader/AdminHeader'
import AddCategories from '../components/AddCategories/AddCategories'
import AddBrand from '../components/AddBrand/AddBrand'
import PrivateRoute from './PrivateRoute'
import AdminAuth from '../components/AdminAuth/Auth';
import { AdminStatistic } from '../components/AdminStatistic/AdminStatistic';
import AddFilter from '../components/AddNode/AddNode';
import { AddProducts } from '../components/AddProduct.jsx/AddProducts';
const AdminRouter = () => {



    return (
        <>
            <AdminHeader />
            <Routes>

                <Route
                    path="statistic"

                    element={
                        <PrivateRoute>
                            <AdminStatistic />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="add-categories"

                    element={
                        <PrivateRoute>
                            <AddCategories />
                        </PrivateRoute>
                    }
                />


                <Route
                    path="add-brand"
                    element={
                        <PrivateRoute>
                            <AddBrand />
                        </PrivateRoute>
                    }
                />


                <Route
                    path="add-node"

                    element={
                        <PrivateRoute>
                            <AddFilter />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="add-products"

                    element={
                        <PrivateRoute>
                            <AddProducts />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="*"
                    element={
                        <AdminAuth />
                    }
                />


            </Routes>
        </>

    )
}

export default AdminRouter