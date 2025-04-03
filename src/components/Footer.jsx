// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//     return (
//         <footer className="bg-[#023246] text-[#f6f6f6] py-12">
//             <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Quick Links - Column 1 */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//                     <ul className="space-y-2">
//                         <li><a href="/home" className="hover:text-[#287094] transition">Home</a></li>
//                         <li><a href="/about" className="hover:text-[#287094] transition">About</a></li>
//                         <li><a href="/services" className="hover:text-[#287094] transition">Services</a></li>
//                         <li><a href="/contact" className="hover:text-[#287094] transition">Contact</a></li>
//                     </ul>
//                 </div>
                
//                 {/* Quick Links - Column 2 */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Account</h3>
//                     <ul className="space-y-2">
//                         <li><a href="/login" className="hover:text-[#287094] transition">Login</a></li>
//                         <li><a href="/signup" className="hover:text-[#287094] transition">Signup</a></li>
//                         <li><a href="/admin-login" className="hover:text-[#287094] transition">Admin Login</a></li>
//                     </ul>
//                 </div>

//                 {/* Social Links */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-[#1877F2] hover:scale-110 transition">
//                             <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
//                         </a>
//                         <a href="#" className="text-[#1DA1F2] hover:scale-110 transition">
//                             <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
//                         </a>
//                         <a href="#" className="text-[#E4405F] hover:scale-110 transition">
//                             <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
//                         </a>
//                         <a href="#" className="text-[#25D366] hover:scale-110 transition">
//                             <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Copyright Section */}
//             <div className="mt-8 text-center border-t border-[#287094] pt-4">
//                 <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import image1 from '../assets/logo.jpg';


const Footer = () => {
    return (
        <footer className="bg-[#023246] text-[#f6f6f6] py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Company Info with Logo */}
                <div className="flex items-center space-x-4">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Company</h2>
                        <img src={image1} alt="Company Logo" className="w-28 h-28" />
                        <p className="text-sm">Empowering businesses with AI-driven solutions.</p>
                    </div>
                </div>
                
                {/* Quick Links - Two Columns */}
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="/home" className="hover:text-[#287094]">Home</a></li>
                            <li><a href="/about" className="hover:text-[#287094]">About</a></li>
                            <li><a href="/services" className="hover:text-[#287094]">Services</a></li>
                            <li><a href="/contact" className="hover:text-[#287094]">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Account</h2>
                        <ul className="space-y-2">
                            <li><a href="/login" className="hover:text-[#287094]">Login</a></li>
                            <li><a href="/signup" className="hover:text-[#287094]">Signup</a></li>
                            <li><a href="/admin-login" className="hover:text-[#287094]">Admin Login</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* Social Media Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="#" className="hover:scale-110 transition transform text-[#1877F2]" aria-label="Facebook"><FaFacebookF className="text-2xl" /></a>
                        <a href="#" className="hover:scale-110 transition transform text-[#1DA1F2]" aria-label="Twitter"><FaTwitter className="text-2xl" /></a>
                        <a href="#" className="hover:scale-110 transition transform text-[#E4405F]" aria-label="Instagram"><FaInstagram className="text-2xl" /></a>
                        <a href="#" className="hover:scale-110 transition transform text-[#25D366]" aria-label="WhatsApp"><FaWhatsapp className="text-2xl" /></a>
                    </div>
                </div>
            </div>
            
            {/* Copyright Section */}
            <div className="text-center mt-8 border-t border-[#f6f6f6] pt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} SMART CRM. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

