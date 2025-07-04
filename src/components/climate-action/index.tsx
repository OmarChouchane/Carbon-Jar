import React from 'react';
import { tw } from 'twind';
import { H2, H1, SmallerH1 } from '../Heading';
import StatisticBlock from '../static-bloc';
import {motion} from 'framer-motion';
const ClimateActionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
    <section className={tw('lg:mt-16 lg:mb-12 bg-green flex flex-col justify-center items-center gap-16 py-16')}>
      <div className={tw('flex flex-col justify-start items-center gap-4')}>
        <div className={tw('self-stretch text-center')}>
          <SmallerH1 className="text-white-light">
            The
            <span className={tw('text-light-green')}> Urgency</span>
            <span className="text-white-light"> of Climate Action</span>
          </SmallerH1>
        </div>
        <H2 className="text-white-light">Sustainability can no longer wait!</H2>
      </div>

      <div className={tw('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8')}>        <StatisticBlock 
          percentage="66%" 
          description={<span>of global consumers are willing to pay more for a product if a business is <span className="text-light-green">green</span> and <span className="text-light-green">ethical</span>.</span>} 
        />
        <StatisticBlock 
          percentage="40%" 
          description={<span>of staff will look for a new job if their employer does not engage in <span className="text-light-green">sustainable</span> business practices.</span>} 
        />
        <StatisticBlock 
          percentage="50%" 
          description={<span>of institutional investors now assess <span className="text-light-green">environmental</span> impact when making investment decisions.</span>} 
        />
        <StatisticBlock 
          percentage="40%" 
          description={<span>of global banking assets are committed to aligning their lending and investment portfolios with <span className="text-light-green">net-zero</span> emissions by 2050.</span>} 
        />
      </div>
    </section>
    </motion.div>
  );
};


export default ClimateActionSection;
