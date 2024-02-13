import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { addWardAsync, updateWardAsync } from "./wardSlice";

export const WardForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ward = location.state ? location.state : null;

  const [wardData, setWardData] = useState({
    wardNumber: ward ? ward.wardNumber : 0,
    bedsCapacity: ward ? ward.bedsCapacity : 0,
    specialization: ward ? ward.specialization : "general ward",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (ward) {
      dispatch(updateWardAsync({ id: ward._id, updatedWard: wardData }));
      navigate("/wards");
    } else {
      dispatch(addWardAsync(wardData));
      navigate("/wards");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ward</h2>
        <form onSubmit={handleFormSubmit} className="*:mb-3">
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Ward Number:
            </label>
            <input
              type="number"
              required
              placeholder="0"
              value={wardData.wardNumber}
              onChange={(e) =>
                setWardData({ ...wardData, wardNumber: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Capacity:{" "}
            </label>
            <input
              type="number"
              required
              placeholder="0"
              value={wardData.bedsCapacity}
              onChange={(e) =>
                setWardData({ ...wardData, bedsCapacity: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Specialization:{" "}
            </label>
            <select
              onChange={(e) =>
                setWardData({ ...wardData, specialization: e.target.value })
              }
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm *:text-gray-700"
            >
              <option value="general ward">general ward</option>
              <option value="emergency ward">emergency ward</option>
              <option value="icu ward">icu ward</option>
              <option value="surgical ward">surgical ward</option>
              <option value="cardiac care unit">cardiac care unit</option>
              <option value="neonatal intensive care unit">
                neonatal intensive care unit
              </option>
              <option value="pediatric ward">pediatric ward</option>
              <option value="maternity ward">maternity ward</option>
              <option value="gynocological ward">gynocological ward</option>
              <option value="isolation ward">isolation ward</option>
              <option value="orthopedic ward">orthopedic ward</option>
              <option value="burn unit">burn unit</option>
              <option value="psychiatric ward">psychiatric ward</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {ward ? "Update" : "Add"} Ward
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
