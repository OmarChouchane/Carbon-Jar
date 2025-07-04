import React, { useState } from 'react';
import { tw } from 'twind';
import {motion} from 'framer-motion';
interface Link {
  url: string;
  imgSrc: string;
  hoverImgSrc: string; 
  altText?: string;
}

interface LinkImageGridProps {
  links: Link[];
}

const LinkImageGrid: React.FC<LinkImageGridProps> = ({ links }) => {
  const generateKey = (link: Link, index: number) => `${link.url}-${index}`;

  return (<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  >
    
    <div className={tw('grid grid-cols-2 h-12 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center mx-auto h-4/5 lg:m-4 lg:px-8 px-8 sm:m-8 md:m-6 md:px-6')}>
      {links.map((link, index) => (
        <LinkImage 
          key={generateKey(link, index)} 
          link={link} 
        />
      ))}
    </div>
    </motion.div>
  );
};

interface LinkImageProps {
  link: Link;
}

const LinkImage: React.FC<LinkImageProps> = ({ link }) => {
  const [imgSrc, setImgSrc] = useState(link.imgSrc);

  const handleMouseEnter = () => {
    setImgSrc(link.hoverImgSrc);
  };

  const handleMouseLeave = () => {
    setImgSrc(link.imgSrc);
  };

  return (
    
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={tw('flex justify-center items-center')}
    >
      <img
        src={imgSrc}
        alt={link.altText || 'Image'}
        className={tw('h-auto  object-cover transition-transform duration-200')}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </a>
  );
};

export default LinkImageGrid;
