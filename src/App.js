import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes> 
      </div>
      <Footer />
    </>
  );
}

export default App;
