import { useState } from "react";
import { FaChartPie, FaChartLine } from "react-icons/fa";
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import Sidebar from '../components/Sidebar'
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const restaurantData = {
  labels: ["Active Restaurants", "Inactive Restaurants"],
  datasets: [
    {
      data: [65, 35],
      backgroundColor: ["#4CAF50", "#F44336"],
    },
  ],
};

const monthlyRevenue = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Revenue",
      data: [10000, 12000, 15000, 18000, 20000],
      borderColor: "#287094",
      backgroundColor: "rgba(40, 112, 148, 0.2)",
      fill: true,
    },
  ],
};

export default function AnalyticsPage() {
  const [filter, setFilter] = useState("Monthly");

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar />  
      <div className="mt-10 lg:ml-64">
        <h1 className="text-2xl font-bold text-[#000000] mb-4">Analytics Dashboard</h1>

        {/* Filters */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg bg-[#f6f6f6] shadow-sm"
          >
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaChartPie /> Restaurant Status
            </h3>
            <div className="w-[90%] h-[250px] md:h-[300px] lg:h-[350px]">
              <Pie data={restaurantData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FaChartLine /> Revenue Growth
            </h3>
            <div className="w-[90%] h-[250px] md:h-[300px] lg:h-[350px]">
              <Line data={monthlyRevenue} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
