import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#023246] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-[#f6f6f6] text-[28px] font-bold">
          SMART CRM
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none z-50"
          onClick={() => setIsOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Desktop Navbar Links */}
        <ul className="hidden lg:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-[#f6f6f6] text-[18px] font-bold  px-4 py-2 rounded-md hover:bg-[#287094]"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="text-[#f6f6f6] text-[18px] font-bold  px-4 py-2 rounded-md hover:bg-[#287094]"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/admin-login"
              className="bg-[#287094] px-4 py-2 rounded-md text-[#f6f6f6] font-bold hover:bg-[#1a5a78]"
            >
              Admin
            </Link>
          </li>
        </ul>

        {/* Mobile Drawer Navigation */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#023246] shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-500">
            <span className="text-[#f6f6f6] text-2xl font-bold">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <ul className="flex flex-col mt-4 space-y-4 p-4">
            {["Home", "About", "Services", "Contact", "Login", "Signup"].map(
              (item, index) => (
                <li className="text-[#f6f6f6] text-lg p-2 font-bold rounded-2xl hover:bg-[#287094]" key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)} // ✅ FIX: Close drawer on link click
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Overlay (for closing the drawer by clicking outside) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

