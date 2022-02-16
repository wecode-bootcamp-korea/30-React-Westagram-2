import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginCos from './pages/cos/LoginCos/LoginCos';
import MainCos from './pages/cos/MainCos/MainCos';
import LoginKyle from './pages/kyle/LoginKyle/LoginKyle';
import MainKyle from './pages/kyle/MainKyle/MainKyle';
import LoginStella from './pages/stella/LoginStella/LoginStella';
import MainStella from './pages/stella/MainStella/MainStella';
import LoginSung from './pages/sung/LoginSung/LoginSung';
import MainSung from './pages/sung/MainSung/MainSung';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-cos" element={<LoginCos />} />
        <Route path="/main-cos" element={<MainCos />} />
        <Route path="/login-kyle" element={<LoginKyle />} />
        <Route path="/main-kyle" element={<MainKyle />} />
        <Route path="/login-stella" element={<LoginStella />} />
        <Route path="/main-stella" element={<MainStella />} />
        <Route path="/login-sung" element={<LoginSung />} />
        <Route path="/main-sung" element={<MainSung />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
