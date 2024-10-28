import { Heart, Users, Sparkles, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "We prioritize your needs and satisfaction above all else, ensuring a personalized experience."
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "Our professional team is thoroughly trained and committed to delivering outstanding results."
  },
  {
    icon: Sparkles,
    title: "Quality Service",
    description: "We maintain the highest standards of cleaning and service quality in every project."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We use environmentally responsible cleaning products and sustainable practices."
  }
];

export function ValuesSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}