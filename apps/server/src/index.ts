import "dotenv/config";
import Fastify from "fastify";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import { TASKS } from "./libs/data-gen";

const fastify = Fastify({
  logger: true,
}).withTypeProvider<TypeBoxTypeProvider>();

fastify.get("/", (req, res) => {
  res.send("Hello World!");
});

fastify.get("/data", (req, res) => {
  res.status(200).send({
    code: 200,
    data: {
      tasks: TASKS,
    },
    message: "data fetched successfully",
  });
});

const start = async () => {
  try {
    const address = await fastify.listen({ port: 9000 });
    fastify.log.info(`Server is running on ${address}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
