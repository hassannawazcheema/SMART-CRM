// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const SignupForm = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMessage("");

//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     try {
//       const response = await axios.post("http://localhost:3001/register", {
//           username,
//           email,
//           password,
//       });
//       console.log("Response from backend:", response.data); // Debugging log

//       if (response.data.success) { 
//           setSuccessMessage(response.data.message); 
//           setTimeout(() => navigate("/login"), 2000); 
//       } else {
//           setError(response.data.message || "Signup failed!");
//       }
//     } catch (err) {
//         console.error("Axios error:", err); // Log the error details
//         setError(err.response?.data?.message || "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
//       <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-center text-2xl font-semibold text-[#000000] mb-4">Sign Up</h2>
//         {error && <p className="text-red-600 text-center">{error}</p>}
//         {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-[#000000] font-medium">Username</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-[#000000] font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-[#000000] font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-[#000000] font-medium">Confirm Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#287094] text-white py-2 rounded-lg hover:bg-[#031f2e] transition"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="mt-4 text-center text-[#000000]">
//           Already have an account?{" "}
//           <button onClick={() => navigate("/login")} className="text-[#287094] font-medium hover:underline">
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Email Validation Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password Validation Regex (At least 6 characters, one number, one special character)
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Client-side Validations
    if (username.length < 3) {
      setError("Username must be at least 3 characters long.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 6 characters long and contain a number and a special character.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setError(response.data.message || "Signup failed!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
      <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-[#000000] mb-4">Sign Up</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#000000] font-medium">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#000000] font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#000000] font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-[#000000] font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#287094] text-white py-2 rounded-lg hover:bg-[#031f2e] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-[#000000]">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-[#287094] font-medium hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
