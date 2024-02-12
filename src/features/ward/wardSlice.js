import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    wards:[],
    status:"idle",
    error:null
};


export const fetchWards=createAsyncThunk("wards/fetchWards", async()=>{
    const response=await axios.get("https://33590b1e-e963-42c7-ac21-5446de071a3d-00-22xbm0c0xdn3x.sisko.replit.dev/api/v1/wards");

    return response.data.wards;
});

export const addWardAsync=createAsyncThunk("wards/addWardAsync", async(newWard)=>{
    const response=await axios.post("https://33590b1e-e963-42c7-ac21-5446de071a3d-00-22xbm0c0xdn3x.sisko.replit.dev/api/v1/wards", newWard);

    return response.data.ward;
});

export const updateWardAsync=createAsyncThunk("wards/updateWardAsync", async({id,updatedWard})=>{
    const response=await axios.put(`https://33590b1e-e963-42c7-ac21-5446de071a3d-00-22xbm0c0xdn3x.sisko.replit.dev/api/v1/wards/${id}`, updatedWard);

    return response.data.ward;
});

export const deleteWardAsync=createAsyncThunk("wards/deleteWardAsync", async (id)=>{
    const response= await axios.delete(`https://33590b1e-e963-42c7-ac21-5446de071a3d-00-22xbm0c0xdn3x.sisko.replit.dev/api/v1/wards/${id}`);

    return response.data.ward;
});

export const wardSlice= createSlice({
    name: 'wards',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchWards.pending]: state => {
        state.status = 'loading';
      },
      [fetchWards.fulfilled]: (state, action) => {
        state.status = 'success';
        state.wards=action.payload;
      },
      [fetchWards.rejected]: (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      },
      [addWardAsync.pending]: state => {
        state.status = 'loading';
      },
      [addWardAsync.fulfilled]: (state, action) => {
        state.status = 'success';
        state.wards.push(action.payload);
      },
      [addWardAsync.rejected]: (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      },
      [updateWardAsync.pending]: state => {
        state.status = 'loading';
      },
      [updateWardAsync.fulfilled]: (state, action) => {
        state.status = 'success';
        const updatedWard=action.payload;
        const index=state.wards.findIndex((ward)=>ward._id===updatedWard._id);
        if(index!==-1){
          state.wards[index]=updatedWard;
        };
      },
      [updateWardAsync.rejected]: (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      },
      [deleteWardAsync.pending]: state => {
        state.status = 'loading';
      },
      [deleteWardAsync.fulfilled]: (state, action) => {
        state.status = 'success';
        state.wards=state.wards.filter((ward)=>ward._id!==action.payload._id);
      },
      [deleteWardAsync.rejected]: (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      }
    }
  });

  export default wardSlice.reducer;