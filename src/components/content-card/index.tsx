import React from 'react';
import { tw } from 'twind';
import { H2, H3 } from '../Heading';

interface ContentCardProps {
  dayTitle: string;
  othertext ?:string[];
  topicTitle: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ dayTitle, topicTitle,othertext }) => {
  return (
    <div className={tw('bg-green-dark border border-border-white p-4 m-2 rounded-lg shadow-sm h-full hover:shadow-md transition-shadow duration-200')}>
      <div className={tw('flex flex-col')}>
        <H3 className={tw('text-white-light text-left font-normal mb-1')}>
          {dayTitle}
        </H3>
        <H3 className={tw('text-white-light text-left font-bold lg:text-lg')}>
          {topicTitle}
        </H3>
        {othertext && (
  <ul className={tw('list-disc pl-5 mt-2 text-white-light items-left text-left font-Inter')}>
  {othertext.map((item, index) => (
    <li key={index} className={tw('mb-2')}>{item}</li>
  ))}
  </ul>)
}
      </div>
    </div>
  );
};

export default ContentCard;
