import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import HomePage from '../../pages/Home';
//import ProductListPage from '../../pages/ProductList';
import Layout from '../Layout';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <HomePage />
        </Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
