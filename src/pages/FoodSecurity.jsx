import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const sustainableAgricultureImage = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const foodWasteImage = 'https://images.unsplash.com/photo-1605521340784-acf9489e3601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80';
const nutritionImage = 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80';

const FoodSecurity = () => {
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

  const foodTopics = [
    {
      title: "Sustainable Agriculture",
      content: "Sustainable agriculture integrates environmental stewardship, economic profitability, and social equity to produce food and fiber. It emphasizes soil health, biodiversity, water conservation, and reduced chemical inputs while supporting rural communities.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Food Waste Reduction",
      content: "Food waste reduction addresses the significant loss of edible food throughout supply chains. Solutions include improved harvesting, storage, and distribution; consumer education; food recovery programs; and policies that incentivize waste prevention.",
      image: "https://images.unsplash.com/photo-1605521340784-acf9489e3601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Nutrition and Health",
      content: "Nutrition security ensures access to sufficient, safe, and nutritious food that meets dietary needs for an active and healthy life. It addresses not just calories but also micronutrients, dietary diversity, and food quality for optimal health outcomes.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Climate-Resilient Food Systems",
      content: "Climate-resilient food systems can withstand and recover from climate shocks while reducing emissions. They incorporate diverse crops, water management, agroforestry, and adaptive farming practices to ensure food security in a changing climate.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="food-security-page">
      <Hero 
        title="Food Security and Sustainable Agriculture"
        subtitle="Ensuring access to nutritious food while protecting our planet"
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
            <h2>Understanding Food Security</h2>
            <p>
              Food security exists when all people, at all times, have physical, social, and economic access to sufficient, safe, and nutritious food that meets their dietary needs and food preferences for an active and healthy life. This definition, established by the Food and Agriculture Organization (FAO), encompasses four key dimensions: availability, access, utilization, and stability.
            </p>
            <p>
              Despite significant progress in agricultural productivity over the past century, approximately 690 million people worldwide still suffer from hunger, and billions more experience various forms of malnutrition. At the same time, current food production systems often contribute to environmental degradation, biodiversity loss, and climate change, threatening the very foundation of future food security.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Sustainable Agriculture Practices"
        content={
          <>
            <p>
              Sustainable agriculture aims to meet society's food and textile needs in the present without compromising the ability of future generations to meet their own needs. It integrates three main objectives: environmental health, economic profitability, and social and economic equity. Rather than focusing solely on maximizing production, sustainable agriculture seeks to optimize the balance between these objectives.
            </p>
            <p>
              Key practices in sustainable agriculture include conservation tillage, which minimizes soil disturbance and prevents erosion; crop rotation and diversification, which enhance soil fertility and reduce pest pressures; integrated pest management, which combines biological, cultural, physical, and chemical tools to minimize economic, health, and environmental risks; and precision agriculture, which uses technology to apply inputs more efficiently.
            </p>
            <p>
              Agroecology, a holistic approach that applies ecological principles to agricultural systems, is gaining recognition as a pathway to sustainable food production. By working with natural processes rather than against them, agroecological practices can enhance biodiversity, improve soil health, increase resilience to climate change, and support rural livelihoods while producing nutritious food.
            </p>
          </>
        }
        image={sustainableAgricultureImage}
        imageAlt="Sustainable farming practices with diverse crops"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Food Waste and Loss"
        content={
          <>
            <p>
              Food waste and loss represent a significant inefficiency in the global food system, with approximately one-third of all food produced for human consumption—about 1.3 billion tons annually—lost or wasted. This not only squanders the resources used to produce, process, package, and transport food but also contributes to greenhouse gas emissions when organic waste decomposes in landfills.
            </p>
            <p>
              Food loss occurs primarily during production, post-harvest handling, and storage, especially in developing countries with limited infrastructure. Food waste, more common in developed countries, happens at retail and consumer levels due to aesthetic standards, confusion about date labels, poor planning, and consumer behavior. Both issues require targeted interventions along the entire food supply chain.
            </p>
            <p>
              Solutions to reduce food waste include improved harvesting techniques and storage facilities in developing regions; better inventory management and packaging in retail; consumer education about meal planning, proper food storage, and understanding date labels; food recovery and redistribution programs that channel surplus food to those in need; and policies that incentivize waste prevention and diversion from landfills.
            </p>
          </>
        }
        image={foodWasteImage}
        imageAlt="Food waste reduction and composting initiatives"
        imagePosition="left"
      />

      <InfoSection
        title="Nutrition and Food Systems"
        content={
          <>
            <p>
              Nutrition security goes beyond ensuring sufficient calories to address the quality and diversity of diets needed for optimal health. Despite increases in food production, malnutrition persists in various forms: undernutrition (insufficient calories), micronutrient deficiencies ("hidden hunger"), and overweight/obesity. A food systems approach recognizes that addressing these challenges requires attention not just to production but to the entire pathway from farm to fork.
            </p>
            <p>
              Sustainable food systems that prioritize nutrition aim to provide affordable, diverse, and nutritious foods while minimizing environmental impacts and supporting equitable livelihoods. This involves promoting diverse production systems that include nutrient-rich foods like fruits, vegetables, legumes, and animal-source foods; improving processing, storage, and distribution to preserve nutritional value; and ensuring economic and physical access to healthy diets for all population groups.
            </p>
            <p>
              Policies and programs that support nutrition-sensitive agriculture include biofortification (breeding crops with higher micronutrient content), home gardens and small-scale livestock production to diversify diets, food fortification to address specific nutrient gaps, nutrition education to promote healthy food choices, and social protection measures that enable vulnerable populations to access nutritious foods.
            </p>
          </>
        }
        image={nutritionImage}
        imageAlt="Diverse, nutritious foods for a healthy diet"
        backgroundColor="#f9f9f9"
      />

      <section className="food-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Food Security Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="food-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {foodTopics.map((topic, index) => (
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
            <h2>Building Sustainable Food Systems for All</h2>
            <p>
              Achieving food security in a changing world requires transforming food systems to be more sustainable, resilient, and equitable. This transformation must balance the need to produce sufficient nutritious food with the imperative to protect the environment, adapt to climate change, reduce waste, and ensure that all people have access to healthy diets.
            </p>
            <p>
              Such transformation demands coordinated action across sectors and scales. Farmers need support to adopt sustainable practices while maintaining viable livelihoods. Food businesses must prioritize sustainability and nutrition throughout supply chains. Governments can create enabling environments through appropriate policies, investments, and regulations. Consumers can drive change through their food choices and by reducing waste.
            </p>
            <p>
              While the challenges are complex, there are promising innovations and approaches that can help build more sustainable food systems. These include agroecological farming methods, digital technologies for precision agriculture, alternative proteins, circular economy approaches to food waste, and inclusive business models that connect smallholder farmers to markets. By combining these innovations with supportive policies and behavioral change, we can create food systems that nourish both people and planet.
            </p>
            <p>
              For more information on food security and sustainable agriculture, refer to resources from organizations like the Food and Agriculture Organization (FAO), the World Food Programme (WFP), and the CGIAR Research Program on Climate Change, Agriculture and Food Security (CCAFS).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoodSecurity;