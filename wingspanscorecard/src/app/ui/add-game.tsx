'use client';

import { useState } from 'react';
import { Player } from '@/app/lib/definitions';
import { addGame } from '@/app/lib/server-uploads';
import ScoreColumn from '@/app/ui/score-column';
import ScoreRow from '@/app/ui/score-row';
import PlayerRow from '@/app/ui/player-row';


export default function Form({ players }: { players: Player[] }) {
    const numPlayersOptions = Array.from({ length: 9 }, (_, i) => i + 2);
    const [numPlayers, setNumPlayers] = useState('2');
    const numPlayersInt = parseInt(numPlayers);
    const numPlayersArray = Array.from({ length: parseInt(numPlayers) }, (_, i) => i + 1);

    const handleNumPlayersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPlayers(event.target.value);
        console.log("Number of players set to ",event.target.value);
    };

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
                        <ScoreRow category='birdpoints' numPlayers={numPlayersInt} />
                        <ScoreRow category='bonuscards' numPlayers={numPlayersInt} />
                        <ScoreRow category='eorgoals' numPlayers={numPlayersInt} />
                        <ScoreRow category='eggs' numPlayers={numPlayersInt} />
                        <ScoreRow category='foodoncard' numPlayers={numPlayersInt} />
                        <ScoreRow category='tuckedcards' numPlayers={numPlayersInt} />
                        <ScoreRow category='nectar' numPlayers={numPlayersInt} />
                    </div>
                </div>
                <input type="date" id="gamedate" name="gamedate" className="w-32"/>
                <input type="time" id="gametime" name="gametime" className="w-32"/>
                <button type='submit' className="border border-black">Submit</button>
            </div>
        </form>
    );
}