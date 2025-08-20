import { sql } from '@vercel/postgres';
import { Player, Game, PlayerScore, ScoreClean } from '@/lib/definitions';
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

export async function fetchLatestGameIds(page: number = 1, pageSize: number = 5) {
    noStore();

    const offset = (page - 1) * pageSize;

    try {
        const data = await sql<{ id: number }>`
            SELECT 
                id
            FROM 
                games
            ORDER BY date DESC, time DESC
            LIMIT ${pageSize} OFFSET ${offset}
        `;

        return data.rows.map(row => row.id);
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to select game ids');
    }
}

export async function fetchFilteredGameIds(playerId: number, page: number = 1, pageSize: number = 5): Promise<{ids: number[]; totalCount: number}> {
    noStore();

    const offset = (page - 1) * pageSize;

    console.log(`Fetching games for playerId: ${playerId}, page: ${page}, pageSize: ${pageSize}`);

    try {
        let countResult;
        let dataResult;

        if (playerId === 0) {
            countResult = await sql<{ count: number }>`
                SELECT COUNT(*)::int FROM games
            `;
            dataResult = await sql<{ id: number }>`
                SELECT id FROM games
                ORDER BY date DESC, time DESC
                LIMIT ${pageSize} OFFSET ${offset}
            `;
        } else {
            countResult = await sql<{ count: number }>`
                SELECT COUNT(DISTINCT game_id) AS count
                FROM scores
                WHERE player_id = ${playerId}
            `;
            dataResult = await sql<{ game_id: number }>`
                SELECT 
                    game_id 
                FROM 
                    scores
                WHERE 
                    player_id = ${playerId}
                ORDER BY game_id DESC
                LIMIT ${pageSize} OFFSET ${offset}
            `;
        }

        return {
            ids: playerId === 0
                ? (dataResult.rows as { id: number }[]).map(row => row.id)
                : (dataResult.rows as { game_id: number }[]).map(row => row.game_id),
            totalCount: countResult.rows[0].count
        };
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to select game ids');
    }
}

export async function fetchGameDataById(id: number) {
    noStore();
    try {
        const data = await sql<Game>`
        WITH OrderedGames AS (
            SELECT 
                id, 
                date,
                time,
                european_expansion,
                oceania_expansion,
                asian_expansion,
                ROW_NUMBER() OVER(PARTITION BY date ORDER BY time) AS game_number
            FROM 
                games
        )
        SELECT id, date, time, game_number, european_expansion, oceania_expansion, asian_expansion FROM OrderedGames
            WHERE 
                id = ${id}
        `;

        return data.rows[0]  ?? null;
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

export async function fetchRawScoresById(id: number) {
    noStore();
    try {
        const data = await sql<ScoreClean>`
        SELECT
            players.name as player,
            scores.bird_points,
            scores.bonus_cards,
            scores.end_of_round_goals,
            scores.eggs,
            scores.food_on_cards,
            scores.tucked_cards,
            scores.nectar
        FROM scores
        JOIN players ON scores.player_id = players.id
        WHERE scores.game_id = ${id}
        ORDER BY player ASC
        `;
        const rawScores = data.rows;
        return rawScores;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to fetch raw scores');
    }
}
