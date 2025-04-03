// import { useState } from "react";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import Sidebar from "../components/Sidebar";

// export default function ManagePaymentPlans() {
//   const [plans, setPlans] = useState([
//     { id: 1, name: "Basic Plan", price: 5000, duration: "Monthly", features: "Limited AI calls, Basic Analytics", status: "Active" },
//     { id: 2, name: "Standard Plan", price: 10000, duration: "Monthly", features: "Unlimited AI calls, Advanced Analytics", status: "Active" },
//     { id: 3, name: "Enterprise Plan", price: 25000, duration: "Yearly", features: "Custom AI Training, Premium Support", status: "Inactive" },
//   ]);
  
//   const [newPlan, setNewPlan] = useState({ name: "", price: "", duration: "", features: "" });
//   const handleAddPlan = () => {
//     if (!newPlan.name || !newPlan.price || !newPlan.duration || !newPlan.features) return;
//     setPlans([...plans, { ...newPlan, id: plans.length + 1, status: "Active" }]);
//     setNewPlan({ name: "", price: "", duration: "", features: "" });
//   };

//   const handleDeletePlan = (id) => {
//     setPlans(plans.filter(plan => plan.id !== id));
//   };

//   return (
//     <div className="flex bg-[#d4d4ce] min-h-screen">      
//       {/* Main Content */}
//       <div className="flex-1 p-6 w-full lg:ml-64">
//         <Sidebar />
//         <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Manage Payment Plans</h1>
        
//         {/* Add Plan Form */}
//         <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-bold mb-4">Add New Plan</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <input type="text" placeholder="Plan Name" className="p-2 border rounded-lg" value={newPlan.name} onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })} />
//             <input type="number" placeholder="Price (PKR)" className="p-2 border rounded-lg" value={newPlan.price} onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })} />
//             <select className="p-2 border rounded-lg" value={newPlan.duration} onChange={(e) => setNewPlan({ ...newPlan, duration: e.target.value })}>
//               <option value="">Select Duration</option>
//               <option value="Monthly">Monthly</option>
//               <option value="Yearly">Yearly</option>
//             </select>
//             <input type="text" placeholder="Features" className="p-2 border rounded-lg" value={newPlan.features} onChange={(e) => setNewPlan({ ...newPlan, features: e.target.value })} />
//             <button className="bg-[#287094] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#023246]" onClick={handleAddPlan}><FaPlus /> Add Plan</button>
//           </div>
//         </div>
        
//         {/* Plans Table */}
//         <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md overflow-x-auto">
//           <h2 className="text-xl font-bold mb-4">Existing Plans</h2>
//           <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
//             <thead>
//               <tr className="bg-[#287094]">
//                 <th className="border p-2">Plan Name</th>
//                 <th className="border p-2">Price (PKR)</th>
//                 <th className="border p-2">Duration</th>
//                 <th className="border p-2">Features</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {plans.map((plan) => (
//                 <tr key={plan.id} className="text-center">
//                   <td className="border p-2">{plan.name}</td>
//                   <td className="border p-2">{plan.price}</td>
//                   <td className="border p-2">{plan.duration}</td>
//                   <td className="border p-2">{plan.features}</td>
//                   <td className={`border p-2 ${plan.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>{plan.status}</td>
//                   <td className="border p-2 flex justify-center gap-2">
//                     <button className="text-blue-500 hover:text-blue-700"><FaEdit /></button>
//                     <button className="text-red-500 hover:text-red-700" onClick={() => handleDeletePlan(plan.id)}><FaTrash /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

export default function ManagePaymentPlans() {
  const [plans, setPlans] = useState([
    { id: 1, name: "Basic Plan", price: 5000, duration: "Monthly", features: "Limited AI calls, Basic Analytics", status: "Active" },
    { id: 2, name: "Standard Plan", price: 10000, duration: "Monthly", features: "Unlimited AI calls, Advanced Analytics", status: "Active" },
    { id: 3, name: "Enterprise Plan", price: 25000, duration: "Yearly", features: "Custom AI Training, Premium Support", status: "Inactive" },
  ]);

  const [businesses, setBusinesses] = useState([
    { id: 1, name: "ABC Restaurant", plan: "Standard Plan", price: 10000, startDate: "2024-02-01", endDate: "2024-03-01" },
    { id: 2, name: "XYZ Cafe", plan: "Enterprise Plan", price: 25000, startDate: "2024-01-15", endDate: "2025-01-15" },
    { id: 3, name: "KFC Pakistan", plan: "Enterprise Plan", price: 25000, startDate: "2024-03-10", endDate: "2025-03-10" },
    { id: 4, name: "Hardee's Pakistan", plan: "Standard Plan", price: 10000, startDate: "2024-04-01", endDate: "2024-05-01" },
    { id: 5, name: "Optp", plan: "Basic Plan", price: 5000, startDate: "2024-02-20", endDate: "2024-03-20" },
    { id: 6, name: "Broadway Pizza", plan: "Standard Plan", price: 10000, startDate: "2024-01-05", endDate: "2024-02-05" },
    { id: 7, name: "McDonald's Pakistan", plan: "Enterprise Plan", price: 25000, startDate: "2024-05-01", endDate: "2025-05-01" },
  ]);

  // Payment Forecast Chart Data
  const forecastData = plans.map(plan => ({
    name: plan.name,
    revenue: businesses.filter(b => b.plan === plan.name).length * plan.price
  }));

  // Pie Chart Data (Total Sales Overview)
  const totalSalesData = plans.map(plan => ({
    name: plan.name,
    value: businesses.filter(b => b.plan === plan.name).length * plan.price
  }));

  const COLORS = ["#287094", "#023246", "#f6b26b"];

  return (
    <div className="flex bg-[#d4d4ce] min-h-screen">
      <div className="flex-1 p-6 w-full lg:ml-64">
      <Sidebar />

        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Manage Payment Plans</h1>

        {/* Subscribed Businesses Table */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Subscribed Businesses</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#287094] text-white">
                <th className="border p-2">Business Name</th>
                <th className="border p-2">Subscribed Plan</th>
                <th className="border p-2">Price (PKR)</th>
                <th className="border p-2">Start Date</th>
                <th className="border p-2">End Date</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map((biz) => (
                <tr key={biz.id} className="text-center">
                  <td className="border p-2">{biz.name}</td>
                  <td className="border p-2">{biz.plan}</td>
                  <td className="border p-2">{biz.price.toLocaleString()} PKR</td>
                  <td className="border p-2">{biz.startDate}</td>
                  <td className="border p-2">{biz.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Forecast Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Payment Forecast</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#287094" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Total Sales Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Total Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={totalSalesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {totalSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

