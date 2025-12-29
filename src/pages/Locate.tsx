import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";

const Locate = () => {
  return (
    <>
      <Helmet>
        <title>Locate Us | Desert In Alaska Corp | Detroit, MI</title>
        <meta
          name="description"
          content="Find Desert In Alaska Corp at 11402 Schaefer Hwy, Detroit, MI 48227. Get directions, hours, and contact information."
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
                  <Navigation className="w-6 h-6 text-accent-foreground" />
                </div>
                <span className="text-accent-foreground font-semibold text-sm uppercase tracking-wider">
                  Find Us
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Our Location
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Visit our office in Detroit, MI for in-person consultations or to discuss your project.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Location Info */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Cards */}
              <AnimatedSection className="lg:col-span-1 space-y-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        11402 Schaefer Hwy<br />
                        Detroit, MI 48227
                      </p>
                      <a
                        href="https://maps.google.com/?q=11402+Schaefer+Hwy+Detroit+MI+48227"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light font-semibold text-sm mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Phone</h3>
                      <a
                        href="tel:313-931-3070"
                        className="text-primary hover:text-primary-light font-semibold"
                      >
                        313-931-3070
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:desertinalaska@outlook.com"
                        className="text-primary hover:text-primary-light font-semibold break-all"
                      >
                        desertinalaska@outlook.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday – Saturday<br />
                        8:00 AM – 6:00 PM
                      </p>
                      <p className="text-muted-foreground text-sm mt-2">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Map */}
              <AnimatedSection delay={0.2} className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.8!2d-83.1776!3d42.3584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ce3e0e8f7d9d%3A0x0!2s11402%20Schaefer%20Hwy%2C%20Detroit%2C%20MI%2048227!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "500px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Desert In Alaska Corp Location"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Serving Metro Detroit
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We provide fire suppression, kitchen exhaust, HVAC, and mechanical services 
                throughout the greater Detroit metropolitan area, including Wayne, Oakland, 
                and Macomb counties.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Detroit",
                  "Dearborn",
                  "Warren",
                  "Sterling Heights",
                  "Southfield",
                  "Troy",
                  "Ann Arbor",
                  "Livonia",
                  "Farmington Hills",
                  "Pontiac",
                ].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 bg-card rounded-full text-foreground font-medium border border-border"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Locate;
