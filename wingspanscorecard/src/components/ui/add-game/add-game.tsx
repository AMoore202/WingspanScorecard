"use client";

import { useState } from "react";
import { Player, PointsCategory } from "@/lib/definitions";
import { addGame } from "@/lib/server-uploads";
import { safeParseInt } from "@/lib/utils";
import ScoreRow from "@/components/ui/add-game/score-row";
import PlayerRow from "@/components/ui/add-game/player-row";
import TotalRow from "@/components/ui/add-game/total-row";

export default function Form({ players }: { players: Player[] }) {
  // To-do: Do date and time together
  const torontoTime = new Date().toLocaleString("en-CA", {
    timeZone: "America/Toronto",
  });
  const today = torontoTime.split(",")[0];

  const getTorontoDateTime = (): string => {
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Toronto",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const formatter = new Intl.DateTimeFormat("en-CA", options);
    const formattedTime = formatter.format(new Date());

    return formattedTime
      .replace(/[^0-9:]/g, "")
      .trim()
      .slice(0, -3);
  };

  console.log(getTorontoDateTime());

  const numPlayersOptions = Array.from({ length: 9 }, (_, i) => i + 2);
  const [numPlayers, setNumPlayers] = useState("2");
  const numPlayersInt = parseInt(numPlayers);
  const [scores, setScores] = useState(
    Array(8)
      .fill(null)
      .map(() => new Array(7).fill(0))
  );
  const [oceaniaExpansion, setOceaniaExpansion] = useState(false);
  const pointsCategories: PointsCategory = {
    birdpoints: 1,
    bonuscards: 2,
    eorgoals: 3,
    eggs: 4,
    foodoncard: 5,
    tuckedcards: 6,
    nectar: 7,
  };

  const handleNumPlayersChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setNumPlayers(event.target.value);
  };

  const handleOceaniaExpansionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOceaniaExpansion(event.target.checked);
  };

  const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const playerNumber = parseInt(event.target.id.charAt(1));
    const category = event.target.id.slice(2);
    const nextScores = scores.slice();
    nextScores[playerNumber - 1][pointsCategories[category] - 1] = safeParseInt(
      event.target.value
    );
    setScores(nextScores);
  };

  return (
    <form action={addGame}>
      <div className="flex flex-col gap-4 w-full">
        <label className="font-medium flex items-center">
          Number of Players
          <select
            id="numplayers"
            name="numplayers"
            defaultValue="0"
            className="border border-black w-32 mx-2 rounded-md p-1"
            onChange={handleNumPlayersChange}
          >
            {numPlayersOptions.map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center font-medium">
          <input
            type="checkbox"
            id="europeanexp"
            name="europeanexp"
            className="mr-2"
          />
          European Expansion
        </label>
        <label className="flex items-center font-medium">
          <input
            type="checkbox"
            id="oceaniaexp"
            name="oceaniaexp"
            onChange={handleOceaniaExpansionChange}
            className="mr-2"
          />
          Oceania Expansion
        </label>
        <label className="flex items-center font-medium">
          <input
            type="checkbox"
            id="asianexp"
            name="asianexp"
            className="mr-2"
          />
          Asian Expansion
        </label>
        <div className="w-full flex gap-4 my-8">
          <div>
            <div className="h-11 w-40 items-center flex font-medium">
              Player
            </div>
            <div className="h-11 w-40 items-center flex font-medium">
              Bird Points
            </div>
            <div className="h-11 w-40 items-center flex font-medium">
              Bonus Cards
            </div>
            <div className="h-11 w-40 items-center flex font-medium">
              End-of-Round Goals
            </div>
            <div className="h-11 w-40 items-center flex font-medium">Eggs</div>
            <div className="h-11 w-40 items-center flex font-medium">
              Food on Cards
            </div>
            <div className="h-11 w-40 items-center flex font-medium">
              Tucked Cards
            </div>
            {oceaniaExpansion && (
              <div className="h-11 w-40 items-center flex font-medium">
                Nectar
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <PlayerRow players={players} numPlayers={numPlayersInt} />
            <ScoreRow
              category="birdpoints"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            <ScoreRow
              category="bonuscards"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            <ScoreRow
              category="eorgoals"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            <ScoreRow
              category="eggs"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            <ScoreRow
              category="foodoncard"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            <ScoreRow
              category="tuckedcards"
              numPlayers={numPlayersInt}
              handleNumChange={handleScoreChange}
            />
            {oceaniaExpansion && (
              <ScoreRow
                category="nectar"
                numPlayers={numPlayersInt}
                handleNumChange={handleScoreChange}
              />
            )}
            <TotalRow scores={scores} numPlayers={numPlayersInt} />
          </div>
        </div>
        <div className="flex gap-4">
          <input
            type="date"
            id="gamedate"
            name="gamedate"
            defaultValue={today}
            className="w-34 bg-white border border-black text-black px-2 py-1 rounded-md"
          />
          <input
            type="time"
            id="gametime"
            name="gametime"
            defaultValue={getTorontoDateTime()}
            className="w-34 bg-white border border-black text-black px-2 py-1 rounded-md"
          />
        </div>
        <p className="text-seagull-950 text-base font-semibold mt-4 w-[480px]">
          Submitting may take up to 10 seconds after you press the button. At
          some point I will try to add in a loading spinner.
        </p>
        <button
          type="submit"
          className="text-lg font-semibold px-4 py-2 bg-seagull-900 text-white border rounded-full w-32 shadow-md hover:bg-seagull-950 active:scale-90"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
