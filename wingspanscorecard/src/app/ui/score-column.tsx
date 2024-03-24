import { Player } from '@/app/lib/definitions';

export default function ScoreColumn({ players, playerNum}: {players: Player[]; playerNum: string}) {
    const name = `p${playerNum}name`;
    const birdpoints = `p${playerNum}birdpoints`;
    const bonuscards = `p${playerNum}bonuscards`;
    const eorgoals = `p${playerNum}eorgoals`; 
    const eggs = `p${playerNum}eggs`; 
    const foodoncard = `p${playerNum}foodoncard`; 
    const tuckedcards = `p${playerNum}tuckedcards`; 
    const nectar = `p${playerNum}nectar`;

    return (
        <div>
            <select
                id={name}
                name={name}
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
                id={birdpoints}
                name={birdpoints}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={bonuscards}
                name={bonuscards}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={eorgoals}
                name={eorgoals}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={eggs}
                name={eggs}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={foodoncard}
                name={foodoncard}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={tuckedcards}
                name={tuckedcards}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
            <input
                id={nectar}
                name={nectar}
                type="number"
                step="1"
                className="border border-black w-full mb-2"
            />
        </div>
    );
}

