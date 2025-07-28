import GameCard from "./GameCard";

// Sample data - this would come from your backend
const sampleGames = [
  {
    id: "apex-legends",
    title: "Apex Legends",
    description: "Battle royale game with unique characters and abilities. Premium accounts with rare skins and badges.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    accounts: 15,
    rating: 4.8,
    category: "Battle Royale",
    verified: true,
    url: "/game/apex-legends"
  },
  {
    id: "valorant",
    title: "Valorant",
    description: "Tactical FPS with competitive gameplay. Accounts with premium skins and high ranks.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
    accounts: 23,
    rating: 4.9,
    category: "FPS",
    verified: true,
    url: "/game/valorant"
  },
  {
    id: "fortnite",
    title: "Fortnite",
    description: "Popular battle royale with building mechanics. Rare skins and battle pass items included.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    accounts: 31,
    rating: 4.7,
    category: "Battle Royale",
    verified: true,
    url: "/game/fortnite"
  },
  {
    id: "league-of-legends",
    title: "League of Legends",
    description: "MOBA game with strategic gameplay. High-rank accounts with exclusive skins.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    accounts: 18,
    rating: 4.6,
    category: "MOBA",
    verified: true,
    url: "/game/league-of-legends"
  },
  {
    id: "cs2",
    title: "Counter-Strike 2",
    description: "Classic tactical shooter with competitive scene. Prime accounts with valuable skins.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=200&fit=crop",
    accounts: 27,
    rating: 4.8,
    category: "FPS",
    verified: true,
    url: "/game/cs2"
  },
  {
    id: "minecraft",
    title: "Minecraft",
    description: "Sandbox building game with endless possibilities. Premium accounts with custom skins.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
    accounts: 42,
    rating: 4.9,
    category: "Sandbox",
    verified: true,
    url: "/game/minecraft"
  }
];

const GameGrid = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gaming-primary to-gaming-secondary bg-clip-text text-transparent">
            Featured Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium game accounts across your favorite titles. 
            Each account is verified and comes with detailed information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sampleGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;