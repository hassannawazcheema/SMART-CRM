import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Hardcoded Admin Credentials
    const ADMIN_EMAIL = "admin@smartcrm.com";
    const ADMIN_PASSWORD = "Admin@123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true"); // Store admin session
      navigate("/admin-dashboard"); // Redirect to admin panel
    } else {
      setError("Invalid admin credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
      <div className="bg-[#f6f6f6] p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-[#000000]">Admin Login</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium text-[#000000]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-medium text-[#000000]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#287094] text-[#f6f6f6] py-2 rounded-lg hover:bg-[#023246] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

