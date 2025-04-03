import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar1 from "../components/Sidebar1";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const salesData = [
  { id: 1, branch: "Papa John's Karachi", event: "Eid", totalSales: 500000, mostOrdered: "Pepperoni Pizza", date: "2024-04-10" },
  { id: 2, branch: "Papa John's Lahore", event: "PSL", totalSales: 420000, mostOrdered: "Cheese Burger", date: "2024-03-20" },
  { id: 3, branch: "Papa John's Islamabad", event: "Independence Day", totalSales: 380000, mostOrdered: "Zinger Burger", date: "2024-08-14" },
  { id: 4, branch: "KFC Karachi", event: "Eid", totalSales: 600000, mostOrdered: "Zinger Burger", date: "2024-04-12" },
  { id: 5, branch: "McDonald's Lahore", event: "PSL", totalSales: 530000, mostOrdered: "Big Mac", date: "2024-03-22" },
  { id: 6, branch: "Hardee's Islamabad", event: "Independence Day", totalSales: 400000, mostOrdered: "Thickburger", date: "2024-08-14" },
  { id: 7, branch: "KFC Multan", event: "Eid", totalSales: 450000, mostOrdered: "Twister Wrap", date: "2024-04-13" },
  { id: 8, branch: "McDonald's Peshawar", event: "PSL", totalSales: 480000, mostOrdered: "McChicken", date: "2024-03-19" },
  { id: 9, branch: "OPTP Karachi", event: "Eid", totalSales: 300000, mostOrdered: "Garlic Mayo Fries", date: "2024-04-14" },
  { id: 10, branch: "Burger Lab Lahore", event: "PSL", totalSales: 350000, mostOrdered: "The Doppler", date: "2024-03-21" },
  { id: 11, branch: "Broadway Pizza Islamabad", event: "Independence Day", totalSales: 370000, mostOrdered: "Super Sicilian", date: "2024-08-14" },
  { id: 12, branch: "Johnny & Jugnu Multan", event: "Eid", totalSales: 320000, mostOrdered: "Wraps", date: "2024-04-15" },
];

const salesForecastData = {
  labels: salesData.map(sale => sale.date),
  datasets: [
    {
      label: "Total Sales (PKR)",
      data: salesData.map(sale => sale.totalSales),
      borderColor: "#287094",
      backgroundColor: "rgba(40, 112, 148, 0.2)",
      fill: true,
    },
  ],
};

export default function SalesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");


  const filteredSales = salesData.filter(
    (sale) =>
      (filter === "All" || sale.event === filter) &&
      sale.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar1 />
      <div className="mt-10 lg:ml-64">
        <h1 className="text-3xl font-bold mb-6 text-[#000000] text-center">Sales Overview</h1>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-3 top-3 text-[#000000]" />
            <input
              type="text"
              placeholder="Search Branch..."
              className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-[#287094]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select
            className="p-2 border rounded-lg"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Events</option>
            <option value="Eid">Eid</option>
            <option value="PSL">PSL</option>
            <option value="Independence Day">Independence Day</option>
          </select>
        </div>

        {/* Sales Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-[#f6f6f6] shadow-md rounded-lg">
            <thead>
              <tr className="bg-[#287094] text-[#f6f6f6]">
                <th className="p-3 text-left">Branch</th>
                <th className="p-3 text-left">Event</th>
                <th className="p-3 text-left">Total Sales (PKR)</th>
                <th className="p-3 text-left">Most Ordered Item</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredSales.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="p-3">{sale.branch}</td>
                  <td className="p-3">{sale.event}</td>
                  <td className="p-3">{sale.totalSales.toLocaleString()} PKR</td>
                  <td className="p-3">{sale.mostOrdered}</td>
                  <td className="p-3">{sale.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sales Forecast Chart */}
        <div className="mt-10 bg-[#f6f6f6] p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center mb-4">Sales Forecast</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-3/4 lg:w-1/2">
              <Line data={salesForecastData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
