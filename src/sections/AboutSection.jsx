import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/animations';

const AboutSection = () => {
  return (
    <section className="py-20 bg-aptos-dark border-t border-aptos-cyan/10" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={textVariant} className="section-title">What is APTOS ROOM</motion.h2>
          <motion.div variants={textVariant} className="w-24 h-1 bg-aptos-cyan mx-auto mb-8"></motion.div>
          <motion.p variants={textVariant} className="section-subtitle">
            A revolutionary platform transforming how Web3 contributors connect with projects through decentralized bounties and quests.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Trust",
              description: "Every task and contributor is verified through blockchain transparency, ensuring trust in every interaction."
            },
            {
              title: "Transparency",
              description: "All transactions, rewards, and contributions are recorded immutably on the Aptos blockchain."
            },
            {
              title: "Rewards",
              description: "Earn fair compensation for your skills and contributions in a decentralized ecosystem."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-aptos-cyan/10 flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 rounded-full bg-aptos-cyan"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-aptos-cyan">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            APTOS ROOM is more than just a platform—it's a thriving ecosystem where Web3 builders, developers, designers, and creators converge to contribute their talents to meaningful projects while earning rewards in a trustless environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;