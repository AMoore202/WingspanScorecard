import { PlayerScore, Game } from "@/app/lib/definitions";
import CalendarIcon from "@/app/ui/icons/calendar-icon";
import HashtagIcon from "@/app/ui/icons/hashtag-icon";
import CrownIcon from "@/app/ui/icons/crown-icon";


export default function GameCard( { winnerScore, scores, gameData }: { winnerScore: PlayerScore; scores: Array<PlayerScore>; gameData: Game; } ) {
    const scoresLength = Array.from({ length: scores.length}, (_, i) => i + 1);
    console.log(scoresLength);
    
    return (
        <div className="w-full bg-seagull-700 rounded-2xl mt-1 mb-1">
            <div className="w-full pt-4 pb-4 pl-8 pr-8">
                <div className="flex flex-col width-full gap-1">
                    <div className="flex justify-between w-full">
                        <div className="flex gap-2 items-center">
                            <CrownIcon className="text-white" />
                            <div className="text-white text-3xl font-semibold">{winnerScore.player}</div>                            
                        </div> 
                        <div className="text-white text-3xl font-bold">{winnerScore.score}</div>
                    </div>
                    {scoresLength.map((i) => (
                        <div key={i} className="flex justify-between w-full">
                            <div className="flex gap-2 items-center">
                                <div className="w-7 text-white text-xl font-medium text-center">{i + 1}</div>
                                <div className="text-white text-xl font-medium">{scores[i - 1].player}</div>
                            </div>
                            <div className="text-white text-xl font-semibold">{scores[i - 1].score}</div>
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