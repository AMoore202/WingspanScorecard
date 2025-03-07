import React from "react";
import MenuBar from "@/components/ui/menu-bar";
import GameCard from "@/components/ui/recent-games/game-card";
import { AddGameButton } from "@/components/ui/recent-games/buttons";
import { fetchGameData, fetchScores } from "@/lib/server-fetches";

export default async function Page() {
  const numGames = Array.from({ length: 5 }, (_, index) => index);
  const gameData = await fetchGameData();
  const scores = await Promise.all(
    gameData.map((game) => fetchScores(game.id))
  );

  return (
    <>
      <MenuBar />
      <div className="flex flex-col w-full max-w-7xl p-7 m-auto">
        <div className="flex w-full justify-between mb-1">
          <h1 className="text-seagull-800 text-3xl font-semibold">
            Recent Games
          </h1>
          <AddGameButton />
        </div>
        {numGames.map((game) => (
          <GameCard
            key={game}
            winnerScore={scores[game][0]}
            scores={scores[game].slice(1, 5)}
            gameData={gameData[game]}
          />
        ))}
      </div>
    </>
  );
}
