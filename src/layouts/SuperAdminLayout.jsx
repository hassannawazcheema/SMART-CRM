import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Dialog } from "@headlessui/react"; // Drawer component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome Icon

export default function SuperAdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Drawer (Only visible on small screens) */}
      <Dialog open={sidebarOpen} onClose={() => setSidebarOpen(false)} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4">
          <Sidebar />
        </Dialog.Panel>
      </Dialog>

      {/* Desktop Sidebar (Always visible on large screens) */}
      <div className="hidden lg:block w-64 bg-gray-800 text-white min-h-screen">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        {/* Hamburger Menu Button (Only visible on Mobile/Tablet) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 bg-gray-800 text-white rounded-md"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>

        {/* Page Content */}
        <Outlet />
      </div>
    </div>
  );
}
