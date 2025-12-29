import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Briefcase } from "lucide-react";

const positions = [
  "HVAC Technician",
  "Fire Suppression Technician",
  "Kitchen Exhaust Installer",
  "Gas Piping Specialist",
  "Service Technician",
  "Apprentice/Helper",
  "Office/Administrative",
  "Other",
];

const Employment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest! We'll review your application and contact you if there's a fit.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Employment Inquiry | Careers at Desert In Alaska Corp</title>
        <meta
          name="description"
          content="Join our team of skilled HVAC, fire suppression, and kitchen exhaust professionals. Submit your employment inquiry today."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
          <div className="container-custom relative z-10">
            <AnimatedSection className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-accent/20">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                  Careers
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Join Our Team
              </h1>
              <p className="text-lg text-primary-foreground/90">
                We're always looking for skilled professionals to join our growing team. 
                Submit your information below and tell us about yourself.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" required placeholder="(313) 555-0123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="City, State" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position">Position of Interest *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {positions.map((position) => (
                          <SelectItem key={position} value={position}>
                            {position}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certifications">Certifications / Licenses</Label>
                    <Input
                      id="certifications"
                      placeholder="e.g., EPA 608, NFPA certifications, state licenses"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability to Start</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="When can you start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediately</SelectItem>
                        <SelectItem value="2-weeks">2 weeks notice</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="about">Tell Us About Yourself *</Label>
                    <Textarea
                      id="about"
                      required
                      placeholder="Describe your experience, skills, and why you're interested in working with us..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Employment;
