'use client';

import { useState } from 'react';
import { Player, PointsCategory } from '@/app/lib/definitions';
import { addGame } from '@/app/lib/server-uploads';
import { sumArray, safeParseInt } from '@/app/lib/utils';
import ScoreRow from '@/app/ui/score-row';
import PlayerRow from '@/app/ui/player-row';
import TotalRow from '@/app/ui/total-row';


export default function Form({ players }: { players: Player[] }) {
    const today = new Date().toISOString().split('T')[0];
    const now = new Date().toISOString().split('T')[1].substring(0, 5);
    const numPlayersOptions = Array.from({ length: 9 }, (_, i) => i + 2);
    const [numPlayers, setNumPlayers] = useState('2');
    const numPlayersInt = parseInt(numPlayers);
    const [scores, setScores] = useState(Array(8).fill(null).map(() => new Array(7).fill(0)));
    const [oceaniaExpansion, setOceaniaExpansion] = useState(false);
    const pointsCategories: PointsCategory = {
        'birdpoints': 1,
        'bonuscards': 2,
        'eorgoals': 3,
        'eggs': 4,
        'foodoncard': 5,
        'tuckedcards': 6,
        'nectar': 7,
    };

    const handleNumPlayersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setNumPlayers(event.target.value);
    };

    const handleOceaniaExpansionChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        setOceaniaExpansion(event.target.checked);
    };

    const handleScoreChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const playerNumber = parseInt(event.target.id.charAt(1));
        const category = event.target.id.slice(2);
        const nextScores = scores.slice();
        nextScores[playerNumber - 1][pointsCategories[category] - 1] = safeParseInt(event.target.value);
        setScores(nextScores);
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
                    <input type='checkbox' id='oceaniaexp' name='oceaniaexp' onChange={handleOceaniaExpansionChange}/>
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
                        { oceaniaExpansion && <div className="mb-2">Nectar</div>}
                    </div>
                    <div className='flex flex-col'>
                        <PlayerRow players={players} numPlayers={numPlayersInt} />
                        <ScoreRow category='birdpoints' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='bonuscards' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='eorgoals' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='eggs' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='foodoncard' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        <ScoreRow category='tuckedcards' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />
                        { oceaniaExpansion && <ScoreRow category='nectar' numPlayers={numPlayersInt} handleNumChange={handleScoreChange} />}
                        <TotalRow scores={scores} numPlayers={numPlayersInt} />
                    </div>
                </div>
                <input type="date" id="gamedate" name="gamedate" defaultValue={today} className="w-32"/>
                <input type="time" id="gametime" name="gametime" defaultValue={now} className="w-32"/>
                <button type='submit' className="border border-black">Submit</button>
            </div>
        </form>
    );
}