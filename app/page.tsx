import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Leaf, Clock, Award, CheckCircle, Percent } from "lucide-react";

const features = [
  {
    name: "Professional Staff",
    description: "Trained and vetted cleaning professionals",
    icon: Star,
  },
  {
    name: "Insured & Bonded",
    description: "Your property is protected",
    icon: Shield,
  },
  {
    name: "Eco-Friendly",
    description: "Green cleaning products",
    icon: Leaf,
  },
  {
    name: "Flexible Scheduling",
    description: "Book at your convenience",
    icon: Clock,
  },
  {
    name: "Satisfaction Guaranteed",
    description: "100% satisfaction or money back",
    icon: Award,
  },
  {
    name: "New Customer Discount",
    description: "10% off your first booking",
    icon: Percent,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
          alt="Beautiful clean family home interior"
          fill
          className="object-cover brightness-[0.65]"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-lg font-semibold backdrop-blur-sm">
              10% OFF Your First Booking!
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Creating Happy, Healthy Homes
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto">
            Let us take care of your home with our family-friendly, eco-conscious cleaning services. 
            Your family's comfort is our priority.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/book">
              <Button size="lg" className="text-lg">
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a spotless space
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver exceptional cleaning services with attention to detail and commitment to quality.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for a Cleaner Space?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Book your cleaning service today and get 10% off your first booking!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/book">
                <Button size="lg" variant="outline">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}