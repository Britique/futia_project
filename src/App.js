import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './components/landingpage';
import About from './components/about';
import CareerServices from './components/careerservices';
import LoginSignUp from './components/loginsignup';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Logo" />

          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careerservices">Career Services</Link>
            </li>
            <li>
              <Link to="/loginsignup">Login</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/career-services" element={<CareerServices />} />
          <Route path="/loginsignup" element={<LoginSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
