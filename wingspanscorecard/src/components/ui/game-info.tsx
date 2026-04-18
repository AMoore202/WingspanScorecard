import { Text, LabelText } from "@/components/ui/typography";
import ExpansionPill from "./expansion-pill";
import { Game } from "@/lib/definitions";

export default async function GameInfo({ gameData }: { gameData: Game }) {
  const expansionsContent =
    !gameData.european_expansion &&
    !gameData.oceania_expansion &&
    !gameData.asian_expansion &&
    !gameData.americas_expansion ? (
      <Text text="None" />
    ) : (
      <div className="flex gap-[6px] mt-1">
        {gameData.european_expansion && <ExpansionPill expansion="europe" />}
        {gameData.oceania_expansion && <ExpansionPill expansion="oceania" />}
        {gameData.asian_expansion && <ExpansionPill expansion="asia" />}
        {gameData.americas_expansion && <ExpansionPill expansion="americas" />}
      </div>
    );

  return (
    <div className="flex flex-col gap-3 w-full my-2">
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full">
          <LabelText text="Date" />
          <Text
            text={new Date(gameData.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
        </div>
        <div className="flex flex-col w-full">
          <LabelText text="Time" />
          <Text
            text={new Date(`1970-01-01T${gameData.time}`).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              },
            )}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <LabelText text="Expansions" />
        {expansionsContent}
      </div>
    </div>
  );
}
