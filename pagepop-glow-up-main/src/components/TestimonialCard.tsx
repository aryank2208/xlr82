
import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, avatarUrl, rating }) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-lavender/40 hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex space-x-1 mb-3">
          {[...Array(rating)].map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <CardDescription className="text-lg text-gray-800 italic font-medium mb-6">
          "{quote}"
        </CardDescription>
      </CardContent>
      <CardFooter className="flex items-center space-x-3 border-t border-gray-100 pt-4">
        {avatarUrl && (
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src={avatarUrl} alt={author} className="h-full w-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-medium text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
