import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Desert In Alaska Corp | Commercial Fire Suppression & HVAC Services | Detroit, MI</title>
        <meta
          name="description"
          content="Metro Detroit's trusted commercial fire suppression, kitchen exhaust, and HVAC contractor since 1997. Licensed & certified for restaurants, industrial facilities, and commercial properties."
        />
        <meta
          name="keywords"
          content="fire suppression Detroit, commercial kitchen exhaust, HVAC services Michigan, fire safety systems, kitchen hood installation"
        />
        <link rel="canonical" href="https://www.desertinalaska.com" />
      </Helmet>
      <Layout>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
