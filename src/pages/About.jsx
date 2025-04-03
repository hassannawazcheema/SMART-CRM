import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaChartLine, FaClipboardList, FaUsers, FaBullhorn, FaLightbulb } from "react-icons/fa";
import image1 from '../assets/logo.jpg';

const features = [
  { icon: <FaPhoneAlt className="text-5xl text-[#287094]" />, title: "AI-Powered Call Handling", desc: "Convert calls into orders with automation and reduce human workload." },
  { icon: <FaClipboardList className="text-5xl text-[#287094]" />, title: "Smart Order Management", desc: "Effortlessly manage and track orders in real-time with our intuitive dashboard." },
  { icon: <FaChartLine className="text-5xl text-[#287094]" />, title: "Real-Time Analytics", desc: "Gain valuable insights with data-driven decisions to boost revenue and efficiency." },
  { icon: <FaUsers className="text-5xl text-[#287094]" />, title: "Customer Insights", desc: "Understand customer behavior and personalize experiences for better retention." },
  { icon: <FaBullhorn className="text-5xl text-[#287094]" />, title: "Automated Marketing", desc: "Engage customers with AI-driven marketing campaigns tailored for your business." },
  { icon: <FaLightbulb className="text-5xl text-[#287094]" />, title: "System intigration", desc: "Smart Crm will be intigrated with your existing mannagement system." },
];

export default function AboutUs() {
  return (
    <div className="bg-[#d4d4ce] text-black min-h-screen p-6">
      {/* Hero Section */}
      <header className="text-center py-16">
        <motion.div
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Brand Image */}
          <motion.img 
            src={image1} 
            alt="Company Logo" 
            width={200} 
            height={200} 
            className="mx-auto mb-4 border-4 border-[#023246] rounded-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          Empowering Restaurants with AI
        </motion.div>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Our AI-powered CRM enhances restaurant efficiency, automates orders, and improves customer engagement.
        </p>
      </header>

      {/* Mission & Vision */}
      <motion.section
        className="text-center py-12 bg-[#f6f6f6] shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
        <p className="mt-4 max-w-3xl mx-auto">
          We strive to revolutionize restaurant operations through cutting-edge AI, ensuring seamless order management and business growth. 
          By integrating intelligent automation, we empower businesses to focus on delivering outstanding customer experiences while optimizing efficiency.
        </p>
      </motion.section>

      {/* Why Choose Us */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-[#f6f6f6] shadow-md rounded-2xl text-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Contact Section */}
      <motion.section 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="mt-4">Have questions? Reach out via email or social media.</p>
        
        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-6 text-3xl">
          <motion.a href="#" className="text-[#1877F2] hover:text-[#1256b0]" whileHover={{ scale: 1.2 }}><FaFacebook /></motion.a>
          <motion.a href="#" className="text-[#E4405F] hover:text-[#c13584]" whileHover={{ scale: 1.2 }}><FaInstagram /></motion.a>
          <motion.a href="#" className="text-[#25D366] hover:text-[#1ebe5d]" whileHover={{ scale: 1.2 }}><FaWhatsapp /></motion.a>
          <motion.a href="#" className="text-[#EA4335] hover:text-[#c71610]" whileHover={{ scale: 1.2 }}><FaEnvelope /></motion.a>
        </div>
      </motion.section>
    </div>
  );
}
