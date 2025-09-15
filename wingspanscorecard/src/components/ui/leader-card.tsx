import Link from "next/link";
import { fetchHighestTotal, fetchHighestCategory } from "@/lib/server-fetches";
import {
  LogoIcon,
  BirdPointsIcon,
  BonusCardsIcon,
  EORGoalsIcon,
  EggIcon,
  FoodOnCardsIcon,
  GamesIcon,
  NectarIcon,
} from "./icons";

interface LeaderCardProps {
  category:
    | "total"
    | "bird_points"
    | "bonus_cards"
    | "end_of_round_goals"
    | "eggs"
    | "food_on_cards"
    | "tucked_cards"
    | "nectar";
}

export default async function LeaderCard({ category }: LeaderCardProps) {
  const leaderboardEntry =
    category === "total"
      ? await fetchHighestTotal()
      : await fetchHighestCategory((category = category));

  const cardLabels = {
    total: "Highest Total Score",
    bird_points: "Highest Bird Points",
    bonus_cards: "Highest Bonus Cards",
    end_of_round_goals: "Highest End-of-Round Goals",
    eggs: "Most Eggs",
    food_on_cards: "Most Food on Cards",
    tucked_cards: "Most Tucked Cards",
    nectar: "Highest Nectar",
  };

  const iconStyles = "absolute text-white opacity-[.03] size-[200px]";

  const icon = {
    total: <LogoIcon className={`${iconStyles} left-[40px] top-[20px]`} />,
    bird_points: (
      <BirdPointsIcon className={`${iconStyles} left-[10px] -top-2`} />
    ),
    bonus_cards: (
      <BonusCardsIcon className={`${iconStyles} left-[30px] -top-5`} />
    ),
    end_of_round_goals: (
      <EORGoalsIcon className={`${iconStyles} left-[20px] -top-4`} />
    ),
    eggs: <EggIcon className={`${iconStyles} left-[20px] -top-5`} />,
    food_on_cards: (
      <FoodOnCardsIcon className={`${iconStyles} left-[25px] -top-7`} />
    ),
    tucked_cards: <GamesIcon className={`${iconStyles} left-[20px] top-0`} />,
    nectar: <NectarIcon className={`${iconStyles} left-[30px] -top-5`} />,
  };

  return (
    <Link
      href={`./games/${leaderboardEntry.game_id}`}
      className="relative flex flex-col justify-center overflow-hidden items-end w-[200px] lg:w-[250px] min-w-[200px] lg:min-w-[245px] h-[125px] bg-[linear-gradient(180deg,var(--surface-buttonPrimaryStartOrange,#E07A06)_0%,var(--surface-buttonPrimaryEndOrange,#C76C05)_100%)] rounded-2xl p-3 lg:p-4 shadow-buttonCard focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-border-focusOrange/75"
    >
      <div className="flex items-center w-full justify-between">
        <p className="text-foreground-buttonPrimary text-2xl font-semibold">
          {leaderboardEntry ? leaderboardEntry.player : "N/A"}
        </p>
        <p className="text-foreground-buttonPrimary text-5xl font-bold">
          {leaderboardEntry ? leaderboardEntry.value : "N/A"}
        </p>
      </div>
      <p className="text-foreground-buttonPrimarySubtleOrange text-xs font-bold ">
        {cardLabels[category]}
      </p>
      {icon[category]}
    </Link>
  );
}
