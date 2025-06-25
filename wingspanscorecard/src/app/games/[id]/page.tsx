import MenuBar from "@/components/ui/menu-bar";
import Card from "@/components/ui/card";
import { Header1, Header2, Text, LabelText } from "@/components/ui/typography";
import ExpansionPill from "@/components/ui/expansion-pill";
import {
  fetchScores,
  fetchGameDataById,
  fetchRawScoresById,
} from "@/lib/server-fetches";
import GameCard from "@/components/ui/recent-games/game-card";
import GameTable from "@/components/ui/game-table";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const scores = await fetchScores(Number(id));
  const gameData = await fetchGameDataById(Number(id));
  const rawScores = await fetchRawScoresById(Number(id));
  // console.log("Raw Scores:", rawScores);

  const expansionsContent =
    !gameData[0].european_expansion &&
    !gameData[0].oceania_expansion &&
    !gameData[0].asian_expansion ? (
      <Text text="None" />
    ) : (
      <div className="flex gap-[6px] mt-1">
        {gameData[0].european_expansion && <ExpansionPill expansion="europe" />}
        {gameData[0].oceania_expansion && <ExpansionPill expansion="oceania" />}
        {gameData[0].asian_expansion && <ExpansionPill expansion="asia" />}
      </div>
    );

  return (
    <div className="flex flex-col items-center w-full h-full bg-background">
      <MenuBar />
      <div className="w-full p-3">
        <Card className="w-full gap-2">
          <div className="flex w-full items-center px-4 pt-4">
            <Header1 text="Game Details" />
          </div>
          <div className="flex flex-col w-full items-center px-4 gap-2">
            <Header2 text="Scores" />
            <GameCard
              winnerScore={scores[0]}
              scores={scores.slice(1, 5)}
              gameData={gameData[0]}
              showGameInfo={false}
              className="w-full my-2"
              isLink={false}
            />
          </div>
          <div className="flex flex-col w-full items-center px-4 gap-2">
            <Header2 text="Game Info" />
            <div className="flex flex-col gap-3 w-full my-2">
              <div className="flex gap-3 w-full">
                <div className="flex flex-col w-full">
                  <LabelText text="Date" />
                  <Text
                    text={new Date(gameData[0].date).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <LabelText text="Time" />
                  <Text
                    text={new Date(
                      `1970-01-01T${gameData[0].time}`
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <LabelText text="Expansions" />
                {expansionsContent}
                {/* <div className="flex gap-[6px]">
                  {gameData[0].european_expansion && (
                    <ExpansionPill expansion="europe" />
                  )}
                  {gameData[0].oceania_expansion && (
                    <ExpansionPill expansion="oceania" />
                  )}
                  {gameData[0].asian_expansion && (
                    <ExpansionPill expansion="asia" />
                  )}
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="px-4">
              <Header2 text="Breakdown" />
            </div>
            <div className="w-full overflow-x-scroll hide-scrollbar">
              <div className="flex items-start px-4 pt-2 pb-4 w-max">
                <GameTable scores={rawScores} />
                <div className="size-2 pr-2" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
