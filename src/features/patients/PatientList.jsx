import React from "react";
import { Link } from "react-router-dom";

export const PatientList = ({ patients }) => {
  return (
    <>
      <table className="table-auto border-collapse border border-gray-400 my-6 mx-auto">
        <tbody>
          <tr className="*:border *:border-gray-400 *:px-4 *:py-2">
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Assigned ward</th>
          </tr>
          {patients.map((patient) => {
            const { _id, name, age, gender, contact, assignedWard } = patient;

            return (
              <>
                <tr key={_id} className="*:border *:border-gray-400 *:px-4 *:py-2 *:text-indigo-700">
                  <td>
                    <Link to={`/patient/${_id}`}>{name}</Link>
                  </td>
                  <td>
                    <Link to={`/patient/${_id}`}>{age}</Link>
                  </td>
                  <td>
                    <Link to={`/patient/${_id}`}>{gender}</Link>
                  </td>
                  <td>
                    <Link to={`/patient/${_id}`}>{contact}</Link>
                  </td>
                  <td>
                    <Link to={`/patient/${_id}`}>{assignedWard}</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
