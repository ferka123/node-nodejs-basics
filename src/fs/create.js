import fs from "fs/promises";
import { URL } from "url";

const pathExists = (path) =>
  fs.stat(path).then(
    () => true,
    () => false
  );

const create = async () => {
  const freshPath = new URL("./files/fresh.txt", import.meta.url).pathname;
  const exists = await pathExists(freshPath);
  if (exists) throw new Error("FS operation failed");
  await fs.writeFile(freshPath, "I am a fresh file!", "utf8");
};

await create();
