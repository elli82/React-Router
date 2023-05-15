
import React from 'react';
import { NavbarComponent } from './components/NavbarComponent';
import { HomeComponent } from './components/HomeComponent';
import PortfolioComponent from './components/PortfolioComponent';
import { ContactComponent } from './components/ContactComponent';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
      <Route exact path='/' element={<HomeComponent/>}/>
      <Route exact path='/portfolio' element={<PortfolioComponent/>}/>
      <Route exact path='/contact' element={<ContactComponent/>}/>    
      </Routes>
    </Router>
  );
}

export default App;
