import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80';
const urbanPlanningImage = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const greenInfrastructureImage = 'https://images.unsplash.com/photo-1518156677180-95a2893f3499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const smartCityImage = 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80';

const SustainableCities = () => {
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

  const cityTopics = [
    {
      title: "Sustainable Urban Planning",
      content: "Sustainable urban planning integrates environmental, social, and economic considerations to create livable, inclusive, and resilient cities. It involves compact development, mixed land use, transit-oriented design, and preservation of green spaces.",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Green Infrastructure",
      content: "Green infrastructure uses natural processes to manage water, provide habitat, reduce urban heat, and improve air quality. Examples include urban forests, green roofs, rain gardens, and permeable pavements that mimic natural water cycles and provide multiple benefits.",
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Smart City Technologies",
      content: "Smart city technologies use data, digital tools, and IoT to improve urban services, reduce resource consumption, and enhance quality of life. Applications include smart grids, intelligent transportation systems, and digital public services.",
      image: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Sustainable Transportation",
      content: "Sustainable transportation systems prioritize walking, cycling, public transit, and clean vehicles to reduce emissions, congestion, and land use while improving accessibility, health, and equity in urban areas.",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="sustainable-cities-page">
      <Hero 
        title="Sustainable Cities and Communities"
        subtitle="Building inclusive, safe, resilient, and sustainable urban environments for all"
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
            <h2>What are Sustainable Cities?</h2>
            <p>
              Sustainable cities are urban areas designed with consideration for social, economic, and environmental impact, providing a resilient habitat for existing populations without compromising the ability of future generations to experience the same. They are cities that maintain a balance between development and sustainability.
            </p>
            <p>
              With over half of the world's population living in urban areas, and this proportion expected to increase to 68% by 2050, creating sustainable cities has become one of the most critical challenges of the 21st century. Sustainable urban development requires comprehensive approaches that address housing, transportation, energy systems, public spaces, and social inclusion.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Sustainable Urban Planning"
        content={
          <>
            <p>
              Sustainable urban planning is a holistic approach to designing cities that balances environmental protection, social equity, and economic viability. It aims to create urban spaces that are livable, inclusive, and resilient while minimizing ecological footprints and resource consumption.
            </p>
            <p>
              Key principles of sustainable urban planning include compact development, which reduces land consumption and transportation needs; mixed land use, which brings homes, workplaces, and services closer together; and transit-oriented development, which prioritizes public transportation and reduces car dependency.
            </p>
            <p>
              Sustainable urban planning also emphasizes the preservation and creation of green spaces, which provide ecosystem services, improve air quality, reduce urban heat island effects, and enhance residents' well-being. Additionally, it promotes affordable housing, accessible public services, and inclusive community engagement in planning processes.
            </p>
          </>
        }
        image={urbanPlanningImage}
        imageAlt="Sustainable urban planning and development"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Green Infrastructure in Cities"
        content={
          <>
            <p>
              Green infrastructure refers to strategically planned networks of natural and semi-natural areas designed and managed to deliver a wide range of ecosystem services in urban settings. Unlike conventional gray infrastructure, which serves single purposes, green infrastructure provides multiple environmental, social, and economic benefits.
            </p>
            <p>
              Examples of urban green infrastructure include urban forests and street trees, which provide shade, improve air quality, and reduce stormwater runoff; green roofs and walls, which insulate buildings, reduce energy consumption, and manage rainwater; and rain gardens and bioswales, which filter pollutants and reduce flooding risks.
            </p>
            <p>
              Green infrastructure also encompasses parks, community gardens, and urban wetlands, which provide habitat for wildlife, recreational opportunities for residents, and natural cooling effects for cities. By integrating these elements into urban planning, cities can enhance resilience to climate change, improve public health, and create more attractive and livable environments.
            </p>
          </>
        }
        image={greenInfrastructureImage}
        imageAlt="Green infrastructure elements in urban areas"
        imagePosition="left"
      />

      <InfoSection
        title="Smart Cities and Technology"
        content={
          <>
            <p>
              Smart cities leverage information and communication technologies (ICT) to enhance the quality, performance, and interactivity of urban services, reduce costs and resource consumption, and improve contact between citizens and government. They use data collection, analysis, and integration to optimize city operations and services.
            </p>
            <p>
              Key components of smart cities include smart energy systems, which monitor and manage energy consumption; intelligent transportation systems, which reduce congestion and emissions; and digital public services, which improve accessibility and efficiency. Smart water management systems detect leaks and optimize distribution, while smart waste management enhances collection efficiency and recycling rates.
            </p>
            <p>
              While technology is central to smart cities, the ultimate goal is to improve quality of life, sustainability, and inclusivity. Successful smart city initiatives balance technological innovation with human-centered design, privacy protection, and equitable access to ensure that digital solutions benefit all residents and contribute to sustainable urban development.
            </p>
          </>
        }
        image={smartCityImage}
        imageAlt="Smart city technologies and digital infrastructure"
        backgroundColor="#f9f9f9"
      />

      <section className="city-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Sustainable City Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="city-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {cityTopics.map((topic, index) => (
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
            <h2>Building Cities for the Future</h2>
            <p>
              Creating sustainable cities requires integrated approaches that address the complex challenges of urbanization while maximizing opportunities for environmental protection, social inclusion, and economic prosperity. It involves collaboration among governments, businesses, civil society, and residents to develop and implement innovative solutions.
            </p>
            <p>
              Successful sustainable cities prioritize people-centered development, ensuring that urban spaces are accessible, safe, and enjoyable for all residents regardless of age, ability, or socioeconomic status. They also embrace circular economy principles, minimizing waste and maximizing resource efficiency through reuse, recycling, and regeneration.
            </p>
            <p>
              As climate change intensifies, sustainable cities must also focus on resilience, developing capacities to withstand and recover from environmental, social, and economic shocks. By investing in sustainable urban development now, we can create cities that not only reduce environmental impacts but also enhance quality of life and create opportunities for current and future generations.
            </p>
            <p>
              For more information on sustainable cities, refer to resources from organizations like UN-Habitat, the World Resources Institute, and the C40 Cities Climate Leadership Group.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainableCities;