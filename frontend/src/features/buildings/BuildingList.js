import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBuilding, fetchBuildings, updateBuilding } from './buildingSlice';

export default function BuildingList() {
  const buildings = useSelector(state => state.buildings.list);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: '', location: '' });

  useEffect(() => {
    dispatch(fetchBuildings());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBuilding(id));
  };

  const handleEdit = (building) => {
    setEditingId(building._id);
    setFormData({ name: building.name, location: building.location });
  };

  const handleUpdate = () => {
    dispatch(updateBuilding({ id: editingId, ...formData }));
    setEditingId(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Buildings</h2>
      <ul>
        {buildings.map(b => (
          <li key={b._id} className="bg-white p-2 mb-2 rounded shadow">
            {editingId === b._id ? (
              <>
                <input
                  className="border p-1 mr-2"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  className="border p-1 mr-2"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                <button className="bg-green-500 text-white p-1 rounded mr-2" onClick={handleUpdate}>✅</button>
              </>
            ) : (
              <>
                <span>{b.name} - {b.location} | 🌡️ {b.sensors.temperature.toFixed(1)}°C | 💧 {b.sensors.humidity.toFixed(1)}%</span>
                <div className="flex">
                  <button className="bg-yellow-400 text-white p-1 rounded mr-2" onClick={() => handleEdit(b)}>✏️</button>
                  <button className="bg-red-500 text-white p-1 rounded" onClick={() => handleDelete(b._id)}>🗑️</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
