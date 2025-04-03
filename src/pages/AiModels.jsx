import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar from "../components/Sidebar";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const aiModels = [
  { id: 1, model: "Papa John's AI", business: "Papa John's Karachi", status: "Active", lastUpdated: "2024-03-10" },
  { id: 2, model: "KFC AI", business: "KFC Lahore", status: "Training", lastUpdated: "2024-03-15" },
  { id: 3, model: "McDonald's AI", business: "McDonald's Islamabad", status: "Active", lastUpdated: "2024-02-28" },
  { id: 4, model: "Hardee's AI", business: "Hardee's Multan", status: "Inactive", lastUpdated: "2024-03-05" },
  { id: 5, model: "Burger Lab AI", business: "Burger Lab Peshawar", status: "Active", lastUpdated: "2024-03-12" },
];

const aiUsageData = {
  labels: aiModels.map((model) => model.model),
  datasets: [
    {
      label: "Number of Businesses Using AI Models",
      data: [3, 4, 2, 1, 5],
      backgroundColor: ["#287094", "#023246", "#f6f6f6", "#d4d4ce", "#ffb703"],
      borderColor: "#023246",
      borderWidth: 1,
    },
  ],
};

export default function ManageAIModels() {
  const [search, setSearch] = useState("");

  const filteredModels = aiModels.filter((model) =>
    model.business.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar />
      <div className="mt-10 lg:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Manage AI Models</h1>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3 mb-6">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search Business..."
            className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* AI Models Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center mb-4">AI Models</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#287094] text-white">
                <th className="border border-gray-300 p-2">Model Name</th>
                <th className="border border-gray-300 p-2">Business</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Last Updated</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredModels.map((model) => (
                <tr key={model.id} className="text-center bg-gray-100">
                  <td className="border border-gray-300 p-2">{model.model}</td>
                  <td className="border border-gray-300 p-2">{model.business}</td>
                  <td className="border border-gray-300 p-2 text-green-600 font-semibold">{model.status}</td>
                  <td className="border border-gray-300 p-2">{model.lastUpdated}</td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Manage</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Usage Chart */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center mb-4">AI Model Usage</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <Bar data={aiUsageData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
