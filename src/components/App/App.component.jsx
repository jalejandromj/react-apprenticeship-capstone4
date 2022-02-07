import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Navigate to="/home" />}></Route>
            <Route exact path="/home" element={<HomePage />}></Route>
          </Routes>
        </Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
