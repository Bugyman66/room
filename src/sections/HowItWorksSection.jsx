import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Discover Bounties",
      description: "Browse through verified bounties posted by Web3 projects on Aptos."
    },
    {
      title: "Complete Tasks",
      description: "Apply your skills to complete the assigned tasks within the deadline."
    },
    {
      title: "Submit Proof",
      description: "Submit your work with cryptographic proof for verification."
    },
    {
      title: "Get Paid Instantly",
      description: "Receive your rewards instantly on the Aptos blockchain."
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
          <h2 className="section-title">How It Works</h2>
          <div className="w-16 h-1 bg-aptos-cyan mx-auto mb-6 md:mb-8"></div>
          <p className="section-subtitle">
            A seamless process from discovery to reward in the decentralized gig economy.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-aptos-cyan/20 transform -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-aptos-cyan/10 flex items-center justify-center mx-auto mb-4 border-2 border-aptos-cyan">
                    <span className="text-lg md:text-2xl font-bold text-aptos-cyan">{index + 1}</span>
                  </div>
                  
                  {/* Connector dots for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute top-6 left-1/2 transform translate-x-6 w-4 h-1 bg-aptos-cyan/20"></div>
                  )}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold mb-3 text-aptos-cyan">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;