import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWards } from "../features/ward/wardSlice";
import { WardList } from "../features/ward/WardList";

export const WardView = () => {
  const dispatch = useDispatch();
  const wards = useSelector((state) => state.wards.wards);
  const status = useSelector((state) => state.wards.status);
  const error = useSelector((state) => state.wards.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchWards());
    }
  }, [dispatch, wards, status]);
  return (
    <>
      {status === "loading" ? (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      ) : (
        <div>
          {status === "error" ? (
            <p className="text-center text-xl text-red-600">{error}</p>
          ) : wards.length === 0 ? (
            <p className="text-center text-xl text-red-600">No ward found</p>
          ) : (
            <WardList wards={wards}/>
          )}
        </div>
      )}
      <Link to={`/ward/add`} className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Ward
        </button>
      </Link>
    </>
  );
};
