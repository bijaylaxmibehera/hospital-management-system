import { configureStore } from '@reduxjs/toolkit';
import {patientSlice} from '../features/patients/patientSlice';

export const store = configureStore({
  reducer: {
    patients:patientSlice.reducer
  },
});
