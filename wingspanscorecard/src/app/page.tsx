import React from "react"
import Form from '@/app/ui/create-form'
import { fetchPlayers } from "@/app/lib/data";

export default async function Page() {
  const players = await fetchPlayers();
  
  return (
    <div className="flex w-1/3 p-8">
      <Form players={players} />
    </div>
  );
}
