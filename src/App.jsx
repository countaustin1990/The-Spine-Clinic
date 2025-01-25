// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import AppointmentBooking from "./pages/Appointmentbooking/Appointmentbooking";
import AppointmentConfirm from "./pages/appointmentconfirm/AppointmentConfirm";
import Blog from './pages/Blog/Blog';
import BlogList from './components/Bloglist/BlogList';
import BlogPost from './components/Blogpost/BlogPost';
import ToTheTop from "./components/Backtothetop/TotheTop";
import { useAdBlockDetection } from "./utilities/AdBlock";  // Import the custom hook
import AdBlockMessage from "./components/Adblockermessage/AdBlockMessage"; // Import the warning message
import './index.css';

export default function App() {
  const isAdBlockerActive = useAdBlockDetection();  // Detect AdBlocker
  
  const renderWithLayout = (Component) => (
    <Layout><Component /></Layout>
  );

  return (
    <Router>
      <ToTheTop />
      
      {/* Conditionally render the AdBlock message */}
      {isAdBlockerActive && <AdBlockMessage />}

      <Routes>
        <Route path="/" element={renderWithLayout(Home)} />
        <Route path="/services" element={renderWithLayout(Services)} />
        <Route path="/contact" element={renderWithLayout(Contact)} />
        <Route path="/about" element={renderWithLayout(About)} />
        <Route path="/appointmentbooking" element={renderWithLayout(AppointmentBooking)} />
        <Route path="/appointmentconfirm" element={renderWithLayout(AppointmentConfirm)} />
        <Route path="/blog" element={renderWithLayout(Blog)} />
        <Route path="/bloglist" element={renderWithLayout(BlogList)} />
        <Route path="/post/:id" element={renderWithLayout(BlogPost)} />
      </Routes>
    </Router>
  );
}
