import Link from "next/link";
import { Sparkles } from "lucide-react";

const navigation = {
  services: [
    { name: "Residential Cleaning", href: "/services#residential" },
    { name: "Commercial Cleaning", href: "/services#commercial" },
    { name: "Deep Cleaning", href: "/services#deep-cleaning" },
    { name: "Move In/Out", href: "/services#move" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  contact: {
    address: "62 Reservoir Rd, Parsippany, NJ 07054",
    phone: "(908) 395-7158",
    email: "contact@bravo-cleaning.com",
    hours: "Mon-Fri: 8am-6pm | Sat-Sun: 9am-4pm"
  }
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold">Bravo Clean</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Making your space sparkle with professional, eco-friendly cleaning services.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">{navigation.contact.address}</p>
              <p className="text-sm text-gray-600">{navigation.contact.phone}</p>
              <p className="text-sm text-gray-600">{navigation.contact.email}</p>
              <p className="text-sm text-gray-600">{navigation.contact.hours}</p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Bravo Clean. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}