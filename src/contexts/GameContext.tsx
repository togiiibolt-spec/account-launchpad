import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  accounts: number;
  rating: number;
  category: string;
  verified: boolean;
  url: string;
  submittedBy?: string;
  submittedDate?: string;
  details?: {
    rank?: string;
    region?: string;
    level?: number;
    skins?: string[];
    achievements?: string[];
    stats?: {
      winRate?: string;
      kd?: string;
      matches?: string;
    };
  };
  credentials?: {
    email: string;
    password: string;
  };
}

interface GameContextType {
  games: Game[];
  addGame: (game: Game) => void;
  getGame: (id: string) => Game | undefined;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Initial sample data
const initialGames: Game[] = [
  {
    id: "apex-legends",
    title: "Apex Legends",
    description: "Battle royale game with unique characters and abilities. Premium accounts with rare skins and badges.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    accounts: 15,
    rating: 4.8,
    category: "Battle Royale",
    verified: true,
    url: "/game/apex-legends",
    submittedBy: "ProGamer",
    submittedDate: "2024-01-10",
    details: {
      rank: "Predator",
      region: "NA",
      level: 250,
      skins: ["Heirloom Wraith", "Legendary Bloodhound", "Epic Pathfinder"],
      achievements: ["20 Kill Badge", "4K Damage", "Season Winner"],
      stats: {
        winRate: "68%",
        kd: "2.1",
        matches: "856"
      }
    },
    credentials: {
      email: "apex.pro@email.com",
      password: "ApexLegend2024!"
    }
  },
  {
    id: "valorant",
    title: "Valorant Premium Account",
    description: "Tactical FPS with competitive gameplay. Accounts with premium skins and high ranks.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
    accounts: 23,
    rating: 4.9,
    category: "FPS",
    verified: true,
    url: "/game/valorant",
    submittedBy: "GameMaster123",
    submittedDate: "2024-01-15",
    details: {
      rank: "Immortal 2",
      region: "NA",
      level: 156,
      skins: ["Prime Vandal", "Elderflame Operator", "Reaver Sheriff"],
      achievements: ["Ace Machine", "Clutch King", "Ranked Warrior"],
      stats: {
        winRate: "73%",
        kd: "1.45",
        matches: "1,247"
      }
    },
    credentials: {
      email: "valorant.master@email.com",
      password: "SecurePass123!"
    }
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
    url: "/game/fortnite",
    submittedBy: "BuildMaster",
    submittedDate: "2024-01-12",
    details: {
      rank: "Champion League",
      region: "EU",
      level: 312,
      skins: ["Black Knight", "Skull Trooper", "Renegade Raider"],
      achievements: ["Victory Royale", "Master Builder", "Arena Champion"],
      stats: {
        winRate: "65%",
        kd: "1.8",
        matches: "2,156"
      }
    },
    credentials: {
      email: "fortnite.builder@email.com",
      password: "BuildWin2024!"
    }
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
    url: "/game/league-of-legends",
    submittedBy: "RiftMaster",
    submittedDate: "2024-01-08",
    details: {
      rank: "Diamond 1",
      region: "EUW",
      level: 189,
      skins: ["Spirit Guard Udyr", "DJ Sona", "Elementalist Lux"],
      achievements: ["Pentakill", "Rift Herald", "Baron Stealer"],
      stats: {
        winRate: "71%",
        kd: "2.3",
        matches: "1,834"
      }
    },
    credentials: {
      email: "lol.diamond@email.com",
      password: "RiftWin2024!"
    }
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
    url: "/game/cs2",
    submittedBy: "FragMaster",
    submittedDate: "2024-01-05",
    details: {
      rank: "Global Elite",
      region: "NA",
      level: 40,
      skins: ["AK-47 Redline", "AWP Dragon Lore", "M4A4 Howl"],
      achievements: ["Ace Round", "Clutch Master", "Headshot King"],
      stats: {
        winRate: "76%",
        kd: "1.67",
        matches: "967"
      }
    },
    credentials: {
      email: "cs2.global@email.com",
      password: "GlobalElite2024!"
    }
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
    url: "/game/minecraft",
    submittedBy: "CraftMaster",
    submittedDate: "2024-01-03",
    details: {
      rank: "Builder",
      region: "Global",
      level: 999,
      skins: ["Diamond Steve", "Creeper Hoodie", "Enderman Skin"],
      achievements: ["Master Builder", "Dragon Slayer", "Nether Explorer"],
      stats: {
        winRate: "N/A",
        kd: "N/A",
        matches: "Endless"
      }
    },
    credentials: {
      email: "minecraft.builder@email.com",
      password: "CraftWin2024!"
    }
  }
];

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [games, setGames] = useState<Game[]>(initialGames);

  const addGame = (game: Game) => {
    setGames(prev => [...prev, game]);
  };

  const getGame = (id: string) => {
    return games.find(game => game.id === id);
  };

  return (
    <GameContext.Provider value={{ games, addGame, getGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGames must be used within a GameProvider');
  }
  return context;
};