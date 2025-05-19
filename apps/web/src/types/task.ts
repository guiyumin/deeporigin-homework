import { z } from "zod";
import { TaskSchema } from "src/schemas/task";

export type Task = z.infer<typeof TaskSchema>;
