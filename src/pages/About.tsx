import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Users, Target, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every project we undertake prioritizes the safety of your employees, customers, and property through code-compliant installations.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of workmanship, using quality materials and proven installation methods.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We build lasting relationships with our clients, becoming trusted partners in maintaining their facilities.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "When you need us, we're there. Our team responds quickly and delivers on our commitments every time.",
  },
];

const certifications = [
  "State Licensed Mechanical Contractor",
  "Fire Suppression System Certified",
  "Kitchen Exhaust System Specialists",
  "NFPA Code Compliant",
  "Commercial Gas Piping Licensed",
  "Industrial Fire Safety Certified",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Desert In Alaska Corp | Trusted Since 1997</title>
        <meta
          name="description"
          content="Learn about Desert In Alaska Corp's 25+ years of experience providing fire suppression, kitchen exhaust, and HVAC services to Metro Detroit businesses."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 lg:py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10">
            <AnimatedSection className="max-w-3xl">
              <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider mb-4 block">
                About Our Company
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Protecting Businesses Since 1997
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                From humble HVAC beginnings to becoming Metro Detroit's trusted commercial 
                fire suppression and mechanical contractor, our journey reflects our 
                commitment to excellence and safety.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  A Legacy of Excellence
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Desert In Alaska Corp was founded in 1997 with a simple mission: provide 
                  reliable HVAC services to Metro Detroit homeowners and businesses. Over the 
                  years, we recognized a growing need for comprehensive commercial mechanical 
                  services, particularly in the restaurant and industrial sectors.
                </p>
                <p className="text-muted-foreground mb-6">
                  This led to our strategic expansion into commercial fire suppression systems, 
                  kitchen exhaust installations, and life safety equipment. Today, we're proud 
                  to be a full-service mechanical contractor trusted by restaurants, industrial 
                  facilities, and commercial properties throughout the region.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our team combines decades of experience with continuous training to stay 
                  current with the latest codes, technologies, and best practices. Whether 
                  you're opening a new restaurant, upgrading an industrial facility, or need 
                  reliable HVAC service, Desert In Alaska Corp is your trusted partner.
                </p>

                {/* Certifications */}
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4">
                    Licenses & Certifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert) => (
                      <div key={cert} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <div className="relative">
                  <div className="bg-primary rounded-2xl p-8 md:p-10">
                    <Heart className="w-12 h-12 text-accent-foreground mb-6" />
                    <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                      Our Mission
                    </h3>
                    <p className="text-primary-foreground/90 text-lg mb-6">
                      To protect and serve commercial and industrial clients with 
                      world-class fire suppression, exhaust, and mechanical systems 
                      that meet the highest standards of safety and code compliance.
                    </p>
                    <div className="border-t border-primary-foreground/20 pt-6">
                      <h4 className="font-semibold text-primary-foreground mb-2">
                        Also Operating As
                      </h4>
                      <p className="text-primary-foreground/80">
                        NeoService – Mechanical Solutions for the Modern Business
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-xl -z-10" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg">
                These principles guide everything we do, from how we treat our clients 
                to how we approach every installation and service call.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 h-full border border-border card-hover">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-foreground mb-6">
                Partner With Us
              </h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Ready to work with a contractor you can trust? Let's discuss your 
                commercial fire suppression, exhaust, or mechanical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" asChild>
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/projects">View Our Work</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
