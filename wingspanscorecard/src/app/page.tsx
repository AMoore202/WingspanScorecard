import React from "react";
import MenuBar from "@/components/ui/menu-bar";
import GameCard from "@/components/ui/recent-games/game-card";
// import { AddGameButton } from "@/components/ui/recent-games/buttons";
import { fetchGameData, fetchScores } from "@/lib/server-fetches";
import Card from "@/components/ui/card";
import { Header1 } from "@/components/ui/typography";
import Button from "@/components/ui/button";

export default async function Page() {
  const numGames = Array.from({ length: 5 }, (_, index) => index);
  const gameData = await fetchGameData();
  const scores = await Promise.all(
    gameData.map((game) => fetchScores(game.id))
  );

  return (
    <>
      <MenuBar />
      <div className="flex flex-col w-full gap-4 p-2">
        <Card>
          <div className="flex w-full justify-between items-center">
            <Header1 text="Games" />
            {/* <AddGameButton /> */}
            <Button variant="secondary" href="/add-game" text="+ Add Game" />
          </div>
          {numGames.map((game) => (
            <GameCard
              key={game}
              winnerScore={scores[game][0]}
              scores={scores[game].slice(1, 5)}
              gameData={gameData[game]}
            />
          ))}
        </Card>
      </div>
    </>
  );
}
