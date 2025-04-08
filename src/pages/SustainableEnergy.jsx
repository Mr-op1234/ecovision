import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80';
const renewableEnergyImage = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const energyEfficiencyImage = 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';
const energyAccessImage = 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80';

const SustainableEnergy = () => {
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

  const energyTopics = [
    {
      title: "Renewable Energy Sources",
      content: "Renewable energy comes from naturally replenished sources like sunlight, wind, rain, tides, waves, and geothermal heat. Unlike fossil fuels, these sources won't deplete and produce minimal greenhouse gas emissions, making them crucial for sustainable development.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--primary-color)"
    },
    {
      title: "Energy Efficiency",
      content: "Energy efficiency means using less energy to perform the same task, eliminating energy waste. Efficient buildings, appliances, and industrial processes reduce energy consumption, lower costs, and decrease environmental impacts while maintaining or improving service quality.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--accent-color-1)"
    },
    {
      title: "Energy Storage",
      content: "Energy storage technologies capture energy for later use, addressing the intermittency of renewable sources like solar and wind. Batteries, pumped hydro, thermal storage, and hydrogen systems enable reliable, flexible, and resilient clean energy systems.",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
      color: "var(--secondary-color)"
    },
    {
      title: "Energy Access",
      content: "Universal energy access means ensuring all people have reliable, affordable, sustainable, and modern energy services. This includes electricity for lighting, heating, cooling, and powering appliances, as well as clean cooking facilities that don't harm health or the environment.",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      color: "var(--accent-color-3)"
    }
  ];

  return (
    <div className="sustainable-energy-page">
      <Hero 
        title="Sustainable Energy for All"
        subtitle="Ensuring access to affordable, reliable, sustainable and modern energy"
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
            <h2>What is Sustainable Energy?</h2>
            <p>
              Sustainable energy is energy produced and used in ways that meet the needs of the present without compromising the ability of future generations to meet their own needs. It encompasses both renewable energy sources and energy efficiency measures that minimize environmental impact while providing reliable power for human development.
            </p>
            <p>
              The transition to sustainable energy systems is essential for addressing climate change, reducing air pollution, enhancing energy security, creating economic opportunities, and ensuring universal access to modern energy services. This transition involves shifting from fossil fuels to renewable sources, improving energy efficiency across sectors, and developing innovative technologies and policies.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Renewable Energy Technologies"
        content={
          <>
            <p>
              Renewable energy technologies harness natural resources that are constantly replenished to generate electricity, heat, and fuels. Unlike fossil fuels, which are finite and produce greenhouse gas emissions when burned, renewable energy sources offer clean, low-carbon alternatives that can help mitigate climate change and reduce environmental pollution.
            </p>
            <p>
              Solar energy technologies convert sunlight into electricity through photovoltaic panels or into thermal energy through concentrating solar power systems. Wind energy captures the kinetic energy of moving air using turbines. Hydropower generates electricity from flowing water, while geothermal energy taps into the Earth's internal heat. Bioenergy utilizes organic materials to produce heat, electricity, and fuels.
            </p>
            <p>
              The costs of renewable energy technologies have declined dramatically in recent years, making them increasingly competitive with conventional energy sources. As deployment continues to scale up, further cost reductions and technological improvements are expected, accelerating the global transition to renewable energy systems.
            </p>
          </>
        }
        image={renewableEnergyImage}
        imageAlt="Renewable energy technologies including solar panels and wind turbines"
        backgroundColor="#f9f9f9"
      />

      <InfoSection
        title="Energy Efficiency and Conservation"
        content={
          <>
            <p>
              Energy efficiency involves using less energy to provide the same service or output, while energy conservation refers to reducing energy consumption through behavioral changes. Both approaches are essential components of sustainable energy systems, as they help minimize resource use, lower costs, and reduce environmental impacts.
            </p>
            <p>
              In buildings, energy efficiency measures include improved insulation, high-performance windows, efficient heating and cooling systems, and smart energy management technologies. In industry, optimized processes, waste heat recovery, and efficient motors and equipment can significantly reduce energy consumption. In transportation, fuel-efficient vehicles, electric mobility, and improved logistics contribute to energy savings.
            </p>
            <p>
              Energy efficiency is often described as the "first fuel" because it is typically the most cost-effective way to meet energy needs while reducing emissions. According to the International Energy Agency, energy efficiency improvements could deliver more than 40% of the emissions reductions needed to meet global climate goals, highlighting its critical role in sustainable development.
            </p>
          </>
        }
        image={energyEfficiencyImage}
        imageAlt="Energy efficient building with smart technology"
        imagePosition="left"
      />

      <InfoSection
        title="Energy Access and Equity"
        content={
          <>
            <p>
              Energy access is a fundamental enabler of human development, yet approximately 770 million people worldwide still lack access to electricity, and 2.6 billion people rely on polluting fuels and technologies for cooking. Ensuring universal access to affordable, reliable, and modern energy services is a key target of Sustainable Development Goal 7 (SDG 7).
            </p>
            <p>
              Distributed renewable energy systems, such as solar home systems and mini-grids, offer promising solutions for expanding energy access in rural and remote areas where grid extension may be impractical or costly. These systems can provide clean, reliable electricity for lighting, communication, education, healthcare, and productive uses, improving quality of life and creating economic opportunities.
            </p>
            <p>
              Energy equity also involves addressing energy poverty in developed countries, where some households struggle to afford adequate energy services. Policies and programs that promote energy efficiency, provide financial assistance, and ensure fair pricing can help ensure that all people have access to the energy services they need for a decent standard of living.
            </p>
          </>
        }
        image={energyAccessImage}
        imageAlt="Rural community with solar panels providing electricity access"
        backgroundColor="#f9f9f9"
      />

      <section className="energy-topics-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Key Sustainable Energy Topics
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="energy-topics-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {energyTopics.map((topic, index) => (
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
            <h2>Powering a Sustainable Future</h2>
            <p>
              The transition to sustainable energy systems is not just an environmental imperative but also an economic opportunity and a social necessity. By harnessing renewable resources, improving energy efficiency, and ensuring universal access to modern energy services, we can create a more sustainable, equitable, and prosperous world.
            </p>
            <p>
              This transition requires coordinated action across multiple fronts, including technological innovation, policy reform, financial investment, and behavioral change. Governments, businesses, civil society organizations, and individuals all have important roles to play in accelerating the shift to sustainable energy.
            </p>
            <p>
              While challenges remain, the momentum toward sustainable energy is building. Renewable energy capacity is growing rapidly, energy efficiency improvements are delivering significant savings, and innovative solutions are expanding access to modern energy services. By continuing to prioritize sustainable energy development, we can build a clean, resilient, and inclusive energy future for all.
            </p>
            <p>
              For more information on sustainable energy, refer to resources from organizations like the International Renewable Energy Agency (IRENA), the International Energy Agency (IEA), and Sustainable Energy for All (SEforALL).
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SustainableEnergy;