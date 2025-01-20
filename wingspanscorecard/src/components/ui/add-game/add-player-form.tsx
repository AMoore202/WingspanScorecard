"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addPlayer } from "@/lib/server-uploads";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),
});

export default function AddPlayerForm() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("playername", values.name);
    addPlayer(formData);
    console.log(values);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900">
          + Add Player
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Player</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Braden" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <button
                type="submit"
                className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900"
              >
                Submit
              </button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
