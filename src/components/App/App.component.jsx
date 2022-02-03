import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import Layout from '../Layout';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<div><h1>Home</h1></div>}></Route>
          </Routes>
        </Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
