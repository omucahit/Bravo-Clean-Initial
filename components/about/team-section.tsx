import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles } from "lucide-react";

const team = [
  {
    name: "Omer",
    role: "Co-Founder & Operations Director",
    icon: Brain,
    bio: "As a mechanical engineer by training, Omer brings his passion for systems and efficiency to Bravo Clean. His dedication to creating streamlined processes and data-driven operations ensures our customers receive consistent, high-quality service every time. When he's not optimizing our cleaning operations, you'll find him analyzing data to improve customer experience."
  },
  {
    name: "Seyda",
    role: "Co-Founder & Cleaning Solutions Specialist",
    icon: Sparkles,
    bio: "With a background in science education and 4 years of professional cleaning experience, Seyda brings a unique perspective to cleaning solutions. Her scientific approach to tackling tough cleaning challenges has helped develop our highly effective cleaning protocols. She combines her teaching experience with practical knowledge to train our team in the most effective cleaning techniques."
  },
  {
    name: "Ceyda",
    role: "Co-Founder & Client Experience Director",
    icon: Heart,
    bio: "With 5 years of professional cleaning experience and being a dedicated mother, Ceyda understands firsthand the importance of maintaining a clean, healthy home. As a co-founder, she leads our client experience initiatives, ensuring every service meets our high standards. Her passion for making others' lives easier has shaped our customer-first approach and attention to detail in every home we service."
  }
];

export function TeamSection() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The dedicated professionals bringing expertise, care, and passion to every cleaning service
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <member.icon className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary mt-1">{member.role}</p>
                </div>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">Our Collective Experience</h3>
            <p className="text-lg text-gray-600">
              Together, our team brings over a decade of combined experience in professional cleaning, 
              business operations, and customer service. We're more than just a cleaning service - 
              we're a family-oriented team dedicated to making your life easier and your space cleaner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}