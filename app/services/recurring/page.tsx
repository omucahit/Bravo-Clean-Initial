import { Shield, Star, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Consistent Service",
    description: "Same cleaning team each visit",
    icon: Star,
  },
  {
    title: "Flexible Schedule",
    description: "Weekly, bi-weekly, or monthly",
    icon: Clock,
  },
  {
    title: "Custom Cleaning",
    description: "Tailored to your needs",
    icon: Sparkles,
  },
  {
    title: "Reliable Teams",
    description: "Bonded and insured staff",
    icon: Shield,
  },
];

const services = [
  "Regular maintenance cleaning",
  "Kitchen and bathroom cleaning",
  "Dusting and vacuuming",
  "Floor cleaning",
  "Surface sanitization",
  "Trash removal",
  "Bed making (upon request)",
  "Interior window cleaning",
  "Priority scheduling",
  "Customized cleaning checklist",
];

export default function RecurringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
          alt="Recurring cleaning service"
          fill
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-4">Recurring Cleaning Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Regular cleaning services on your schedule
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
                Starting from $100 per visit
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
            <h3 className="text-2xl font-bold mb-6">Why Choose Our Recurring Service</h3>
            <div className="space-y-4">
              <p>
                Our recurring cleaning service provides consistent, reliable cleaning on a schedule that works for you. Whether you prefer weekly, bi-weekly, or monthly visits, we'll keep your space consistently clean and fresh.
              </p>
              <p>
                Benefits of recurring service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Consistent cleaning team</li>
                <li>Priority scheduling</li>
                <li>Customized cleaning plans</li>
                <li>Better long-term results</li>
                <li>Competitive pricing</li>
              </ul>
              <p>
                Regular cleaning maintains a healthier environment and prevents dirt and grime buildup, making each cleaning more effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}