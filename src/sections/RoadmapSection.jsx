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
    <section className="py-20 bg-aptos-dark border-t border-aptos-cyan/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Roadmap</h2>
          <div className="w-24 h-1 bg-aptos-cyan mx-auto mb-8"></div>
          <p className="section-subtitle">
            Our journey to revolutionize the Web3 gig economy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-aptos-cyan/20 hidden md:block"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-aptos-cyan bg-aptos-dark z-10 flex items-center justify-center">
                  {item.completed && (
                    <div className="w-2 h-2 rounded-full bg-aptos-cyan"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-aptos-cyan/10 text-aptos-cyan mb-2">
                    {item.quarter}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-aptos-cyan">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
                
                {/* Spacer for mobile */}
                <div className="md:w-2/12 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;