import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import About from './pages/Dashboard.jsx';
import Analytics from './pages/Dashboard.jsx';
import Comment from './pages/Dashboard.jsx';
import Product from './pages/Dashboard.jsx';
import ProductList from './pages/Dashboard.jsx';

import VerticalNav from './Vertical-nav/vertical-nav';

function Map() {
    return (
      <div>
        <h1>Home</h1>
      
      <VerticalNav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </VerticalNav>
      </div>
    )
}

export default Map
