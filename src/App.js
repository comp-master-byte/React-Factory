import React from 'react'
import './styles/main.scss'
import { Navigation } from './components/Navigation';
import { News } from './pages/News';
import About from './pages/About';

function App() {
  return (
    <>
      <Navigation/>
      <News/>
      <About/>
    </>
  );
}

export default App;
