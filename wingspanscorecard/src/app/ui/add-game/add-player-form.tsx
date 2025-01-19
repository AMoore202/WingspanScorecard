"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addPlayer } from "@/app/lib/server-uploads";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50),
});

export default function AddPlayerForm() {
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
  }

  return (
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
        <button
          type="submit"
          className="flex h-9 items-center bg-seagull-50 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-lg font-medium text-seagull-700 border-2 border-seagull-700 hover:border-seagull-900 hover:text-seagull-900"
        >
          Submit
        </button>
      </form>
    </Form>
  );
}
