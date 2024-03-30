import React from "react"
import Form from '@/app/ui/add-game/add-game'
import { fetchPlayers } from "@/app/lib/server-fetches";
import Image from 'next/image';

export default async function Page() {
  const players = await fetchPlayers();
  
  return (
    <div className="w-full h-14 bg-seagull-200 border-b-2 border-seagull-500 shadow-menu">
        <div className="p-2 pb-2 pl-8 pr-8">
          <Image
            src="/Logo.png"
            width={224}
            height={36}
            alt="Wingspan Scorecard Logo"
          />
        </div>
    </div>
  );
}
