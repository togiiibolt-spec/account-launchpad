import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import GameDetailPage from "@/components/GameDetailPage";

const GameDetail = () => {
  const { gameId } = useParams<{ gameId: string }>();

  if (!gameId) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Game Not Found</h1>
          <p className="text-muted-foreground">The requested game could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <GameDetailPage gameId={gameId} />
    </div>
  );
};

export default GameDetail;