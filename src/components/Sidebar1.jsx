// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaThList } from "react-icons/fa";
// import {faSignOutAlt, faBars} from "@fortawesome/free-solid-svg-icons";
// import {
//   faEnvelope, faBox, faUsers, faTasks, faRankingStar, faBullhorn, faMoneyBillTrendUp
// } from "@fortawesome/free-solid-svg-icons";



// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("authToken"); // Remove token
//     navigate("/login"); // Redirect to login page
//   };
  

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
//     <div className="flex">
//       {/* Drawer Overlay */}
//       {sidebarOpen && window.innerWidth < 1024 && (
//         <div className="fixed inset-0  bg-black opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
//       )}

//       {/* Sidebar */}
//       <aside className={`fixed top-0 left-0 h-full bg-[#023246] p-5 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} lg:translate-x-0 lg:w-64`}>
//         <h2 className="text-xl text-[#f6f6f6] font-bold mb-6">SMART CRM</h2>
//         <nav className="flex-1 space-y-4">
//           <ul>
//               <li onClick={() => navigate("/user-dashboard")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
//                 <FaThList /> Dashboard
//               </li>
              
//                 <li onClick={() => navigate("/subscription")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faEnvelope} /> Subscription
//                 </li>
//                 <li onClick={() => navigate("/product")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faBox} /> Products
//                 </li>
//                 <li onClick={() => navigate("/call-logs")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faUsers} /> Call & Logs
//                 </li>
//                 <li onClick={() => navigate("/customer-insights")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faRankingStar} /> Customer Insights
//                 </li>
//                 <li onClick={() => navigate("/marketing-campaigns")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faBullhorn} /> Marketing Campaigns
//                 </li>
//                 <li onClick={() => navigate("/orders-tracking")}  className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faTasks} /> Orders
//                 </li>
//                 <li onClick={() => navigate("/sales-overview")}  className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer">
//                 <FontAwesomeIcon icon={faMoneyBillTrendUp} /> Sales
//                 </li>
//             </ul>
//         </nav>
//         <button onClick={()=>{
//           handleLogout();
//         }} className="flex items-center gap-1 text-[#f6f6f6] bg-[#287094] px-4 py-2 rounded hover:bg-[#023246]">
//           <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <div className={`flex flex-col flex-grow transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}>
        
//         {/* Navbar */}
//         <div className="flex justify-between items-center w-full">
//           <button className=" lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
//             <FontAwesomeIcon icon={faBars} className="text-2xl mx-36" />
//           </button>
//         </div>
       
//       </div>
//     </div>
//   );
// }





import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaThList } from "react-icons/fa";
import { faSignOutAlt, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faBox,
  faUsers,
  faTasks,
  faRankingStar,
  faBullhorn,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    localStorage.removeItem("user"); // Clear user data
    navigate("/login"); // Redirect to login page
    window.location.reload(); // Reload to reset state
  };

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
    <div className="flex">
      {sidebarOpen && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full bg-[#023246] p-5 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} lg:translate-x-0 lg:w-64`}
      >
        <h2 className="text-xl text-[#f6f6f6] font-bold mb-6">SMART CRM</h2>
        <nav className="flex-1 space-y-4">
          <ul>
            <li
              onClick={() => navigate("/user-dashboard")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer"
            >
              <FaThList /> Dashboard
            </li>
            <li
              onClick={() => navigate("/subscription")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Subscription
            </li>
            <li
              onClick={() => navigate("/product")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faBox} /> Products
            </li>
            <li
              onClick={() => navigate("/call-logs")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faUsers} /> Call & Logs
            </li>
            <li
              onClick={() => navigate("/customer-insights")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faRankingStar} /> Customer Insights
            </li>
            <li
              onClick={() => navigate("/marketing-campaigns")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faBullhorn} /> Marketing Campaigns
            </li>
            <li
              onClick={() => navigate("/orders-tracking")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faTasks} /> Orders
            </li>
            <li
              onClick={() => navigate("/sales-overview")}
              className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287490] cursor-pointer"
            >
              <FontAwesomeIcon icon={faMoneyBillTrendUp} /> Sales
            </li>
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-[#f6f6f6] bg-[#287094] px-4 py-2 rounded hover:bg-[#023246]"
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </aside>
      <div
        className={`flex flex-col flex-grow transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}
      >
        <div className="flex justify-between items-center w-full">
          <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl mx-36" />
          </button>
        </div>
      </div>
    </div>
  );
}
