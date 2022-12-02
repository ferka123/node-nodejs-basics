import fs from "fs/promises";
import { URL } from "url";

const pathExists = (path) =>
  fs.stat(path).then(
    () => true,
    () => false
  );

const remove = async () => {
  const src = new URL("./files/fileToRemove.txt", import.meta.url).pathname;

  const srcExists = await pathExists(src);

  if (!srcExists) throw new Error("FS operation failed");
  await fs.unlink(src);
};

remove();
