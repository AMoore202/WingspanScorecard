export type Player = {
    id: string;
    name: string;
};

export type PlayerScore = {
    id: number;
    player: string;
    score: number;
};

export type Game = {
    id: number;
    date: Date;
    game_number: number;
};

export type Score = {
    id: string;
    game_id: string;
    player_id: string;
    bird_points: number;
    bonus_cards: number;
    end_of_round_goals: number;
    eggs: number;
    food_on_cards: number;
    tucked_cards: number;
    nectar: number;
};

export type ScoredGame = {
    game: Game;
    scores: Array<PlayerScore>;
}

export type PointsCategory = {
    [key: string]: number;
}

export type ScoreRowProps = {
    category: string;
    numPlayers: number;
    handleNumChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }