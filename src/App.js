import React from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import { NavBar } from './components/NavBar';
import { PatientsView } from './components/PatientsView';
import { WardView } from './components/WardView';
import { HospitalView } from './components/HospitalView';
import { PatientForm } from './features/patients/PatientForm';
import { PatientDetails } from './features/patients/PatientDetails';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<PatientsView/>}/>
        <Route path='/wards' element={<WardView/>}/>
        <Route path='/hospital' element={<HospitalView/>}/>
        <Route path='/patient/add' element={<PatientForm/>}/>
        <Route path='/patient/edit/:id' element={<PatientForm/>}/>
        <Route path='/patient/:id' element={<PatientDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
