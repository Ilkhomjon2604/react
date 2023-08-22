import React from 'react';
import './App.css'
import Navbar from './components/nav'
import Map from './components/map'
import Card from './components/card/card'
import Newspaper from './components/newspaper';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Map/>
      <Card/>
      <Newspaper/>
      <Footer/>
    </div>
  );
}


export default App;