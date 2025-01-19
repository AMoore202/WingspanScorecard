import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addPlayer } from "@/app/lib/server-uploads";

export default function AddPlayerDialog() {
  // const [playerName, setPlayerName] = useState("");

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("playername", playerName);
  //   await addPlayer(formData);
  //   // Optionally, close the dialog or reset the form here
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900">
          + Add Player
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Player</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input id="name" />
        </div>
        <DialogFooter>
          <button
            type="submit"
            className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900"
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
