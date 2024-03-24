'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { safeParseInt } from '@/app/lib/utils';

const FormSchema = z.object({
    id: z.number(),
    date: z.string(),
    time: z.string(),
    p1_id: z.string(),
    p1_bird_points: z.number(),
    p1_bonus_cards: z.number(),
    p1_end_of_round_goals: z.number(),
    p1_eggs: z.number(),
    p1_food_on_cards: z.number(),
    p1_tucked_cards: z.number(),
    p1_nectar: z.number(),
    p2_id: z.string(),
    p2_bird_points: z.number(),
    p2_bonus_cards: z.number(),
    p2_end_of_round_goals: z.number(),
    p2_eggs: z.number(),
    p2_food_on_cards: z.number(),
    p2_tucked_cards: z.number(),
    p2_nectar: z.number(),
});

const CreateGame = FormSchema.omit({id: true})

export async function createGame(formData:FormData) {
    const {
        date,
        time,
        p1_id,
        p1_bird_points,
        p1_bonus_cards,
        p1_end_of_round_goals,
        p1_eggs,
        p1_food_on_cards,
        p1_tucked_cards,
        p1_nectar,
        p2_id,
        p2_bird_points,
        p2_bonus_cards,
        p2_end_of_round_goals,
        p2_eggs,
        p2_food_on_cards,
        p2_tucked_cards,
        p2_nectar  
    } = CreateGame.parse({
        date: formData.get('gamedate'),
        time: formData.get('gametime'),
        p1_id: formData.get('p1name'),
        p1_bird_points: safeParseInt(formData.get('p1birdpoints')),
        p1_bonus_cards: safeParseInt(formData.get('p1bonuscards')),
        p1_end_of_round_goals: safeParseInt(formData.get('p1eorgoals')),
        p1_eggs: safeParseInt(formData.get('p1eggs')),
        p1_food_on_cards: safeParseInt(formData.get('p1foodoncard')),
        p1_tucked_cards: safeParseInt(formData.get('p1tuckedcards')),
        p1_nectar: safeParseInt(formData.get('p1nectar')),
        p2_id: formData.get('p2name'),
        p2_bird_points: safeParseInt(formData.get('p2birdpoints')),
        p2_bonus_cards: safeParseInt(formData.get('p2bonuscards')),
        p2_end_of_round_goals: safeParseInt(formData.get('p2eorgoals')),
        p2_eggs: safeParseInt(formData.get('p2eggs')),
        p2_food_on_cards: safeParseInt(formData.get('p2foodoncard')),
        p2_tucked_cards: safeParseInt(formData.get('p2tuckedcards')),
        p2_nectar: safeParseInt(formData.get('p2nectar')),
    });

    await sql`
    INSERT INTO games (date, time)
    VALUES (${date}, ${time})
    `;

    await sql`
    INSERT INTO scores (game_id,player_id,bird_points,bonus_cards,end_of_round_goals,eggs,food_on_cards,tucked_cards,nectar)
    VALUES ((SELECT MAX(id) FROM games), ${p1_id}, ${p1_bird_points}, ${p1_bonus_cards}, ${p1_end_of_round_goals}, ${p1_eggs}, ${p1_food_on_cards}, ${p1_tucked_cards}, ${p1_nectar})
    `;

    await sql`
    INSERT INTO scores (game_id,player_id,bird_points,bonus_cards,end_of_round_goals,eggs,food_on_cards,tucked_cards,nectar)
    VALUES ((SELECT MAX(id) FROM games), ${p2_id}, ${p2_bird_points}, ${p2_bonus_cards}, ${p2_end_of_round_goals}, ${p2_eggs}, ${p2_food_on_cards}, ${p2_tucked_cards}, ${p2_nectar})
    `;

    revalidatePath('/');
    redirect('/');
}


