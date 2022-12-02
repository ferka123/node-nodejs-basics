import { cpus } from "os";
import { Worker, workerData } from "worker_threads";
import { URL } from "url";

const performCalculations = async () => {
  const threadsNum = cpus().length;
  const workerPath = new URL("worker.js", import.meta.url).pathname;

  const result = await Promise.all(
    [...Array(threadsNum)].map((_, index) => {
      return new Promise((resolve) => {
        const worker = new Worker(workerPath, { workerData: 10 + index });
        worker.once("message", (message) => {
          resolve({ status: "resolved", data: message });
        });
        worker.once("error", () => {
          resolve({ status: "error", data: null });
        });
      });
    })
  );

  console.log(result);
};

await performCalculations();
