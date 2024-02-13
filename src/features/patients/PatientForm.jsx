import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addPatientAsync, updatePatientAsync } from "./patientSlice";

export const PatientForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const patient = location.state ? location.state : null;

  const [patientData, setPatientData] = useState({
    name: patient ? patient.name : "",
    age: patient ? patient.age : 1,
    gender: patient ? patient.gender : "male",
    medicalHistory: patient ? patient.medicalHistory.join(",") : "",
    contact: patient ? patient.contact : 0,
    assignedWard: patient ? patient.assignedWard : 100,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (patient) {
      dispatch(
        updatePatientAsync({ id: patient._id, updatedPatient: patientData })
      );
      navigate("/");
    } else {
      dispatch(addPatientAsync(patientData));
      navigate("/");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Patient</h2>
      <form onSubmit={handleFormSubmit} className="*:mb-3">
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">Name: </label>
          <input
            type="text"
            placeholder="Lily"
            required
            name="name"
            value={patientData.name}
            onChange={(e)=>setPatientData({...patientData, name:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">Age: </label>
          <input
            type="number"
            placeholder="1"
            required
            name="age"
            value={patientData.age}
            onChange={(e)=>setPatientData({...patientData, age:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={patientData.gender === "male"}
              onChange={(e)=>setPatientData({...patientData, gender:e.target.value})}
              className="ml-2 mr-1"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={patientData.gender === "female"}
              onChange={(e)=>setPatientData({...patientData, gender:e.target.value})}
              className="ml-2 mr-1"
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={patientData.gender === "others"}
              onChange={(e)=>setPatientData({...patientData, gender:e.target.value})}
              className="ml-2 mr-1"
            />
            Others
          </label>
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">Medical History: </label>
          <input
            type="text"
            placeholder="none"
            value={patientData.medicalHistory}
            required
            name="medical history"
            onChange={(e) =>
              setPatientData({
                ...patientData,
                medicalHistory: e.target.value.replace(/ /g, "").split(",")
              })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">Contact: </label>
          <input
            type="text"
            maxLength={10}
            placeholder="8978556241"
            value={patientData.contact}
            required
            name="contact"
            onChange={(e)=>setPatientData({...patientData, contact:e.target.value})}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-medium mb-2">Ward: </label>
          <select
            name="ward"
            value={patientData.assignedWard}
            required
            onChange={(e)=>setPatientData({...patientData, assignedWard:e.target.value})}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm *:text-gray-700"
          >
            <option value={100}>100</option>
            <option value={101}>101</option>
            <option value={102}>102</option>
            <option value={103}>103</option>
            <option value={104}>104</option>
            <option value={105}>105</option>
            <option value={106}>106</option>
            <option value={107}>107</option>
            <option value={108}>108</option>
            <option value={109}>109</option>
            <option value={110}>110</option>
          </select>
        </div>
        <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{patient ? "Update" : "Add"}</button>
        </div>
        
      </form>
    </div>
  );
};
