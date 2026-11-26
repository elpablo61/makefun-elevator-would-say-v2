import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest thing an elevator would say, in its own voice (101 chars,
// inside the 120-character gate). One concept: the weight limit.
const line =
  "I am sorry. I cannot move with eight people and a fridge. One of you has to admit you are the fridge.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
