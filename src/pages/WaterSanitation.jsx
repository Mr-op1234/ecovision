import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const waterResourcesImage = 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const sanitationImage = 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80';
const waterConservationImage = 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const WaterSanitation = () => {
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

  const waterTopics = [
    {
      title: "Water Resources Management",
      content: "Water resources management involves planning, developing, distributing, and managing the optimal use of water resources. It considers competing demands from agriculture, industry, households, and ecosystems to ensure sustainable water use.",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Sanitation Systems",
      content: "Sanitation systems safely manage human waste through collection, transport, treatment, and disposal or reuse. Proper sanitation prevents disease transmission, protects water resources, and promotes dignity and well-being.",
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Water Conservation",
      content: "Water conservation involves reducing water usage through efficient practices, technologies, and behaviors. It includes fixing leaks, installing efficient fixtures, recycling wastewater, and adopting water-saving habits to protect this vital resource.",
      image: "https://images.unsplash.com/photo-1527689638836-411945a2b57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Water Quality Protection",
      content: "Water quality protection involves preventing and controlling pollution from agricultural runoff, industrial discharges, and untreated sewage. It includes monitoring, regulations, treatment technologies, and watershed management to ensure safe water.",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="water-sanitation-page">
      <Hero 
        title="Clean Water and Sanitation"
        subtitle="Ensuring availability and sustainable management of water and sanitation for all"
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
            <h2>Water and Sanitation: Essential for Life</h2>
            <p>
              Water is fundamental to life on Earth and essential for human survival, health, and dignity. Clean water and adequate sanitation are not only basic human needs but also critical for sustainable development, environmental protection, and poverty reduction. Despite their importance, billions of people worldwide still lack access to safely managed water and sanitation services.
            </p>
            <p>
              The United Nations Sustainable Development Goal 6 (SDG 6) aims to "ensure availability and sustainable management of water and sanitation for all" by 2030. This goal recognizes the interconnected nature of water challenges and the need for integrated approaches that address water scarcity, water quality, water-related ecosystems, and sanitation infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Water Resources Management"
        content={
          <>
            <p>
              Water resources management involves the comprehensive planning, development, distribution, and management of water resources to meet human and ecological needs while ensuring long-term sustainability. It addresses the complex challenges of balancing competing water demands from agriculture, industry, households, and ecosystems in the context of population growth, urbanization, and climate change.
            </p>
            <p>
              Integrated Water Resources Management (IWRM) is a widely adopted approach that promotes the coordinated development and management of water, land, and related resources to maximize economic and social welfare without compromising the sustainability of vital ecosystems. IWRM recognizes the interconnected nature of water systems and the need for collaborative governance across sectors and boundaries.
            </p>
            <p>
              Key elements of effective water resources management include water allocation systems, water rights frameworks, watershed protection, groundwater management, flood and drought planning, and transboundary water cooperation. These elements require appropriate policies, institutions, information systems, and stakeholder engagement to ensure equitable and sustainable outcomes.
            </p>
          </>
        }
        image={waterResourcesImage}
        imageAlt="Mountain lake representing water resources"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Sanitation and Hygiene"
        content={
          <>
            <p>
              Sanitation refers to the provision of facilities and services for the safe management of human waste, including excreta, wastewater, solid waste, and stormwater. Adequate sanitation, combined with good hygiene practices, is essential for preventing disease transmission, protecting water resources, and ensuring human dignity and well-being.
            </p>
            <p>
              Sanitation systems encompass the entire service chain, from toilet facilities for safe containment of waste, to collection and transport systems, to treatment facilities that render waste safe for disposal or reuse. These systems can range from on-site solutions like improved latrines and septic tanks to centralized sewerage networks and treatment plants, depending on local contexts and resources.
            </p>
            <p>
              Despite progress in recent decades, approximately 3.6 billion people worldwide still lack access to safely managed sanitation services. The consequences include widespread disease, environmental degradation, economic losses, and social inequities. Addressing this challenge requires not only infrastructure investments but also behavior change, institutional capacity building, and innovative financing mechanisms.
            </p>
          </>
        }
        image={sanitationImage}
        imageAlt="Modern sanitation facility"
        imagePosition="left"
      />

      <InfoSection
        title="Water Conservation and Efficiency"
        content={
          <>
            <p>
              Water conservation involves the careful use and protection of water resources through efficient practices, technologies, and behaviors. As water scarcity affects more regions worldwide due to population growth, economic development, and climate change, conservation has become increasingly important for ensuring sustainable water supplies for current and future generations.
            </p>
            <p>
              In agriculture, which accounts for approximately 70% of global freshwater withdrawals, water conservation measures include efficient irrigation systems, drought-resistant crops, soil moisture monitoring, and water-saving farming practices. In urban areas, conservation strategies encompass leak detection and repair, water-efficient appliances and fixtures, rainwater harvesting, greywater recycling, and water-sensitive urban design.
            </p>
            <p>
              Water conservation also involves protecting water quality to maintain the usability of existing resources. This includes preventing pollution from point sources like industrial discharges and non-point sources like agricultural runoff, as well as preserving and restoring watersheds, wetlands, and aquatic ecosystems that naturally filter and regulate water flows.
            </p>
          </>
        }
        image={waterConservationImage}
        imageAlt="Water conservation through efficient irrigation"
        backgroundColor="#f9f9f9"
      />

      <section className="water-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Water and Sanitation Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="water-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {waterTopics.map((topic, index) => (
              <Card 
                key={index}
                title={topic.title}
                content={topic.content}
                image={topic.image}
                imageAlt={topic.title}
                delay={index * 0.1}
                color={topic.color}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="conclusion-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Securing Water for a Sustainable Future</h2>
            <p>
              Ensuring clean water and adequate sanitation for all is one of the most fundamental challenges of sustainable development. It requires addressing not only technical and infrastructure needs but also governance, financing, and behavioral aspects of water management. As climate change intensifies water-related risks and uncertainties, the need for resilient and adaptive approaches becomes even more critical.
            </p>
            <p>
              Progress toward universal water and sanitation access depends on political commitment, adequate investment, effective institutions, and engaged communities. It also requires recognizing the interconnections between water and other development priorities, including food security, energy production, public health, education, gender equality, and ecosystem protection.
            </p>
            <p>
              By valuing water appropriately, managing it wisely, and ensuring its benefits are shared equitably, we can secure this precious resource for current and future generations. Clean water and sanitation are not only essential services but fundamental human rights that underpin human dignity, well-being, and prosperity in harmony with nature.
            </p>
            <p>
              For more information on water and sanitation, refer to resources from organizations like the United Nations Water, the World Health Organization (WHO), and the Water Supply and Sanitation Collaborative Council (WSSCC).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WaterSanitation;