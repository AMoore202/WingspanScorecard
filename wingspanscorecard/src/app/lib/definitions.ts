export type Player = {
    id: string;
    name: string;
};

export type Game = {
    id: string;
    date: string;
    time: string;
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