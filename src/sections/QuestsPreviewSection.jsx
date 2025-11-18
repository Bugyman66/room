import { motion } from 'framer-motion';
import Button from '../components/Button';

const QuestsPreviewSection = () => {
  const quests = [
    {
      title: "Smart Contract Audit",
      project: "DeFi Protocol X",
      reward: "500 APT",
      difficulty: "Expert",
      tags: ["Solidity", "Security", "Audit"]
    },
    {
      title: "UI/UX Redesign",
      project: "NFT Marketplace",
      reward: "250 APT",
      difficulty: "Intermediate",
      tags: ["Design", "Figma", "Web3"]
    },
    {
      title: "Documentation Update",
      project: "Wallet Integration",
      reward: "100 APT",
      difficulty: "Beginner",
      tags: ["Technical Writing", "Docs"]
    }
  ];

  return (
    <section className="py-20 bg-aptos-dark border-t border-aptos-cyan/10" id="quests">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Live Quests</h2>
          <div className="w-24 h-1 bg-aptos-cyan mx-auto mb-8"></div>
          <p className="section-subtitle">
            Explore active bounties and quests from leading Web3 projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 0 20px rgba(0,229,255,0.3)",
              }}
              className="glass-card p-6 group border border-aptos-cyan/20 hover:border-aptos-cyan/50 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-aptos-cyan">{quest.title}</h3>
                <span className="text-sm px-2 py-1 rounded-full bg-aptos-cyan/10 text-aptos-cyan">
                  {quest.difficulty}
                </span>
              </div>
              
              <p className="text-gray-400 mb-4">by {quest.project}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-aptos-cyan">{quest.reward}</span>
                <div className="w-6 h-6 rounded-full bg-aptos-cyan/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-aptos-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {quest.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="secondary">
            View All Quests
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestsPreviewSection;