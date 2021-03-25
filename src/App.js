import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast.js";
import Logo from "./components/Logo/Logo.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Created by Paul von Hagen
      </footer>
    </div>
  );
}

export default App;
