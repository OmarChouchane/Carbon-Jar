import React, { useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import ScrollProgress from '@/components/scroll';
import { motion } from 'framer-motion';
import { H1, H2 } from '@/components/Heading';
import CorporateTrainings from '@/components/corporate-trainings';
import TextCard from '@/components/TextCard';
import { tw } from 'twind';
import StatisticBlock from '@/components/static-bloc2';
import FAQSection from '@/components/faq-section';
import { SmallerH1 } from '@/components/Heading';
import StudentsTrainings from '@/components/students-trainings';

const Trainings: React.FC = () => {
  const [isCorporate, setIsCorporate] = useState(true);

  const handleSwitch = (type: string) => {
    setIsCorporate(type === 'corporate');
  };

  const inHouse = [
    { 
      title: 'Enhanced Effectiveness', 
      text: 'Tailored to your organization’s specific needs, ensuring maximum relevance and impact.' 
    },
    { 
      title: 'Convenience', 
      text: 'Conducted at your premises, eliminating the need for travel and accommodation.' 
    },
    { 
      title: 'Exclusivity', 
      text: 'Open only to your employees, fostering a focused and cohesive learning environment.' 
    },
    { 
      title: 'Cost Savings', 
      text: 'Reduces expenses related to travel and accommodation.' 
    },
    { 
      title: 'Practical Understanding', 
      text: 'Hands-on training that directly applies to your operational context.' 
    },
    { 
      title: 'Team Participation', 
      text: 'Allows a larger number of team members to participate, promoting collective growth.' 
    }
  ];
  const publicTrainings = [
    { 
      title: 'Ideal for Smaller Groups', 
      text: 'Perfect for organizations with fewer participants.' 
    },
    { 
      title: 'Diverse Course Offerings', 
      text: 'Access to a wide range of courses covering various topics.' 
    },
    { 
      title: 'In-Depth Learning', 
      text: 'Detailed and comprehensive courses designed to provide thorough knowledge.' 
    },
    { 
      title: 'Certification', 
      text: 'Participants receive certificates and qualifications upon completion, enhancing their professional credentials.' 
    }
  ];
  
  const liveOnlineTrinings = [
    { 
      title: 'Convenience', 
      text: 'Participate from anywhere, eliminating the need for travel.' 
    },
    { 
      title: 'Cost-Effective', 
      text: 'Reduces costs associated with travel and accommodation.' 
    },
    { 
      title: 'Immediate Implementation', 
      text: 'Apply what you learn immediately in your work environment.' 
    },
    { 
      title: 'Real-Time Interaction', 
      text: 'Engage with instructors and peers in real-time, ensuring an interactive learning experience.' 
    },
    { 
      title: 'Certification', 
      text: 'Receive certification upon completion, validating your new skills and knowledge.' 
    }
  ];
  

  return (
    <Page>
      <ScrollProgress/>

      <NextSeo
        title="Trainings"
        description=""
      />

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <header>
            <div className={tw(`mx-auto py-12 sm:px-4 lg:px-6 mb-4 lg:mb-10 md:mb-6 sm:mb-8 lg:mt-10 md:mt-4 sm:mt-4`)}>
              <br/>
              <H1>Our Training Programs!</H1>
              <br />
              <H2>At Carbon Jar, we provide professional training to enhance your<br/> team’s knowledge and skills.</H2>
            </div>

            <div className="flex justify-center items-center h-screen">
              <div className={tw('relative flex items-center border-bg-grey rounded-full bg-white p-1 w-96')}>
                <div
                  className={tw(`cursor-pointer flex-1 text-center py-4 text-lg rounded-full transition-colors ${isCorporate ? 'bg-green text-white' : 'bg-white text-green'}`)}
                  onClick={() => handleSwitch('corporate')}
                >
                  Corporate trainings
                </div>
                <div
                  className={`cursor-pointer flex-1 text-center py-4 text-lg rounded-full transition-colors ${!isCorporate ? 'bg-green text-white' : 'bg-white text-green'}`}
                  onClick={() => handleSwitch('student')}
                >
                  Student trainings
                </div>
              </div>
            </div>
          </header>
        </motion.div>

        {isCorporate ? <CorporateTrainings /> : <StudentsTrainings />}
        <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
   >
      <section>
      <TextCard title='In-House Training' texts={inHouse}/>
      <TextCard title='Public Training' texts={publicTrainings}/>
      <TextCard title='Live Online Training' texts={liveOnlineTrinings}/>
      </section>
    </motion.div>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
   >
    <section className={tw('bg-light-green w-full lg:px-20 p-4 lg:pt-12 lg:mb-16')}>
    <SmallerH1 className={tw('lg:m-8')}>Empowering Businesses with Efficient Trainings</SmallerH1>
    <br />
    <div className={tw('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8')}>        
      <StatisticBlock 
      number='+1000'
      description='Hours of training'
      />
      <StatisticBlock
      number='+150'
      description='People trained'
      />
      <StatisticBlock
      number='+12'
      description='Trainings offered'
        />
      <StatisticBlock
      number='+15'
      description='Integrated workshops'
      />
      <br />
  </div>
  <H2 className={tw('lg:px-32 lg:mx-32 lg:mb-12 text-left')}>
      <span  className={tw('font-bold')}>NOTE: </span>We’re committed to matching the prices of any competitors who may provide the same courses! If you’re considering booking multiple courses or have multiple attendees, we offer a discounted pricing structure. Please get in touch with our team for further details.
      </H2>
    </section>
    </motion.div>
    <FAQSection/>
      </main>

      <Footer />
    </Page>
  );
};

export default Trainings;
