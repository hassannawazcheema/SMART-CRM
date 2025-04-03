import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import Sidebar from '../components/Sidebar'

const initialRestaurants = [
  { id: 1, name: "Pizza Palace", plan: "Premium", status: "Active" },
  { id: 2, name: "Burger Town", plan: "Standard", status: "Inactive" },
  { id: 3, name: "Sushi Spot", plan: "Basic", status: "Active" },
];

export default function ManageRestaurants() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRestaurant, setNewRestaurant] = useState({ name: "", plan: "", status: "Active" });

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  const handleAddRestaurant = () => {
    if (newRestaurant.name && newRestaurant.plan) {
      setRestaurants([...restaurants, { ...newRestaurant, id: Date.now() }]);
      setIsModalOpen(false);
      setNewRestaurant({ name: "", plan: "", status: "Active" });
    }
  };

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar/>
      <div className="mt-10  lg:ml-64"> 
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Restaurants</h1>
        
        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3 top-3 text-[#000000]" />
            <input
              type="text"
              placeholder="Search Restaurants..."
              className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded-lg hover:bg-[#023246]">
            <FaPlus /> Add Restaurant
          </button>
        </div>
        
        {/* Restaurants Table */}
        <div className="overflow-x-auto bg-[#f6f6f6] rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#023246] text-[#f6f6f6]">
                <th className="p-3">Name</th>
                <th className="p-3">Subscription Plan</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants
                .filter((restaurant) => restaurant.name.toLowerCase().includes(search.toLowerCase()))
                .map((restaurant) => (
                  <tr key={restaurant.id} className="border-b hover:bg-[#287094]">
                    <td className="p-3">{restaurant.name}</td>
                    <td className="p-3">{restaurant.plan}</td>
                    <td className={`p-3 font-bold ${restaurant.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                      {restaurant.status}
                    </td>
                    <td className="p-3 flex gap-2">
                      <button className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(restaurant.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

      </div>
     

      {/* Add Restaurant Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Restaurant</h2>
            <input
              type="text"
              placeholder="Restaurant Name"
              className="w-full p-2 border rounded mb-2"
              value={newRestaurant.name}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Subscription Plan"
              className="w-full p-2 border rounded mb-2"
              value={newRestaurant.plan}
              onChange={(e) => setNewRestaurant({ ...newRestaurant, plan: e.target.value })}
            />
            <button onClick={handleAddRestaurant} className="bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded-lg w-full hover:bg-[#023246]">Add</button>
            <button onClick={() => setIsModalOpen(false)} className="bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded-lg w-full mt-2 hover:bg-[#023246]">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
