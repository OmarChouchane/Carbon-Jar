import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import CarbonCards from '@/components/cards-section2';
import FAQSection from '@/components/faq-section2';
import ScrollProgress from '@/components/scroll';
const Expertise: React.FC = () => {
  return (
    <Page>
      <ScrollProgress/>
      
      <NextSeo
        title="Expertise"
        description=""
      />

      <Head>
        <style>{`
          html, body {
            background-color: #17412D; 
            
          }
        `}</style>
      </Head>
      <main>
          <CarbonCards/>
          <FAQSection/>

      </main> 

      <Footer />
    </Page>
  );
};

export default Expertise;
