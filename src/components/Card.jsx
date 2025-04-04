import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, content, image, imageAlt, link, linkText, delay = 0, color = 'var(--primary-color)' }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="card-component"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay }}
      style={{ borderTop: `4px solid ${color}` }}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt || title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        {typeof content === 'string' ? <p>{content}</p> : content}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            {linkText || 'Learn More'}
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default Card;