// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import Contact from "./pages/Contact";
// // import LoginForm from "./pages/LoginForm";
// // import SignupForm from "./pages/SignupForm";
// // import ForgotPassword from './pages/ForgotPassword';
// // import Calendar from "./pages/Calendar";
// // import ManageRestaurants from "./pages/ManageRestaurants";
// // import UserRoles from "./pages/UserRoles";
// // import AnalyticsPage from "./pages/AnalyticsPage";
// // import NotificationsPage from "./pages/NotificationsPage"
// // import SettingsPage from "./pages/SettingsPage";
// // import OrdersTracking from "./pages/OrdersTracking";
// // import ProductPage from "./pages/ProductPage";
// // import CallLogPage from "./pages/CallLogPage";
// // import SubscriptionPage from './pages/SubscriptionPage'

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
//           // <Route path="/" element={<Home />} />
//           // <Route path="/home" element={<Home />} />
//           // <Route path="/about" element={<About />} />
//           // <Route path="/services" element={<Services />} />
//           // <Route path="/contact" element={<Contact />} />
//           // <Route path="/login" element={<LoginForm />} />
//           // <Route path="/signup" element={<SignupForm />} />
//           // <Route path="/forgotpassword" element={<ForgotPassword />} />
//           // <Route path="/calendar" element={<Calendar />} />
//           // <Route path="/manage-restaurants" element={<ManageRestaurants />} />
//           // <Route path="/user-roles" element={<UserRoles />} />
//           // <Route path="/analytics" element={<AnalyticsPage />} />
//           // <Route path="/notifications" element={<NotificationsPage />} />
//           // <Route path="/settings" element={<SettingsPage />} />
//           // <Route path="/orders-tracking" element={<OrdersTracking />} />
//           // <Route path="/product" element={<ProductPage />} />
//           // <Route path="/call-logs" element={<CallLogPage />} />
//           // <Route path="/subscription" element={<SubscriptionPage />} />
//           // <Route path="/user-dashboard" element={<UserDashboard/>}/>
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import LoginForm from "./pages/LoginForm";
// import SignupForm from "./pages/SignupForm";
// import ForgotPassword from './pages/ForgotPassword';
// import ResetPassword from './pages/ResetPassword'
// import Calendar from "./pages/Calendar";
// import ManageRestaurants from "./pages/ManageRestaurants";
// import UserRoles from "./pages/UserRoles";
// import AnalyticsPage from "./pages/AnalyticsPage";
// import NotificationsPage from "./pages/NotificationsPage";
// import SettingsPage from "./pages/SettingsPage";
// import OrdersTracking from "./pages/OrdersTracking";
// import ProductPage from "./pages/ProductPage";
// import CallLogPage from "./pages/CallLogPage";
// import SubscriptionPage from './pages/SubscriptionPage';
// import UserDashboard from './pages/UserDashboard';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminLogin from "./pages/Adminlogin";
// import Footer from "./components/Footer";

// // Replace this with your actual Google Client ID
// const clientId = "640968317650-utlu5hf92sk8ecsi5gchmem3k1rcceqt.apps.googleusercontent.com";

// function App() {
//   return (
//     <GoogleOAuthProvider clientId={clientId}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/signup" element={<SignupForm />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/reset-password/:token" element={<ResetPassword />} />
//           <Route path="/calendar" element={<Calendar />} />
//           <Route path="/manage-restaurants" element={<ManageRestaurants />} />
//           <Route path="/user-roles" element={<UserRoles />} />
//           <Route path="/analytics" element={<AnalyticsPage />} />
//           <Route path="/notifications" element={<NotificationsPage />} />
//           <Route path="/settings" element={<SettingsPage />} />
//           <Route path="/orders-tracking" element={<OrdersTracking />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/call-logs" element={<CallLogPage />} />
//           <Route path="/subscription" element={<SubscriptionPage />} />
//           <Route path="/user-dashboard" element={<UserDashboard/>}/>
//           <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
//           <Route path="/admin-login" element={<AdminLogin/>}/>
//         </Routes>
//         <Footer/>
//       </Router>
//     </GoogleOAuthProvider>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import CustomerInsights from "./pages/CustomerInsights";
import MarketingCampaigns from './pages/MarketingCampaigns';
import ManageRestaurants from "./pages/ManageRestaurants";
import UserRoles from "./pages/UserRoles";
import AnalyticsPage from "./pages/AnalyticsPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import OrdersTracking from "./pages/OrdersTracking";
import SalesPage from "./pages/Sales";
import ProductPage from "./pages/ProductPage";
import CallLogPage from "./pages/CallLogPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/Adminlogin";
import AiModels from "./pages/AiModels"
import Checkout from "./pages/Checkout"
import Footer from "./components/Footer";
import ManagePayment from "./pages/ManagePayment";

// Replace this with your actual Google Client ID
const clientId = "640968317650-utlu5hf92sk8ecsi5gchmem3k1rcceqt.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <MainLayout />
      </Router>
    </GoogleOAuthProvider>
  );
}

// Create a separate component for layout management
function MainLayout() {
  const location = useLocation();

  // Routes where Navbar & Footer should NOT be shown
  const hiddenRoutes = [
    "/user-dashboard",
    "/subscription",
    "/product",
    "/call-logs",
    "/customer-insights",
    "/marketing-campaigns",
    "/orders-tracking",
    "/sales-overview",
    "/checkout",

    "/admin-dashboard",
    "/manage-restaurants",
    "/user-roles",
    "/analytics",
    "/notifications",
    "/settings",
    "/ai-models",
    "/manage-payment-plans"
  
  ];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hiddenRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/customer-insights" element={<CustomerInsights />} />
        <Route path="/marketing-campaigns" element={<MarketingCampaigns />} />
        <Route path="/manage-restaurants" element={<ManageRestaurants />} />
        <Route path="/user-roles" element={<UserRoles />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/orders-tracking" element={<OrdersTracking />} />
        <Route path="/sales-overview" element={<SalesPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/call-logs" element={<CallLogPage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/ai-models" element={<AiModels />} />
        <Route path='/manage-payment-plans' element={<ManagePayment/>}  />

      </Routes>

      {/* Conditionally render Footer */}
      {!hiddenRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

