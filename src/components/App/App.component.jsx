import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import HomePage from '../../pages/Home';
import ProductListPage from '../../pages/ProductList';
import Layout from '../Layout';
import './App.css';

function App() {
  const [pageToDisplay, setPageToDisplay] = useState("home");

  useEffect(() => {

  }, [pageToDisplay]);

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout conditionalRender={setPageToDisplay}>
          {pageToDisplay === "home" ?
            <HomePage conditionalRender={setPageToDisplay}/>
          :
            <ProductListPage />
          }
        </Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
