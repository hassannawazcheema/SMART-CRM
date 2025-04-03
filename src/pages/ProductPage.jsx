import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Sidebar1 from '../components/Sidebar1'



import pizzaImg from '../assets/pizza.jpg'
import bergerImg from '../assets/berger.jpeg'
import shakeImg from '../assets/shake.jpeg'
import friesImg from '../assets/fries.jpeg'
import icecreamImg from '../assets/icecream.jpeg'
import wingsImg from '../assets/wings.jpeg'

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = ["All", "Burgers", "Pizzas", "Drinks", "Desserts", "Sides"];

const foodItems = [
  { id: 1, name: "Cheese Burger", category: "Burgers", price: 5.99, image: bergerImg, sales: 150 },
  { id: 2, name: "Pepperoni Pizza", category: "Pizzas", price: 8.99, image: pizzaImg, sales: 200 },
  { id: 3, name: "Chocolate Shake", category: "Drinks", price: 3.99, image: shakeImg, sales: 120 },
  { id: 4, name: "French Fries", category: "Sides", price: 2.99, image: friesImg, sales: 180 },
  { id: 5, name: "Ice Cream", category: "Desserts", price: 4.99, image: icecreamImg, sales: 100 },
  { id: 6, name: "Chicken Wings", category: "Sides", price: 6.99, image: wingsImg, sales: 140 },
];

const pieData = {
  labels: foodItems.map(item => item.name),
  datasets: [
    {
      data: foodItems.map(item => item.sales),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
    },
  ],
};

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = foodItems.filter(
    (item) =>
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
        <Sidebar1/>
        <div className="mt-10 lg:ml-64">

        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Restaurant Menu</h1>
      
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="relative w-full md:w-1/3">
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search Food..."
            className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="p-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      
      {/* Food Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2" />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-700">PKR {item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Most Selling Products</h2>
        <div className="flex justify-center">
          <div className="w-80 h-80">
            <Pie data={pieData} />
          </div>
        </div>
      </div>

        </div>
    </div>
  );
}
