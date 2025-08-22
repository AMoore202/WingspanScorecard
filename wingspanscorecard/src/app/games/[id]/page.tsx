import { Suspense } from "react";
import MenuBar from "@/components/ui/menu-bar";
import GameCard from "@/components/ui/recent-games/game-card";
import Card from "@/components/ui/card";
import { Header1, Header2 } from "@/components/ui/typography";
import GameTable from "@/components/ui/game-table";
import GameInfo from "@/components/ui/game-info";
import {
  TableSkeleton,
  GameInfoSkeleton,
  GameCardSkeleton,
} from "@/components/ui/skeletons";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="w-full max-w-[50rem] p-3">
        <Card className="w-full gap-2 lg:p-4">
          <div className="flex w-full items-center px-4 pt-4">
            <Header1 text="Game Details" />
          </div>
          <div className="flex flex-col w-full items-center px-4 gap-2">
            <Header2 text="Scores" />
            <Suspense fallback={<GameCardSkeleton className="w-full" />}>
              <GameCard
                id={Number(id)}
                showGameInfo={false}
                className="w-full my-2"
                isLink={false}
              />
            </Suspense>
          </div>
          <div className="flex flex-col w-full items-center px-4 gap-2">
            <Header2 text="Game Info" />
            <Suspense fallback={<GameInfoSkeleton />}>
              <GameInfo id={Number(id)} />
            </Suspense>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="px-4">
              <Header2 text="Breakdown" />
            </div>
            <div className="w-full overflow-x-scroll hide-scrollbar">
              <div className="flex items-start px-4 pt-2 pb-4 w-max">
                <Suspense fallback={<TableSkeleton />}>
                  <GameTable id={Number(id)} />
                </Suspense>
                <div className="size-2 pr-2" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
