// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Products from './pages/Products';
import Category from './pages/Categogy';
import Oder from './pages/Oder';
import Coupon from './pages/Coupon';
import AddAccount from './pages/Account/Add';
import EditAccount from './pages/Account/Ed';
import AddPro from './pages/Product/Add';
import EditPro from './pages/Product/Ed';
import XemOder from './pages/Oder/Add';
import AddCp from './pages/Coup/Add';
import EditCp from './pages/Coup/Ed';
import AddCa from './pages/Categogy/Ad';
import EditCa from './pages/Categogy/Ed';
import SidebarLayout from './components/SidebarLayout';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/add" element={<AddAccount />} />
            <Route path="/account/edit/:id" element={<EditAccount />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddPro />} />
            <Route path="/products/edit/:id" element={<EditPro />} />
            <Route path="/categogy" element={<Category />} />
            <Route path="/categogy/add" element={<AddCa />} />
            <Route path="/categogy/edit/:id" element={<EditCa />} />
            <Route path="/oder" element={<Oder />} />
            <Route path="/oder/view/:id" element={<XemOder />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/coupon/add" element={<AddCp />} />
            <Route path="/coupon/edit/:id" element={<EditCp />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;




