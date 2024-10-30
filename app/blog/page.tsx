import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Cleaning & Lifestyle Blog</h1>
          <p className="mt-4 text-gray-600">Coming Soon</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Expert Tips & Insights Coming Soon!</h2>
          <p className="text-gray-600 mb-8">
            We're crafting valuable content to help you maintain a cleaner, healthier home. Our blog 
            will feature professional cleaning tips, sustainable living advice, and home organization 
            strategies.
          </p>
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Professional cleaning tips and tricks</li>
                <li>• Eco-friendly cleaning solutions</li>
                <li>• Home organization guides</li>
                <li>• Seasonal cleaning checklists</li>
                <li>• Healthy home maintenance advice</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Want to be notified when we launch our blog?
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button>Stay Updated</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}