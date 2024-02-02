import { z } from "zod";

export const SubscribeUpdatesFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "It's not an valid name.." })
    .max(256, { message: "Is this real name ?" }),
  email: z
    .string()
    .min(3, { message: "It's not an valid email.." })
    .max(256, { message: "Is this real email ?" })
    .email(),
});
