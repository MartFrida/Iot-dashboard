import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBuildings } from './buildingSlice';

export default function BuildingList() {
  const buildings = useSelector(state => state.buildings.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBuildings());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buildings</h2>
      <ul>
        {buildings.map(b => (
          <li key={b._id} className="bg-white p-2 mb-2 rounded shadow">
            {b.name} - {b.location} | 🌡️ {b.sensors.temperature.toFixed(1)}°C | 💧 {b.sensors.humidity.toFixed(1)}%
          </li>
        ))}
      </ul>
    </div>
  );
}
