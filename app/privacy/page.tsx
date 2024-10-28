import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Service addresses and access instructions</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Service history and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600">
              <li>Provide and improve our cleaning services</li>
              <li>Process your payments</li>
              <li>Send you service confirmations and updates</li>
              <li>Communicate about promotions and new services</li>
              <li>Maintain and improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell or rent your personal information to third parties. We may share your 
              information with service providers who assist us in operating our business, processing 
              payments, or providing services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the Internet or electronic storage is 100% 
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please contact us at:
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