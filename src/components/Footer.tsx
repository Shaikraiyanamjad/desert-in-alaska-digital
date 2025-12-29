import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "Fire Suppression Systems", path: "/services#fire-suppression" },
    { name: "Commercial Kitchen Exhaust", path: "/services#exhaust" },
    { name: "HVAC Services", path: "/services#hvac" },
    { name: "Gas Piping", path: "/services#gas-piping" },
    { name: "Industrial Systems", path: "/services#industrial" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Locate Us", path: "/locate" },
  ],
  inquiries: [
    { name: "Request Service", path: "/request-service" },
    { name: "Request Quote", path: "/request-quote" },
    { name: "Employment Inquiry", path: "/employment" },
    { name: "General Inquiry", path: "/inquiry" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Desert In Alaska Corp" className="h-16 mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Serving Metro Detroit since 1997 with professional fire suppression, 
              commercial kitchen exhaust systems, HVAC services, and comprehensive 
              life safety solutions.
            </p>
            <div className="space-y-3">
              <a
                href="tel:313-931-3070"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent-foreground transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                313-931-3070
              </a>
              <a
                href="mailto:desertinalaska@outlook.com"
                className="flex items-center gap-3 text-primary-foreground/90 hover:text-accent-foreground transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                desertinalaska@outlook.com
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>11402 Schaefer Hwy, Detroit, MI 48227</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <Clock className="w-5 h-5 text-accent" />
                Mon – Sat: 8:00 AM – 6:00 PM
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              {footerLinks.inquiries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© {currentYear} Desert In Alaska Corp. All rights reserved.</p>
          <p>Licensed & Certified Commercial Contractor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
