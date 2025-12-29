import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "313-931-3070",
    href: "tel:313-931-3070",
    description: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    value: "desertinalaska@outlook.com",
    href: "mailto:desertinalaska@outlook.com",
    description: "Email us anytime",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "11402 Schaefer Hwy, Detroit, MI 48227",
    href: "https://maps.google.com/?q=11402+Schaefer+Hwy+Detroit+MI+48227",
    description: "Visit our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Sat: 8:00 AM – 6:00 PM",
    description: "Available for scheduled appointments",
  },
];

const inquiryTypes = [
  {
    title: "Request Service",
    description: "Need maintenance, repairs, or emergency service for your existing systems.",
    link: "/request-service",
  },
  {
    title: "Request Quote",
    description: "Get a detailed quote for a new installation or system upgrade.",
    link: "/request-quote",
  },
  {
    title: "Employment Inquiry",
    description: "Interested in joining our team? We're always looking for skilled professionals.",
    link: "/employment",
  },
  {
    title: "General Inquiry",
    description: "Have questions or need information about our services.",
    link: "/inquiry",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Desert In Alaska Corp | Detroit, MI</title>
        <meta
          name="description"
          content="Contact Desert In Alaska Corp for fire suppression, kitchen exhaust, and HVAC services. Located in Detroit, MI. Call 313-931-3070."
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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Ready to discuss your project or need service? We're here to help. 
                Reach out through any of the channels below.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <AnimatedSection key={method.title} delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 h-full border border-border card-hover text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary hover:text-primary-light font-semibold block mb-2 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="font-semibold text-foreground block mb-2">
                        {method.value}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Inquiry Types */}
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How Can We Help?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose the type of inquiry that best matches your needs.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {inquiryTypes.map((type, index) => (
                <AnimatedSection key={type.title} delay={index * 0.1}>
                  <Link
                    to={type.link}
                    className="group flex items-start gap-4 bg-card rounded-xl p-6 border border-border card-hover"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Find Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Visit our office in Detroit, MI
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.8!2d-83.1776!3d42.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ce3e0e8f7d9d%3A0x0!2s11402%20Schaefer%20Hwy%2C%20Detroit%2C%20MI%2048227!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Desert In Alaska Corp Location"
                  className="grayscale contrast-125"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
