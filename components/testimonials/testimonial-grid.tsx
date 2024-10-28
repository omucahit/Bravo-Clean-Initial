import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Jennifer Smith",
    role: "Homeowner",
    content: "The team did an amazing job with our deep house cleaning. They were thorough, professional, and paid attention to every detail. Our home has never looked better!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=300",
    afterImage: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=400&h=300"
  },
  {
    name: "David Wilson",
    role: "Office Manager",
    content: "We've been using their commercial cleaning services for our office space for over a year now. The consistency and quality of their work is outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Maria Rodriguez",
    role: "Restaurant Owner",
    content: "Their deep cleaning service transformed our restaurant kitchen. The before and after difference is incredible. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    beforeImage: "https://images.unsplash.com/photo-1513640127641-49ba81f8305c?auto=format&fit=crop&q=80&w=400&h=300",
    afterImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=400&h=300"
  }
];

export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}