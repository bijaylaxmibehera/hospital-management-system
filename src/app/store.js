import { configureStore } from '@reduxjs/toolkit';
import {patientSlice} from '../features/patients/patientSlice';
import {wardSlice} from '../features/ward/wardSlice';
import {hospitalSlice} from '../features/hospital/hospitalSlice';

export const store = configureStore({
  reducer: {
    patients:patientSlice.reducer,
    wards:wardSlice.reducer,
    hospital:hospitalSlice.reducer
  },
});
