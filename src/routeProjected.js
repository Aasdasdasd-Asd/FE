import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import Blog from 'src/views/blog'
import { Navigate } from 'react-router';
import auth from './views/auth/LoginView'

const authent = auth

console.log(auth);

const routesProtected = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: authent ? <AccountView /> : <Navigate to='/login'/> },
      { path: 'customers', element: authent ? <CustomerListView /> : <Navigate to='/login'/>},
      { path: 'dashboard', element: authent ? <DashboardView /> : <Navigate to='/login'/>},
      { path: 'products', element: authent ? <ProductListView /> : <Navigate to='/login'/>},
      { path: 'settings', element: authent ? <SettingsView /> : <Navigate to='/login'/>},
      { path: 'blog', element: authent ? <Blog /> : <Navigate to='/login'/> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
]; 

export default routesProtected;
