import fastify from "fastify";

const app = fastify({ logger: true });

app.get("/", async (request, reply) => {
  return { hello: "opal" };
});

const start = async () => {
  try {
    await app.listen(8080, "0.0.0.0");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
