import React from 'react';
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Link
} from "react-router-dom";
import './app.scss';
import Home from './components/home/Home';

function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
