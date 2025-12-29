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
import { CheckCircle, Wrench } from "lucide-react";

const serviceTypes = [
  "Fire Suppression System Service",
  "Kitchen Exhaust Maintenance",
  "HVAC Repair",
  "HVAC Maintenance",
  "Gas Piping Service",
  "Fire Extinguisher Service",
  "Emergency Lighting",
  "Other",
];

const RequestService = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Service Request Submitted",
      description: "We'll contact you shortly to schedule your service.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Request Service | Desert In Alaska Corp</title>
        <meta
          name="description"
          content="Request maintenance, repairs, or emergency service for your fire suppression, kitchen exhaust, or HVAC systems. Fast response times."
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
                  <Wrench className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                  Request Service
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Schedule a Service Call
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Need maintenance, repairs, or emergency service? Fill out the form below 
                and we'll get back to you promptly.
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
                    <Label htmlFor="company">Company / Business Name</Label>
                    <Input id="company" placeholder="Your Business Name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Service Address *</Label>
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

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency - ASAP</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 24 hours</SelectItem>
                        <SelectItem value="standard">Standard - Within a week</SelectItem>
                        <SelectItem value="scheduled">Scheduled Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Describe the Issue *</Label>
                    <Textarea
                      id="description"
                      required
                      placeholder="Please describe the service needed, any issues you're experiencing, and any relevant details..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Service Request
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

export default RequestService;
