"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { safeParseInt, safeParseBool } from "@/lib/utils";

export async function addGame(formData: FormData) {
  const numPlayers = safeParseInt(formData.get("numplayers"));

  const GameDataSchema = z.object({
    id: z.number(),
    date: z.string(),
    time: z.string(),
    european_expansion: z.boolean(),
    oceania_expansion: z.boolean(),
    asian_expansion: z.boolean(),
  });

  const AddGame = GameDataSchema.omit({ id: true });

  const { date, time, european_expansion, oceania_expansion, asian_expansion } =
    AddGame.parse({
      date: formData.get("gamedate"),
      time: formData.get("gametime"),
      european_expansion: safeParseBool(formData.get("europeanexp")),
      oceania_expansion: safeParseBool(formData.get("oceaniaexp")),
      asian_expansion: safeParseBool(formData.get("asianexp")),
    });

  await sql`
    INSERT INTO games (date, time, european_expansion, oceania_expansion, asian_expansion)
    VALUES (${date}, ${time}, ${european_expansion}, ${oceania_expansion}, ${asian_expansion})
    `;

  const ScoreDataSchema = z.object({
    id: z.string(),
    bird_points: z.number(),
    bonus_cards: z.number(),
    end_of_round_goals: z.number(),
    eggs: z.number(),
    food_on_cards: z.number(),
    tucked_cards: z.number(),
    nectar: z.number(),
  });

  for (let i = 1; i <= numPlayers; i++) {
    const {
      id,
      bird_points,
      bonus_cards,
      end_of_round_goals,
      eggs,
      food_on_cards,
      tucked_cards,
      nectar,
    } = ScoreDataSchema.parse({
      id: formData.get(`p${i}name`),
      bird_points: safeParseInt(formData.get(`p${i}birdpoints`)),
      bonus_cards: safeParseInt(formData.get(`p${i}bonuscards`)),
      end_of_round_goals: safeParseInt(formData.get(`p${i}eorgoals`)),
      eggs: safeParseInt(formData.get(`p${i}eggs`)),
      food_on_cards: safeParseInt(formData.get(`p${i}foodoncard`)),
      tucked_cards: safeParseInt(formData.get(`p${i}tuckedcards`)),
      nectar: safeParseInt(formData.get(`p${i}nectar`)),
    });

    await sql`
        INSERT INTO scores (game_id,player_id,bird_points,bonus_cards,end_of_round_goals,eggs,food_on_cards,tucked_cards,nectar)
        VALUES ((SELECT MAX(id) FROM games), ${id}, ${bird_points}, ${bonus_cards}, ${end_of_round_goals}, ${eggs}, ${food_on_cards}, ${tucked_cards}, ${nectar})
        `;
  }

  revalidatePath("/");
  redirect("/");
}

export async function addPlayer(formData: FormData) {
  const PlayerDataSchema = z.object({
    id: z.string(),
    name: z.string(),
  });

  const AddPlayer = PlayerDataSchema.omit({ id: true });

  const { name } = AddPlayer.parse({
    name: formData.get("playername"),
  });

  await sql`
    INSERT INTO players (name)
    VALUES (${name})
    `;

  revalidatePath("/add-game");
  redirect("/add-game");
}
