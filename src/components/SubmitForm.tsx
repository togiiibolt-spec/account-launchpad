import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Link, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    gameTitle: "",
    category: "",
    description: "",
    accountDetails: "",
    imageUrl: "",
    email: "",
    password: ""
  });
  
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate virtual URL based on game title
    const slug = formData.gameTitle.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    const virtualUrl = `/game/${slug}-${Date.now()}`;
    
    setGeneratedUrl(`${window.location.origin}${virtualUrl}`);
    setIsSubmitted(true);
    
    toast.success("Game account submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-card/50 backdrop-blur-sm border-gaming-success/30">
            <CardHeader className="text-center">
              <CheckCircle className="h-16 w-16 text-gaming-success mx-auto mb-4" />
              <CardTitle className="text-3xl text-gaming-success">Submission Successful!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Your game account has been submitted for review. Here's your unique URL:
              </p>
              
              <div className="bg-secondary/50 p-4 rounded-lg border border-gaming-primary/20 mb-6">
                <Label className="text-sm text-muted-foreground">Your Game URL</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input 
                    value={generatedUrl} 
                    readOnly 
                    className="bg-background/50"
                  />
                  <Button 
                    size="sm" 
                    onClick={() => navigator.clipboard.writeText(generatedUrl)}
                    className="bg-gaming-primary"
                  >
                    Copy
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>✅ Your submission is pending admin approval</p>
                <p>✅ You'll receive an email once it's reviewed</p>
                <p>✅ Share your URL with friends to showcase your account</p>
              </div>
              
              <Button 
                className="mt-8 bg-gradient-to-r from-gaming-primary to-gaming-secondary"
                onClick={() => window.location.href = '/'}
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
            Submit Game Account
          </h1>
          <p className="text-muted-foreground">
            Share your premium game account with the community and get a unique URL
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-gaming-primary" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gameTitle">Game Title</Label>
                  <Input
                    id="gameTitle"
                    placeholder="e.g., Valorant, Apex Legends"
                    value={formData.gameTitle}
                    onChange={(e) => handleInputChange('gameTitle', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fps">FPS</SelectItem>
                      <SelectItem value="battle-royale">Battle Royale</SelectItem>
                      <SelectItem value="moba">MOBA</SelectItem>
                      <SelectItem value="mmo">MMO</SelectItem>
                      <SelectItem value="sandbox">Sandbox</SelectItem>
                      <SelectItem value="strategy">Strategy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your account, including ranks, skins, achievements, etc."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="accountDetails">Account Details</Label>
                <Textarea
                  id="accountDetails"
                  placeholder="List specific items, ranks, stats, etc."
                  value={formData.accountDetails}
                  onChange={(e) => handleInputChange('accountDetails', e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="imageUrl">Game Image URL</Label>
                <Input
                  id="imageUrl"
                  placeholder="URL to game poster/screenshot"
                  value={formData.imageUrl}
                  onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                />
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">
                    Account Credentials (Optional)
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="account@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-gaming-primary to-gaming-secondary"
                size="lg"
              >
                <Link className="mr-2 h-5 w-5" />
                Generate Virtual URL & Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitForm;