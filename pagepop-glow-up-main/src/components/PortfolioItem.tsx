
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  badgeText?: string;
  className?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  imageUrl,
  badgeText,
  className
}) => {
  return (
    <Card className={`overflow-hidden border-none shadow-sm hover-scale ${className || ""}`}>
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {badgeText && (
          <Badge variant="lavender" className="absolute top-3 right-3">
            {badgeText}
          </Badge>
        )}
      </div>
      <CardContent className="bg-white p-4">
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioItem;
