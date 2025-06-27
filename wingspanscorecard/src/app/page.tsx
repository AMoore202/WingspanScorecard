import React from "react";
import MenuBar from "@/components/ui/menu-bar";
import GameCard from "@/components/ui/recent-games/game-card";
import {
  fetchGameData,
  fetchScores,
  fetchLatestGameIds,
} from "@/lib/server-fetches";
import Card from "@/components/ui/card";
import { Header1 } from "@/components/ui/typography";
import Button from "@/components/ui/button";

export default async function Page() {
  const numGames = Array.from({ length: 5 }, (_, index) => index);
  const gameIds = await fetchLatestGameIds();

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="flex flex-col w-full gap-4 p-3 max-w-[1200px]">
        <Card>
          <div className="flex w-full justify-between items-center p-4">
            <Header1 text="Games" />
            <Button variant="secondary" href="/add-game" text="+ Add Game" />
          </div>
          <div className="w-full overflow-x-scroll hide-scrollbar">
            <div className="flex items-start gap-2 lg:gap-3 pl-4 pt-2 pb-8">
              {gameIds.map((id) => (
                <GameCard key={id} id={id} />
              ))}
              <div className="size-2 pr-2" aria-hidden="true" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
