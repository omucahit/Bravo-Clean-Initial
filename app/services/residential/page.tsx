import { Shield, Star, Sparkles, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const checklistSections = {
  bathrooms: {
    title: "In all bathrooms, these tasks will be completed",
    items: [
      "Tub & shower area scrubbed & washed",
      "Sink scrubbed & washed",
      "Toilet scrubbed & washed (including base & behind)",
      "All points of contact cleaned (light switches, door knobs)",
      "Mirrors & outside of medicine cabinet cleaned",
      "Soap dish & toothbrush holder cleaned",
      "Molding & corners wiped clean",
      "Door molding dusted",
      "Vanity top cleaned – items removed & replaced",
      "Towel bar & toilet paper holder wiped clean",
      "Exterior of light fixtures dusted, if reachable",
      "Baseboards dusted & wiped clean",
      "Floors vacuumed & washed",
      "Garbage emptied – exterior of can wiped down, bag replaced",
      "Overall room appearance neat & tidy"
    ]
  },
  hallways: {
    title: "In all hallways & common areas, these tasks will be completed",
    items: [
      "Furniture, mirrors, frames & accessories dusted & cleaned",
      "All points of contact cleaned (light switches, door knobs)",
      "Window sills wiped clean",
      "Ceiling fans dusted as needed, if reachable",
      "Molding & corners wiped clean",
      "Door molding dusted",
      "Baseboards dusted & wiped clean",
      "Floors vacuumed & washed",
      "Overall room appearance neat & tidy"
    ]
  },
  kitchen: {
    title: "In the kitchen and any bar areas, these tasks will be completed",
    items: [
      "Counters cleaned – all items removed & replaced, if possible (uncluttered)",
      "Cupboard fronts spot cleaned",
      "Faucet and sink cleaned & polished if dishes are not present",
      "Backsplash cleaned and splatter free",
      "Kitchen table cleaned & organized",
      "Furniture, mirrors, frames & accessories dusted & cleaned",
      "Outside of fridge cleaned",
      "Outside of stove cleaned",
      "Ceiling fans dusted as needed, if reachable",
      "Outside of dishwasher cleaned",
      "Exterior of all appliances on counters wiped clean, interior of microwave cleaned",
      "All points of contact cleaned (light switches, door knobs)",
      "Molding & corners wiped clean",
      "Door molding dusted",
      "Window sills wiped clean",
      "Baseboards dusted & wiped clean",
      "Floors vacuumed & washed",
      "Garbage emptied, exterior of can wiped down, bag replaced",
      "Overall room appearance neat & tidy"
    ]
  },
  bedrooms: {
    title: "In all bedrooms, these tasks will be completed",
    items: [
      "Bed made & changed (if fresh linens are provided)",
      "Furniture, mirrors, frames & accessories dusted & cleaned",
      "All points of contact cleaned (light switches, door knobs)",
      "Window sills wiped clean",
      "Molding & corners wiped clean",
      "Door molding dusted",
      "Baseboards dusted & wiped clean",
      "Ceiling fans dusted as needed, if reachable",
      "Floors vacuumed & washed (walk-in closet floors vacuumed, if clear)",
      "Garbage emptied, exterior of can wiped down, bag replaced",
      "Overall room appearance neat & tidy"
    ]
  },
  otherRooms: {
    title: "In all other rooms, these tasks will be completed",
    items: [
      "Couch vacuumed & wiped clean (as required)",
      "Tabletops/desks dusted & wiped clean",
      "Laundry en suite wiped & floor washed",
      "Furniture, mirrors, frames & accessories dusted & cleaned",
      "All points of contact cleaned (light switches, door knobs)",
      "Ceiling fans dusted as needed, if reachable",
      "Window sills wiped clean",
      "Molding & corners wiped clean",
      "Door molding dusted",
      "Baseboards dusted & wiped clean",
      "Floors vacuumed & washed",
      "Garbage emptied, exterior of can wiped down, bag replaced",
      "Overall room appearance neat & tidy"
    ]
  },
  addOns: {
    title: "Add-On Services (please request prior to appointment)",
    items: [
      "Blinds dusted, if sturdy",
      "Inside of fridge cleaned (shelves & drawers, freezer cleaned but not defrosted)",
      "Inside of stove cleaned (stove door, interior racks, & warming drawer)",
      "Kitchen cupboards cleaned inside & out",
      "Clean & organize linen closet",
      "Clean & organize front hall closet",
      "Clean & organize bedroom closet",
      "Wash, dry, sort, & fold laundry (2 load maximum per visit)"
    ]
  },
  safetyChecks: {
    title: "Final Safety Checks",
    items: [
      "Stove/oven is off",
      "Door locked, if required",
      "Pets are safe",
      "Windows closed/left as found",
      "Toilets not running",
      "All Faucets are off",
      "HVAC Set Accordingly"
    ]
  }
};

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80"
            alt="Clean and organized home interior"
            fill
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Transform Your Space, Reclaim Your Time
              </h1>
              <p className="text-xl mb-8">
                Let Bravo Clean handle the cleaning while you focus on what matters most.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
                <p className="text-lg">
                  Picture your typical week: juggling work deadlines, family commitments, and endless errands. 
                  The last thing you need is to spend your precious weekends deep cleaning your home.
                </p>
                <p className="text-lg font-semibold">
                  We're here to change that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-lg text-gray-600 mb-6">
                At Bravo Clean, we understand that a clean home is more than just appearances – it's about creating a 
                sanctuary where you can truly relax and recharge. Our professional cleaning service is designed to give 
                you back your valuable time while ensuring your home receives the meticulous care it deserves.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                Our team of dedicated professionals brings more than just cleaning expertise – we bring peace of mind. 
                Every member of our staff is carefully selected, thoroughly trained, and shares our core values of 
                integrity, reliability, and attention to detail. We take pride in treating each home as if it were our own.
              </p>

              <p className="text-lg text-gray-600">
                What sets us apart isn't just our thorough cleaning process – it's our commitment to consistency 
                and personalization. We assign the same cleaning team to your home whenever possible, and we take 
                detailed notes about your preferences to ensure every visit meets your expectations.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <Link href="/book">
                <Button size="lg">Book Your First Clean</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cleaning Checklist */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Detailed Cleaning Checklist</h2>
            <p className="mt-4 text-lg text-gray-600">
              Every visit includes our comprehensive cleaning service. Here's exactly what you can expect:
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(checklistSections).map(([key, section]) => (
              <div key={key} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold mb-6">
              Ready to experience the difference of professional cleaning?
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/book">
                <Button size="lg">Book Now</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}