import React from 'react';
import HeaderContent from './components/HeaderContent/HeaderContent';
import { Route, Routes, } from 'react-router-dom';
import {About,Contact,Home,Login,History,Team,Values} from './components/Pages';
import './App.css'

function App() {
  
  return (
    <div className='App'>
      <HeaderContent />
      <h>WELCOME TO PROFITNESS</h>
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/about/history' element={<History/>} />
        <Route path='/about/team' element={<Team />}/>
        <Route path='/about/values' element={<Values />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;