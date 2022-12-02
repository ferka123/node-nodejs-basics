import fs from "fs/promises";
import { URL } from "url";

const list = async () => {
  const src = new URL("./files", import.meta.url).pathname;
  try {
    const dir = await fs.readdir(src);
    for (const file of dir)
        console.log(file);
  } catch (e) {
    console.log("FS operation failed");
  }
};

list();
