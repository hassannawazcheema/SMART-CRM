// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }
//     console.log('Password reset requested for:', email);
//     setIsSubmitted(true);
//     setError('');
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+$/;
//     return re.test(email);
//   };

//   useEffect(() => {
//     if (isSubmitted) {
//       const timer = setTimeout(() => {
//         setIsSubmitted(false);
//       }, 5000);
//       return () => clearTimeout(timer);
//     }
//   }, [isSubmitted]);

//   return (
//     <div className="min-h-screen bg-[#d4d4ce] flex flex-col justify-center items-center">
//       <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-center text-2xl font-semibold text-black">Forgot your password?</h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Enter your email and we'll send you reset instructions
//         </p>

//         {isSubmitted ? (
//           <div className="text-center mt-4">
//             <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//               <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//               </svg>
//             </div>
//             <p className="mt-4 text-sm text-gray-600">Password reset instructions have been sent to your email!</p>
//             <p className="mt-2 text-sm text-gray-600">
//               Didn't receive the email?{' '}
//               <button onClick={() => setIsSubmitted(false)} className="font-medium text-[#1f7898] hover:underline">
//                 Try again
//               </button>
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className={`mt-1 block w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-[#1f7898] focus:border-[#1f7898]`}
//               />
//               {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={!email}
//               className={`w-full py-2 px-4 rounded-lg text-[#f6f6f6] e ${email ? 'bg-[#287094] hover:bg-[#023246]' : 'bg-gray-400 cursor-not-allowed'}`}
//             >
//               Send reset instructions
//             </button>

//             <div className="text-center text-sm mt-2">
//               <Link to="/login" className="font-medium text-[#000000] hover:underline">
//                 Return to login
//               </Link>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/forgot-password", { email });

      if (response.data.success) {
        setSuccessMessage("Password reset instructions have been sent to your email!");
        setIsSubmitted(true);
      } else {
        setError(response.data.message || "Failed to send reset instructions.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d4d4ce]">
      <div className="bg-[#f6f6f6] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-black">Forgot Password?</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email to receive reset instructions.
        </p>

        {successMessage ? (
          <div className="text-center mt-4">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="mt-4 text-sm text-gray-600">{successMessage}</p>
            <p className="mt-2 text-sm text-gray-600">
              Didn't receive the email?{" "}
              <button onClick={() => setIsSubmitted(false)} className="font-medium text-[#1f7898] hover:underline">
                Try again
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full px-4 py-2 bg-transparent border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-[#287094] focus:border-[#287094]`}
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={!email}
              className={`w-full py-2 px-4 rounded-lg text-[#f6f6f6] ${
                email ? "bg-[#287094] hover:bg-[#023246]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Send Reset Instructions
            </button>

            <div className="text-center text-sm mt-2">
              <Link to="/login" className="font-medium text-[#000000] hover:underline">
                Return to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
