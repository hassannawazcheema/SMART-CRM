import { useState } from "react";
import { FaPhone, FaSearch } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import Sidebar1 from '../components/Sidebar1'
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

// Dummy Call Logs Data
const callLogs = [
  { id: 1, caller: "Ali Khan", phone: "0301-1234567", order: "Zinger Burger, Fries, Pepsi", total: 750, time: "12:30 PM", location: "Lahore" },
  { id: 2, caller: "Sara Ahmed", phone: "0322-9876543", order: "Chicken Pizza, Garlic Bread", total: 1500, time: "01:15 PM", location: "Karachi" },
  { id: 3, caller: "Usman Raza", phone: "0315-4567890", order: "Beef Burger, Fries, Coke", total: 850, time: "02:45 PM", location: "Islamabad" },
  { id: 4, caller: "Fatima Noor", phone: "0341-7891234", order: "Chicken Shawarma, Lemonade", total: 600, time: "03:30 PM", location: "Rawalpindi" },
  { id: 5, caller: "Hamza Tariq", phone: "0300-6543210", order: "Crispy Chicken Wrap, Cold Coffee", total: 900, time: "04:00 PM", location: "Peshawar" },
  { id: 6, caller: "Zara Sheikh", phone: "0333-8527410", order: "Cheese Pizza, Mozzarella Sticks", total: 1800, time: "05:15 PM", location: "Faisalabad" },
  { id: 7, caller: "Bilal Hussain", phone: "0312-9638527", order: "Peri Peri Chicken Burger, Fries, Pepsi", total: 950, time: "06:00 PM", location: "Multan" },
  { id: 8, caller: "Ayesha Khan", phone: "0308-7896541", order: "BBQ Chicken Sandwich, Iced Tea", total: 700, time: "07:30 PM", location: "Quetta" },
  { id: 9, caller: "Daniyal Ali", phone: "0321-7418529", order: "Loaded Fries, Chicken Nuggets", total: 800, time: "08:00 AM", location: "Sialkot" },
  { id: 10, caller: "Hina Aslam", phone: "0345-1597532", order: "Grilled Chicken Burger, Milkshake", total: 950, time: "01:00 PM", location: "Hyderabad" },
];


// Aggregate Data for Charts
const locations = [...new Set(callLogs.map(log => log.location))];
const ordersPerLocation = locations.map(loc => callLogs.filter(log => log.location === loc).length);

const callers = [...new Set(callLogs.map(log => log.caller))];
const ordersPerCaller = callers.map(caller => callLogs.filter(log => log.caller === caller).length);
const salesPerCaller = callers.map(caller => callLogs.filter(log => log.caller === caller).reduce((acc, log) => acc + log.total, 0));

const hours = [...new Set(callLogs.map(log => log.time.split(":")[0] + ":00 " + log.time.split(" ")[1]))];
const ordersPerHour = hours.map(hour => callLogs.filter(log => log.time.startsWith(hour.split(":")[0])).length);

// Chart Data
const barChartData = {
  labels: locations,
  datasets: [
    {
      label: "Orders Per Location",
      data: ordersPerLocation,
      backgroundColor: ["#1DA1F2", "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
    },
  ],
};

const pieChartData = {
  labels: callers,
  datasets: [
    {
      data: ordersPerCaller,
      backgroundColor: ["#1DA1F2", "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
    },
  ],
};

const salesChartData = {
  labels: callers,
  datasets: [
    {
      label: "Total Sales Per Caller ($)",
      data: salesPerCaller,
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#1DA1F2"],
    },
  ],
};

const peakHoursData = {
  labels: hours,
  datasets: [
    {
      label: "Peak Calling Hours",
      data: ordersPerHour,
      backgroundColor: ["#4CAF50", "#FFCE56", "#FF6384", "#36A2EB", "#1DA1F2"],
    },
  ],
};

export default function CallLogPage() {
  const [search, setSearch] = useState("");

  const filteredLogs = callLogs.filter(log =>
    log.caller.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
        <Sidebar1/>
      <div className="mt-10 lg:ml-64">
      <h1 className="text-3xl font-bold text-[#000000] text-center">Call & Call Log</h1>

{/* Live Call Section */}
<div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md flex items-center gap-4 mb-6">
  <BsFillTelephoneFill className="text-green-500 text-2xl" />
  <div>
    <p className="font-bold text-lg">Ongoing Call</p>
    <p className="text-[#000000]">Caller: Ali Khan</p>
    <p className="text-[#000000]">Phone: 0301-1234567</p>
    <p className="text-[#000000]">Order: Zinger Burger, Fries, Pepsi</p>
    <p className="text-[#000000]">Total: 750 PKR</p>
    <p className="text-[#000000]">Location: Lahore</p>
  </div>

</div>

{/* Search Bar */}
<div className="relative mb-4 w-full md:w-1/3">
  <FaSearch className="absolute left-3 top-3 text-gray-500" />
  <input
    type="text"
    placeholder="Search Call Logs..."
    className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>

{/* Call Logs Table */}
<div className="overflow-x-auto bg-[#f6f6f6] rounded-lg shadow-md">
  <table className="w-full text-left border-collapse">
    <thead>
      <tr className="bg-[#287094] text-[#f6f6f6]">
        <th className="p-3">Caller</th>
        <th className="p-3">Order</th>
        <th className="p-3">Total Bill</th>
        <th className="p-3">Time</th>
        <th className="p-3">Location</th>
      </tr>
    </thead>
    <tbody>
      {filteredLogs.map((log) => (
        <tr key={log.id} className="border-b hover:bg-gray-100">
          <td className="p-3">{log.caller}</td>
          <td className="p-3">{log.order}</td>
          <td className="p-3">PKR {log.total.toFixed(2)}</td>
          <td className="p-3">{log.time}</td>
          <td className="p-3">{log.location}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Charts Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
{/* Orders by Location (Bar Chart) */}
<div className="bg-white p-4 rounded-lg shadow-md">
<h3 className="text-lg font-bold text-gray-800 mb-2">Orders by Location</h3>
<div className="h-64 w-full">
<Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
</div>
</div>

{/* Most Frequent Callers (Pie Chart) */}
<div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
<h3 className="text-lg font-bold text-gray-800 mb-2">Most Frequent Callers</h3>
<div className="h-64 w-full">
<Pie data={pieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
</div>
</div>

{/* Total Sales per Caller (Bar Chart) */}
<div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
<h3 className="text-lg font-bold text-gray-800 mb-2">Total Sales per Caller</h3>
<div className="h-64 w-full">
<Bar data={salesChartData} options={{ responsive: true, maintainAspectRatio: false }} />
</div>
</div>

{/* Peak Calling Hours (Bar Chart) */}
<div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
<h3 className="text-lg font-bold text-gray-800 mb-2">Peak Calling Hours</h3>
<div className="h-64 w-full">
<Bar data={peakHoursData} options={{ responsive: true, maintainAspectRatio: false }} />
</div>
</div>
</div>
      </div>
    </div>
  );
}
