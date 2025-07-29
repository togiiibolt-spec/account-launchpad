import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, Users, Shield, Copy, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useGames } from "@/contexts/GameContext";

interface GameDetailPageProps {
  gameId: string;
}

const GameDetailPage = ({ gameId }: GameDetailPageProps) => {
  const [showCredentials, setShowCredentials] = useState(false);
  const { getGame } = useGames();
  
  const gameData = getGame(gameId);

  if (!gameData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Game Not Found</h1>
          <p className="text-muted-foreground">The requested game could not be found.</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="outline" 
          className="mb-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Games
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={gameData.image} 
                    alt={gameData.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {gameData.category}
                    </Badge>
                    {gameData.verified && (
                      <Badge className="bg-gaming-success/20 text-gaming-success border-gaming-success/30">
                        <Shield className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-background/80 backdrop-blur-sm">
                      <Star className="h-3 w-3 mr-1 text-gaming-warning" />
                      {gameData.rating}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
                  {gameData.title}
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {gameData.description}
                </p>
              </CardContent>
            </Card>

            {/* Account Details */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Account Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Rank</label>
                    <p className="font-semibold text-gaming-primary">{gameData.details?.rank || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Region</label>
                    <p className="font-semibold">{gameData.details?.region || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Level</label>
                    <p className="font-semibold">{gameData.details?.level || "N/A"}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Win Rate</label>
                    <p className="font-semibold text-gaming-success">{gameData.details?.stats?.winRate || "N/A"}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Premium Skins</label>
                  <div className="flex flex-wrap gap-2">
                    {gameData.details?.skins?.map((skin) => (
                      <Badge key={skin} variant="secondary">{skin}</Badge>
                    )) || <Badge variant="secondary">No skins available</Badge>}
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Achievements</label>
                  <div className="flex flex-wrap gap-2">
                    {gameData.details?.achievements?.map((achievement) => (
                      <Badge key={achievement} className="bg-gaming-accent/20 text-gaming-accent border-gaming-accent/30">
                        {achievement}
                      </Badge>
                    )) || <Badge variant="secondary">No achievements available</Badge>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Credentials */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Account Credentials
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowCredentials(!showCredentials)}
                  >
                    {showCredentials ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    {showCredentials ? 'Hide' : 'Show'}
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {showCredentials ? (
                  gameData.credentials ? (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="text-sm text-muted-foreground">Email</label>
                          <p className="font-mono bg-secondary/50 p-2 rounded border">
                            {gameData.credentials.email}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(gameData.credentials!.email, 'Email')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <label className="text-sm text-muted-foreground">Password</label>
                          <p className="font-mono bg-secondary/50 p-2 rounded border">
                            {gameData.credentials.password}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(gameData.credentials!.password, 'Password')}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-center py-4">
                      No credentials available for this account
                    </p>
                  )
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Click "Show" to reveal account credentials
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Submitted by</span>
                  <span className="font-semibold">{gameData.submittedBy}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Date added</span>
                  <span className="font-semibold">{gameData.submittedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">K/D Ratio</span>
                  <span className="font-semibold text-gaming-primary">{gameData.details?.stats?.kd || "N/A"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Matches</span>
                  <span className="font-semibold">{gameData.details?.stats?.matches || "N/A"}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-gaming-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Share this Account</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Share this URL with friends to show off this premium account
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-gaming-primary to-gaming-secondary"
                  onClick={() => copyToClipboard(window.location.href, 'Page URL')}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy URL
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;