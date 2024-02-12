import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { PatientsView } from './components/PatientsView';
import { WardView } from './components/WardView';
import { HospitalView } from './components/HospitalView';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<PatientsView/>}/>
        <Route path='/wards' element={<WardView/>}/>
        <Route path='/hospital' element={<HospitalView/>}/>
      </Routes>
    </div>
  );
}

export default App;
