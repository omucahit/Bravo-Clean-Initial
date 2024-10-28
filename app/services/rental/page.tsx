import { Shield, Star, Sparkles, Clock, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Quick Turnaround",
    description: "Fast, efficient service between guests",
    icon: Clock,
  },
  {
    title: "Detailed Checklist",
    description: "Property-specific cleaning protocols",
    icon: CheckCircle,
  },
  {
    title: "Quality Assurance",
    description: "Maintain high cleanliness ratings",
    icon: Star,
  },
  {
    title: "Full Service",
    description: "Cleaning, laundry, and restocking",
    icon: Home,
  },
];

const standardServices = [
  "Complete property cleaning",
  "Bedding change and laundry service",
  "Bathroom deep cleaning and restocking",
  "Kitchen cleaning and organization",
  "Floor cleaning and vacuuming",
  "Dusting and surface sanitization",
  "Trash removal and replacement",
  "Property inspection and reporting",
];

const additionalServices = [
  "Change all bedding to health department code standards",
  "On-site or off-site laundry service",
  "Damage and cleanliness documentation",
  "Fridge inspection and cleaning",
  "Supply inventory and restocking",
  "Exterior property check",
  "Dish organization and storage",
  "Guest welcome package setup",
];

export default function RentalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80"
          alt="Rental property cleaning"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-4">Short-Term Rental Cleaning</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Professional cleaning services for your rental property
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Expert Rental Property Cleaning</h2>
          <p className="text-lg text-gray-600 mb-4">
            At Bravo Clean, we understand the unique challenges of managing short-term rentals. 
            Our specialized cleaning service ensures your property maintains high cleanliness 
            ratings and guest satisfaction.
          </p>
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-lg font-semibold text-primary">
              New property owners get 10% off their first booking!
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Rental Cleaning</h3>
            <div className="space-y-4">
              <p>
                With the growing popularity of short-term rentals in New Jersey, maintaining high 
                cleanliness standards is crucial for your property's success. Our professional 
                team understands the importance of quick turnarounds and thorough cleaning to 
                ensure consistent 5-star reviews.
              </p>
              <p>
                We create customized cleaning checklists for each property, ensuring every 
                detail is addressed according to your specific needs. Our comprehensive 
                communication system keeps you informed about your property's condition 
                and any restocking needs.
              </p>
              <p>
                Trust Bravo Clean to maintain your property's cleanliness and reputation 
                while you focus on growing your rental business.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Standard Services</h2>
            <ul className="space-y-4 mb-8">
              {standardServices.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold mb-6">Additional Services</h2>
            <ul className="space-y-4">
              {additionalServices.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-4">
              <p className="text-lg font-semibold">
                Starting from $150 per turnover
              </p>
              <p className="text-primary font-medium">
                New customers get 10% off their first booking!
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Link href="/book">
                <Button size="lg">Book Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Our Commitment to Your Success</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Quality Assurance</h4>
              <p className="text-gray-600">
                We understand that cleanliness ratings directly impact your booking success. 
                Our thorough cleaning protocols and quality checks ensure consistently high 
                standards that keep your guests coming back.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Flexible Solutions</h4>
              <p className="text-gray-600">
                Whether you need same-day turnovers, supply restocking, or special 
                arrangements for guest welcome packages, we adapt our services to 
                meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}