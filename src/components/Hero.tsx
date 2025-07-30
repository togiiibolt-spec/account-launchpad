import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Users, Shield } from "lucide-react";
import heroImage from "@/assets/gaming-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/lovable-uploads/fe561248-1b3a-4769-8f0e-16e1e57539f6.png')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gaming-primary/20 text-gaming-primary border-gaming-primary/30">
            🎮 Premium Game Accounts
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gaming-primary via-gaming-secondary to-gaming-accent bg-clip-text text-transparent leading-tight">
            GameVault
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            The ultimate platform for sharing premium game accounts. 
            <br className="hidden md:block" />
            Discover, share, and access exclusive gaming content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-gaming-primary to-gaming-secondary text-lg px-8 py-6">
              Browse Games
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gaming-primary/30 hover:bg-gaming-primary/10">
              <Download className="mr-2 h-5 w-5" />
              Submit Account
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Users className="h-12 w-12 text-gaming-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">10,000+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Shield className="h-12 w-12 text-gaming-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+</h3>
              <p className="text-muted-foreground">Verified Accounts</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <Download className="h-12 w-12 text-gaming-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">50+</h3>
              <p className="text-muted-foreground">Supported Games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;