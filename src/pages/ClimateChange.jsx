import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80';
const climateChangeImage = 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const parisAgreementImage = 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80';
const mitigationImage = 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const ClimateChange = () => {
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

  const climateTopics = [
    {
      title: "Greenhouse Effect",
      content: "The greenhouse effect is a natural process that warms the Earth's surface. When the Sun's energy reaches the Earth's atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases. The absorbed energy warms the atmosphere and the surface of the Earth.",
      image: "https://images.unsplash.com/photo-1581152201569-7c11eb6e1efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Global Warming",
      content: "Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period due to human activities, primarily fossil fuel burning, which increases heat-trapping greenhouse gas levels in Earth's atmosphere.",
      image: "https://images.unsplash.com/photo-1624921244388-a3e69208e5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      color: "var(--accent-color-3)"
    },
    {
      title: "Climate Impacts",
      content: "Climate change impacts include more frequent and severe weather events, rising sea levels, melting ice caps, ecosystem disruption, and threats to human health, agriculture, and water supplies.",
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "International Agreements",
      content: "International climate agreements like the UNFCCC, Kyoto Protocol, and Paris Agreement establish frameworks for global cooperation to mitigate climate change and adapt to its impacts.",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80",
      color: "var(--accent-color-1)"
    }
  ];

  return (
    <div className="climate-change-page">
      <Hero 
        title="Climate Change: A Global Challenge"
        subtitle="Understanding the science, impacts, and solutions to the defining issue of our time"
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
            <h2>What is Climate Change?</h2>
            <p>
              Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil, and gas, which produces heat-trapping gases.
            </p>
            <p>
              The Earth's average surface temperature has risen about 1.1°C since the late 19th century, with most of the warming occurring in the past 40 years. This warming is causing more frequent and severe weather events, rising sea levels, and disruptions to ecosystems worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Human-Caused Climate Change"
        content={
          <>
            <p>
              The scientific consensus is clear: human activities are the primary cause of the observed changes in climate over the past century. The main driver is the emission of greenhouse gases, particularly carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O), which trap heat in the Earth's atmosphere.
            </p>
            <p>
              The burning of fossil fuels for electricity, heat, and transportation is the largest source of greenhouse gas emissions. Deforestation, industrial processes, and certain agricultural practices also contribute significantly. Since the Industrial Revolution, atmospheric CO₂ has increased by about 50%, from 280 parts per million (ppm) to over 420 ppm today.
            </p>
            <p>
              The Intergovernmental Panel on Climate Change (IPCC), which includes thousands of scientists from around the world, has concluded with more than 95% certainty that human activities are responsible for the observed warming since the mid-20th century. Natural factors, such as solar variations and volcanic activity, have had minimal influence on recent climate trends.
            </p>
          </>
        }
        image={climateChangeImage}
        imageAlt="Industrial emissions contributing to climate change"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="International Agreements on Climate Change"
        content={
          <>
            <p>
              Recognizing the global nature of climate change, countries have established international frameworks for cooperation. The United Nations Framework Convention on Climate Change (UNFCCC), adopted in 1992, was the first major international treaty to address climate change. Its objective is to stabilize greenhouse gas concentrations "at a level that would prevent dangerous anthropogenic interference with the climate system."
            </p>
            <p>
              The Kyoto Protocol, adopted in 1997, set binding emission reduction targets for developed countries. However, its effectiveness was limited by the non-participation of major emitters like the United States and the lack of commitments from developing countries.
            </p>
            <p>
              The Paris Agreement, adopted in 2015, marked a significant breakthrough in international climate cooperation. Unlike the Kyoto Protocol, it includes commitments from all countries to reduce emissions, with the goal of limiting global warming to well below 2°C above pre-industrial levels, preferably to 1.5°C. The agreement also emphasizes climate finance, technology transfer, and capacity building to support developing countries.
            </p>
          </>
        }
        image={parisAgreementImage}
        imageAlt="International climate agreement signing"
        imagePosition="left"
      />

      <InfoSection
        title="Climate Change Mitigation and Adaptation"
        content={
          <>
            <p>
              Addressing climate change requires both mitigation and adaptation strategies. Mitigation involves reducing greenhouse gas emissions and enhancing carbon sinks to limit the extent of climate change. Key mitigation options include transitioning to renewable energy, improving energy efficiency, protecting and restoring forests, and adopting sustainable agricultural practices.
            </p>
            <p>
              Adaptation involves adjusting to actual or expected climate change and its effects to moderate harm or exploit beneficial opportunities. Adaptation measures include building sea walls to protect against rising sea levels, developing drought-resistant crops, improving early warning systems for extreme weather events, and designing climate-resilient infrastructure.
            </p>
            <p>
              Both mitigation and adaptation are essential components of a comprehensive response to climate change. Mitigation reduces the risk of severe, pervasive, and irreversible impacts, while adaptation helps manage the impacts that cannot be avoided. The most effective approach combines ambitious mitigation with proactive adaptation, supported by adequate financing, technology transfer, and capacity building.
            </p>
          </>
        }
        image={mitigationImage}
        imageAlt="Renewable energy as climate change mitigation"
        backgroundColor="#f9f9f9"
      />

      <section className="climate-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Climate Change Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="climate-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {climateTopics.map((topic, index) => (
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
            <h2>The Path Forward: Climate Action</h2>
            <p>
              Climate change is one of the defining challenges of our time, but it is also an opportunity to build a more sustainable and resilient world. The science is clear, and the technologies needed to reduce emissions are increasingly available and affordable. What is required now is the political will and social mobilization to implement solutions at the scale and pace necessary.
            </p>
            <p>
              Every individual, community, business, and government has a role to play in addressing climate change. Individual actions, such as reducing energy consumption, adopting plant-rich diets, and minimizing waste, can make a difference. However, systemic changes in energy, transportation, industry, and land use are also essential. These require supportive policies, investments, and innovations.
            </p>
            <p>
              The next decade is critical for climate action. According to the IPCC, global emissions must be reduced by about 45% from 2010 levels by 2030 to limit warming to 1.5°C. This is an ambitious but achievable goal if we act with urgency and determination. By working together across borders and sectors, we can create a future where both people and the planet thrive.
            </p>
            <p>
              For more information on climate change, refer to resources from organizations like the Intergovernmental Panel on Climate Change (IPCC), the United Nations Framework Convention on Climate Change (UNFCCC), and the Climate Reality Project.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClimateChange;