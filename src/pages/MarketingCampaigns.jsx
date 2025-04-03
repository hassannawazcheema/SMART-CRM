import React from "react";
import Sidebar1 from "../components/Sidebar1";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

const trendingFoods = [
  { name: "Pizza", orders: 120 },
  { name: "Burger", orders: 90 },
  { name: "Biryani", orders: 75 },
  { name: "Pasta", orders: 60 },
];

const campaignPerformance = [
  { name: "Email", value: 40 },
  { name: "SMS", value: 30 },
  { name: "Social Media", value: 50 },
];

const COLORS = ["#4CAF50", "#FFC107", "#03A9F4"];

const MarketingCampaigns = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-6 bg-[#d4d4ce] min-h-screen w-full lg:ml-64">
      <Sidebar1 />

        <h1 className="text-3xl font-bold mb-4 mt-10 lg:mt-0">Marketing & Campaigns</h1>
         {/* Create New Campaign */}
         <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md mt-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">Create a Marketing Campaign</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Campaign Name" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>Discount Offer</option>
              <option>Loyalty Rewards</option>
              <option>Happy Hour Deal</option>
            </select>
            <input type="date" className="p-2 border rounded" />
            <button className="bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded hover:bg-[#023246]">Create Campaign</button>
          </form>
        </div>
        
        

        {/* Campaign Performance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Trending Foods */}

          <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Trending Foods</h2>
            <BarChart width={400} height={300} data={trendingFoods}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#4a90e2" />
            </BarChart>
          </div>

          <div className="bg-[#f6f6f6] p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Campaign Performance</h2>
            <PieChart width={300} height={300}>
              <Pie data={campaignPerformance} cx={150} cy={150} outerRadius={80} fill="#8884d8" dataKey="value">
                {campaignPerformance.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingCampaigns;
