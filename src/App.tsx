import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import Header from './components/header';
import Account from './pages/Account';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
