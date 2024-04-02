import React from "react"
import MenuBar from "@/app/ui/menu-bar";
import GameCard from "@/app/ui/recent-games/game-card";
import { PlayerScore, Game, ScoredGame } from "@/app/lib/definitions";
import { fetchGameData, fetchScores } from "@/app/lib/server-fetches";

export default async function Page() {
    const numGames = Array.from({ length: 5 }, (_, index) => index);
    const gameData = await fetchGameData();
    const scores = await Promise.all(gameData.map(game => fetchScores(game.id)));

    return (
        <>
            <MenuBar />
            <div className="flex flex-col w-full max-w-7xl p-7 m-auto">
                {numGames.map((game) => (
                    <GameCard key={game} winnerScore={scores[game][0]} scores={scores[game].slice(1, 5)} gameData={gameData[game]} />
                ))}
            </div>
        </>
    );
}
