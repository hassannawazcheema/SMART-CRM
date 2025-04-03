import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUsers, FaStore, FaChartBar, FaBell, FaCog, FaThList, FaRobot, FaMoneyCheckAlt } from "react-icons/fa";
import {
  faSignOutAlt, faBars,
} from "@fortawesome/free-solid-svg-icons";



export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

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
      {/* Drawer Overlay */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div className="fixed inset-0  bg-black opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-[#023246] p-5 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} lg:translate-x-0 lg:w-64`}>
        <h2 className="text-xl text-[#f6f6f6] font-bold mb-6">SMART CRM</h2>
        <nav className="flex-1 space-y-4">
          <ul>
              <li onClick={() => navigate("/admin-dashboard")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaThList /> Dashboard
              </li>
              <li onClick={() => navigate("/manage-restaurants")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaStore /> Manage Restaurants
              </li>
              <li onClick={() => navigate("/user-roles")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaUsers /> User Roles
              </li>
              <li onClick={() => navigate("/analytics")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaChartBar /> Analytics
              </li>
              <li onClick={() => navigate("/ai-models")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaRobot /> AI Models Mangement
              </li>
              <li onClick={() => navigate("/manage-payment-plans")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaMoneyCheckAlt /> Payment Plans
              </li>
              <li onClick={() => navigate("/notifications")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaBell /> Notifications
              </li>
              <li onClick={() => navigate("/settings")} className="flex items-center gap-3 p-2 rounded-lg text-[#f6f6f6] hover:bg-[#287094] cursor-pointer">
                <FaCog /> Settings
              </li>
          </ul>
        </nav>
        <button onClick={() => navigate("/admin-login")} className="flex items-center gap-1 text-[#f6f6f6] bg-[#287094] px-4 py-2 rounded hover:bg-[#023246]">
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className={`flex flex-col flex-grow transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "lg:ml-64"} w-full overflow-hidden`}>
        
        {/* Navbar */}
        <div className="flex justify-between items-center w-full">
          <button className=" lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
       
      </div>
    </div>
  );
}


