import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { motion, useScroll } from 'framer-motion';



class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
  

    return {
      ...initialProps,
      styles: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...initialProps.styles,
        React.createElement('style'),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
