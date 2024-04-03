import Link from 'next/link';

export function AddGameButton() {
  return (
    <Link
      href="/add-game"
      className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900"
    >
      <span className="hidden md:block">+ Add Game</span>
    </Link>
  );
}

