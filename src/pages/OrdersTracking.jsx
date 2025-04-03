import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { FaSearch, FaCheckCircle, FaTimesCircle, FaSpinner, FaTruck } from "react-icons/fa";
import Sidebar1 from '../components/Sidebar1'


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const orders = [
  { id: 1, customer: "Ali Khan", items: "Cheese Burger, Fries", total: 220, status: "Delivered", date: "2024-02-01" },
  { id: 2, customer: "Ayesha Ahmed", items: "Pepperoni Pizza", total: 1450, status: "Processing", date: "2024-02-02" },
  { id: 3, customer: "Hassan Raza", items: "Chocolate Shake", total: 350, status: "Cancelled", date: "2024-02-03" },
  { id: 4, customer: "Zara Sheikh", items: "French Fries", total: 180, status: "Out for Delivery", date: "2024-02-04" },
];


// Chart Data for Bar Graph
const chartData = {
  labels: orders.map(order => order.date),
  datasets: [
    {
      label: "Order Sales ($)",
      data: orders.map(order => order.total),
      backgroundColor: "#287094",
      borderColor: "#023246",
      borderWidth: 1,
    },
  ],
};

export default function OrdersTracking() {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
        <Sidebar1/>
      <div className="mt-10 lg:ml-64">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Orders & Tracking</h1>

{/* Search Input */}
<div className="flex justify-center mb-6">
  <div className="relative w-full md:w-1/3">
    <FaSearch className="absolute left-3 top-3 text-gray-500" />
    <input
      type="text"
      placeholder="Search Orders..."
      className="pl-10 p-3 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Recent Orders Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Orders</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3">Customer</th>
            <th className="p-3">Items</th>
            <th className="p-3">Total</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-100">
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.items}</td>
              <td className="p-3">PKR {order.total.toFixed(2)}</td>
              <td className="p-3 flex items-center gap-2">
                {order.status === "Delivered" && <FaCheckCircle className="text-green-500" />}
                {order.status === "Processing" && <FaSpinner className="text-yellow-500 animate-spin" />}
                {order.status === "Out for Delivery" && <FaTruck className="text-blue-500" />}
                {order.status === "Cancelled" && <FaTimesCircle className="text-red-500" />}
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Order Tracking Section */}
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Tracking</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredOrders.map((order) => (
        <div key={order.id} className="bg-gray-100 p-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold text-gray-800">Order #{order.id}</h3>
          <p className="text-gray-600">Customer: {order.customer}</p>
          <div className="flex items-center gap-2 mt-2">
            {order.status === "Delivered" && <FaCheckCircle className="text-green-500" />}
            {order.status === "Processing" && <FaSpinner className="text-yellow-500 animate-spin" />}
            {order.status === "Out for Delivery" && <FaTruck className="text-blue-500" />}
            {order.status === "Cancelled" && <FaTimesCircle className="text-red-500" />}
            <span className="text-gray-700">{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

{/* Order Graph Section */}
<div className="bg-white p-6 rounded-lg shadow-lg mt-8">
  <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Sales Trend</h2>
  <div className="w-full h-96">
    <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
  </div>
</div>
      </div>
    </div>
  );
}
