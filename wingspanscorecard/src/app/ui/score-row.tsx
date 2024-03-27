export default function ScoreRow({ category, numPlayers, handleNumChange }: { category: string; numPlayers: number; handleNumChange: Function }) {
    const numPlayersArray = Array.from({ length: numPlayers }, (_, i) => i + 1);

    return (
        <div className="flex gap-2">
            {numPlayersArray.map ((number) => (
                <input
                    key={number}
                    id={`p${number}${category}`}
                    name={`p${number}${category}`}
                    type="number"
                    step="1"
                    className="border border-black mb-2 w-40"
                    onChange={handleNumChange}
                />
            ))}
        </div>
    );
}