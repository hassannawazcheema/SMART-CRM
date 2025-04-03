import { motion } from 'framer-motion';
import image1 from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#d4d4ce]">
            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-[#023246] to-[#287094] bg-clip-text text-transparent">
                                Transform Your Restaurant Management
                            </span>
                        </h1>
                        
                        <p className="text-xl text-[#000000] mb-12">
                            Leverage AI-powered solutions to streamline orders, 
                            enhance customer experience, and boost your sales.
                        </p>

                        {/* Call to Action */}
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#023246] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#024a6b] transition-all duration-300"
                        >
                            Get Started Free
                        </motion.button>

                        {/* Social Links */}
                        <div className="mt-12">
                            <h3 className="text-2xl text-[#000000] font-semibold mb-6">
                                Connect With Us
                            </h3>
                            <ul className="flex justify-center lg:justify-start gap-6">
                                {[
                                    { icon: faFacebookF, color: '#1877F2' },
                                    { icon: faTwitter, color: '#1DA1F2' },
                                    { icon: faInstagram, color: '#E4405F' },
                                    { icon: faWhatsapp, color: '#25D366' }
                                ].map((social, index) => (
                                    <motion.li 
                                        key={index}
                                        whileHover={{ scale: 1.1 }}
                                        className="rounded-full p-2 hover:shadow-lg transition-all"
                                        style={{ backgroundColor: social.color }}
                                    >
                                        <a href="#" className="social-link">
                                            <FontAwesomeIcon 
                                                icon={social.icon} 
                                                className="w-6 h-6 text-white" 
                                            />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative group">
                            <img 
                                src={image1} 
                                alt="AI Agent Concept" 
                                className="w-full max-w-[600px] h-auto rounded-3xl lg:rounded-full border-4 border-[#023246] shadow-2xl transform group-hover:rotate-3 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300" />
                        </div>
                    </motion.div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 text-center">
                    {[
                        { title: '24/7 AI Support', desc: 'Round-the-clock customer service automation' },
                        { title: 'Smart Analytics', desc: 'Real-time sales & inventory insights' },
                        { title: 'Order Management', desc: 'Automated order processing system' }
                    ].map((feature, index) => (
                        <motion.div 
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-[#f6f6f6] backdrop-blur-lg p-8 rounded-2xl shadow-xl"
                        >
                            <div className="text-[#023246] text-4xl mb-4">✦</div>
                            <h3 className="text-2xl text-[#000000] font-bold mb-4">{feature.title}</h3>
                            <p className="text-[#000000]">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-24 text-center bg-[#f6f6f6] backdrop-blur-lg rounded-3xl p-12">
                    <h2 className="text-4xl font-bold text-[#000000] mb-6">
                        Ready to Revolutionize Your Business?
                    </h2>
                    <p className="text-xl text-[#000000] mb-8">
                        Join hundreds of restaurants already using our AI solutions
                    </p>
                    <div className="flex justify-center gap-6">
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="bg-[#023246] text-[#f6f6f6] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f6f6f6] hover:text-[#000000] hover:border-2 hover:border-[#023246] transition-all duration-300"
                        >
                            Schedule Demo
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            className="border-2 border-[#023246] text-[#000000] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#023246] hover:text-[#f6f6f6] transition-all duration-300"
                        >
                            Contact Sales
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
