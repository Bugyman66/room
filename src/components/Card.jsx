import { motion } from 'framer-motion';

const Card = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;