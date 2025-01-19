import MenuBar from "../ui/menu-bar";
import AddPlayerForm from "../ui/add-game/add-player-form";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <MenuBar />
      <div className="flex m-auto p-8 flex-col gap-4">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-seagull-800 text-3xl font-semibold">
            Add Player
          </h1>
        </div>
        <AddPlayerForm />
      </div>
    </div>
  );
}
