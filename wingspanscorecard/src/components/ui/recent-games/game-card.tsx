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
    <div className="flex flex-col gap-2 w-[200px] bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStart,#187FA9)_0%,var(--surface-buttonPrimaryEnd,#125E7D)_100%)] rounded-2xl pt-3 pb-3 pl-3 pr-3 shadow-buttonCard">
      <div className="flex flex-col gap-1 w-full pb-1">
        <div className="flex justify-between w-full">
          <div className="flex gap-2 items-center">
            <CrownIcon className="text-foreground-buttonPrimary" />
            <div className="text-foreground-buttonPrimary text-xl font-semibold">
              {winnerScore.player}
            </div>
          </div>
          <div className="text-foreground-buttonPrimary text-xl font-bold">
            {winnerScore.score}
          </div>
        </div>
        {scoresLength.map((i) => (
          <div key={i} className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <div className="w-5 text-foreground-buttonPrimary text-base font-medium text-center">
                {i + 1}
              </div>
              <div className="text-foreground-buttonPrimary text-base font-medium">
                {scores[i - 1].player}
              </div>
            </div>
            <div className="text-foreground-buttonPrimary text-base font-semibold">
              {scores[i - 1].score}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 items-center">
        <div className="flex items-center gap-1">
          <CalendarIcon className="text-foreground-buttonPrimarySubtle" />
          <div className="text-foreground-buttonPrimarySubtle text-[10px]">
            {gameData.date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <div className="flex items-center gap-[2px]">
          <HashtagIcon className="text-foreground-buttonPrimarySubtle" />
          <div className="text-foreground-buttonPrimarySubtle text-[10px]">
            Game {gameData.game_number}
          </div>
        </div>
      </div>
    </div>
  );
}
