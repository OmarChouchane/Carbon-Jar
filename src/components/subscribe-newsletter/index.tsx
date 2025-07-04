import React from 'react';
import { tw } from 'twind';
import Button from '../button';
import { H2Bold, SmallerH1 } from '../Heading';

const NewsletterSubscription = () => {
  return (
    <section className={tw('flex justify-center items-center')}>
      <div className={tw('w-full lg:w-1/2 mt-12 lg:mt-0 ')}>
        <div className={tw('border border-lighter-green  rounded-xl py-5 px-4 shadow-md')}>
          <SmallerH1 className={tw('mb-4 text-lg md:text-xl lg:text-2xl')}>Subscribe to our newsletter</SmallerH1>
          <div className={tw('flex w-full gap-8')}>
            <input
              aria-label="full name"
              type="text"
              className={tw('border border-lighter-grey bg-white focus:bg-white-light min-w-0 w-full rounded text-grey py-2 px-3')}
              placeholder="Enter your full name"
            />
            <input
              aria-label="email address"
              type="text"
              className={tw('border border-lighter-grey bg-white focus:bg-white-light min-w-0 w-full rounded text-grey py-2 px-3')}
              placeholder="Enter your email"
            />
            <Button primary>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
