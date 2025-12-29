import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Wind,
  ThermometerSun,
  Wrench,
  Factory,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

import fireSuppressionImg from "@/assets/service-fire-suppression.jpg";
import exhaustImg from "@/assets/service-exhaust.jpg";
import hvacImg from "@/assets/service-hvac.jpg";
import gasPipingImg from "@/assets/service-gas-piping.jpg";
import dryChemicalImg from "@/assets/service-dry-chemical.jpg";

const services = [
  {
    id: "fire-suppression",
    icon: Flame,
    title: "Fire Suppression & Life Safety",
    subtitle: "Primary Focus",
    description:
      "Complete fire safety solutions for commercial kitchens, restaurants, and industrial facilities. We provide end-to-end installation, inspection, and maintenance services.",
    image: fireSuppressionImg,
    features: [
      "Commercial kitchen fire suppression system installation",
      "Fire suppression system inspections and servicing",
      "Fire sprinkler modifications (tenant improvements)",
      "Sprinkler head relocations and replacements",
      "Fire extinguisher sales and certification",
      "Emergency exit signs installation",
      "Emergency lighting systems",
    ],
    primary: true,
  },
  {
    id: "exhaust",
    icon: Wind,
    title: "Commercial Kitchen Exhaust Systems",
    description:
      "Professional installation and servicing of commercial-grade kitchen exhaust and ventilation solutions for restaurants, cafeterias, and food service facilities.",
    image: exhaustImg,
    features: [
      "Kitchen exhaust hood installation",
      "Exhaust hood servicing and maintenance",
      "Makeup air system installation",
      "Commercial ventilation solutions",
      "Ductwork design and installation",
      "System balancing and optimization",
    ],
    note: "Note: We do not provide hood cleaning services.",
  },
  {
    id: "hvac",
    icon: ThermometerSun,
    title: "Heating & Cooling (HVAC)",
    description:
      "Comprehensive HVAC services for residential and light commercial properties. Keep your space comfortable year-round with our reliable heating and cooling solutions.",
    image: hvacImg,
    features: [
      "HVAC system installation",
      "Heating and cooling repairs",
      "System replacement and upgrades",
      "Preventive maintenance programs",
      "Indoor air quality solutions",
      "Energy efficiency assessments",
    ],
  },
  {
    id: "gas-piping",
    icon: Wrench,
    title: "Gas Piping & Mechanical Services",
    description:
      "Expert gas piping installations and mechanical system upgrades for commercial and tenant improvement projects.",
    image: gasPipingImg,
    features: [
      "Commercial gas piping installation",
      "Gas line modifications and extensions",
      "Tenant improvement projects",
      "Mechanical system upgrades",
      "Equipment gas connections",
      "Code compliance inspections",
    ],
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Dry Chemical Systems",
    description:
      "Specialized fire suppression systems designed for industrial environments including collision shops, paint booths, and manufacturing facilities.",
    image: dryChemicalImg,
    features: [
      "Dry chemical fire suppression systems",
      "Collision shop fire safety",
      "Paint booth suppression systems",
      "Industrial facility fire protection",
      "System design and engineering",
      "Compliance with NFPA standards",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Fire Suppression, Kitchen Exhaust & HVAC | Desert In Alaska Corp</title>
        <meta
          name="description"
          content="Commercial fire suppression systems, kitchen exhaust installation, HVAC services, gas piping, and industrial fire safety solutions. Licensed contractor serving Metro Detroit."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Comprehensive Commercial Solutions
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
                From fire suppression systems to HVAC maintenance, we provide complete 
                mechanical services for commercial and industrial clients across Metro Detroit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/request-quote">Request a Quote</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="tel:313-931-3070" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="space-y-20">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                      index % 2 === 1 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <div className="relative rounded-2xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 lg:h-96 object-cover"
                        />
                        {service.primary && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                              {service.subtitle}
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/50 to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary text-primary-foreground">
                          <service.icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-muted-foreground text-lg mb-6">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {service.note && (
                        <p className="text-muted-foreground text-sm italic mb-6">
                          {service.note}
                        </p>
                      )}

                      <Button asChild>
                        <Link to="/request-quote" className="flex items-center gap-2">
                          Get a Quote for This Service
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Every facility is unique. Contact us to discuss your specific requirements 
                and get a tailored proposal for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/request-service">Request Service</Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
