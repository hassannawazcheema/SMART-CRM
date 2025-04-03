import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import Sidebar1 from "../components/Sidebar1";

const customers = [
  { id: 1, name: "Ali Khan", phone: "0321-1234567", location: "Lahore", lastOrder: "2 Days Ago", rating: 5, feedback: "Amazing food!", mood: "😊 Happy", favoriteOrder: "Biryani", orderCount: 15 },
  { id: 2, name: "Sarah Ahmed", phone: "0300-9876543", location: "Karachi", lastOrder: "5 Days Ago", rating: 3, feedback: "Delivery was slow.", mood: "😐 Normal", favoriteOrder: "Pizza", orderCount: 8 },
  { id: 3, name: "Ahmed Raza", phone: "0312-4567890", location: "Islamabad", lastOrder: "1 Week Ago", rating: 1, feedback: "Worst experience!", mood: "😡 Angry", favoriteOrder: "Burger", orderCount: 5 },
];

const moodData = [
  { name: "Happy", value: customers.filter(c => c.mood.includes("😊")).length },
  { name: "Normal", value: customers.filter(c => c.mood.includes("😐")).length },
  { name: "Angry", value: customers.filter(c => c.mood.includes("😡")).length },
];

const COLORS = ["#28a745", "#ffc107", "#dc3545"];

const mostRegularCustomer = customers.reduce((prev, current) => (prev.orderCount > current.orderCount ? prev : current));

const CustomerInsights = () => {
  return (
    <div className="flex">
      <div className="p-6 bg-[#d4d4ce] min-h-screen w-full lg:ml-64">
      <Sidebar1 />

        <h1 className="text-3xl font-bold mb-4 mt-10 lg:mt-0">Customer Insights</h1>
        
        <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-3">Most Regular Customer</h2>
          <p className="text-lg"><strong>{mostRegularCustomer.name}</strong> has ordered <strong>{mostRegularCustomer.orderCount}</strong> times. Favorite Order: <strong>{mostRegularCustomer.favoriteOrder}</strong></p>
        </div>
        
        <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md mb-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-3">Customer Mood Analysis</h2>
          <table className="w-full border-collapse border border-[#000000]">
            <thead>
              <tr className="bg-[#287094]">
                <th className="border p-2">Customer</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Last Order</th>
                <th className="border p-2">Rating</th>
                <th className="border p-2">Feedback</th>
                <th className="border p-2">Mood</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="text-center">
                  <td className="border p-2">{customer.name}</td>
                  <td className="border p-2">{customer.phone}</td>
                  <td className="border p-2">{customer.location}</td>
                  <td className="border p-2">{customer.lastOrder}</td>
                  <td className="border p-2">{"⭐".repeat(customer.rating)}</td>
                  <td className="border p-2">{customer.feedback}</td>
                  <td className="border p-2 text-xl">{customer.mood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Mood Distribution</h2>
            <PieChart width={400} height={300}>
              <Pie data={moodData} cx={200} cy={130} outerRadius={80} fill="#8884d8" dataKey="value">
                {moodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
          
          <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Order Trends</h2>
            <BarChart width={400} height={300} data={customers} className="w-full">
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orderCount" fill="#4a90e2" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInsights;
