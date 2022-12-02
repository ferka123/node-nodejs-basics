import { createWriteStream } from "fs";
import { URL } from "url";

const write = async () => {
  return new Promise((resolve) => {
    const filePath = new URL("./files/fileToWrite.txt", import.meta.url)
      .pathname;
    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
    process.on("SIGINT", resolve);
  });
};

await write();