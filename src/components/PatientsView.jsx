import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../features/patients/patientSlice";
import { PatientList } from "../features/patients/PatientList";

export const PatientsView = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);
  const status = useSelector((state) => state.patients.status);
  const error = useSelector((state) => state.patients.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPatients());
    }
  }, [dispatch, patients, status]);

  return (
    <>
      {status === "loading" ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            <p className="text-center text-xl text-red-600">{error}</p>
          ) : patients.length === 0 ? (
            <p className="text-center text-xl text-red-600">No patient found</p>
          ) : (
            <PatientList patients={patients} />
          )}
        </div>
      )}
      <Link to={`/patient/add`} className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Patient
        </button>
      </Link>
    </>
  );
};
