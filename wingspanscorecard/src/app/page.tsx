import React from "react"
import MenuBar from "@/app/ui/menu-bar";
import GameCard from "@/app/ui/recent-games/game-card";
import { PlayerScore, Game, ScoredGame } from "@/app/lib/definitions";
import { fetchGameData, fetchScores } from "@/app/lib/server-fetches";

export default async function Page() {
    const numGames = Array.from({ length: 5 }, (_, index) => index);
    const gameData = await fetchGameData();
    const gameid = gameData[1].id;
    const scoresFetched = await fetchScores(gameid);
    const scores = await Promise.all(gameData.map(game => fetchScores(game.id)));

    // console.log(gameData);
    // console.log(scores);

    return (
        <>
            <MenuBar />
            <div className="flex flex-col w-full max-w-7xl p-7 m-auto">
                {numGames.map((game) => (
                    <GameCard key={game} scores={scores[game]} gameData={gameData[game]} />
                ))}
                {/* <GameCard scores={scoresFetched} gameData={gameData[0]} /> */}
            </div>
        </>
    );
}
