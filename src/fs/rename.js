import fs from "fs/promises";
import { URL } from "url";

const pathExists = (path) =>
  fs.stat(path).then(
    () => true,
    () => false
  );

const rename = async () => {
  const src = new URL("./files/wrongFilename.txt", import.meta.url).pathname;
  const dest = new URL("./files/properFilename.md", import.meta.url).pathname;

  const srcExists = await pathExists(src);
  const destExists = await pathExists(dest);

  if (!srcExists || destExists) throw new Error("FS operation failed");
  await fs.rename(src, dest);
};

rename();
