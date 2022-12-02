import { createReadStream } from "fs";
import { URL } from "url";

const read = async () => {
  return new Promise((resolve, reject) => {
    try {
      const path = new URL("./files/fileToRead.txt", import.meta.url).pathname;
      const stream = createReadStream(path, "utf-8");
      stream.pipe(process.stdout);
      stream.on("end", resolve);
    } catch (e) {
      reject(e);
    }
  });
};

await read();
