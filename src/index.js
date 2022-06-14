import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import First from './pages/First';
import Fourth from './pages/Fourth';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Second from './pages/Second';
import Third from './pages/Third';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="first" element={<First/>} />
          <Route path="second" element={<Second/>} />
          <Route path="third" element={<Third/>} />
          <Route path="fourth" element={<Fourth/>} />
          
    </Route>
    <Route path="*" element={<NoPage />}/>
    </Routes>

 
    
    
    </BrowserRouter>
    
  </React.StrictMode>
);

