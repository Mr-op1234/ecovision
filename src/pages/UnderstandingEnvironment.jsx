import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1955&q=80';
const ecosystemImage = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const biodiversityImage = 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80';
const resourcesImage = 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1941&q=80';

const UnderstandingEnvironment = () => {
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

  const environmentalConcepts = [
    {
      title: "Ecosystems",
      content: "An ecosystem is a community of living organisms interacting with each other and their physical environment. Ecosystems can be as small as a puddle or as large as an ocean, and they include both living (biotic) and non-living (abiotic) components.",
      image: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Biodiversity",
      content: "Biodiversity refers to the variety of life on Earth at all levels, from genes to ecosystems. It encompasses the diversity within species, between species, and of ecosystems. High biodiversity is essential for ecosystem resilience and stability.",
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Natural Resources",
      content: "Natural resources are materials or substances that occur in nature and can be used for economic gain. They include renewable resources (like forests and water) and non-renewable resources (like fossil fuels and minerals).",
      image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1941&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Environmental Pollution",
      content: "Environmental pollution is the introduction of harmful materials into the environment. These pollutants can be natural or human-made substances that contaminate air, water, or soil and have detrimental effects on living organisms and ecosystems.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="understanding-environment-page">
      <Hero 
        title="Understanding the Environment"
        subtitle="Exploring the fundamental concepts of environmental science and the interconnectedness of ecosystems"
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
            <h2>What is the Environment?</h2>
            <p>
              The environment encompasses all living and non-living things occurring naturally on Earth. It includes the interaction of all living species, climate, weather, and natural resources that affect human survival and economic activity. The environment is the source of all life and provides the essential elements needed for survival: air, water, food, and shelter.
            </p>
            <p>
              Understanding our environment is crucial for developing sustainable practices that ensure the well-being of current and future generations. By studying environmental systems, we can better appreciate the delicate balance that sustains life on our planet and the importance of preserving this balance.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Ecosystems: The Building Blocks of Our Environment"
        content={
          <>
            <p>
              An ecosystem is a community of living organisms (plants, animals, and microbes) interacting with each other and their physical environment (air, water, soil, and sunlight). Ecosystems can be as small as a puddle or as large as an ocean, and they include both living (biotic) and non-living (abiotic) components.
            </p>
            <p>
              Ecosystems function through a complex web of interactions, including energy flow and nutrient cycling. Energy enters most ecosystems through photosynthesis, where plants convert sunlight into chemical energy. This energy then flows through the ecosystem as organisms consume plants and other organisms. Nutrients cycle through ecosystems as they are used by living organisms and then returned to the environment through decomposition.
            </p>
            <p>
              Healthy ecosystems provide numerous services that are essential for human well-being, including clean air and water, food, medicine, recreation, and protection from natural disasters. These ecosystem services highlight the importance of preserving and restoring ecosystems for the benefit of both nature and humanity.
            </p>
          </>
        }
        image={ecosystemImage}
        imageAlt="Diverse ecosystem in a forest"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Biodiversity: The Variety of Life"
        content={
          <>
            <p>
              Biodiversity refers to the variety of life on Earth at all levels, from genes to ecosystems. It encompasses the diversity within species (genetic diversity), between species (species diversity), and of ecosystems (ecosystem diversity). High biodiversity is essential for ecosystem resilience and stability.
            </p>
            <p>
              The Earth is home to an estimated 8.7 million species, though only about 1.2 million have been identified and described. This rich tapestry of life has evolved over billions of years and represents an invaluable resource for humanity. Biodiversity provides food, medicine, and raw materials, and it contributes to ecosystem services like pollination, seed dispersal, and climate regulation.
            </p>
            <p>
              Unfortunately, biodiversity is declining at an unprecedented rate due to human activities such as habitat destruction, pollution, overexploitation, and climate change. The current extinction rate is estimated to be 100 to 1,000 times higher than the natural background rate. Protecting biodiversity is not only an ethical imperative but also a practical necessity for human survival and well-being.
            </p>
          </>
        }
        image={biodiversityImage}
        imageAlt="Biodiversity in a coral reef"
        imagePosition="left"
      />

      <InfoSection
        title="Natural Resources: Renewable and Non-Renewable"
        content={
          <>
            <p>
              Natural resources are materials or substances that occur in nature and can be used for economic gain. They include renewable resources, which can be replenished within a human lifetime (like forests, water, and solar energy), and non-renewable resources, which form so slowly that they are considered finite (like fossil fuels and minerals).
            </p>
            <p>
              Renewable resources can be sustainable if they are managed properly, ensuring that their use does not exceed their rate of regeneration. For example, forests can be harvested sustainably if trees are replanted and given time to grow. Similarly, solar and wind energy are virtually inexhaustible as long as the sun shines and the wind blows.
            </p>
            <p>
              Non-renewable resources, on the other hand, are finite and will eventually be depleted if consumption continues. The sustainable use of non-renewable resources involves efficiency, recycling, and the development of alternatives. For instance, improving energy efficiency reduces the consumption of fossil fuels, while recycling metals reduces the need for mining.
            </p>
          </>
        }
        image={resourcesImage}
        imageAlt="Natural resources in a landscape"
        backgroundColor="#f9f9f9"
      />

      <section className="environmental-concepts-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Environmental Concepts
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="environmental-concepts-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {environmentalConcepts.map((concept, index) => (
              <Card 
                key={index}
                title={concept.title}
                content={concept.content}
                image={concept.image}
                imageAlt={concept.title}
                delay={index * 0.1}
                color={concept.color}
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
            <h2>The Interconnectedness of Environmental Systems</h2>
            <p>
              One of the most important insights from environmental science is the interconnectedness of all environmental systems. Changes in one part of the environment can have far-reaching effects on other parts, often in ways that are difficult to predict. For example, deforestation in one region can affect rainfall patterns in distant areas, while pollution released into the air or water can travel across continents and oceans.
            </p>
            <p>
              This interconnectedness highlights the need for a holistic approach to environmental management and conservation. It also underscores the importance of international cooperation in addressing global environmental challenges like climate change, biodiversity loss, and pollution. By working together and recognizing our shared responsibility for the planet, we can create a more sustainable future for all living beings.
            </p>
            <p>
              For more information on understanding the environment, refer to resources from organizations like the United Nations Environment Programme (UNEP), the Intergovernmental Panel on Climate Change (IPCC), and the International Union for Conservation of Nature (IUCN).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UnderstandingEnvironment;