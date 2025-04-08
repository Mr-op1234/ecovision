import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1552799446-159ba9523315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80';
const aboutImage = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const sdgImage = 'https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80';
const climateImage = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80';

const Home = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredTopics = [
    {
      title: "Understanding the Environment",
      content: "Explore the fundamental concepts of environmental science and the interconnectedness of ecosystems.",
      image: "https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1955&q=80",
      link: "/understanding-environment",
      color: "var(--primary-color)"
    },
    {
      title: "UN Sustainable Development Goals",
      content: "Learn about the 17 SDGs that form a blueprint for achieving a better and more sustainable future for all.",
      image: "https://images.unsplash.com/photo-1535890696255-dd5bcd79e6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
      link: "/un-sdgs",
      color: "var(--accent-color-3)"
    },
    {
      title: "Climate Change",
      content: "Understand the science behind climate change, its impacts, and international agreements to combat it.",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      link: "/climate-change",
      color: "var(--secondary-color)"
    },
    {
      title: "Sustainable Management",
      content: "Discover approaches to managing resources sustainably for present and future generations.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
      link: "/sustainable-management",
      color: "var(--accent-color-1)"
    }
  ];

  return (
    <div className="home-page">
      <Hero 
        title="EcoVision: Protecting Our Planet"
        subtitle="Exploring environmental sustainability and conservation for a better future"
        backgroundImage={heroImage}
      />

      <section className="intro-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Mission</h2>
            <p>
              Welcome to EcoVision, your comprehensive resource for environmental studies and sustainability. Our mission is to educate, inspire, and empower individuals to take action for environmental conservation and sustainable development.
            </p>
            <p>
              Through in-depth exploration of critical environmental topics, from climate change to sustainable resource management, we aim to foster a deeper understanding of our planet's ecosystems and the challenges they face.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Understanding Our Environment"
        content={
          <>
            <p>
              The environment encompasses all living and non-living things occurring naturally on Earth. It includes the interaction of all living species, climate, weather, and natural resources that affect human survival and economic activity.
            </p>
            <p>
              Understanding our environment is crucial for developing sustainable practices that ensure the well-being of current and future generations. By studying environmental systems, we can better appreciate the delicate balance that sustains life on our planet and the importance of preserving this balance.
            </p>
            <motion.div className="cta-button-container">
              <Link to="/understanding-environment" className="cta-button">
                Learn More
              </Link>
            </motion.div>
          </>
        }
        image={aboutImage}
        imageAlt="Beautiful natural landscape"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="UN Sustainable Development Goals"
        content={
          <>
            <p>
              The 17 Sustainable Development Goals (SDGs) are an urgent call for action by all countries in a global partnership. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
            </p>
            <p>
              These goals provide a shared blueprint for peace and prosperity for people and the planet, now and into the future. They address the global challenges we face, including those related to poverty, inequality, climate change, environmental degradation, peace, and justice.
            </p>
            <motion.div className="cta-button-container">
              <Link to="/un-sdgs" className="cta-button">
                Explore the SDGs
              </Link>
            </motion.div>
          </>
        }
        image={sdgImage}
        imageAlt="Sustainable Development Goals"
        imagePosition="left"
      />

      <InfoSection
        title="Climate Change: A Global Challenge"
        content={
          <>
            <p>
              Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases.
            </p>
            <p>
              Addressing climate change requires both mitigation strategies to reduce greenhouse gas emissions and adaptation measures to adjust to current and future impacts. International agreements like the Paris Agreement provide frameworks for global cooperation on climate action.
            </p>
            <motion.div className="cta-button-container">
              <Link to="/climate-change" className="cta-button">
                Discover More
              </Link>
            </motion.div>
          </>
        }
        image={climateImage}
        imageAlt="Climate change effects"
        backgroundColor="#f9f9f9"
      />

      <section className="featured-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Key Environmental Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="featured-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {featuredTopics.map((topic, index) => (
              <Card 
                key={index}
                title={topic.title}
                content={topic.content}
                image={topic.image}
                imageAlt={topic.title}
                link={topic.link}
                linkText="Explore"
                delay={index * 0.1}
                color={topic.color}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content" style={{ opacity: 1, transform: 'none' }}>
            <h2>Need help understanding? Chat with Flauna, our assistant AI Chatbot.</h2>
            <p>He will guide you through the website and also provide you with different information.</p>
            <a className="cta-button primary" href="/chat" data-discover="true">Chat Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;