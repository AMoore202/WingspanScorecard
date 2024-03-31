import { sql } from '@vercel/postgres';
import { Player, Game, PlayerScore } from '@/app/lib/definitions';
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

// export async function fetchScores(gameId: number) {
//     noStore();
//     try {
//         const data = await sql<PlayerScore>`
//         SELECT 
//         `
//     }
// }