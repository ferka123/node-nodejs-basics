import crypto from "crypto";
import fs from "fs/promises";
import { createReadStream } from "fs";
import { URL } from "url";

const calculateHash = async () => {
  return new Promise((resolve, reject) => {
    try {
      const src = new URL("./files/fileToCalculateHashFor.txt", import.meta.url)
        .pathname;
      const hash = crypto.createHash("sha256");

      const input = createReadStream(src);
      input.on("data", (chunk) => {
        hash.update(chunk);
      });
      input.on("end", () => {
        console.log(hash.digest("hex"));
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });
};

await calculateHash();
