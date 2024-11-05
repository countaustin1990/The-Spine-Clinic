import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Navbar from "./components/Navbar/Navbar.test";
//import Footer from "./components/Footer/Footer";
import AppointmentBooking from "./pages/Appointmentbooking/Appointmentbooking.test";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import other components (like Hero and HomeContent) if needed
import Layout from "./components/Layout/Layout";
import AppointmentConfirm from "./pages/appointmentconfirm/AppointmentConfirm";
import ToTheTop from "./components/Backtothetop/TotheTop";
import Blog from './pages/Blog/Blog';
import BlogList from './components/Bloglist/BlogList';
import BlogPost from './components/Blogpost/BlogPost';
import './index.css'


export default function App() {
  return (
    <Router>
      <ToTheTop/>
     {/* <Navbar />*/}
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/appointmentbooking" element={<Layout><AppointmentBooking /></Layout>} />
        <Route path="/appointmentconfirm" element={<Layout><AppointmentConfirm /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/bloglist" element={<Layout><BlogList /></Layout>} />
        <Route path="/post/:id" element={<Layout><BlogPost /></Layout>} />
      </Routes>
      {/*<Footer />*/}
    </Router>
  );
}


