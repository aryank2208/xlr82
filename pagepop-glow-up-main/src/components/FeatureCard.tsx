
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className }) => {
  return (
    <Card className={`hover-scale hover:shadow-lg border border-lavender/30 bg-white/70 backdrop-blur-sm ${className || ""}`}>
      <CardHeader>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-lavender mb-4">
          {icon}
        </div>
        <CardTitle className="font-playfair">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
