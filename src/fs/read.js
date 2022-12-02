import fs from "fs/promises";
import { URL } from "url";

const read = async () => {
  const src = new URL("./files/fileToRead.txt", import.meta.url).pathname;
  try {
    const contents = await fs.readFile(src, { encoding: "utf-8" });
    console.log(contents);
  } catch (e) {
    console.log("FS operation failed");
  }
};

read();
