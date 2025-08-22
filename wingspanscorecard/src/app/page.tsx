import React from "react";
import { Suspense } from "react";
import Link from "next/link";
import MenuBar from "@/components/ui/menu-bar";
import GameCard from "@/components/ui/recent-games/game-card";
import LeaderCard from "@/components/ui/leader-card";
import Card from "@/components/ui/card";
import { Header1 } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { GameCardSkeleton } from "@/components/ui/skeletons";
import { fetchLatestGameIds } from "@/lib/server-fetches";
import { LinkIcon } from "@/components/ui/icons";

export default async function Page() {
  const gameIds = await fetchLatestGameIds();

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="flex flex-col w-full gap-4 p-3 max-w-[1355px]">
        <Card>
          <div className="flex w-full justify-between items-center p-4 lg:p-6">
            <Link
              href="/games?page=1&player=0"
              className="flex items-center gap-2 lg:gap-3 focus-visible:outline-none focus-visible:underline hover:underline"
            >
              <Header1 text="Games" />
              <LinkIcon className="size-4 lg:size-6" />
            </Link>
            <Button variant="secondary" href="/add-game" text="+ Add Game" />
          </div>
          <div className="w-full overflow-x-scroll hide-scrollbar">
            <div className="flex items-start gap-2 lg:gap-3 pl-4 lg:pl-6 pb-8">
              {gameIds.map((id) => (
                <Suspense key={id} fallback={<GameCardSkeleton />}>
                  <GameCard key={id} id={id} />
                </Suspense>
              ))}
              <div className="size-2 pr-2" aria-hidden="true" />
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex w-full items-start p-4 lg:p-6">
            <Header1 text="Leaderboard" />
          </div>
          <div className="w-full overflow-x-scroll hide-scrollbar">
            <div className="flex items-start gap-2 lg:gap-3 pl-4 lg:pl-6 pb-8">
              <LeaderCard />
              <LeaderCard />
              <LeaderCard />
              <LeaderCard />
              <LeaderCard />
              <div className="size-2 pr-2" aria-hidden="true" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
