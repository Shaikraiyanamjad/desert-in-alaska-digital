import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, FileText } from "lucide-react";

const services = [
  { id: "fire-suppression", label: "Fire Suppression System Installation" },
  { id: "fire-sprinkler", label: "Fire Sprinkler Modifications" },
  { id: "kitchen-exhaust", label: "Kitchen Exhaust Hood Installation" },
  { id: "hvac", label: "HVAC Installation/Replacement" },
  { id: "gas-piping", label: "Gas Piping Installation" },
  { id: "industrial", label: "Industrial Dry Chemical Systems" },
  { id: "fire-extinguisher", label: "Fire Extinguisher Sales/Certification" },
  { id: "emergency-lighting", label: "Emergency Exit Signs/Lighting" },
  { id: "other", label: "Other (please describe)" },
];

const RequestQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Quote Request Submitted",
      description: "We'll prepare a detailed quote and contact you within 24-48 hours.",
    });
    
    setIsSubmitting(false);
    setSelectedServices([]);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Request a Quote | Desert In Alaska Corp</title>
        <meta
          name="description"
          content="Get a free quote for fire suppression systems, kitchen exhaust installation, HVAC, and more. Fast response, competitive pricing."
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
                  <FileText className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                  Request Quote
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Get a Free Quote
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Tell us about your project and we'll provide a detailed, competitive quote 
                within 24-48 hours.
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
                    <Label htmlFor="company">Company / Business Name *</Label>
                    <Input id="company" required placeholder="Your Business Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Project Address *</Label>
                    <Input id="address" required placeholder="Street Address" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required placeholder="Detroit" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="MI" placeholder="MI" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code *</Label>
                      <Input id="zip" required placeholder="48227" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Services Needed *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={(checked) =>
                              handleServiceChange(service.id, checked as boolean)
                            }
                          />
                          <Label htmlFor={service.id} className="font-normal cursor-pointer">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Input id="projectType" placeholder="e.g., New Construction, Renovation, Tenant Improvement" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Desired Timeline</Label>
                    <Input id="timeline" placeholder="e.g., Within 30 days, Q2 2024" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Details *</Label>
                    <Textarea
                      id="description"
                      required
                      placeholder="Please describe your project, including the type of facility, square footage, specific requirements, and any other relevant details..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Quote Request
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

export default RequestQuote;
