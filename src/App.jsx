import React from 'react'
import "./App.css";
import "./index.css";
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Experience from './components/Experience';

const App = () => {
  return (
    <Router> 
      <div>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home />}></Route>
    <Route exact path='/about' element={<About />}></Route>
    <Route exact path='/projects' element={<Project />}></Route>
    <Route exact path='/contact' element={<Contact />}></Route>
    <Route exact path='/experience' element={<Experience />}></Route>
    </Routes>
  </div>
  </Router>
   
  )
}

export default App



