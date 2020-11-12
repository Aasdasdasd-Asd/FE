import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import Blog from 'src/views/blog'
import { Navigate } from 'react-router';

console.log(localStorage.getItem('token'));

const routesProtected = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account',   element: localStorage.getItem('token') != null ? <AccountView /> : <Navigate to='/login'/> },
      { path: 'customers', element: localStorage.getItem('token') != null ? <CustomerListView /> : <Navigate to='/login'/>},
      { path: 'dashboard', element: localStorage.getItem('token') != null ? <DashboardView /> : <Navigate to='/login'/>},
      { path: 'products',  element: localStorage.getItem('token') != null ? <ProductListView /> : <Navigate to='/login'/>},
      { path: 'settings',  element: localStorage.getItem('token') != null ? <SettingsView /> : <Navigate to='/login'/>},
      { path: 'blog',      element: localStorage.getItem('token') != null ? <Blog /> : <Navigate to='/login'/> },
      { path: '*',         element: <Navigate to="/" /> }
    ]
  }
]; 

export default routesProtected;
