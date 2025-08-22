import Link from "next/link";
import { PlayerScore, Game } from "@/lib/definitions";
import { CalendarIcon, CrownIcon, HashtagIcon } from "@/components/ui/icons";
import { fetchGameDataById, fetchScores } from "@/lib/server-fetches";

export default async function GameCard({
  id,
  showGameInfo = true,
  className = "",
  isLink = true,
}: {
  id: number;
  showGameInfo?: boolean;
  className?: string;
  isLink?: boolean;
}) {
  const scores = await fetchScores(id);

  if (scores.length === 0) return null;

  const winnerScore: PlayerScore = scores.reduce((top, current) =>
    current.score > top.score ? current : top
  );

  const otherScores = scores.filter(
    (score) => score.player !== winnerScore.player
  );

  const game: Game | null =
    showGameInfo || isLink ? await fetchGameDataById(id) : null;

  const content = (
    <>
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
        {otherScores.map((score, i) => (
          <div key={i} className="flex justify-between w-full">
            <div className="flex gap-2 items-center">
              <div className="w-5 lg:w-6 text-foreground-buttonPrimary text-base lg:text-xl font-medium text-center">
                {i + 2}
              </div>
              <div className="text-foreground-buttonPrimary text-base lg:text-xl font-medium">
                {score.player}
              </div>
            </div>
            <div className="text-foreground-buttonPrimary text-base lg:text-xl font-semibold">
              {score.score}
            </div>
          </div>
        ))}
      </div>
      {showGameInfo && game && (
        <div className="flex justify-end gap-2 items-center">
          <div className="flex items-center gap-[3px] lg:gap-[5px]">
            <CalendarIcon className="text-foreground-buttonPrimarySubtleBlue w-[10px] h-auto lg:w-3" />
            <div className="text-foreground-buttonPrimarySubtleBlue text-[10px] lg:text-xs">
              {game.date.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <div className="flex items-center gap-[1px] lg:gap-[3px]">
            <HashtagIcon className="text-foreground-buttonPrimarySubtleBlue w-[10px] h-auto lg:w-3" />
            <div className="text-foreground-buttonPrimarySubtleBlue text-[10px] lg:text-xs">
              Game {game.game_number}
            </div>
          </div>
        </div>
      )}
    </>
  );

  const wrapperClasses = `flex flex-col gap-2 w-[200px] lg:w-[247px] min-w-[200px] lg:min-w-[247px] bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStartBlue,#187FA9)_0%,var(--surface-buttonPrimaryEndBlue,#125E7D)_100%)] rounded-2xl p-3 lg:p-4 shadow-buttonCard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus/75 ${className}`;

  if (isLink && game) {
    return (
      <Link href={`/games/${game.id}`} className={wrapperClasses}>
        {content}
      </Link>
    );
  }
  return <div className={wrapperClasses}>{content}</div>;
}
