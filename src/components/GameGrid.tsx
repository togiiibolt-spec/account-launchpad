import GameCard from "./GameCard";
import { useGames } from "@/contexts/GameContext";

const GameGrid = () => {
  const { games } = useGames();

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
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;