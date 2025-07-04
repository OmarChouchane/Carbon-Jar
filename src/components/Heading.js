import React from 'react';
import { tw } from 'twind'; 

export const H1 = ({ children, className = '', ...props }) => (
  <h1 className={tw(`font-custom text-4xl md:text-5xl lg:text-7xl text-center leading-snug text-green ${className}`)} {...props}>
    {children}
  </h1>
);
export const SmallerH1 = ({ children, className = '', ...props }) => (
  <h1 className={tw(`font-custom text-2xl md:text-3xl lg:text-4xl text-center leading-snug text-green ${className}`)} {...props}>
    {children}
  </h1>
);


export const H2 = ({ children, className = '', ...props }) => (
  <h2 className={tw(`text-green text-center sm:mx-6 font-Inter text-base md:text-base lg:text-lg ${className}`)} {...props}>
    {children}
  </h2>
);
export const H2Bold = ({ children, className = '', ...props }) => (
  <h2 className={tw(`text-green text-center font-Inter text-lg font-bold md:text-base lg:text-lg ${className}`)} {...props}>
    {children}
  </h2>
);
export const H3 = ({ children, className = '', ...props }) => (
    <h3 className={tw(`text-green text-center font-Inter text-base ${className}`)} {...props}>
      {children}
    </h3>
);



export const Title = ({ children, className = '', ...props }) => (
  <h2 className={tw(`text-green text-center m-4 font-Inter text-base md:text-lg lg:text-xl ${className}`)} {...props}>
    {children}
  </h2>
);

export const H1Inter = ({ children, className = '', ...props }) => (
  <h2 className={tw(`text-green text-center font-Inter text-xl font-bold md:text-xl lg:text-2xl ${className}`)} {...props}>
    {children}
  </h2>
);