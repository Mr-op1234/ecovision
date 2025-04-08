import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfoSection = ({ title, content, image, imageAlt, imagePosition = 'right', backgroundColor = 'white' }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section 
      ref={ref}
      className={`info-section ${backgroundColor !== 'white' ? 'colored-bg' : ''}`}
      style={{ backgroundColor }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={`info-container ${imagePosition === 'left' ? 'reverse' : ''}`}>
        <motion.div className="info-text" variants={itemVariants}>
          <h2>{title}</h2>
          <div className="content-wrapper">
            {typeof content === 'string' ? (
              <p>{content}</p>
            ) : (
              content
            )}
          </div>
        </motion.div>

        {image && (
          <motion.div 
            className="info-image"
            variants={itemVariants}
          >
            <img src={image} alt={imageAlt || title} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default InfoSection;