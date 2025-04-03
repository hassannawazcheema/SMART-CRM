// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const navigate = useNavigate();
  
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMessage("");

//     try {
//         const response = await axios.post("http://localhost:3001/login", {
//             email,
//             password,
//         });

//         console.log(response); // Debugging log

//         if (response.data.success) { 
//             setSuccessMessage(response.data.message);
//             // Save user info if needed
//             localStorage.setItem("user", JSON.stringify(response.data.user));
//             // Redirect to dashboard
//             setTimeout(() => navigate("/about"), 2000); 
//           } else {
//             setError(response.data.message || "Login failed!");
//         }
//     } catch (err) {
//         setError("Something went wrong. Please try again.");
//     }
// };

  
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
//       <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-center text-2xl font-semibold text-[#000000] mb-4">Login</h2>
//         {error && <p className="text-red-600 text-center">{error}</p>}
//         {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-[#000000] font-medium">Email or Phone</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Enter email or phone"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
//           </div>
//           <div>
//             <label className="block text-[#000000] font-medium">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <span
//                 className="absolute right-3 top-3 cursor-pointer text-[#000000] text-sm"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </span>
//             </div>
//             {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
//           </div>
//           <div className="text-right">
//             <button
//               type="button"
//               onClick={() => navigate("/forgotpassword")}
//               className="text-sm text-[#000000] hover:underline"
//             >
//               Forgot Password?
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#287094] text-white py-2 rounded-lg hover:bg-[#031f2e] transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center text-[#000000]">
//           Not a member? 
//           <button onClick={() => navigate("/signup")} className="ml-1 text-[#000000] font-medium hover:underline">
//             Sign up now
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import googleLogo from "../assets/googleLogo.png"
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useEffect } from "react";
// import { FaGoogle } from "react-icons/fa";



// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");
  
//     if (token) {
//       localStorage.setItem("token", token);
//       navigate("/user-dashboard");
//     }
//   }, []);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMessage("");

//     try {
//       const response = await axios.post("http://localhost:3001/login", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         setSuccessMessage(response.data.message);
//         localStorage.setItem("token", response.data.token);
//         setTimeout(() => navigate("/user-dashboard"), 2000);
//       } else {
//         setError(response.data.message || "Login failed!");
//       }
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   const handleGoogleLogin = async () => {
//     window.open("http://localhost:3001/auth/google", "_self");
//     console.log("Google User Data:", decoded);

//     try {
//       const response = await axios.post("http://localhost:3001/auth/google", {
//         email: decoded.email,
//         name: decoded.name,
//         googleId: decoded.sub,
//       });

//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         setSuccessMessage("Google Login Successful!");
//         setTimeout(() => navigate("/user-dashboard"), 3000);
//       } else {
//         setError("Google Login Failed!");
//       }
//     } catch (err) {
//       setError("Error during Google Login.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
//       <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-center text-2xl font-semibold text-[#000000] mb-4">Login</h2>
//         {error && <p className="text-red-600 text-center">{error}</p>}
//         {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label className="block text-[#000000] font-medium">Email</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
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
//             />
//           </div>  
//           <button type="submit" className="w-full bg-[#287094] text-white py-2 rounded-lg hover:bg-[#023246] transition">
//             Login
//           </button>
//         </form>

//         <div className="mt-4">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition mt-2 shadow-md"
//           >
//             <img src={googleLogo} alt="Google logo" className="w-5 h-5" />
//             <span className="font-medium text-gray-700">Continue with Google</span>
//           </button>
//           </div>

//           <p className="mt-4 text-center text-[#000000]">
//             Not a member? 
//             <button onClick={() => navigate("/signup")} className="ml-1 text-[#000000] font-medium hover:underline">
//               Sign up now
//             </button>
//           </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import googleLogo from "../assets/googleLogo.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      localStorage.setItem("token", token);
      navigate("/user-dashboard");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/user-dashboard"), 2000);
      } else {
        setError(response.data.message || "Login failed!");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  // const handleGoogleLogin = async () => {
  //   window.open("http://localhost:3001/auth/google", "_self");

  //   try {
  //     const response = await axios.post("http://localhost:3001/auth/google", {
  //       email: decoded.email,
  //       name: decoded.name,
  //       googleId: decoded.sub,
  //     });

  //     if (response.data.success) {
  //       localStorage.setItem("token", response.data.token);
  //       setSuccessMessage("Google Login Successful!");
  //       setTimeout(() => navigate("/user-dashboard"), 3000);
  //     } else {
  //       setError("Google Login Failed!");
  //     }
  //   } catch (err) {
  //     setError("Error during Google Login.");
  //   }
  // };

  const handleGoogleLogin = async () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };
  
  // Function to extract token from URL after redirection
  const checkGoogleLoginRedirect = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
  
    if (token) {
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
  
      console.log("User Data:", decoded); // Debugging Purpose
      setUser(decoded); // Set user data in state
      window.history.replaceState({}, document.title, "/user-dashboard"); // Clean URL
  
      navigate("/user-dashboard");
    }
  };

  useEffect(() => {
    checkGoogleLoginRedirect();
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#d4d4ce]">
      <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-[#000000] mb-4">Login</h2>
        
        {error && <p className="text-red-600 text-center">{error}</p>}
        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[#000000] font-medium">Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#287094]"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>

          <div className="text-right">
            <button 
              onClick={() => navigate("/forgot-password")} 
              className="text-[#287094] font-medium hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="w-full bg-[#287094] text-white py-2 rounded-lg hover:bg-[#023246] transition">
            Login
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-white text-black border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition mt-2 shadow-md"
          >
            <img src={googleLogo} alt="Google logo" className="w-5 h-5" />
            <span className="font-medium text-gray-700">Continue with Google</span>
          </button>
        </div>

        <p className="mt-4 text-center text-[#000000]">
          Not a member? 
          <button onClick={() => navigate("/signup")} className="ml-1 text-[#287094] font-medium hover:underline">
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;


