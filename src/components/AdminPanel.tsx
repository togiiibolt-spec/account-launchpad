import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Users, Gamepad2, Eye, Trash2, CheckCircle, XCircle, Search } from "lucide-react";
import { toast } from "sonner";

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample data - would come from backend
  const pendingSubmissions = [
    {
      id: "1",
      gameTitle: "Valorant Premium",
      submittedBy: "GameMaster123",
      email: "user@example.com",
      submittedDate: "2024-01-20",
      status: "pending",
      category: "FPS"
    },
    {
      id: "2", 
      gameTitle: "Apex Legends Elite",
      submittedBy: "ProGamer456",
      email: "gamer@example.com",
      submittedDate: "2024-01-19",
      status: "pending",
      category: "Battle Royale"
    }
  ];

  const approvedGames = [
    {
      id: "apex-legends",
      gameTitle: "Apex Legends",
      submittedBy: "AdminUser",
      views: 1247,
      rating: 4.8,
      status: "approved",
      url: "/game/apex-legends"
    },
    {
      id: "valorant",
      gameTitle: "Valorant",
      submittedBy: "ProPlayer",
      views: 890,
      rating: 4.9,
      status: "approved",
      url: "/game/valorant"
    }
  ];

  const systemStats = {
    totalUsers: 10247,
    totalGames: 156,
    pendingReviews: 8,
    totalViews: 45892
  };

  const handleApprove = (id: string) => {
    toast.success("Game approved successfully!");
  };

  const handleReject = (id: string) => {
    toast.error("Game rejected");
  };

  const handleDelete = (id: string) => {
    toast.success("Game deleted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
              Admin Panel
            </h1>
            <p className="text-muted-foreground mt-2">Manage your gaming platform</p>
          </div>
          <Badge className="bg-gaming-primary/20 text-gaming-primary border-gaming-primary/30">
            <Shield className="h-4 w-4 mr-2" />
            Administrator
          </Badge>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-gaming-primary">{systemStats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-gaming-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Games</p>
                  <p className="text-2xl font-bold text-gaming-secondary">{systemStats.totalGames}</p>
                </div>
                <Gamepad2 className="h-8 w-8 text-gaming-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  <p className="text-2xl font-bold text-gaming-warning">{systemStats.pendingReviews}</p>
                </div>
                <Shield className="h-8 w-8 text-gaming-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold text-gaming-accent">{systemStats.totalViews.toLocaleString()}</p>
                </div>
                <Eye className="h-8 w-8 text-gaming-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="pending">Pending Reviews ({pendingSubmissions.length})</TabsTrigger>
            <TabsTrigger value="approved">Approved Games ({approvedGames.length})</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="pending">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Game Submissions
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search submissions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Game Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Submitted By</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingSubmissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">{submission.gameTitle}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{submission.category}</Badge>
                        </TableCell>
                        <TableCell>{submission.submittedBy}</TableCell>
                        <TableCell>{submission.submittedDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {/* Navigate to review page */}}
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              Review
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gaming-success text-white"
                              onClick={() => handleApprove(submission.id)}
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject(submission.id)}
                            >
                              <XCircle className="h-3 w-3 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Approved Games</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Game Title</TableHead>
                      <TableHead>Submitted By</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>URL</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {approvedGames.map((game) => (
                      <TableRow key={game.id}>
                        <TableCell className="font-medium">{game.gameTitle}</TableCell>
                        <TableCell>{game.submittedBy}</TableCell>
                        <TableCell>{game.views.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className="bg-gaming-warning/20 text-gaming-warning border-gaming-warning/30">
                            ⭐ {game.rating}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs bg-secondary/50 px-2 py-1 rounded">
                            {game.url}
                          </code>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(game.url, '_blank')}
                            >
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDelete(game.id)}
                            >
                              <Trash2 className="h-3 w-3 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium">Platform Name</label>
                    <Input defaultValue="GameVault" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Max Submissions per User</label>
                    <Input defaultValue="5" type="number" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Auto-approve Verified Users</label>
                    <div className="flex items-center space-x-2 mt-2">
                      <input type="checkbox" id="auto-approve" />
                      <label htmlFor="auto-approve" className="text-sm text-muted-foreground">
                        Enable auto-approval for verified users
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-gaming-primary to-gaming-secondary">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;