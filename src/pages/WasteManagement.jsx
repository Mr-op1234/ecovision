import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const wasteReductionImage = 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const recyclingImage = 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const circularEconomyImage = 'https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80';

const WasteManagement = () => {
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

  const wasteTopics = [
    {
      title: "Waste Reduction",
      content: "Waste reduction focuses on preventing waste generation through product design, manufacturing processes, and consumer behavior changes. It's the most effective waste management strategy, minimizing resource use and environmental impacts.",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Recycling Systems",
      content: "Recycling converts waste materials into new products, conserving resources and reducing pollution. Effective systems include collection infrastructure, processing facilities, and markets for recycled materials, supported by policies and education.",
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Circular Economy",
      content: "The circular economy redesigns systems to eliminate waste and pollution, keep products and materials in use, and regenerate natural systems. It replaces the linear 'take-make-waste' model with closed-loop systems that maintain resource value.",
      image: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Hazardous Waste Management",
      content: "Hazardous waste management involves the safe handling, treatment, and disposal of materials that pose risks to human health or the environment. It requires specialized facilities, trained personnel, and strict regulations to prevent contamination.",
      image: "https://images.unsplash.com/photo-1635224348222-33de8c53b690?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="waste-management-page">
      <Hero 
        title="Sustainable Waste Management"
        subtitle="Transforming our approach to waste for a cleaner, healthier planet"
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
            <h2>The Waste Challenge</h2>
            <p>
              Waste management is a critical environmental challenge facing societies worldwide. As global consumption increases, so does waste generation, putting pressure on natural resources, contributing to pollution, and exacerbating climate change. The World Bank estimates that global waste generation will increase by 70% by 2050 unless urgent action is taken.
            </p>
            <p>
              Sustainable waste management goes beyond simple disposal to encompass a comprehensive approach that prioritizes waste prevention, reuse, recycling, and recovery before considering disposal options. This hierarchy of waste management reflects a shift from viewing waste as a problem to seeing it as a resource that can be recovered and reintegrated into production cycles.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Waste Reduction and Prevention"
        content={
          <>
            <p>
              Waste reduction and prevention focus on minimizing the amount of waste generated in the first place, which is the most effective way to reduce waste's environmental impact. This approach addresses the root causes of waste generation through changes in product design, manufacturing processes, and consumer behavior.
            </p>
            <p>
              In product design, waste reduction strategies include designing for durability, repairability, and recyclability; minimizing packaging; and eliminating toxic materials. In manufacturing, cleaner production techniques optimize resource use, reduce byproducts, and implement closed-loop systems that capture and reuse materials within the production process.
            </p>
            <p>
              For consumers, waste prevention involves making conscious choices about purchasing, using, and disposing of products. This includes buying durable goods, choosing products with minimal packaging, repairing items instead of replacing them, sharing or renting instead of owning, and adopting practices like composting food scraps and using reusable alternatives to single-use items.
            </p>
          </>
        }
        image={wasteReductionImage}
        imageAlt="Zero waste lifestyle with reusable items"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Recycling and Material Recovery"
        content={
          <>
            <p>
              Recycling is the process of converting waste materials into new products, which conserves natural resources, reduces energy consumption, decreases pollution, and diverts waste from landfills and incinerators. Effective recycling systems require infrastructure for collection, sorting, and processing, as well as markets for recycled materials.
            </p>
            <p>
              Different materials require different recycling processes. Paper and cardboard are pulped and reformed into new paper products. Glass is crushed, melted, and molded into new containers. Metals are melted and recast. Plastics are sorted by type, shredded, melted, and pelletized for manufacturing. Organic waste can be composted or digested anaerobically to produce soil amendments and biogas.
            </p>
            <p>
              While recycling offers significant environmental benefits, it also faces challenges such as contamination, complex material compositions, and fluctuating markets for recycled materials. Addressing these challenges requires improved collection and sorting technologies, product design that facilitates recycling, policies that create stable markets for recycled materials, and consumer education about proper recycling practices.
            </p>
          </>
        }
        image={recyclingImage}
        imageAlt="Recycling facility with sorted materials"
        imagePosition="left"
      />

      <InfoSection
        title="Circular Economy Approaches"
        content={
          <>
            <p>
              The circular economy represents a systemic shift from the traditional linear economy (take-make-dispose) to a model where waste and pollution are designed out, products and materials are kept in use, and natural systems are regenerated. This approach recognizes that the current linear model is unsustainable in a world of finite resources and growing environmental challenges.
            </p>
            <p>
              In a circular economy, products are designed for durability, reuse, and recyclability. Business models prioritize providing services rather than selling products, incentivizing manufacturers to create long-lasting, repairable items. Materials flow in closed loops, with biological materials safely returning to the biosphere and technical materials circulating without quality degradation.
            </p>
            <p>
              Implementing circular economy principles requires collaboration across value chains, innovation in product design and business models, enabling policy frameworks, and shifts in consumer behavior. While challenging, the transition to a circular economy offers significant opportunities for economic growth, job creation, resource security, and environmental protection.
            </p>
          </>
        }
        image={circularEconomyImage}
        imageAlt="Circular economy diagram showing closed-loop systems"
        backgroundColor="#f9f9f9"
      />

      <section className="waste-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Waste Management Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="waste-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {wasteTopics.map((topic, index) => (
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
            <h2>Toward a Zero Waste Future</h2>
            <p>
              Transforming our approach to waste is essential for building a sustainable future. By adopting waste reduction strategies, improving recycling systems, and transitioning to circular economy models, we can minimize environmental impacts, conserve resources, and create healthier communities.
            </p>
            <p>
              This transformation requires action at all levels. Governments can establish supportive policies, regulations, and infrastructure. Businesses can redesign products and processes to eliminate waste and recover resources. Communities can implement local waste management solutions and education programs. Individuals can make conscious consumption choices and participate in waste reduction and recycling efforts.
            </p>
            <p>
              While the challenges are significant, so are the opportunities. Sustainable waste management can drive innovation, create green jobs, improve public health, and protect ecosystems. By viewing waste not as an inevitable byproduct of modern life but as a design flaw that can be corrected, we can move toward a zero waste future where resources are valued and preserved for generations to come.
            </p>
            <p>
              For more information on sustainable waste management, refer to resources from organizations like the Global Alliance for Incinerator Alternatives (GAIA), the Ellen MacArthur Foundation, and the International Solid Waste Association (ISWA).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WasteManagement;