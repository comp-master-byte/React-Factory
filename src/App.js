import React from 'react'
import './styles/main.scss'
import { Navigation } from './components/Navigation';
import { News } from './pages/News';

function App() {
  return (
    <>
      <Navigation/>
      <News/>
    </>
  );
}

export default App;
