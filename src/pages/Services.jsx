import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaChartLine, FaUsers, FaBell, FaRobot, FaCog } from "react-icons/fa";
import image1 from '../assets/logo.jpg';


const services = [
  {
    icon: <FaPhoneAlt className="text-5xl text-[#287094]" />,
    title: "AI-Powered Call Handling",
    description: "Automate customer calls, take orders, and provide real-time assistance using AI-driven voice recognition.",
  },
  {
    icon: <FaChartLine className="text-5xl text-[#287094]" />,
    title: "Advanced Analytics & Reports",
    description: "Gain insights into call trends, customer behavior, and sales performance through AI-powered analytics.",
  },
  {
    icon: <FaUsers className="text-5xl text-[#287094]" />,
    title: "CRM & Customer Management",
    description: "Manage customer interactions, track order history, and enhance engagement with AI recommendations.",
  },
  {
    icon: <FaBell className="text-5xl text-[#287094]" />,
    title: "Real-Time Notifications",
    description: "Stay updated with instant notifications for new orders, customer queries, and AI-generated insights.",
  },
  {
    icon: <FaRobot className="text-5xl text-[#287094]" />,
    title: "AI Customization",
    description: "Customize the AI model to adapt to your restaurant's unique needs for enhanced call automation.",
  },
  {
    icon: <FaCog className="text-5xl text-[#287094]" />,
    title: "Automated Marketing & Promotions",
    description: "Boost sales with AI-driven marketing campaigns tailored to your restaurant’s audience.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#d4d4ce] py-12">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Animated Brand Image */}
        <motion.img 
          src={image1} 
          alt="Brand Logo" 
          width={200} 
          height={200} 
          className="mx-auto object-contain mb-6 border-4 border-[#023246] rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }} // Rotate & scale effect on hover
        />

        <h2 className="text-4xl font-bold text-[#023246] mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Our AI-powered CRM is designed to streamline restaurant operations, enhance customer interactions, and boost efficiency with smart automation.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <div className="flex items-center justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#023246] text-center">{service.title}</h3>
            <p className="text-gray-700 text-center mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
