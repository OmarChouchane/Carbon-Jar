import React from "react";
import { NextSeo } from "next-seo";
import Page from "@/components/page";

import Footer from "@/components/footer";
import { SmallerH1, H2 } from "@/components/Heading";
import BigCard3 from "@/components/big-card3";
import BigCard1 from "@/components/big-card1";
import FAQSection from "@/components/faq-section";
import TextCard from "@/components/TextCard";
import ScrollProgress from "@/components/scroll";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const texts = [
    {
      title: "Compliance",
      text: "Poor carbon reporting can expose your company to lawsuits, loss of revenue, and reputational damage. Detailed, comprehensive, and Green House Gas Protocol-aligned reporting ensures compliance with today’s regulations and prepares you for future ones.",
    },
    {
      title: "Finance",
      text: "Without a reliable emissions baseline, it’s impossible to verify reduction initiatives. Rigorous and transparent calculations protect your business from accusations of greenwashing and ensure sound reporting.",
    },
    {
      title: "Brand Equity",
      text: "Sustainability can boost brand equity both internally and externally. Recruit and retain engaged employees with an evidence-based sustainability strategy. Attract consumers by positioning your brand as an industry leader in environmental action.",
    },
  ];

  return (
    <Page>
      <ScrollProgress />
      <NextSeo
        title="About Us"
        description="Learn more about us on this page."
      />

      <main className={tw("bg-white-light min-h-screen")}>
        <br />
        <br />
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <section className={tw("lg:px-8 px-2 lg:mt-8 mb-8 lg:mx-32")}>
            <SmallerH1>Take the Lead on Climate</SmallerH1>
            <br />
            <H2>
              It’s never too early or too late to start carbon accounting. The
              time to act is now.
            </H2>
            <BigCard3
              title={
                <>
                  Climate <span className={tw("text-light-green")}>Risk</span>,
                  Climate{" "}
                  <span className={tw("text-light-green")}>Opportunity</span>
                </>
              }
              description={
                <>
                  Scientists and policymakers have agreed to limit the
                  <span className={tw("text-light-green")}>
                    {" "}
                    harmful effects
                  </span>{" "}
                  of climate change, the world must limit global warming to less
                  than
                  <span className={tw("text-light-green")}> 1.5°C</span>. Since
                  the industrial revolution, businesses have been responsible
                  for the vast majority of all greenhouse emissions. Now,
                  businesses can lead the way to a sustainable future. In line
                  with the 2015 Paris Agreement, we must all take
                  <span className={tw("text-light-green")}>
                    {" "}
                    responsibility
                  </span>{" "}
                  for our carbon footprint.
                </>
              }
              icon="images/icons/sun.svg"
            />
            <br />
            <BigCard1
              image="images/images/card2.png"
              title="Why Now? The World is Changing."
              description={
                <>
                  The world is transitioning to a{" "}
                  <span className={tw("font-bold")}> net-zero economy </span>.
                  Banks, investors, and consumers are demanding transparency in
                  carbon disclosures and sustainable options. Proactive
                  emissions management not only reduces the risk of{" "}
                  <span className={tw("font-bold")}> compliance failures</span>{" "}
                  but also saves{" "}
                  <span className={tw("font-bold")}> operational costs</span>{" "}
                  and increases{" "}
                  <span className={tw("font-bold")}> brand equity</span>.
                  However, this work must be founded on accurate emissions data,
                  which is often <span className={tw("font-bold")}>hard</span>{" "}
                  to find.
                </>
              }
              button1="Learn more"
              button2="Get started now"
            />

            <TextCard texts={texts} />
            <BigCard1
              image="images/images/card3.jpg"
              title="The Path to Net Zero: A Clear Roadmap"
              description={
                <>
                  Measurement is the first step on the journey to net zero. A
                  reliable emissions baseline can be shared with stakeholders
                  and used for compliance. Set targets and measure progress. Use
                  the insights in your emissions profile to manage and reduce
                  your overall emissions. Track progress against your baseline.
                  Invest in high-quality carbon removal projects that will
                  literally remove carbon from the air.
                  <br />{" "}
                  <span className={tw("font-bold")}>
                    {" "}
                    Reach net zero. Together, we can make a difference.
                  </span>
                </>
              }
              button1="Learn more"
              button2="Get started now"
            />
          </section>
        </motion.div>
        <br />
        <FAQSection />
      </main>

      <Footer />
    </Page>
  );
};

export default About;
