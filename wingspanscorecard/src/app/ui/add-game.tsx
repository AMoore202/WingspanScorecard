'use client';

import { useState } from 'react';
import { Player } from '@/app/lib/definitions';
import { addGame } from '@/app/lib/server-uploads';
import ScoreRow from '@/app/ui/score-row';
import PlayerRow from '@/app/ui/player-row';


export default function Form({ players }: { players: Player[] }) {
    const numPlayersOptions = Array.from({ length: 9 }, (_, i) => i + 2);
    const [numPlayers, setNumPlayers] = useState('2');
    const numPlayersInt = parseInt(numPlayers);
    const [p1Score, setP1Score] = useState('0');
    const [p2Score, setP2Score] = useState('0');
    const [p3Score, setP3Score] = useState('0');
    const [p4Score, setP4Score] = useState('0');
    const [p5Score, setP5Score] = useState('0');
    const [p6Score, setP6Score] = useState('0');
    const [p7Score, setP7Score] = useState('0');
    const [p8Score, setP8Score] = useState('0');

    const scoreSetterFunctions = {
        1: setP1Score,
        2: setP2Score,
        3: setP3Score,
        4: setP4Score,
        5: setP5Score,
        6: setP6Score,
        7: setP7Score,
        8: setP8Score,
    };

    const handleNumPlayersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPlayers(event.target.value);
    };

    const handleScoreChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const playerNumber = parseInt(event.target.id.charAt(1));
        const scoreSetterFunction = scoreSetterFunctions[playerNumber];
        scoreSetterFunction(event.target.value);
        console.log("Player 1 Score", p1Score);
        console.log("Player 2 Score", p2Score);
    };

    // const handleP1ScoreChange = ({ event, playerNumber }: { event: React.ChangeEvent<HTMLInputElement>; playerNumber: number }) => {
    //     setP1Score(event.target.value);
    //     console.log(`P${playerNumber} Score Set to `,event.target.value);
    // };


    return (
        <form action={addGame}>
            <div className="flex flex-col gap-4 w-full">
                <label>
                    Number of Players
                    <select
                        id="numplayers"
                        name="numplayers"
                        defaultValue="0"
                        className="border border-black w-32 mb-2"
                        onChange={handleNumPlayersChange}
                    >
                        {numPlayersOptions.map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    <input type='checkbox' id='europeanexp' name='europeanexp' />
                    European Expansion
                </label>
                <label>
                    <input type='checkbox' id='oceaniaexp' name='oceaniaexp' />
                    Oceania Expansion
                </label>
                <label>
                    <input type='checkbox' id='asianexp' name='asianexp' />
                    Asian Expansion
                </label>
                <div className="w-full grid grid-cols-2 gap-4">
                    <div>
                        <div className="mb-2">Player</div>
                        <div className="mb-2">Bird Points</div>
                        <div className="mb-2">Bonus Cards</div>
                        <div className="mb-2">End-of-Round Goals</div>
                        <div className="mb-2">Eggs</div>
                        <div className="mb-2">Food on Cards</div>
                        <div className="mb-2">Tucked Cards</div>
                        <div className="mb-2">Nectar</div>
                    </div>
                    <div className='flex flex-col'>
                        <PlayerRow players={players} numPlayers={numPlayersInt} />
                        <ScoreRow category='birdpoints' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='bonuscards' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='eorgoals' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='eggs' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='foodoncard' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='tuckedcards' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='nectar' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <div>{p1Score}</div>
                        <div>{p2Score}</div>
                    </div>
                </div>
                <input type="date" id="gamedate" name="gamedate" className="w-32"/>
                <input type="time" id="gametime" name="gametime" className="w-32"/>
                <button type='submit' className="border border-black">Submit</button>
            </div>
        </form>
    );
}