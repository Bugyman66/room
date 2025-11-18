import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Button from '../components/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-aptos-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Plasma blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-aptos-cyan/10 blur-[40px] md:blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 md:w-48 md:h-48 rounded-full bg-aptos-aqua-light/10 blur-[30px] md:blur-[60px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -15, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-aptos-cyan/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() > 0.5 ? -10 : 10],
              x: [0, Math.random() > 0.5 ? -10 : 10],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        
        {/* Electric streaks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-aptos-cyan to-transparent"
            style={{
              top: `${Math.random() * 100}%`,
              left: '-20%',
              width: '30%',
            }}
            animate={{
              x: ['0%', '120%'],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Node network - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 w-full h-full opacity-20">
          <svg className="w-full h-full">
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#00E5FF" strokeWidth="0.5" />
            <line x1="30%" y1="40%" x2="70%" y2="30%" stroke="#00E5FF" strokeWidth="0.5" />
            <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="#00E5FF" strokeWidth="0.5" />
            <line x1="90%" y1="60%" x2="60%" y2="80%" stroke="#00E5FF" strokeWidth="0.5" />
            <line x1="60%" y1="80%" x2="20%" y2="70%" stroke="#00E5FF" strokeWidth="0.5" />
            <line x1="20%" y1="70%" x2="10%" y2="20%" stroke="#00E5FF" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <motion.img
            src="/src/assets/logo.svg"
            alt="APTOS ROOM Logo"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 filter drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-aptos-white">
            Welcome to <span className="text-gradient">APTOS ROOM</span>
          </h1>
          
          <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 px-4">
            The Home of Web3 Gigs — A decentralized bounty & quest ecosystem built on Aptos. Earn by contributing to meaningful Web3 projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >

          <Link
            to="community"
            smooth={true}
            duration={500}
            className="cursor-pointer w-full sm:w-auto"
          >
            <Button variant="secondary" className="w-full">
              Join as a Contributor
            </Button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-aptos-cyan cursor-pointer"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Link to="about" smooth={true} duration={500}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;