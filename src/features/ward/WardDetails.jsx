import React from "react";
import { useParams,Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deleteWardAsync } from "./wardSlice";

export const WardDetails=()=>{
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ward = useSelector((state) =>
    state.wards.wards.find((ward) => ward._id === id)
  );

  const handleWardDelete=(id)=>{
    dispatch(deleteWardAsync(id));
    navigate("/wards");
  }

    return (
        <>
        {ward ? (
            <>
            <h2 className="font-semibold text-2xl text-center my-4">Ward Details</h2>
            <div className="max-w-lg mx-auto my-8 p-8 bg-white shadow-md rounded-lg">
            <p>
              <span className="font-medium text-lg mr-2">Ward Number:</span>
              {ward.wardNumber}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Capacity: </span>
              {ward.bedsCapacity}
            </p>
            <p>
              <span className="font-medium text-lg mr-2">Specialization: </span>
              {ward.specialization}
            </p>
            
            <div className="my-2">
            <Link to={`/ward/edit/${id}`} state={ward}>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-3">Edit</button>
            </Link>
            <button onClick={() => handleWardDelete(id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
            </div>
            </>
        ):(
            <p>Ward not found!!</p>
        )}
        </>
    )
}