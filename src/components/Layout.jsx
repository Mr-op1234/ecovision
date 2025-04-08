import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';
  const isClimateChangePage = location.pathname === '/climate-change';
  const isActionStepsPage = location.pathname === '/action-steps';
  const hideFooter = isChatPage || isClimateChangePage || isActionStepsPage;

  return (
    <div className="layout">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="main-content"
      >
        {children}
      </motion.main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;