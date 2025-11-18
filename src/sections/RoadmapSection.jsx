import { motion } from 'framer-motion';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q4 2023",
      title: "Platform Launch",
      description: "Initial platform release with core bounty and quest functionality.",
      completed: true
    },
    {
      quarter: "Q1 2024",
      title: "Reputation System",
      description: "Implementation of decentralized reputation scoring for contributors.",
      completed: true
    },
    {
      quarter: "Q2 2024",
      title: "Multi-Chain Support",
      description: "Expansion to other blockchain networks beyond Aptos.",
      completed: false
    },
    {
      quarter: "Q3 2024",
      title: "DAO Governance",
      description: "Community-driven governance model for platform decisions.",
      completed: false
    },
    {
      quarter: "Q4 2024",
      title: "Mobile App",
      description: "Native mobile applications for iOS and Android platforms.",
      completed: false
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-aptos-dark border-t border-aptos-cyan/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">Roadmap</h2>
          <div className="w-16 h-1 bg-aptos-cyan mx-auto mb-6 md:mb-8"></div>
          <p className="section-subtitle">
            Our journey to revolutionize the Web3 gig economy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-aptos-cyan/20"></div>
          
          <div className="space-y-8 md:space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-aptos-cyan bg-aptos-dark z-10 flex items-center justify-center">
                  {item.completed && (
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-aptos-cyan"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 mb-4 md:mb-0 text-center ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} md:pt-0 pt-8`}>
                  <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm font-semibold rounded-full bg-aptos-cyan/10 text-aptos-cyan mb-2">
                    {item.quarter}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-aptos-cyan">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;