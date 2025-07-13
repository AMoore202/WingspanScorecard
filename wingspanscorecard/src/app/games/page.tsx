import MenuBar from "@/components/ui/menu-bar";
import Card from "@/components/ui/card";
import GameCards from "@/components/ui/games/game-cards";
import PlayersFilter from "@/components/ui/games/players-filter";
import { Header1 } from "@/components/ui/typography";
import Button from "@/components/ui/button";
import { fetchPlayers } from "@/lib/server-fetches";

export default async function Page({
  searchParams,
}: {
  searchParams: { player?: string };
}) {
  const players = await fetchPlayers();

  const selectedPlayerId = searchParams.player
    ? Number(searchParams.player)
    : null;

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="w-full p-3">
        <Card className="w-full gap-2">
          <div className="flex w-full items-center justify-between px-4 pt-4">
            <Header1 text="Games" />
            <Button variant="secondary" href="/add-game" text="+ Add Game" />
          </div>
          <PlayersFilter players={players} selectedPlayer={selectedPlayerId} />
          <GameCards selectedPlayer={selectedPlayerId} />
        </Card>
      </div>
    </div>
  );
}
