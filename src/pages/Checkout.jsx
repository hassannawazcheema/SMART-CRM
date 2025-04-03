import { useState } from "react";
import { FaCcVisa, FaPaypal } from "react-icons/fa";
import Sidebar1 from '../components/Sidebar1';

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState({
    name: "Standard Plan",
    duration: "Monthly",
    price: 10000,
  });
  
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Sidebar1/>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">Checkout</h2>

        {/* Plan Details */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold">Plan Details</h3>
          <p><strong>Name:</strong> {selectedPlan.name}</p>
          <p><strong>Duration:</strong> {selectedPlan.duration}</p>
          <p><strong>Price:</strong> PKR {selectedPlan.price}</p>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
          <div className="flex gap-4">
            <button 
              className={`p-3 rounded-lg border ${paymentMethod === "creditCard" ? "border-blue-500" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("creditCard")}
            >
              <FaCcVisa size={24} /> Credit/Debit Card
            </button>
            <button 
              className={`p-3 rounded-lg border ${paymentMethod === "paypal" ? "border-blue-500" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <FaPaypal size={24} /> PayPal
            </button>
          </div>
        </div>

        {/* Billing Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Billing Details</h3>
          <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded mb-2" />
          <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded mb-2" />
        </div>

        {/* Order Summary */}
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <p><strong>Subtotal:</strong> PKR {selectedPlan.price}</p>
          <p><strong>Taxes (5%):</strong> PKR {selectedPlan.price * 0.05}</p>
          <p className="text-lg font-bold"><strong>Total:</strong> PKR {selectedPlan.price * 1.05}</p>
        </div>

        {/* Confirm Subscription Button */}
        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Confirm Subscription
        </button>
      </div>
    </div>
  );
}
