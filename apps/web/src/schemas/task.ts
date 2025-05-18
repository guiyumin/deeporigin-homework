import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  plasmid: z.string(),
  volume: z.number(),
  assignees: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      avatar: z.string(),
    })
  ),
  lastModified: z.number(),
});

export type Task = z.infer<typeof TaskSchema>;
