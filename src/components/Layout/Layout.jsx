import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';  // Importing Navbar component
import Footer from '../Footer/Footer';  // Importing Footer component

const Layout = ({ children }) => {
  const location = useLocation();  // Accessing current route information
  const hideHeaderAndFooter = location.pathname === '/contact' || location.pathname === '/appointmentbooking';

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!hideHeaderAndFooter && <Navbar />}
      <main>{children}</main> {/* Rendering the content passed to the Layout component */}
      {!hideHeaderAndFooter && <Footer />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,  // Ensuring children prop is passed and is a valid React node
};

export default Layout;
