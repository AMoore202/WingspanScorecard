import React from "react"
import MenuBar from "@/app/ui/menu-bar";
import GameCard from "@/app/ui/recent-games/game-card";
import { AddGameButton } from "@/app/ui/recent-games/buttons";
import { fetchGameData, fetchScores } from "@/app/lib/server-fetches";

export default async function Page() {
    const numGames = Array.from({ length: 1 }, (_, index) => index);
    const gameData = await fetchGameData();
    const scores = await Promise.all(gameData.map(game => fetchScores(game.id)));

    return (
        <>
            <MenuBar />
            <div className="flex flex-col w-full max-w-7xl p-7 m-auto">
                <div className="flex w-full justify-between mb-1">
                    <div className="text-seagull-800 text-3xl font-semibold">Recent Games</div>
                    <AddGameButton />
                </div>
                {numGames.map((game) => (
                    <GameCard key={game} winnerScore={scores[game][0]} scores={scores[game].slice(1, 5)} gameData={gameData[game]} />
                ))}
            </div>
        </>
    );
}
