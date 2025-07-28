import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, User, Shield, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="h-8 w-8 text-gaming-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
                GameVault
              </span>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Beta
            </Badge>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-gaming-primary transition-colors">
              Games
            </a>
            <a href="/submit" className="text-foreground hover:text-gaming-primary transition-colors">
              Submit Account
            </a>
            <a href="/about" className="text-foreground hover:text-gaming-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-gaming-primary to-gaming-secondary">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;