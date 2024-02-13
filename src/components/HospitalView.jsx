import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTopWard,
  updateHospitalStats,
} from "../features/hospital/hospitalSlice";

export const HospitalView = () => {
  const dispatch = useDispatch();
  const hospitalStats = useSelector((state) => state.hospital);
  const patients = useSelector((state) => state.patients.patients);
  const wards = useSelector((state) => state.wards.wards);

  useEffect(() => {
    const totalPatients = patients.length;
    const totalCapacity = wards.reduce(
      (acc, curr) => acc + curr.bedsCapacity,
      0
    );
    let occupancyRate;
    if (totalCapacity) {
      occupancyRate = (patients.length / totalCapacity) * 100;
    } else {
      occupancyRate = 0;
    }
    const wardCount = patients.reduce((acc, { assignedWard }) => {
      acc[assignedWard] = (acc[assignedWard] ?? 0) + 1;
      return acc;
    }, {});

    let maxCount = 0;
    let topWard = null;
    for (const [wardNumber, count] of Object.entries(wardCount)) {
      if (count > maxCount) {
        maxCount = count;
        topWard = wardNumber;
      }
    }

    dispatch(updateHospitalStats({ totalPatients, occupancyRate, topWard }));
    dispatch(setTopWard(topWard));
  }, [patients, wards, dispatch]);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Hospital Stats</h2>
      <div className="*mb-2">
        <p>
          <span>Total Patients: </span>
          {hospitalStats.totalPatients}
        </p>
        <p>
          <span>Current occupancy rate: </span>
          {hospitalStats.occupancyRate}%
        </p>
        <p>
          <span>Top ward: </span>
          {hospitalStats.topWard ? hospitalStats.topWard : "-"}
        </p>
      </div>
    </div>
  );
};
