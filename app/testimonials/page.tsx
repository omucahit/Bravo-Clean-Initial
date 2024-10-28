import { TestimonialGrid } from "@/components/testimonials/testimonial-grid";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Client Testimonials
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
          </p>
          <div className="mt-6">
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
              Coming Soon - We're collecting reviews from our amazing customers!
            </span>
          </div>
        </div>
        <div className="text-center text-gray-600">
          <p>We're currently gathering testimonials from our valued customers.</p>
          <p>Check back soon to read about their experiences!</p>
        </div>
      </div>
    </main>
  );
}