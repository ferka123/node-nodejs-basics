import fs from "fs/promises";
import { URL } from "url";

const pathExists = (path) =>
  fs.stat(path).then(
    () => true,
    () => false
  );

const copy = async () => {
  const src = new URL("./files", import.meta.url).pathname;
  const dest = new URL("./files_copy", import.meta.url).pathname;

  const srcExists = await pathExists(src);
  const destExists = await pathExists(dest);

  if (!srcExists || destExists) throw new Error("FS operation failed");
  await fs.cp(src, dest, { recursive: true });
};

copy();
