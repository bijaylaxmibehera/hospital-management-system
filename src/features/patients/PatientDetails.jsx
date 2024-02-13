import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePatientAsync } from "./patientSlice";

export const PatientDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const patient = useSelector((state) =>
    state.patients.patients.find((patient) => patient._id === id)
  );

  const handlePatientDelete = (id) => {
    dispatch(deletePatientAsync(id));
    navigate("/")
  };
  return (
    <>
      {patient ? (
        <>
          <h2 className="font-semibold text-2xl text-center my-4">Patient Details</h2>
          <div className="max-w-lg mx-auto my-8 p-8 bg-white shadow-md rounded-lg">
            <p>
              <span className="font-medium text-lg mr-2">Name:</span>
              {patient.name}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Age:</span>
              {patient.age}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Gender:</span>
              {patient.gender}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Contact:</span>
              {patient.contact}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Medical History:</span>
              {patient.medicalHistory.join(",")}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Ward: </span>
              {patient.assignedWard}
            </p>
            <div className="my-2">
            <Link to={`/patient/edit/${id}`} state={patient}>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-3">Edit</button>
            </Link>
            <button onClick={() => handlePatientDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
            
          </div>
        </>
      ) : (
        <p>Patient not found!!</p>
      )}
    </>
  );
};
