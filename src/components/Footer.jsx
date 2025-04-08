import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
    >
      <div className="footer-container">
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>EcoVision</h3>
          <p>Promoting environmental awareness and sustainable practices for a better future.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100016690291360" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/the_a_wallflower?igsh=MTY2NGNqczJzdjF4bw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/understanding-environment">Understanding Environment</Link></li>
            <li><Link to="/un-sdgs">UN SDGs</Link></li>
            <li><Link to="/climate-change">Climate Change</Link></li>
            <li><Link to="/action-steps">Action Steps</Link></li>
          </ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Resources</h3>
          <ul>
            <li><a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer">UN Sustainable Development</a></li>
            <li><a href="https://www.ipcc.ch/" target="_blank" rel="noopener noreferrer">IPCC</a></li>
            <li><a href="https://www.unep.org/" target="_blank" rel="noopener noreferrer">UN Environment Programme</a></li>
            <li><a href="https://www.who.int/health-topics/environmental-health" target="_blank" rel="noopener noreferrer">WHO Environmental Health</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h3>Contact Us</h3>
          <p>Email: sayoneechatterjee98@gmail.com</p>
          <p>Phone: +91 8777478932</p>
          <p>Address: 95, Bakul Bagan Road, Kolkata, West Bengal, India</p>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        variants={itemVariants}
      >
        <p>&copy; {new Date().getFullYear()} EcoVision. All rights reserved.</p>
        <p>Designed with 💚 for a sustainable future</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;