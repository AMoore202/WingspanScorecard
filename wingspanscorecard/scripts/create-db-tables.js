const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function createPlayersTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "players" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS players (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "players" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating players table:', error);
    throw error;
  }
}

async function createGamesTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "Games" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS games (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL
  );
`;

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating games tables:', error);
    throw error;
  }
}

async function createScoresTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "scores" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS scores (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        game_id UUID NOT NULL,
        player_id UUID not NULL,
        bird_points INT NOT NULL,
        bonus_cards INT NOT NULL,
        end_of_round_goals INT NOT NULL,
        eggs INT NOT NULL,
        food_on_cards INT NOT NULL,
        tucked_cards INT NOT NULL,
        nectar INT NOT NULL
      );
    `;

    console.log(`Created "scores" table`);

    return {
      createTable,
    };
  } catch (error) {
    console.error('Error creating scores table:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await createPlayersTable(client);
  await createGamesTable(client);
  await createScoresTable(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to create the databases:',
    err,
  );
});
