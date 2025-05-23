
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  period?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  price, 
  description, 
  features, 
  popular = false,
  period = "month" 
}) => {
  return (
    <Card className={`flex flex-col h-full ${
      popular ? "border-dark-purple shadow-lg" : "border-lavender/30"
    } bg-white/80 backdrop-blur-sm relative`}>
      {popular && (
        <Badge variant="purple" className="absolute -top-2 right-6">
          Popular
        </Badge>
      )}
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">{plan}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">{period !== "one-time" ? `/ ${period}` : ""}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-dark-purple mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${
            popular 
              ? "bg-gradient-to-r from-dark-purple to-purple-500 text-white" 
              : "bg-lavender text-gray-800 hover:bg-light-purple"
          }`}
          onClick={() => window.open('https://forms.google.com/create', '_blank')}
        >
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
