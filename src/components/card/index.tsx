import React from 'react';
import { tw } from 'twind';
import { H2Bold, H3 } from '../Heading';
import { motion } from 'framer-motion';

interface CardProps {
  icon?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className={tw('flex flex-col justify-center items-center gap-4 rounded-xl border border-lighter-green bg-white shadow-md p-6')}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={tw('flex h-16 pl-1 pr-2 pt-1.5 pb-1 items-center')}>
        <div className={tw('w-10 h-10 relative')}>
          {icon && (
            <img src={icon} alt={title} className={tw('w-full h-full object-contain')} />
          )}
        </div>
      </div>
      <div className={tw('flex flex-col items-center gap-2')}>
        <H2Bold>{title}</H2Bold>
        <H3>{description}</H3>
      </div>
    </motion.div>
  );
};

export default Card;
