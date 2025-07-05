import React from "react";

import { H2, H1, SmallerH1 } from "../Heading";
import { motion } from "framer-motion";

interface StatisticBlockProps {
  percentage: string;
  description: React.ReactNode;
}

const StatisticBlock: React.FC<StatisticBlockProps> = ({
  percentage,
  description,
}) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div
        className={tw(
          "w-full sm:w-72 flex flex-col justify-start items-center gap-2 p-4 transition-transform duration-300 hover:bg-opacity-90 hover:shadow-lg hover:scale-105"
        )}
      >
        <H1 className={tw("text-white-light text-4xl font-bold")}>
          {percentage}
        </H1>
        <div className={tw("w-full text-center")}>
          <H2 className={tw("text-white-light text-lg")}>{description}</H2>
        </div>
      </div>
    </motion.div>
  );
};

export default StatisticBlock;
