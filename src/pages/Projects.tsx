import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import fireSuppressionImg from "@/assets/service-fire-suppression.jpg";
import exhaustImg from "@/assets/service-exhaust.jpg";
import hvacImg from "@/assets/service-hvac.jpg";
import gasPipingImg from "@/assets/service-gas-piping.jpg";
import dryChemicalImg from "@/assets/service-dry-chemical.jpg";
import heroImg from "@/assets/hero-fire-suppression.jpg";

const projects = [
  {
    id: 1,
    title: "Restaurant Fire Suppression System",
    category: "Fire Suppression",
    description: "Complete kitchen fire suppression system installation for a new restaurant location.",
    image: fireSuppressionImg,
  },
  {
    id: 2,
    title: "Commercial Kitchen Hood Installation",
    category: "Kitchen Exhaust",
    description: "Full exhaust hood and ventilation system for a high-volume cafeteria.",
    image: exhaustImg,
  },
  {
    id: 3,
    title: "Industrial HVAC Upgrade",
    category: "HVAC",
    description: "Complete HVAC system replacement for a 50,000 sq ft warehouse facility.",
    image: hvacImg,
  },
  {
    id: 4,
    title: "Gas Piping for Multi-Tenant Space",
    category: "Gas Piping",
    description: "Commercial gas piping installation supporting multiple restaurant tenants.",
    image: gasPipingImg,
  },
  {
    id: 5,
    title: "Auto Body Shop Fire System",
    category: "Industrial Systems",
    description: "Dry chemical fire suppression system for paint booth operations.",
    image: dryChemicalImg,
  },
  {
    id: 6,
    title: "Kitchen Exhaust Retrofit",
    category: "Kitchen Exhaust",
    description: "Exhaust system upgrade and modification for an expanding restaurant kitchen.",
    image: heroImg,
  },
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | Fire Suppression & Commercial Work | Desert In Alaska Corp</title>
        <meta
          name="description"
          content="View our portfolio of fire suppression systems, kitchen exhaust installations, HVAC projects, and industrial fire safety work across Metro Detroit."
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
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Featured Projects
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Explore our portfolio of commercial fire suppression systems, kitchen exhaust 
                installations, and mechanical projects across Metro Detroit.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <div className="group relative rounded-xl overflow-hidden card-hover h-full bg-card border border-border">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contact us today to discuss your fire suppression, kitchen exhaust, 
                or mechanical system needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/request-quote" className="flex items-center gap-2">
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
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

export default Projects;
