import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "62 Reservoir Rd, Parsippany, NJ 07054",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "(908) 395-7158",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@bravo-clean.com",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 8am-6pm\nSat-Sun: 9am-4pm",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((detail, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="text-primary">{detail.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{detail.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
