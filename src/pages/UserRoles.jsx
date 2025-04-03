// import { Sidebar } from "lucide-react";

import Sidebar from '../components/Sidebar'

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const initialRoles = [
  { id: 1, role: "Super Admin", description: "Full access to all modules" },
  { id: 2, role: "Restaurant Owner", description: "Manage restaurant, orders, and staff" },
  { id: 3, role: "Staff", description: "Limited access to manage orders" },
];

export default function UserRoles() {
  const [roles, setRoles] = useState(initialRoles);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newRole, setNewRole] = useState({ role: "", description: "" });

  const handleDelete = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  const handleAddRole = () => {
    if (newRole.role && newRole.description) {
      setRoles([...roles, { ...newRole, id: Date.now() }]);
      setIsModalOpen(false);
      setNewRole({ role: "", description: "" });
    }
  };

  return (
    <div className="p-6 bg-[#d4d4ce] min-h-screen">
      <Sidebar/>
      <div className='mt-10 lg:ml-64 '>
        <h1 className="text-2xl font-bold text-[] mb-4">User Roles Management</h1>
        
        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <div className="relative w-full sm:w-80">
            <FaSearch className="absolute left-3 top-3 text-[#000000]" />
            <input
              type="text"
              placeholder="Search Roles..."
              className="pl-10 p-2 w-full border rounded-lg focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded-lg hover:bg-[#023246]">
            <FaPlus /> Add Role
          </button>
        </div>
        
        {/* Roles Table */}
        <div className="overflow-x-auto bg-[#f6f6f6] rounded-lg shadow-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#023246] text-[#f6f6f6]">
                <th className="p-3">Role</th>
                <th className="p-3">Description</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles
                .filter((role) => role.role.toLowerCase().includes(search.toLowerCase()))
                .map((role) => (
                  <tr key={role.id} className="border-b hover:bg-[#287094]">
                    <td className="p-3">{role.role}</td>
                    <td className="p-3">{role.description}</td>
                    <td className="p-3 flex gap-2">
                      <button className="text-yellow-500 hover:text-yellow-700"><FaEdit /></button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(role.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Role Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add User Role</h2>
            <input
              type="text"
              placeholder="Role Name"
              className="w-full p-2 border rounded mb-2"
              value={newRole.role}
              onChange={(e) => setNewRole({ ...newRole, role: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full p-2 border rounded mb-2"
              value={newRole.description}
              onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
            />
            <button onClick={handleAddRole} className="bg-[#287094] text-[#f6f6f6] px-4 py-2 rounded-lg w-full hover:bg-[#023246]">Add</button>
            <button onClick={() => setIsModalOpen(false)} className="bg-[#287094] text-white px-4 py-2 rounded-lg w-full mt-2 hover:bg-[#023246]">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
