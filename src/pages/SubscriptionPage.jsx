import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import Sidebar1 from '../components/Sidebar1'



import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const plans = [
  { id: 1, name: "Basic", price: "PKR 999.00/month", features: ["10 Orders/day", "Basic Analytics"], subscribers: 30, duration: "30 days" },
  { id: 2, name: "Standard", price: "PKR 1499.99/month", features: ["50 Orders/day", "Advanced Analytics", "Priority Support"], subscribers: 50, duration: "30 days" },
  { id: 3, name: "Premium", price: "PKR 2999.99/month", features: ["Unlimited Orders", "AI Insights", "24/7 Support"], subscribers: 20, duration: "30 days" },
];

const pieChartData = {
  labels: plans.map(plan => plan.name),
  datasets: [
    {
      label: "Most Subscribed Plans",
      data: plans.map(plan => plan.subscribers),
      backgroundColor: ["#1E3A8A", "#2563EB", "#60A5FA"],
      hoverOffset: 4,
    },
  ],
};

const barChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Monthly Subscription Growth",
      data: [5, 10, 15, 20, 25, 30, 35],
      backgroundColor: "#2563EB",
    },
  ],
};



export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1]);
  const [remainingDays, setRemainingDays] = useState(15);

  return (
    <div className="min-h-screen bg-[#d4d4ce] p-6 flex flex-col w-full">
      <Sidebar1/>
      <div className="mt-10 lg:ml-64">
      <h1 className="text-3xl font-bold text-[#000000] mb-6">Manage Your Subscription</h1>
      
      <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full text-center">
        <h2 className="text-xl font-semibold text-[#000000]">Current Plan: {selectedPlan.name}</h2>
        <p className="text-[#000000] text-lg">{selectedPlan.price}</p>
        <p className="text-[#000000]">Remaining Time: {remainingDays} days</p>
        <ul className="mt-3 text-[#000000]">
          {selectedPlan.features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>
        <button className="mt-4 bg-[#287094] text-[#f6f6f6] py-2 px-4 rounded-lg hover:bg-[#023246]">
          Renew Subscription
        </button>
 
      </div>
      
      <h2 className="mt-8 text-2xl font-bold text-[#000000]">Change Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 w-full">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`p-6 rounded-lg shadow-md cursor-pointer text-center transition-all duration-200 w-full ${selectedPlan.id === plan.id ? "border-2 border-[#287094]" : "bg-[#f6f6f6]"}`}
            onClick={() => setSelectedPlan(plan)}
          >
            <h3 className="text-xl font-semibold text-[#000000]">{plan.name}</h3>
            <p className="text-[#000000]">{plan.price}</p>
            <p className="text-[#000000]">Duration: {plan.duration}</p>
            <ul className="mt-2 text-[#000000]]">
              {plan.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
            <button  className="mt-4 bg-[#287094] text-[#f6f6f6] py-2 px-4 rounded-lg hover:bg-[#023246]">
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-8 text-2xl font-bold text-[#000000]">Subscription Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 w-full">
        <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full">
          <Pie data={pieChartData} />
        </div>
        <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full">
          <Bar data={barChartData} />
        </div>
      </div>
      </div>
    </div>
  );
}
