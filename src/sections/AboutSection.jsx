import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/animations';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 bg-aptos-dark border-t border-aptos-cyan/10" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2 variants={textVariant} className="section-title">What is APTOS ROOM</motion.h2>
          <motion.div variants={textVariant} className="w-16 h-1 bg-aptos-cyan mx-auto mb-6 md:mb-8"></motion.div>
          <motion.p variants={textVariant} className="section-subtitle">
            A revolutionary platform transforming how Web3 contributors connect with projects through decentralized bounties and quests.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Trust",
              description: "Every task and contributor is verified through blockchain transparency, ensuring trust in every interaction.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-aptos-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: "Transparency",
              description: "All transactions, rewards, and contributions are recorded immutably on the Aptos blockchain.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-aptos-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )
            },
            {
              title: "Rewards",
              description: "Earn fair compensation for your skills and contributions in a decentralized ecosystem.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 text-aptos-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-aptos-cyan/10 flex items-center justify-center mx-auto mb-4 md:mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-aptos-cyan">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-base md:text-xl text-gray-300 px-4">
            APTOS ROOM is more than just a platform—it's a thriving ecosystem where Web3 builders, developers, designers, and creators converge to contribute their talents to meaningful projects while earning rewards in a trustless environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;