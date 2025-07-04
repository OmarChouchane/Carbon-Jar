import React from 'react';
import { H2, H2Bold } from '../Heading';
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { motion } from 'framer-motion';

interface CardComponentProps {
  rating: number;
  reviewText: string;
  Client: string;
  clientTitle?: string;
  clientImage?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  rating,
  reviewText,
  Client,
  clientTitle,
  clientImage,
}) => {
  {/*const getStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} className="text-yellow w-6 h-6" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfStroke key={i} className="text-yellow w-6 h-6" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow w-6 h-6" />);
      }
    }
    return stars;
  };

  const stars = getStars(rating);*/}

  return (
    <motion.div
      className="w-96 h-64 px-8 py-4 rounded-lg border border-lighter-green flex flex-col justify-between shadow-lg   transition-shadow ease-in-out"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Review text */}
      <H2 className="text-left mt-4">{reviewText}</H2>

      {/* Client section */}
      <div className="flex items-center gap-4 mt-auto">
        {/* client avatar */}
        <img className="w-14 h-14 rounded-full" src={clientImage} alt={`${Client}'s Avatar`} />
        {/* client details */}
        <div className="flex flex-col justify-start items-start gap-2 text-left">
          <H2Bold>{Client}</H2Bold>
          <H2>{clientTitle}</H2>
        </div>
      </div>
    </motion.div>
  );
};

export default CardComponent;
