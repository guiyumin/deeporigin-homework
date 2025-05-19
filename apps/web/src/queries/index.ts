import { TaskSchema } from "src/schemas/task";
import { z, ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export const fetchUserTasks = async ({ baseUrl }: { baseUrl: string }) => {
  try {
    const res = await fetch(`${baseUrl}/data`);
    const json = await res.json();

    const schema = z.object({
      code: z.number(),
      data: z.object({
        tasks: z.array(TaskSchema),
      }),
      message: z.string(),
    });

    const result = schema.parse(json);

    if (result.code !== 200) {
      return {
        data: null,
        error: result.message,
      };
    }

    return {
      data: {
        ...result.data,
      },
      error: null,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        data: null,
        error: fromZodError(error).message,
      };
    }

    return {
      data: null,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
