import {Pie, Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope, faBox, faUsers, faCalendarAlt, faSignOutAlt,
//   faSearch, faBell, faStar, faCog, faUserCircle, faTasks, faBars,
// } from "@fortawesome/free-solid-svg-icons";
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend,
} from "chart.js";
import Sidebar from '../components/Sidebar'
import { BarChart } from "recharts";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Overview",
      data: [10, 30, 80, 40, 60, 90, 70],
      borderColor: "#1DA1F2",
      backgroundColor: "rgba(29, 161, 242, 0.2)",
      fill: true,
    },
  ],
};

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex bg-[#d4d4ce]">
      <div className={`flex flex-col flex-grow p-4 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}>
      <Sidebar/>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
           {["Total Resturant", "New Resturant", "Sales", "Balance"].map((item) => (
             <div key={item} className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
               <h3 className="text-lg text-[#000000] font-bold">Total Resturant</h3>
               <p className="text-2xl text-[#000000] font-semibold">15</p>
              <span className="text-[#000000]">+5.50% than last day</span>
             </div>
           ))}
         </div> */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
             <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
               <h3 className="text-lg text-[#000000] font-bold">Total Resturant</h3>
               <p className="text-2xl text-[#000000] font-semibold">2</p>
              <span className="text-[#000000]">+5.50% than last day</span>
             </div>
             <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
               <h3 className="text-lg text-[#000000] font-bold">New Resturant</h3>
               <p className="text-2xl text-[#000000] font-semibold">1</p>
              <span className="text-[#000000]">+5.50% than last day</span>
             </div>
             <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
               <h3 className="text-lg text-[#000000] font-bold">Total Sales</h3>
               <p className="text-2xl text-[#000000] font-semibold">PKR 3000.55</p>
              <span className="text-[#000000]">+5.50% than last day</span>
             </div>
             <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
               <h3 className="text-lg text-[#000000] font-bold">Total Income</h3>
               <p className="text-2xl text-[#000000] font-semibold">PKR 5000.00</p>
              <span className="text-[#000000]">+5.50% than last day</span>
             </div>
         </div>
         

        {/* Chart */}
        <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md w-full flex-grow mt-4">
          <h3 className="text-lg text-[#000000] font-bold mb-4">Overview</h3>
          <div className="w-full h-96">
            <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}
