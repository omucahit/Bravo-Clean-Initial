import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="mt-4 text-gray-600">Coming Soon</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">Exciting Opportunities Ahead!</h2>
          <p className="text-gray-600 mb-8">
            We're currently building our careers page to showcase the amazing opportunities at Bravo Clean. 
            Check back soon to learn about positions where you can help create cleaner, healthier spaces 
            for our community.
          </p>
          <div className="space-y-6">
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
              <ul className="text-gray-600 space-y-3">
                <li>• Competitive compensation</li>
                <li>• Flexible schedules</li>
                <li>• Professional training</li>
                <li>• Growth opportunities</li>
                <li>• Supportive team environment</li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Interested in joining our team? Send your resume to:
              </p>
              <p className="font-semibold text-primary">
                careers@bravo-cleaning.com
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}