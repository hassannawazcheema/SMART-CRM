import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import image1 from '../assets/logo.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-black p-6 bg-[#d4d4ce]">
      <h1 className="text-5xl font-extrabold text-center py-10 relative z-10">Contact Us</h1>

      <div className="relative bg-[#f6f6f6] backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-3xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
        {/* Background Image inside Form */}
        <div className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-50" style={{ backgroundImage: `url(${image1})` }}></div>

        {/* Overlay Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-80">
          {/* <img src={image1} alt="Company Logo" className="w-48 h-auto object-contain mix-blend-multiply" /> */}
        </div>

        <div className="w-full relative z-10">
          <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#287094] text-[#000000] bg-transparent placeholder:text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#023246]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#287094] text-[#000000] bg-transparent placeholder:text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#023246]"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-[#287094] text-[#000000] bg-transparent placeholder:text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#023246]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#023246] text-white text-lg rounded-lg hover:bg-[#287490] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center relative z-10">
         <h2 className="text-3xl font-bold">Our Contact Details</h2>
         <p className="mt-4 flex items-center justify-center space-x-2"><FaPhone /> <span>+92-320-5822456</span></p>
         <p className="mt-2 flex items-center justify-center space-x-2"><FaEnvelope /> <span>smartcrm44@gmail.com</span></p>
         <p className="mt-2 flex items-center justify-center space-x-2"><FaMapMarkerAlt /> <span>04 Street, Lahore, Pakistan</span></p>
       </div>

       {/* Google Map Embed */}
       <div className="mt-8 w-full max-w-2xl relative z-10">
         <iframe
           title="Google Map"
           className="w-full h-64 rounded-lg shadow-lg"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091646!2d144.9537353159044!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f685c3c3e7a6!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1638464321234!5m2!1sen!2sus"
           allowFullScreen=""
           loading="lazy"
         ></iframe>
       </div>
     </div>
  );
}


// import { useState } from "react";
// import { FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";
// import Sidebar1 from '../components/Sidebar1';

// export default function CheckoutPage() {
//   const [selectedPlan, setSelectedPlan] = useState({
//     name: "Standard Plan",
//     duration: "Monthly",
//     price: 10000,
//   });
  
//   const [paymentMethod, setPaymentMethod] = useState("creditCard");
  
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <Sidebar1/>
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
//         <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>

//         {/* Plan Details */}
//         <div className="bg-gray-200 p-4 rounded-lg mb-6">
//           <h3 className="text-lg font-semibold">Plan Details</h3>
//           <p><strong>Name:</strong> {selectedPlan.name}</p>
//           <p><strong>Duration:</strong> {selectedPlan.duration}</p>
//           <p><strong>Price:</strong> PKR {selectedPlan.price}</p>
//         </div>

//         {/* Payment Method Selection */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
//           <div className="flex gap-4">
//             <button 
//               className={`p-3 rounded-lg border ${paymentMethod === "creditCard" ? "border-blue-500" : "border-gray-300"}`}
//               onClick={() => setPaymentMethod("creditCard")}
//             >
//               <FaCcVisa size={24} /> Credit/Debit Card
//             </button>
//             <button 
//               className={`p-3 rounded-lg border ${paymentMethod === "paypal" ? "border-blue-500" : "border-gray-300"}`}
//               onClick={() => setPaymentMethod("paypal")}
//             >
//               <FaPaypal size={24} /> PayPal
//             </button>
//           </div>
//         </div>

//         {/* Billing Details */}
//         <div className="mb-6">
//           <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
//           <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
//           <input type="email" placeholder="Email Address" className="w-full p-2 border rounded mb-2" />
//           <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
//         </div>

//         {/* Order Summary */}
//         <div className="bg-gray-200 p-4 rounded-lg mb-6">
//           <h3 className="text-lg font-semibold">Order Summary</h3>
//           <p><strong>Subtotal:</strong> PKR {selectedPlan.price}</p>
//           <p><strong>Taxes (5%):</strong> PKR {selectedPlan.price * 0.05}</p>
//           <p className="text-lg font-bold"><strong>Total:</strong> PKR {selectedPlan.price * 1.05}</p>
//         </div>

//         {/* Confirm Subscription Button */}
//         <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
//           Confirm Subscription
//         </button>
//       </div>
//     </div>
//   );
// }
