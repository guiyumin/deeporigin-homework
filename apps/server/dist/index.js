"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true,
}).withTypeProvider();
fastify.get("/", (req, res) => {
    res.send("Hello World!");
});
const start = async () => {
    try {
        const address = await fastify.listen({ port: 9000 });
        fastify.log.info(`Server is running on ${address}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
