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

export const deleteBuilding = createAsyncThunk('buildings/delete', async (id) => {
  await axios.delete(`http://localhost:5000/api/buildings/${id}`);
  return id;
});

export const updateBuilding = createAsyncThunk('buildings/update', async ({ id, name, location }) => {
  const res = await axios.put(`http://localhost:5000/api/buildings/${id}`, { name, location });
  return res.data;
});

const buildingSlice = createSlice({
  name: 'buildings',
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuildings.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addBuilding.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteBuilding.fulfilled, (state, action) => {
        state.list = state.list.filter(b => b._id !== action.payload);
      })
      .addCase(updateBuilding.fulfilled, (state, action) => {
        const index = state.list.findIndex(b => b._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  }
});

export default buildingSlice.reducer;
