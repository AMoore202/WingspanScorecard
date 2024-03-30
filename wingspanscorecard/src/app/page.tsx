import React from "react"
import Form from '@/app/ui/add-game/add-game'
import { fetchPlayers } from "@/app/lib/server-fetches";

export default async function Page() {
  const players = await fetchPlayers();
  
  return (
    <div className="w-full h-14 bg-seagull-200">
      Wingspan ScoreCard
    </div>
  );
}
