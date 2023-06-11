
import './App.scss';
//import React from 'react';
import {Routes,Route} from 'react-router-dom';


import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact/index';

function App() {
  return (
    <div>
      <>
      <Routes>
        <Route path="/r-portfolio" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          
        </Route>
        
      </Routes>
      </>
    
    
    </div>
  );
}

export default App;
