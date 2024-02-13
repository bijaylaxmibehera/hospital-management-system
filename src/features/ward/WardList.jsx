import React from "react";
import { Link } from "react-router-dom";

export const WardList=({wards})=>{
    return (
        <>
       <table className="table-auto border-collapse border border-gray-400 my-6 mx-auto">
        <tbody>
          <tr className="*:border *:border-gray-400 *:px-4 *:py-2">
            <th>Ward Number</th>
            <th>Capacity</th>
            <th>Specialization</th>
          </tr>
          {wards.map((ward) => {
            const { _id,wardNumber,bedsCapacity,specialization } = ward;

            return (
              <>
                <tr key={_id} className="*:border *:border-gray-400 *:px-4 *:py-2 *:text-indigo-700">
                  <td>
                    <Link to={`/ward/${_id}`}>{wardNumber}</Link>
                  </td>
                  <td>
                    <Link to={`/ward/${_id}`}>{bedsCapacity}</Link>
                  </td>
                  <td>
                    <Link to={`/ward/${_id}`}>{specialization}</Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
        </>
    )
}