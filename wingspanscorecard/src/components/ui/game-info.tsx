import { Text, LabelText } from "@/components/ui/typography";
import ExpansionPill from "./expansion-pill";
import { fetchGameDataById } from "@/lib/server-fetches";

export default async function GameInfo({ id }: { id: number }) {
  const gameData = await fetchGameDataById(id);

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
    <div className="flex flex-col gap-3 w-full my-2">
      <div className="flex gap-3 w-full">
        <div className="flex flex-col w-full">
          <LabelText text="Date" />
          <Text
            text={new Date(gameData[0].date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
        </div>
        <div className="flex flex-col w-full">
          <LabelText text="Time" />
          <Text
            text={new Date(`1970-01-01T${gameData[0].time}`).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }
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
