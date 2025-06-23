import Link from "next/link";
import { PlayerScore, Game } from "@/lib/definitions";
import { CalendarIcon, CrownIcon, HashtagIcon } from "@/components/ui/icons";

export default function GameCard({
  winnerScore,
  scores,
  gameData,
}: {
  winnerScore: PlayerScore;
  scores: Array<PlayerScore>;
  gameData: Game;
}) {
  const scoresLength = Array.from({ length: scores.length }, (_, i) => i + 1);

  return (
    <Link
      href={`/games/${gameData.id}`}
      className="flex flex-col gap-2 w-[200px] lg:w-[250px] min-w-[200px] lg:min-w-[250px] bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStart,#187FA9)_0%,var(--surface-buttonPrimaryEnd,#125E7D)_100%)] rounded-2xl p-3 lg:p-4 shadow-buttonCard"
    >
      <div className="flex flex-col gap-1 w-full pb-1">
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <CrownIcon className="text-foreground-buttonPrimary w-5 h-auto lg:w-6" />
            <div className="text-foreground-buttonPrimary text-xl lg:text-2xl font-semibold">
              {winnerScore.player}
            </div>
          </div>
          <div className="text-foreground-buttonPrimary text-xl lg:text-2xl font-bold">
            {winnerScore.score}
          </div>
        </div>
        {scoresLength.map((i) => (
          <div key={i} className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <div className="w-5 lg:w-6 text-foreground-buttonPrimary text-base lg:text-xl font-medium text-center">
                {i + 1}
              </div>
              <div className="text-foreground-buttonPrimary text-base lg:text-xl font-medium">
                {scores[i - 1].player}
              </div>
            </div>
            <div className="text-foreground-buttonPrimary text-base lg:text-xl font-semibold">
              {scores[i - 1].score}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 items-center">
        <div className="flex items-center gap-[3px] lg:gap-[5px]">
          <CalendarIcon className="text-foreground-buttonPrimarySubtle w-[10px] h-auto lg:w-3" />
          <div className="text-foreground-buttonPrimarySubtle text-[10px] lg:text-xs">
            {gameData.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="flex items-center gap-[1px] lg:gap-[3px]">
          <HashtagIcon className="text-foreground-buttonPrimarySubtle w-[10px] h-auto lg:w-3" />
          <div className="text-foreground-buttonPrimarySubtle text-[10px] lg:text-xs">
            Game {gameData.game_number}
          </div>
        </div>
      </div>
    </Link>
  );
}
