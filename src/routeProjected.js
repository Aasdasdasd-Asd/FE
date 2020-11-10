import React from 'react';
import DashboardLayout from 'src/layouts/DashboardLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import ProductListView from 'src/views/product/ProductListView';
import SettingsView from 'src/views/settings/SettingsView';
import Blog from 'src/views/blog'
import { Navigate } from 'react-router';

const auth = true
const routesProtected = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: auth ? <AccountView /> : <Navigate to='/login'/> },
      { path: 'customers', element: auth ? <CustomerListView /> : <Navigate to='/login'/>},
      { path: 'dashboard', element: auth ? <DashboardView /> : <Navigate to='/login'/>},
      { path: 'products', element: auth ? <ProductListView /> : <Navigate to='/login'/>},
      { path: 'settings', element: auth ? <SettingsView /> : <Navigate to='/login'/>},
      { path: 'blog', element: auth ? <Blog /> : <Navigate to='/login'/> },
      { path: '*', element: <Navigate to="/" /> }
    ]
  }
]; 

export default routesProtected;