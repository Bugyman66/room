import { motion } from 'framer-motion';

const QuestPreview = () => {
  const quests = [
    {
      title: "Create Content About an Aptos Project",
      reward: "50 APT",
      difficulty: "Beginner",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Test a New Web3 Feature & Submit Feedback",
      reward: "30 APT",
      difficulty: "Intermediate",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Build a Micro Tool or Script for a dApp",
      reward: "100 APT",
      difficulty: "Advanced",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-16 md:py-20 bg-aptos-black overflow-hidden" id="quest-preview">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Fog and gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-aptos-black to-aptos-dark"></div>
        
        {/* Cyan fog */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-aptos-cyan/5 blur-[60px] md:blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full bg-aptos-aqua/5 blur-[60px] md:blur-[100px]"></div>
        
        {/* Networking grid - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E5FF" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating bubbles in brand tones */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-aptos-cyan/20' : 
              i % 3 === 1 ? 'bg-aptos-aqua/20' : 'bg-aptos-aqua-pale/20'
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? -5 : 5],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">What to Expect — Sample Quests</h2>
          <div className="w-16 h-1 bg-aptos-cyan mx-auto mb-6 md:mb-8"></div>
          <p className="section-subtitle text-gray-300">
            Here's a preview of the type of quests you will complete on APTOS ROOM.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {quests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -3,
                boxShadow: "0 0 15px rgba(0,229,255,0.4)",
              }}
              className="cyanglow-card p-6 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 md:p-3 rounded-lg bg-aptos-cyan/10 text-aptos-cyan group-hover:scale-110 transition-transform duration-300">
                  {quest.icon}
                </div>
                <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-aptos-cyan/10 text-aptos-cyan">
                  {quest.difficulty}
                </span>
              </div>
              
              <h3 className="text-base md:text-xl font-bold mb-4 text-aptos-white">{quest.title}</h3>
              
              <div className="flex justify-between items-center">
                <span className="font-bold text-aptos-cyan">{quest.reward}</span>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-aptos-cyan/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-aptos-cyan" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestPreview;