import React from 'react';
import { tw } from 'twind';
import { H1Inter, H2, H3 } from '../Heading';
import SmallerBox from '../smallbox';
import { FaCheck } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import ContentCard from '../content-card';
type NestedList = (string | NestedList)[];

interface CourseCardStudentProps {
  index: number;
  peopleEnrolled: number;
  duration: number;
  certified: boolean;
  trainingTitle: string;
  trainingDescription?: string;
  trainingDescription2?: string;
  overview?: string;
  whyCourse: string[];
  content1?: NestedList
  content2?: Map<string, string[]>; 
  link: string;
}

const CourseCardStudent: React.FC<CourseCardStudentProps> = ({
  index,
  peopleEnrolled,
  duration,
  certified,
  trainingTitle,
  trainingDescription,
  overview,
  trainingDescription2,
  whyCourse,
  content1,
  content2,
  link
}) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className={tw('relative items-start m-8 lg:px-8 gap-4 rounded-lg border border-green-dark bg-green-dark shadow-md p-6')}>
        <motion.a
          href={link}
          className={tw('lg:absolute lg:right-6 lg:top-6 text-white-light text-sm underline flex items-center gap-1')}
          whileHover={{ scale: 1.05, color: '#e0e0e0' }}
          whileTap={{ scale: 0.95, color: '#b0b0b0' }}
        >
          <H3 className={tw('text-white-light')}>Start Course Now</H3>
          <MdArrowForwardIos className={tw('text-white-light')} />
        </motion.a>

        <div className={tw('flex flex-wrap gap-4 mb-4')}>
          <SmallerBox text={`+ ${peopleEnrolled} people enrolled`} />
          <SmallerBox text={`${duration}-day intensive course`} />
          {certified && (
            <SmallerBox text={<><FaCheck className={tw('inline mr-1 text-green-light')} /> Certified</>} />
          )}
        </div>

        <div className={tw('flex flex-col items-start gap-4')}>
          <H1Inter className={tw('text-white-light')}>Training {index} : {trainingTitle}</H1Inter>
          <H3 className={tw('text-white-light text-left')}>{trainingDescription}</H3>
          {overview &&<H3 className={tw('text-white-light text-left')}>
            <span className={tw('underline text-lg')}>Training Overview:</span> {overview}</H3>}
          <H3 className={tw('text-white-light text-left')}>{trainingDescription2}</H3>
          <div className={tw('mt-2')}>
            <div className={tw('flex items-center gap-2')}>
              <img src="images/icons/Stack.svg" alt='stack-icon' />
              <H2 className={tw('text-white-light font-bold')}>Course Content</H2>
            </div>
            {content1 && (
              <ul className={tw('list-disc pl-5 mt-2 text-white-light items-left text-left font-Inter')}>
                {content1.map((item, index) => (
                  <li key={index} className={tw('mb-2')}>
                    {Array.isArray(item) ? (
                      <ul className={tw('list-disc pl-5 mt-2')}>
                        {item.map((subItem, subIndex) => (
                          <li key={subIndex}>{subItem}</li>
                        ))}
                      </ul>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            )}

            {content2 && (
              <div className={tw('grid grid-cols-2')}>
                {[...content2.entries()].map(([title, textList], index) => (
                  <div key={index}>
                    <ContentCard 
                      dayTitle={`Day ${index + 1}`} 
                      topicTitle={title}
                      othertext={textList} 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={tw('mt-2')}>
            <div className={tw('flex items-center gap-0')}>
              <img src="images/icons/fi-sr-info.svg" alt='info-icon' />
              <H2 className={tw('text-white-light font-bold')}>Why take this course?</H2>
            </div>
            <ul className={tw('list-disc pl-5 mt-2 text-white-light items-left text-left font-Inter')}>
              {whyCourse.map((reason, index) => (
                <li key={index} className={tw('mb-2')}>{reason}</li>
              ))}
            </ul>
          </div>

          {certified && (
            <div className={tw('mt-2')}>
              <H2 className={tw('text-white-light text-left')}>
                <span className={tw('text-white-light font-bold text-left')}>Certification: </span>
                Participants who attend and complete the training course will receive a Carbon Jar Certificate of Completion.
              </H2>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCardStudent;
