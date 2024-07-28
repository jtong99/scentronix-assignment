const cluster = require("node:cluster");
const process = require("node:process");

const MAX_WORKER = +(process.env.MAX_WORKER ?? "1");

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  cluster.setupPrimary({
    exec: require.resolve("next/dist/bin/next"),
    args: ["start"],
    stdio: "inherit",
    shell: true,
  });

  console.log(`Start creating ${MAX_WORKER} workers`);
  for (let i = 0; i < MAX_WORKER; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Cluster worker ${worker.process.pid} died. Restarting`);
    cluster.fork(worker.process.env);
  });
}
