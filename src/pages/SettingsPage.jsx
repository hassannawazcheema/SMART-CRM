import { useState, useEffect } from "react";
import  Sidebar from "../components/Sidebar";

export default function SettingsPage() {
  const [username, setUsername] = useState("Admin");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className={`p-6 min-h-screen ${darkMode ? "bg-[#d4d4ce] text-[#000000]" : "bg-[#d4d4ce] text-[#000000]"}`}>
      <Sidebar/>
      <div className="mt-10 lg:ml-64">
      <h1 className="text-2xl font-bold  mb-4">Settings</h1>
      
      {/* Profile Settings */}
      <div className={`p-6 rounded-lg shadow-md mb-6 ${darkMode ? "bg-[#f6f6f6]" : "bg-[#f6f6f6]"}`}>
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <label className="block mb-2">Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full p-2 border rounded-lg mb-4 bg-transparent"
        />
        <label className="block mb-2">Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 border rounded-lg mb-4 bg-transparent"
        />
      </div>

      {/* Security Settings */}
      <div className={`p-6 rounded-lg shadow-md mb-6 ${darkMode ? "bg-[#f6f6f6]" : "bg-[#f6f6f6]"}`}>
        <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
        <label className="block mb-2">Change Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-2 border rounded-lg mb-4 bg-transparent"
          placeholder="Enter new password"
        />
      </div>

      {/* Notification Settings */}
      <div className={`p-6 rounded-lg shadow-md mb-6 ${darkMode ? "bg-[#f6f6f6]" : "bg-[#f6f6f6]"}`}>
        <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={() => setNotifications(!notifications)} 
          />
          Enable Notifications
        </label>
      </div>

      {/* Dark Mode Toggle */}
      <div className={`p-6 rounded-lg shadow-md mb-6 ${darkMode ? "bg-[#f6f6f6]" : "bg-[#f6f6f6]"}`}>
        <h2 className="text-lg font-semibold mb-4">Appearance</h2>
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={() => setDarkMode(!darkMode)} 
          />
          Enable Dark Mode
        </label>
      </div>

      {/* Save Button */}
      <button onClick={handleSave} className="px-6 py-2 bg-[#287094] text-[#f6f6f6] rounded-lg hover:bg-[#023246]">Save Changes</button>

      </div>
    </div>
  );
}
