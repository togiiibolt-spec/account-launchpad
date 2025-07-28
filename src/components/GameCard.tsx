import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Users, Shield } from "lucide-react";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  accounts: number;
  rating: number;
  category: string;
  verified: boolean;
  url: string;
}

const GameCard = ({ id, title, description, image, accounts, rating, category, verified, url }: GameCardProps) => {
  const handleViewAccounts = () => {
    // This will navigate to the virtual URL for this game
    window.open(`/game/${id}`, '_blank');
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50 hover:border-gaming-primary/50">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
            {verified && (
              <Badge className="bg-gaming-success/20 text-gaming-success border-gaming-success/30">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <Badge className="bg-background/80 backdrop-blur-sm">
              <Star className="h-3 w-3 mr-1 text-gaming-warning" />
              {rating}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gaming-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="h-4 w-4 mr-1" />
          <span>{accounts} accounts available</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleViewAccounts}
          className="w-full bg-gradient-to-r from-gaming-primary to-gaming-secondary group-hover:shadow-lg"
        >
          View Accounts
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;