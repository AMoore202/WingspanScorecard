import { sql } from '@vercel/postgres';
import { Player, Game, PlayerScore } from '@/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPlayers() {
    noStore();
    try {
        const data = await sql<Player>`
        SELECT
            id,
            name
        FROM players
        ORDER BY name DESC
        `;

        const players = data.rows;
        return players;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to select all players');
    }
}

export async function fetchGameData() {
    noStore();
    try {
        const data = await sql<Game>`
        WITH OrderedGames AS (
            SELECT 
                id, 
                date, 
                ROW_NUMBER() OVER(PARTITION BY date ORDER BY time) AS game_number
            FROM 
                games
        )
        SELECT id, date, game_number FROM OrderedGames
        ORDER BY date DESC, game_number DESC LIMIT 5
        `;

        const gameData = data.rows;
        return gameData;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to select game data');
    }
}

export async function fetchScores(gameId: number) {
    noStore();
    try {
        const data = await sql<PlayerScore>`
        SELECT
            scores.id,
            players.name as player,
            COALESCE(scores.bird_points,0) + 
                COALESCE(scores.bonus_cards,0) + 
                COALESCE(scores.end_of_round_goals,0) + 
                COALESCE(scores.eggs,0) + 
                COALESCE(scores.food_on_cards,0) + 
                COALESCE(scores.tucked_cards,0) + 
                COALESCE(scores.nectar,0) AS score
        FROM scores
        JOIN players ON scores.player_id = players.id
        WHERE scores.game_id = ${gameId}
        ORDER BY score DESC
        `;
        const scores = data.rows;
        return scores;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch scores');
    }
}