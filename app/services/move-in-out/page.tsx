import { Shield, Star, Sparkles, Clock, CheckCircle, Package, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Complete Clean",
    description: "Every surface cleaned and sanitized",
    icon: Sparkles,
  },
  {
    title: "Move-Ready",
    description: "Perfect for property transitions",
    icon: Home,
  },
  {
    title: "Stress-Free",
    description: "We handle everything",
    icon: Package,
  },
  {
    title: "Guaranteed",
    description: "100% satisfaction guarantee",
    icon: CheckCircle,
  },
];

const services = [
  "Complete property cleaning",
  "Deep cabinet cleaning",
  "Appliance deep cleaning",
  "Window cleaning (interior)",
  "Baseboard detailed cleaning",
  "Light fixture cleaning",
  "Wall spot cleaning",
  "Door and frame cleaning",
  "Switch plate sanitization",
  "Vent cleaning",
  "Floor deep cleaning",
  "Closet cleaning",
];

export default function MoveInOutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
          alt="Move in/out cleaning"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-4">Move In/Out Cleaning</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Let us handle the cleaning while you focus on your move
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Moving Made Easier</h2>
          <p className="text-lg text-gray-600 mb-4">
            Moving is challenging enough without having to worry about cleaning. At Bravo Clean, we understand 
            the stress of relocating and have perfected our move in/out cleaning service to give you one less 
            thing to worry about during this busy time.
          </p>
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-lg font-semibold text-primary">
              New customers get 10% off their first booking!
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
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Move In/Out Cleaning</h3>
            <div className="space-y-4">
              <p>
                The excitement of moving to a new home shouldn't be overshadowed by the daunting task of cleaning. 
                Whether you're a homeowner preparing to sell, a tenant looking to get your security deposit back, 
                or someone wanting to start fresh in your new space, our professional team is here to help.
              </p>
              <p>
                We bring everything needed to transform your space:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional-grade cleaning equipment</li>
                <li>Eco-friendly cleaning solutions</li>
                <li>Experienced cleaning specialists</li>
                <li>Comprehensive cleaning checklist</li>
                <li>Attention to every detail</li>
              </ul>
              <p>
                Our service is backed by our 100% Satisfaction Guarantee. If you're not completely satisfied, 
                we'll return to address any areas of concern at no additional cost.
              </p>
            </div>
          </div>

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
                Starting from $250 per service
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
          <h3 className="text-2xl font-bold mb-6">Our Commitment to You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Peace of Mind</h4>
              <p className="text-gray-600">
                As a fully insured and bonded cleaning service, we provide complete peace of mind. 
                Our professional team treats every property with the utmost care and respect, 
                ensuring your move is as smooth as possible.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quality Guaranteed</h4>
              <p className="text-gray-600">
                Our reputation is built on delivering exceptional results. We understand the 
                importance of meeting property management and real estate standards, and we ensure 
                every cleaning exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}