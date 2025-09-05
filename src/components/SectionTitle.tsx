import { motion, useScroll, useTransform } from 'framer-motion';

export const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-4"
    >
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-text-main"
      >
        {children}
      </motion.h2>
      <motion.div 
        className="w-20 h-1 bg-primary mx-auto mt-2 rounded"
        variants={lineVariants}
        style={{ transformOrigin: 'left' }}
      />
    </motion.div>
  );
};

export default SectionTitle;