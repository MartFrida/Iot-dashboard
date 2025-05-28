import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBuilding } from '../features/buildings/buildingSlice';

export default function AddBuildingForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBuilding({ name, location }));
    setName('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input className="border p-2 mr-2" value={name} onChange={e => setName(e.target.value)} placeholder="Building Name" />
      <input className="border p-2 mr-2" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add</button>
    </form>
  );
}
