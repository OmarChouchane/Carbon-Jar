import React from "react";

import { H1, H2, SmallerH1 } from "../Heading";
import Card from "../card2";
import { motion } from "framer-motion";

const CarbonCards: React.FC = () => {
  const cards = [
    {
      id: "1",
      icon: "/images/icons/majesticons_data-lineWh.svg",
      title: "Data Collection, Management, and GHG Protocol Adherence",
      description:
        "Our service accurately measures your Scope 1, 2, and 3 emissions, ensuring GHG Protocol compliance and a seamless transition to sustainable practices.",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },
    {
      id: "2",
      icon: "/images/icons/mdi_teachingWh.svg",
      title: "Trainings & Workshops",
      description:
        "Our training programs and workshops empower your team with essential skills for sustainability. We offer modules on climate change, emissions management, and best practices",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },
    {
      id: "3",
      icon: "/images/icons/ph_pathWh.svg",
      title: "Net Zero Strategy",
      description:
        "We provide strategic guidance on your journey to net zero. Our experts will help you set achievable targets, develop effective strategies, and monitor progress towards your sustainability goals.",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },

    {
      id: "4",
      icon: "/images/icons/tabler_leafWh.svg",
      title: "Supply Chain Engagement",
      description:
        "Our service helps you evaluate and manage the environmental impact of your supply chain, developing strategies to reduce emissions and promote sustainability.",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },
    {
      id: "5",
      icon: "/images/icons/footprintWh.svg",
      title: "GHG & ESG Reporting",
      description:
        "Our GHG & ESG reporting service tracks your emissions and ESG performance, providing clear reports that meet global standards.",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },
    {
      id: "6",
      icon: "/images/icons/majesticons_data-lineWh.svg",
      title: "Financed Emissions",
      description:
        "Our service helps you manage emissions from your financial activities, providing insights and strategies to align your portfolio with sustainability goals.",
      learbMoreLink: "/learn-more", //modify when the page is ready
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <section className={tw("bg-green p-8 lg:mt-8 lg:mx-44 rounded-lg")}>
        <div className={tw("container mx-auto")}>
          <SmallerH1 className={tw("text-white-light lg:text-5xl")}>
            Our field of expertise
          </SmallerH1>
          <br />
          <H2 className={tw("text-white-light")}>
            We offer a comprehensive suite of services designed to help your
            organization navigate
            <br />
            the path to sustainability.
          </H2>
          <br />
          <div
            className={tw(
              "grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-8"
            )}
          >
            {cards.slice(0, 6).map((card, index) => (
              <Card
                id={card.id}
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                learnMoreLink={card.learbMoreLink}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CarbonCards;
