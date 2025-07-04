import React, { useState } from 'react';
import { tw } from 'twind';
import { motion, AnimatePresence } from 'framer-motion';
import { H2, H2Bold, H3 } from '../Heading';
import Button from '../button';
interface CardProps {
  icon?: string;
  title: string;
  description: string;
  learnMoreLink: string;
  id: string; 
}

const Card: React.FC<CardProps> = ({ icon, title, description, learnMoreLink, id }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <>
      <motion.div
        layoutId={id}
        className={tw('flex flex-col items-start lg:px-8 gap-4 rounded-xl border border-green-dark bg-green-dark shadow-md p-6 transition-transform duration-200 hover:scale-105 hover:shadow-xl')}
        onClick={() => setSelectedId(id)}
      >
        <div className={tw('flex items-center gap-2')}>
          {icon && (
            <div className={tw('w-10 h-10 lg:w-14 lg:h-14')}>
              <img src={icon} alt={title} className={tw('w-full h-full object-contain')} />
            </div>
          )}
        </div>
        <div className={tw('flex flex-col items-start gap-2')}>
          <H2Bold className={tw('text-white-light')}>{title}</H2Bold>
          <H3 className={tw('text-white-light text-left')}>{description}</H3>
          <a href={learnMoreLink} className={tw('text-white font-Inter underline hover:underline')}>View More</a>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedId === id && (
          <motion.div
            layoutId={id}
            className={tw('fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-80 flex items-center justify-center')}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className={tw('flex flex-col items-center bg-green-dark p-6 lg:px-12 lg:mx-44 rounded-lg shadow-lg')}
              onClick={(e) => e.stopPropagation()}
            >
               <div className={tw('flex items-center gap-2')}>
          {icon && (
            <div className={tw('w-10 h-10 lg:w-14 lg:h-14')}>
              <img src={icon} alt={title} className={tw('object-contain')} />
            </div>
          )}
        </div>
              <H2Bold className={tw('text-white-light')}>{title}</H2Bold>
              <H2 className={tw('text-white-light text-left')}>{description}</H2>
              {/* Add learn more text  */}
              <Button
                secondary
                onclick={() => setSelectedId(null)}
              >
                Close
              </Button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
