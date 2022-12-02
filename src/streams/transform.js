import { pipeline } from "stream/promises";
import { Transform } from "stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
          callback(null, ['\n',...chunk.toString().trim()].reverse().join(''));
        },
      });
    await pipeline(process.stdin, reverse, process.stdout)
};

await transform();
