import React from "react"
import MenuBar from "@/app/ui/menu-bar";
import GameCard from "@/app/ui/recent-games/game-card";
import { PlayerScore } from "@/app/lib/definitions";

export default function Page() {
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
    const date = new Date();
    const gameNum = 1;

    return (
        <>
            <MenuBar />
            <div className="flex w-full max-w-7xl p-7 m-auto">
                <GameCard scores={scores} date={date} gameNum={gameNum} />
            </div>
        </>
    );
}
