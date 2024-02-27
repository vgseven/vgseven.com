"use client";

import { Button } from "@/ui/primitives/button";
import { Card, CardContent } from "@/ui/primitives/card";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/primitives/form";

import { useForm } from "react-hook-form";
import { SubscribeUpdatesFormSchema } from "@/lib/schemas/subscribe-updates-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/ui/primitives/input";
import React, { useState } from "react";
import { toast } from "sonner";

export default function SubscribeUpdatesForm() {
  const form = useForm<z.infer<typeof SubscribeUpdatesFormSchema>>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: zodResolver(SubscribeUpdatesFormSchema),
  });

  const onSubmit = async (
    values: z.infer<typeof SubscribeUpdatesFormSchema>,
  ) => {
    console.log(values);

    const response = await fetch("/api/subscribe-updates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    });

    if (response.ok) {
      setTimeout(() => {
        form.reset();
      }, 2000);

      toast("Thank You...", {
        description: "You're Subscribed, Now you'll receive every new updates.",
        action: {
          label: "Close",
          onClick: () => form.reset(),
        },
      });
    } else {
      toast("Oops!", {
        description: "Look's like you're already subscribed..",
        action: {
          label: "Close",
          onClick: () => console.log("Subscribed."),
        },
      });
    }
  };

  const [spin, setSpin] = useState(false);

  const spinnerHandler = () => {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);
    }, 5000);
  };
  return (
    <div className={"flex justify-center items-center my-8"}>
      <Card
        className={"bg-transparent w-96 max-sm:w-auto rounded-3xl px-4 py-6"}
      >
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={"flex flex-col gap-4"}
            >
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Name</FormLabel>
                    <FormControl>
                      <Input
                        className={"rounded-full px-4 py-6"}
                        placeholder="Vaibhav Gosavi"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={"email"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your Email</FormLabel>
                    <FormControl>
                      <Input
                        className={"rounded-full px-4 py-6"}
                        placeholder="vg@vgseven.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className={
                  "rounded-full bg-gradient-to-r from-purple-500 to-purple-900"
                }
                onClick={spinnerHandler}
              >
                {spin ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
