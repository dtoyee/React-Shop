import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Category from './Category';
import Basket from './components/basket';

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="cart" element={<Basket />}></Route>
    </Routes>
  </BrowserRouter>
);
