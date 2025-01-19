import React from "react";
import Form from "@/app/ui/add-game/add-game";
import { fetchPlayers } from "@/app/lib/server-fetches";
import MenuBar from "../ui/menu-bar";
// import AddPlayerDialog from "../ui/add-game/add-player-dialog";

export default async function Page() {
  const players = await fetchPlayers();

  return (
    <div className="flex flex-col gap-8 w-full">
      <MenuBar />
      <div className="flex m-auto p-8 flex-col gap-4">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-seagull-800 text-3xl font-semibold">Add Game</h1>
          {/* <AddPlayerDialog /> */}
        </div>
        <Form players={players} />
      </div>
    </div>
  );
}
