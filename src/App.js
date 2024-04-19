import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from'./components/Header.js';
import Footer from './components/Footer.js';
import HeroPage from './pages/HeroPage.js';
import ServicesPage from './pages/ServicesPage.js';
import About from './pages/About.js';
import ContactPage from './pages/ContactPage.js';
import data from './DataBySection.json'

function App() {
  console.log(data.ContactPage)
  return (
    <Router>
      <div className="App">
      <Header className="App-header" />
      <Routes>
        <Route path="/" element={<HeroPage data={data.HeroPage} />} />
        <Route path="/services" element={<ServicesPage data={data.ServicesPage} />} />
        <Route path="/aboutUs" element={<About data={data.AboutPage}/>} />
        <Route path="/contactUs" element={<ContactPage data={data.ContactPage[0]} />} />
      </Routes>
      <Footer data={data.Footer} address={data.ContactPage[0].Address}/>
    </div>
    </Router>
    
  );
}

export default App;
