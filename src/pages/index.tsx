import { NextSeo } from "next-seo";
import Page from "@/components/page";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CarbonManagement from "@/components/carbon-management";
import ClimateActionSection from "@/components/climate-action";
import CardsSection from "@/components/cards-section";
import CardSection from "@/components/testamonials";
import FAQSection from "@/components/faq-section";

import ScrollProgress from "../components/scroll";

export default function Home() {
  return (
    <Page>
      <ScrollProgress />
      <NextSeo title="CarbonJar" description="" />
      <Header />
      <main className={tw("bg-white-light min-h-screen")}>
        <CarbonManagement />
        <ClimateActionSection />
        <CardsSection />
        <CardSection />
        <FAQSection />
      </main>
      <Footer />
    </Page>
  );
}
