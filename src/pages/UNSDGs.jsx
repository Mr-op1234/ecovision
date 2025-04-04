import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Card from '../components/Card';

// Import images (placeholders)
const heroImage = 'https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80';
const sdgOverviewImage = 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80';
const sdgProgressImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80';

const UNSDGs = () => {
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

  const sdgs = [
    {
      number: 1,
      title: "No Poverty",
      description: "End poverty in all its forms everywhere. This goal aims to ensure that all people, everywhere, have access to the resources and services they need.",
      color: "#E5243B"
    },
    {
      number: 2,
      title: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture to ensure everyone has access to sufficient nutritious food.",
      color: "#DDA63A"
    },
    {
      number: 3,
      title: "Good Health and Well-being",
      description: "Ensure healthy lives and promote well-being for all at all ages through universal health coverage and access to safe and effective medicines and vaccines.",
      color: "#4C9F38"
    },
    {
      number: 4,
      title: "Quality Education",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all, regardless of gender, location, or socioeconomic status.",
      color: "#C5192D"
    },
    {
      number: 5,
      title: "Gender Equality",
      description: "Achieve gender equality and empower all women and girls through eliminating discrimination, violence, and harmful practices against women and girls.",
      color: "#FF3A21"
    },
    {
      number: 6,
      title: "Clean Water and Sanitation",
      description: "Ensure availability and sustainable management of water and sanitation for all through improved water quality and water-use efficiency.",
      color: "#26BDE2"
    },
    {
      number: 7,
      title: "Affordable and Clean Energy",
      description: "Ensure access to affordable, reliable, sustainable, and modern energy for all by increasing the share of renewable energy in the global energy mix.",
      color: "#FCC30B"
    },
    {
      number: 8,
      title: "Decent Work and Economic Growth",
      description: "Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
      color: "#A21942"
    },
    {
      number: 9,
      title: "Industry, Innovation and Infrastructure",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation to support economic development.",
      color: "#FD6925"
    },
    {
      number: 10,
      title: "Reduced Inequalities",
      description: "Reduce inequality within and among countries by promoting social, economic, and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion, or economic status.",
      color: "#DD1367"
    },
    {
      number: 11,
      title: "Sustainable Cities and Communities",
      description: "Make cities and human settlements inclusive, safe, resilient, and sustainable through access to safe and affordable housing and transportation.",
      color: "#FD9D24"
    },
    {
      number: 12,
      title: "Responsible Consumption and Production",
      description: "Ensure sustainable consumption and production patterns by using resources efficiently and reducing waste generation.",
      color: "#BF8B2E"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts by regulating emissions and promoting renewable energy development.",
      color: "#3F7E44"
    },
    {
      number: 14,
      title: "Life Below Water",
      description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development by reducing marine pollution and protecting marine ecosystems.",
      color: "#0A97D9"
    },
    {
      number: 15,
      title: "Life on Land",
      description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, halt and reverse land degradation, and halt biodiversity loss.",
      color: "#56C02B"
    },
    {
      number: 16,
      title: "Peace, Justice and Strong Institutions",
      description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
      color: "#00689D"
    },
    {
      number: 17,
      title: "Partnerships for the Goals",
      description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development through cooperation on finance, technology, capacity-building, trade, and systemic issues.",
      color: "#19486A"
    }
  ];

  return (
    <div className="un-sdgs-page">
      <Hero 
        title="United Nations Sustainable Development Goals"
        subtitle="A blueprint for peace and prosperity for people and the planet"
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
            <h2>What are the Sustainable Development Goals?</h2>
            <p>
              The Sustainable Development Goals (SDGs) are a collection of 17 interlinked global goals designed to be a "blueprint to achieve a better and more sustainable future for all." The SDGs were set up in 2015 by the United Nations General Assembly and are intended to be achieved by the year 2030.
            </p>
            <p>
              These goals address the global challenges we face, including poverty, inequality, climate change, environmental degradation, peace, and justice. The SDGs are integrated—that is, they recognize that action in one area will affect outcomes in others, and that development must balance social, economic, and environmental sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="The 2030 Agenda for Sustainable Development"
        content={
          <>
            <p>
              The 2030 Agenda for Sustainable Development, adopted by all United Nations Member States in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 Sustainable Development Goals (SDGs), which are an urgent call for action by all countries - developed and developing - in a global partnership.
            </p>
            <p>
              The Agenda recognizes that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.
            </p>
            <p>
              The SDGs build on decades of work by countries and the UN, including the UN Department of Economic and Social Affairs. In June 1992, at the Earth Summit in Rio de Janeiro, Brazil, more than 178 countries adopted Agenda 21, a comprehensive plan of action to build a global partnership for sustainable development to improve human lives and protect the environment.
            </p>
          </>
        }
        image={sdgOverviewImage}
        imageAlt="Sustainable Development Goals overview"
        backgroundColor="#f9f9f9"
      />

      <section className="sdgs-grid-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The 17 Sustainable Development Goals
          </motion.h2>
          
          <motion.div 
            ref={ref}
            className="sdgs-grid"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {sdgs.map((sdg, index) => (
              <motion.div 
                key={index} 
                className="sdg-card"
                variants={cardVariants}
                style={{ borderTop: `5px solid ${sdg.color}` }}
              >
                <div className="sdg-number" style={{ backgroundColor: sdg.color }}>{sdg.number}</div>
                <h3>{sdg.title}</h3>
                <p>{sdg.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <InfoSection
        title="Annual SDG Progress Report"
        content={
          <>
            <p>
              Each year, the United Nations releases an annual SDG Progress report that provides an overview of the world's implementation efforts to date, highlighting areas of progress and areas where more action needs to be taken. The report is based on the latest available data and is prepared by the UN Department of Economic and Social Affairs with input from international and regional organizations and the UN system of agencies, funds, and programmes.
            </p>
            <p>
              The COVID-19 pandemic has severely impacted progress toward the SDGs, reversing years of progress on poverty, healthcare, and education. The 2021 report showed that the global extreme poverty rate rose for the first time in over 20 years, and 119 to 124 million people were pushed back into extreme poverty in 2020.
            </p>
            <p>
              Despite these setbacks, the SDGs remain our shared vision for a better future for all. The report emphasizes that the COVID-19 crisis offers an opportunity to invest in transformative recovery plans that are based on the SDGs and that can help address the climate crisis, reduce inequality, and advance human rights.
            </p>
          </>
        }
        image={sdgProgressImage}
        imageAlt="SDG Progress Report"
        imagePosition="left"
      />

      <section className="conclusion-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Get Involved with the SDGs</h2>
            <p>
              There are many ways individuals, communities, businesses, and governments can contribute to achieving the Sustainable Development Goals. From making sustainable lifestyle choices to advocating for policy changes, everyone has a role to play in creating a more sustainable future.
            </p>
            <p>
              Individual actions such as reducing waste, conserving energy and water, supporting sustainable businesses, and volunteering for environmental and social causes can make a significant difference. Educational institutions can integrate sustainability into their curricula, while businesses can adopt sustainable practices in their operations and supply chains.
            </p>
            <p>
              Governments at all levels can align policies and budgets with the SDGs, create enabling environments for sustainable development, and monitor progress through data collection and reporting. International cooperation and partnerships are also essential for mobilizing resources, sharing knowledge, and addressing global challenges.
            </p>
            <p>
              For more information on how to get involved with the SDGs, visit the United Nations Sustainable Development Goals website or connect with local organizations working on sustainability issues in your community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UNSDGs;