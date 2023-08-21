import React from 'react';
import './App.css'
import Navbar from './components/nav'
import Map from './components/map'
import Card from './components/card/card'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Map/>
      <Card/>
    </div>
  );
}


export default App;