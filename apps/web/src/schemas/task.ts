import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string(),
});

export const TaskSchema = z.object({
  id: z.number(),
  plasmid: z.string(),
  volume: z.number(),
  assignees: z.array(UserSchema),
  lastModified: z.number(),
});
