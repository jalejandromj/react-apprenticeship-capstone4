import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import HomePage from '../../pages/Home';
import ProductListPage from '../../pages/ProductList';
import Layout from '../Layout';
import './App.css';

function App() {

  useEffect(() => {

  }, []);

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/products" element={<ProductListPage />} />
          </Routes>
        </Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
