import React from 'react'
import './styles/main.scss'
import { Navigation } from './components/Navigation';
import { News } from './pages/News';
import { Event } from './pages/Event';
import About from './pages/About';
import Workers from './pages/Workers';
import { Partners } from './pages/Partners';
import { Stata } from './pages/Stata';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <News/>
      <About/>
      <Workers/>
      <Event/>
      <Partners/>
      <Stata/>
      <Footer/>
    </>
  );
}

export default App;
