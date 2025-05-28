import { configureStore } from '@reduxjs/toolkit';
import buildingsReducer from './features/buildings/buildingSlice';

export const store = configureStore({
  reducer: {
    buildings: buildingsReducer,
  },
});