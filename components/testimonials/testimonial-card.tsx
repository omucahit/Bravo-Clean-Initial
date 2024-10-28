import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
  beforeImage,
  afterImage,
}: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{content}</p>
        {beforeImage && afterImage && (
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40">
              <Image
                src={beforeImage}
                alt="Before cleaning"
                fill
                className="object-cover rounded-lg"
              />
              <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                Before
              </span>
            </div>
            <div className="relative h-40">
              <Image
                src={afterImage}
                alt="After cleaning"
                fill
                className="object-cover rounded-lg"
              />
              <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                After
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}