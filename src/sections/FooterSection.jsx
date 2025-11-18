import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const FooterSection = () => {
  return (
    <footer className="py-8 md:py-12 bg-aptos-dark border-t border-aptos-cyan/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start">
              <img src={logo} alt="APTOS ROOM Logo" className="w-8 h-8 md:w-10 md:h-10 mr-2 md:mr-3" />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-aptos-cyan to-aptos-blue bg-clip-text text-transparent">
                APTOS ROOM
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-xs md:text-sm">
              The Home of Web3 Gigs
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex space-x-4 md:space-x-6"
          >
            <a href="#" className="text-gray-400 hover:text-aptos-cyan transition-colors duration-300 text-sm md:text-base">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-aptos-cyan transition-colors duration-300 text-sm md:text-base">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-aptos-cyan transition-colors duration-300 text-sm md:text-base">
              Docs
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-aptos-cyan/10 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm"
        >
          <p>© {new Date().getFullYear()} APTOS ROOM. All rights reserved. Built on Aptos Blockchain.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;