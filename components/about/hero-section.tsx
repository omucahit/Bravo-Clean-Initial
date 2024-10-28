import { Award, Shield, ThumbsUp } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative bg-primary text-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Your Trusted Cleaning Partner
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto">
            Since 2010, we've been delivering exceptional cleaning services with a focus on quality, 
            reliability, and customer satisfaction. Our team of professionals is dedicated to making 
            your space spotless and healthy.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { icon: Shield, title: "Insured & Bonded", desc: "Full coverage for your peace of mind" },
            { icon: Award, title: "Certified Team", desc: "Professionally trained cleaners" },
            { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "100% happiness guaranteed" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-100">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}