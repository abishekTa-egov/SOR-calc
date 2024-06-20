import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SorCalculation from './components/SorCalculation';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SorCalculation />} />
      </Routes>
    </Router>
  );
}

export default App;


