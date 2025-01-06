import React from "react";
import Form from "@/app/ui/add-game/add-game";
import { fetchPlayers } from "@/app/lib/server-fetches";
import MenuBar from "../ui/menu-bar";

export default async function Page() {
  const players = await fetchPlayers();

  return (
    <div className="flex flex-col gap-8 w-full">
      <MenuBar />
      <div className="flex m-auto p-8">
        <Form players={players} />
      </div>
    </div>
  );
}
