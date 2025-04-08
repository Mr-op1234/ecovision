import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '/circular-image.png'; // Import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Understanding Environment', path: '/understanding-environment' },
    { name: 'UN SDGs', path: '/un-sdgs' },
    { name: 'Sustainable Management', path: '/sustainable-management' },
    { name: 'Climate Change', path: '/climate-change' },
    { name: 'Water & Sanitation', path: '/water-sanitation' },
    { name: 'Sustainable Cities', path: '/sustainable-cities' },
    { name: 'Sustainable Energy', path: '/sustainable-energy' },
    { name: 'Waste Management', path: '/waste-management' },
    { name: 'Food Security', path: '/food-security' },
    { name: 'Action Steps', path: '/action-steps' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <motion.img 
            src={logoImage} 
            alt="EcoVision Logo" 
            className="navbar-logo-image"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            EcoVision
          </motion.span>
        </Link>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <div className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></div>
          <div className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></div>
          <div className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></div>
        </div>

        {/* Desktop Navigation removed, only using mobile sidebar */}
        
        {/* Mobile Sidebar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.div 
                className="sidebar"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sidebar-header">
                  <div className="sidebar-title">
                    <i className="fas fa-leaf"></i>
                    <span className="sidebar-logo">Menu</span>
                  </div>
                </div>
                <ul className="sidebar-nav-menu">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      className="sidebar-nav-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link 
                        to={link.path} 
                        className={location.pathname === link.path ? 'sidebar-nav-link active' : 'sidebar-nav-link'}
                        onClick={() => setIsOpen(false)}
                      >
                        <i className="fas fa-leaf sidebar-icon"></i>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;