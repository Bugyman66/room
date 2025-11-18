import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base';
  
  const variants = {
    primary: 'bg-aptos-cyan text-aptos-black hover:bg-aptos-aqua hover:shadow-[0_0_20px_rgba(0,229,255,0.8)]',
    secondary: 'bg-transparent border-2 border-aptos-cyan text-aptos-cyan hover:bg-aptos-cyan/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.5)] hover:text-aptos-white'
  };
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;