import { Scale } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Services</h2>
            <p className="text-gray-600">
              Bravo Clean provides residential and commercial cleaning services. By booking our 
              services, you agree to provide accurate information and reasonable access to the 
              areas to be cleaned.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Booking and Cancellation</h2>
            <p className="text-gray-600">
              Bookings can be made online or by phone. We require 24-hour notice for cancellations 
              to avoid a cancellation fee. Repeated late cancellations may result in the requirement 
              of a deposit for future bookings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <p className="text-gray-600">
              Payment is due at the time of service. We accept major credit cards and electronic 
              payments. Recurring service clients may be eligible for post-service billing with 
              approved credit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Service Guarantee</h2>
            <p className="text-gray-600">
              We offer a 100% satisfaction guarantee. If you're not satisfied with our service, 
              contact us within 24 hours and we'll return to address any areas of concern at no 
              additional cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Property Access and Safety</h2>
            <p className="text-gray-600">
              Clients must provide safe and reasonable access to the property. We reserve the right 
              to refuse service if working conditions are unsafe or unsanitary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Damage Claims</h2>
            <p className="text-gray-600">
              Any claims for damage must be reported within 24 hours of service. We maintain 
              comprehensive insurance coverage for your protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these terms, please contact us at:
              <br />
              Email: contact@bravo-cleaning.com
              <br />
              Phone: (908) 395-7158
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}