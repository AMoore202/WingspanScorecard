import React from "react"
import MenuBar from "@/app/ui/menu-bar";
import GameCard from "@/app/ui/recent-games/game-card";
import { PlayerScore, Game } from "@/app/lib/definitions";
import { fetchGameData } from "@/app/lib/server-fetches";

export default async function Page() {
    const gameDataFetched = await fetchGameData();
    const scores: PlayerScore[] = [
        {
            player: "Katie <3",
            score: 105,
        },
        {
            player: "Alec",
            score: 99,
        }
    ];

    return (
        <>
            <MenuBar />
            <div className="flex w-full max-w-7xl p-7 m-auto">
                <GameCard scores={scores} gameData={gameDataFetched[0]} />
            </div>
        </>
    );
}
