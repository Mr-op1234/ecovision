import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const naturalResourcesImage = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';
const biodiversityImage = 'https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const conservationImage = 'https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';

const SustainableManagement = () => {
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

  const managementTopics = [
    {
      title: "Natural Resources Management",
      content: "Natural resources management focuses on sustainable use and conservation of resources like forests, water, land, and minerals. It balances human needs with ecosystem health through integrated approaches that consider ecological, economic, and social factors.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Biodiversity Conservation",
      content: "Biodiversity conservation protects the variety of life on Earth through habitat preservation, species protection, and ecosystem restoration. It maintains ecological services, supports resilience to environmental changes, and preserves genetic diversity.",
      image: "https://images.unsplash.com/photo-1504392022767-a8fc0771f239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Ecosystem Services",
      content: "Ecosystem services are the benefits people obtain from ecosystems, including provisioning (food, water), regulating (climate, disease), supporting (nutrient cycling), and cultural services (recreation, spiritual). Valuing these services is essential for sustainable management.",
      image: "https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Sustainable Land Use",
      content: "Sustainable land use balances environmental, social, and economic needs through practices like integrated landscape management, agroforestry, and urban planning that minimize degradation while supporting human well-being and biodiversity.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="sustainable-management-page">
      <Hero 
        title="Sustainable Management of Natural Resources"
        subtitle="Balancing conservation and development for present and future generations"
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
            <h2>What is Sustainable Management?</h2>
            <p>
              Sustainable management refers to the responsible use, protection, and conservation of natural resources in a way that meets current needs without compromising the ability of future generations to meet their own needs. It involves balancing environmental, social, and economic considerations to ensure long-term sustainability.
            </p>
            <p>
              As human populations grow and development expands, the pressure on natural resources intensifies. Sustainable management approaches seek to address these challenges by promoting practices that maintain ecosystem health, protect biodiversity, ensure resource availability, and support human well-being. This requires integrated approaches that consider the complex interactions between ecological systems and human activities.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Natural Resources Management"
        content={
          <>
            <p>
              Natural resources management encompasses the sustainable use and conservation of resources such as forests, water, land, minerals, and biodiversity. It aims to balance human needs with the maintenance of ecosystem health and services, recognizing that natural resources are finite and often irreplaceable.
            </p>
            <p>
              Effective natural resources management requires integrated approaches that consider ecological, economic, and social factors. This includes understanding ecosystem dynamics, assessing resource availability and demand, implementing appropriate governance systems, and engaging stakeholders in decision-making processes. It also involves monitoring resource conditions, adapting management strategies based on new information, and addressing conflicts over resource use.
            </p>
            <p>
              Key principles of sustainable natural resources management include conservation of biological diversity, maintenance of ecological integrity, precautionary decision-making, adaptive management, equitable access and benefit-sharing, and intergenerational equity. These principles guide the development of policies, plans, and practices that promote the responsible stewardship of natural resources for current and future generations.
            </p>
          </>
        }
        image={naturalResourcesImage}
        imageAlt="Natural forest ecosystem representing natural resources"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Biodiversity and Ecosystem Conservation"
        content={
          <>
            <p>
              Biodiversity—the variety of life on Earth—is essential for ecosystem functioning and the provision of ecosystem services that support human well-being. Conservation efforts aim to protect biodiversity at multiple levels, from genes and species to ecosystems and landscapes, recognizing its intrinsic value and its importance for ecological resilience and human survival.
            </p>
            <p>
              Conservation approaches include the establishment and management of protected areas, habitat restoration and connectivity, species recovery programs, ex-situ conservation (such as seed banks and captive breeding), and the integration of conservation objectives into broader land and resource management. These approaches are complemented by policies and regulations that address threats to biodiversity, such as habitat loss, overexploitation, pollution, invasive species, and climate change.
            </p>
            <p>
              Community-based conservation and indigenous stewardship play increasingly important roles in biodiversity conservation, drawing on traditional knowledge and practices while empowering local communities as conservation partners. These approaches recognize that conservation success often depends on addressing human needs and aspirations alongside ecological objectives, creating incentives for sustainable resource use and conservation action.
            </p>
          </>
        }
        image={biodiversityImage}
        imageAlt="Diverse forest ecosystem representing biodiversity"
        imagePosition="left"
      />

      <InfoSection
        title="Sustainable Resource Use and Conservation"
        content={
          <>
            <p>
              Sustainable resource use involves harvesting or extracting resources at rates that do not exceed their regeneration capacity, minimizing waste and pollution, and ensuring that resource benefits are equitably distributed. This applies to renewable resources like forests, fisheries, and freshwater, as well as non-renewable resources like minerals and fossil fuels, which require different management approaches.
            </p>
            <p>
              For renewable resources, sustainable management focuses on maintaining the resource base while allowing for ongoing use. This includes setting sustainable harvest levels, implementing appropriate harvesting techniques, protecting reproductive capacity, and allowing for natural regeneration or active restoration. For non-renewable resources, sustainability considerations include efficient use, recycling and reuse, minimizing environmental impacts of extraction, and investing in alternatives.
            </p>
            <p>
              Conservation complements sustainable use by protecting resources from degradation and ensuring their availability for future generations. Conservation strategies include preserving intact ecosystems, restoring degraded areas, protecting threatened species, maintaining genetic diversity, and safeguarding ecological processes. These strategies often require trade-offs and compromises between different resource uses and values, necessitating transparent and participatory decision-making processes.
            </p>
          </>
        }
        image={conservationImage}
        imageAlt="Conservation area with protected wildlife"
        backgroundColor="#f9f9f9"
      />

      <section className="management-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Sustainable Management Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="management-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {managementTopics.map((topic, index) => (
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
            <h2>Toward Sustainable Stewardship</h2>
            <p>
              Sustainable management of natural resources is essential for addressing the interconnected challenges of environmental degradation, climate change, biodiversity loss, and human development. By adopting integrated approaches that balance conservation and sustainable use, we can maintain the ecological systems that support life on Earth while meeting human needs and aspirations.
            </p>
            <p>
              This requires collaboration across sectors and scales, from local communities to international organizations. It involves strengthening governance systems, developing innovative technologies and practices, creating appropriate economic incentives, and fostering environmental awareness and stewardship. It also necessitates recognizing the rights and knowledge of indigenous peoples and local communities, who often serve as custodians of biodiversity and natural resources.
            </p>
            <p>
              While the challenges are significant, there are many examples of successful sustainable management initiatives around the world. These demonstrate that with commitment, knowledge, and cooperation, it is possible to use natural resources wisely, protect biodiversity, and support human well-being in ways that are sustainable over the long term. By learning from these experiences and scaling up effective approaches, we can move toward a future where humans live in harmony with nature.
            </p>
            <p>
              For more information on sustainable management of natural resources, refer to resources from organizations like the International Union for Conservation of Nature (IUCN), the United Nations Environment Programme (UNEP), and the Convention on Biological Diversity (CBD).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainableManagement;