import { Shield, Star, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Thorough Deep Clean",
    description: "Comprehensive cleaning of every surface",
    icon: Sparkles,
  },
  {
    title: "Experienced Staff",
    description: "Specialized in deep cleaning services",
    icon: Star,
  },
  {
    title: "Extended Service",
    description: "4-6 hours of detailed cleaning",
    icon: Clock,
  },
  {
    title: "Guaranteed Results",
    description: "100% satisfaction guarantee",
    icon: Shield,
  },
];

const services = [
  "Inside cabinet cleaning",
  "Deep appliance cleaning",
  "Wall and ceiling dusting",
  "Detailed floor cleaning",
  "Behind furniture cleaning",
  "Light fixture cleaning",
  "Window track cleaning",
  "Baseboard deep cleaning",
  "Door frame cleaning",
  "Switch plate sanitization",
  "Vent cleaning",
  "Deep grout cleaning",
];

export default function DeepCleaningPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80"
          alt="Deep cleaning service"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-4">Deep Cleaning Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              A thorough, detailed clean for those special occasions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
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
          <div>
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4">
              <p className="text-lg font-semibold">
                Starting from $200 per session
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

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Deep Cleaning</h3>
            <div className="space-y-4">
              <p>
                Our deep cleaning service goes beyond regular cleaning to tackle those hard-to-reach areas and stubborn dirt. Perfect for spring cleaning, moving, or whenever your space needs extra attention.
              </p>
              <p>
                What makes our deep cleaning special:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Specialized cleaning equipment</li>
                <li>Professional-grade cleaning solutions</li>
                <li>Experienced deep cleaning specialists</li>
                <li>Attention to every detail</li>
              </ul>
              <p>
                We take extra time to ensure every corner of your space receives thorough attention, leaving your home remarkably clean and fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}