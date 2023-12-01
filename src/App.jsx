// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Greeting />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
