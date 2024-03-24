import { Player } from '@/app/lib/definitions';
import { createGame } from '@/app/lib/action';

export default function Form({ players }: { players: Player[] }) {
    return (
        <form action={createGame}>
            <div className="flex flex-col gap-4 w-full">
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
                <div className="w-full grid grid-cols-3 gap-4">
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
                    <div>
                        <select
                            id='p1name'
                            name='p1name'
                            defaultValue=''
                            className="border border-black w-full mb-2"
                        >
                            <option value='' disabled>Select a player</option>
                            {players.map((player) => (
                                <option key={player.id} value={player.id}>
                                    {player.name}
                                </option>
                            ))}
                        </select>
                        <input
                            id='p1birdpoints'
                            name='p1birdpoints'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1bonuscards'
                            name='p1bonuscards'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1eorgoals'
                            name='p1eorgoals'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1eggs'
                            name='p1eggs'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1foodoncard'
                            name='p1foodoncard'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1tuckedcards'
                            name='p1tuckedcards'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p1nectar'
                            name='p1nectar'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                    </div>
                    <div>
                        <select
                            id='p2name'
                            name='p2name'
                            defaultValue=''
                            className="border border-black w-full mb-2"
                        >
                        <option value='' disabled>Select a player</option>
                            {players.map((player) => (
                                <option key={player.id} value={player.id}>
                                    {player.name}
                                </option>
                            ))}
                        </select>
                        <input
                            id='p2birdpoints'
                            name='p2birdpoints'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2bonuscards'
                            name='p2bonuscards'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2eorgoals'
                            name='p2eorgoals'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2eggs'
                            name='p2eggs'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2foodoncard'
                            name='p2foodoncard'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2tuckedcards'
                            name='p2tuckedcards'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                        <input
                            id='p2nectar'
                            name='p2nectar'
                            type="number"
                            step="1"
                            className="border border-black w-full mb-2"
                        />
                    </div>
                </div>
                <input type="date" id="gamedate" name="gamedate" className="w-32"/>
                <input type="time" id="gametime" name="gametime" className="w-32"/>
                <button type='submit' className="border border-black">Submit</button>
            </div>
        </form>
    );
}