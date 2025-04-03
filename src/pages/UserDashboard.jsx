// import {Line} from "react-chartjs-2";
// import { useState, useEffect } from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faEnvelope, faBox, faUsers, faCalendarAlt, faSignOutAlt,
// //   faSearch, faBell, faStar, faCog, faUserCircle, faTasks, faBars,
// // } from "@fortawesome/free-solid-svg-icons";
// import {
//   Chart as ChartJS, CategoryScale, LinearScale, PointElement,
//   LineElement, Title, Tooltip, Legend,
// } from "chart.js";
// import Sidebar1 from '../components/Sidebar1'
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   datasets: [
//     {
//       label: "Overview",
//       data: [10, 30, 80, 40, 60, 90, 70],
//       borderColor: "#1DA1F2",
//       backgroundColor: "rgba(29, 161, 242, 0.2)",
//       fill: true,
//     },
//   ],
// };

// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setSidebarOpen(true);
//       } else {
//         setSidebarOpen(false);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="flex bg-[#d4d4ce]">
//       <div className={`flex flex-col flex-grow p-4 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}>
//       <Sidebar1/>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
//            {["Sales", "Income", "Expenses", "Balance"].map((item) => (
//              <div key={item} className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
//                <h3 className="text-lg text-[#000000] font-bold">{item}</h3>
//                <p className="text-2xl text-[#000000] font-semibold">PKR 39000.00</p>
//               <span className="text-[#000000]">+5.50% than last day</span>
//              </div>
//            ))}
//          </div>

//         {/* Chart */}
//         <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md w-full flex-grow mt-4">
//           <h3 className="text-lg text-[#000000] font-bold mb-4">Overview</h3>
//           <div className="w-full h-96">
//             <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
//           </div>
//         </div>

//         {/* Recent Orders */}
//         <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md mt-4">
//           <h3 className="text-lg text-[#000000] font-bold mb-4">Recent Order</h3>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white rounded-lg overflow-hidden">
//               <thead className="bg-[#023246] text-white">
//                 <tr>
//                   <th className="py-2 px-4 text-left">Product Name</th>
//                   <th className="py-2 px-4">Date</th>
//                   <th className="py-2 px-4">Price</th>
//                   <th className="py-2 px-4">Payment</th>
//                   <th className="py-2 px-4">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="py-3 px-4">
//                     <strong>Zinger Burger</strong> <br />
//                     <span className="text-gray-500">Asad Jameel</span>
//                   </td>
//                   <td className="py-3 px-4">11/03/2025</td>
//                   <td className="py-3 px-4">PKR 620</td>
//                   <td className="py-3 px-4">Transfer</td>
//                   <td className="py-3 px-4">
//                     <span className="bg-[#287094] text-white px-3 py-1 rounded-lg">Completed</span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="py-3 px-4">
//                     <strong>Crown Crust Pizza-L</strong> <br />
//                     <span className="text-gray-500">Mueen Khan</span>
//                   </td>
//                   <td className="py-3 px-4">11/03/2025</td>
//                   <td className="py-3 px-4">PKR 560</td>
//                   <td className="py-3 px-4">Transfer</td>
//                   <td className="py-3 px-4">
//                     <span className="bg-[#287094] text-white px-3 py-1 rounded-lg">Completed</span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";

import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar1 from "../components/Sidebar1";
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
            const response = await axios.get("http://localhost:3001/user/profile", {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (response.data.success) {
                setUser(response.data.user);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    fetchUserProfile();
}, []);
 
  
  return (
    <div className="flex bg-[#d4d4ce]">
      <div className={`flex flex-col flex-grow p-4 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}>
  
        {/* Header */}
        <div className="flex items-center space-x-4  w-full p-4  bg-white rounded-lg shadow-md">
          {user && (
            <>
              <img
                src={user.profileImage}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover "
              />
              <div>
                <h2 className="text-lg font-semibold">{user.username}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </>
          )}
          <Sidebar1/>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {["Sales", "Income", "Expenses", "Balance"].map((item) => (
            <div key={item} className="bg-[#f6f6f6] p-6 rounded-md shadow-md text-center">
              <h3 className="text-lg text-[#000000] font-bold">{item}</h3>
              <p className="text-2xl text-[#000000] font-semibold">PKR 39000.00</p>
              <span className="text-[#000000]">+5.50% than last day</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-[#f6f6f6] p-6 rounded-md shadow-md w-full flex-grow mt-4">
          <h3 className="text-lg text-[#000000] font-bold mb-4">Overview</h3>
          <div className="w-full h-96">
            <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}