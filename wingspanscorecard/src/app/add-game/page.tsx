import React from "react"
import Form from '@/app/ui/add-game'
import { fetchPlayers } from "@/app/lib/server-fetches";

export default async function Page() {
  const players = await fetchPlayers();
  
  return (
    <div className="flex m-auto w-1/3 p-8">
      <Form players={players} />
    </div>
  );
}
