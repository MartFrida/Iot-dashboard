import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBuildings = createAsyncThunk('buildings/fetch', async () => {
  const res = await axios.get('http://localhost:5000/api/buildings');
  return res.data;
});

export const addBuilding = createAsyncThunk('buildings/add', async (data) => {
  const res = await axios.post('http://localhost:5000/api/buildings', data);
  return res.data;
});

const buildingSlice = createSlice({
  name: 'buildings',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBuildings.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(addBuilding.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });
  }
});

export default buildingSlice.reducer;
