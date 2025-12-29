import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Clock, value: "25+", label: "Years of Experience" },
  { icon: Users, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "100%", label: "Code Compliant" },
];

const highlights = [
  "Licensed and certified commercial contractor",
  "Expert fire suppression system installations",
  "Commercial kitchen exhaust specialists",
  "Comprehensive life safety solutions",
  "Metro Detroit's trusted partner since 1997",
  "Industrial and commercial focus",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimatedSection direction="left">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-2 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Trusted Commercial Contractor Since 1997
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Desert In Alaska Corp (NeoService) has been serving Metro Detroit for over 
              25 years. What began as an HVAC service company has grown into a comprehensive 
              commercial mechanical contractor specializing in fire suppression, kitchen 
              exhaust systems, and life safety solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              Our expansion into commercial fire suppression and life safety systems reflects 
              our commitment to providing complete mechanical solutions for restaurants, 
              industrial facilities, and commercial properties. We're licensed, certified, 
              and dedicated to code compliance on every project.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-primary rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-6 ${
                      index !== stats.length - 1
                        ? "border-b border-primary-foreground/20 pb-8"
                        : ""
                    }`}
                  >
                    <div className="p-4 rounded-xl bg-accent/20">
                      <stat.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                        {stat.value}
                      </div>
                      <div className="text-primary-foreground/80 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
