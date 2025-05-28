import AddBuildingForm from './components/AddBuildingForm';
import BuildingList from './features/buildings/BuildingList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">🏙️ IoT Dashboard</h1>
        <AddBuildingForm />
        <hr className="my-6" />
        <BuildingList />
      </div>
    </div>
  );
}

export default App;
