import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Find from './components/find/Find';
import Driver from './components/driver/Driver';
import Luxury from './components/luxury/luxury';
import Footer from './components/foooter/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
