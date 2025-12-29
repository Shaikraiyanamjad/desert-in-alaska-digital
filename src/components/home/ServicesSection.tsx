import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Flame, Wind, ThermometerSun, Wrench, Factory, ArrowRight } from "lucide-react";

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
    description:
      "Complete commercial kitchen fire suppression systems, fire sprinkler modifications, fire extinguisher sales and certification, emergency exit signs and lighting systems.",
    image: fireSuppressionImg,
    primary: true,
  },
  {
    id: "exhaust",
    icon: Wind,
    title: "Commercial Kitchen Exhaust",
    description:
      "Professional kitchen exhaust hood installation and servicing. Commercial-grade exhaust and ventilation solutions for restaurants and food service facilities.",
    image: exhaustImg,
  },
  {
    id: "hvac",
    icon: ThermometerSun,
    title: "Heating & Cooling (HVAC)",
    description:
      "Residential and light commercial HVAC services including installation, repair, replacement, and preventive maintenance programs.",
    image: hvacImg,
  },
  {
    id: "gas-piping",
    icon: Wrench,
    title: "Gas Piping & Mechanical",
    description:
      "Commercial gas piping installations and modifications, tenant improvements, and comprehensive mechanical system upgrades.",
    image: gasPipingImg,
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial Dry Chemical Systems",
    description:
      "Specialized dry chemical fire suppression systems for collision shops, paint booths, and industrial facilities requiring advanced fire safety.",
    image: dryChemicalImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Comprehensive Commercial Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From fire suppression systems to HVAC solutions, we provide end-to-end 
            mechanical services for commercial and industrial clients across Metro Detroit.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={index * 0.1}
              className={service.primary ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <div
                className={`group relative h-full rounded-xl overflow-hidden card-hover ${
                  service.primary
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border"
                }`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 ${
                      service.primary
                        ? "bg-primary/60"
                        : "bg-gradient-to-t from-card to-transparent"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`p-3 rounded-lg ${
                        service.primary
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl font-heading font-bold mb-3 ${
                      service.primary ? "" : "text-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mb-4 ${
                      service.primary
                        ? "text-primary-foreground/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {service.description}
                  </p>
                  <Link
                    to={`/services#${service.id}`}
                    className={`inline-flex items-center gap-2 font-semibold transition-colors ${
                      service.primary
                        ? "text-accent-foreground hover:text-accent-foreground/80"
                        : "text-primary hover:text-primary-light"
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
