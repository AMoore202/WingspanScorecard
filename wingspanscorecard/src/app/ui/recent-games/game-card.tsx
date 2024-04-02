import { PlayerScore, Game } from "@/app/lib/definitions";
import CalendarIcon from "@/app/ui/icons/calendar-icon";
import HashtagIcon from "@/app/ui/icons/hashtag-icon";


export default function GameCard( { winnerScore, scores, gameData }: { winnerScore: PlayerScore; scores: Array<PlayerScore>; gameData: Game; } ) {
    return (
        <div className="w-full bg-seagull-700 rounded-2xl mt-1 mb-1">
            <div className="w-full pt-4 pb-4 pl-8 pr-8">
                <div className="width-full">
                    <div className="flex justify-between w-full">
                        <div className="text-white text-3xl font-semibold">{winnerScore.player}</div>
                        <div className="text-white text-3xl font-bold">{winnerScore.score}</div>
                    </div>
                    {scores.map((score) => (
                        <div key={score.id} className="flex justify-between w-full">
                            <div className="text-white text-xl font-medium">{score.player}</div>
                            <div className="text-white text-xl font-semibold">{score.score}</div>
                        </div>
                    ))}
                    <div className="flex justify-end gap-3 items-center">
                        <div className="flex items-center gap-1">
                            <CalendarIcon className="text-seagull-200"/>
                            <div className="text-seagull-200 text-sm">{gameData.date.toISOString()}</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <HashtagIcon className="text-seagull-200"/>
                            <div className="text-seagull-200 text-sm">Game {gameData.game_number}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}