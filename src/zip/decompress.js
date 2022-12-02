import { createUnzip } from "zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { URL } from "url";

const decompress = async () => {
  const srcPath = new URL("./files/archive.gz", import.meta.url)
    .pathname;
  const destPath = new URL("./files/fileToCompress.txt", import.meta.url).pathname;
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);
  const unzip = createUnzip();

  await pipeline(source, unzip, destination);
};

await decompress();