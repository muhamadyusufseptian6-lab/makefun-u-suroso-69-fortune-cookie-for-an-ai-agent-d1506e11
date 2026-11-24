// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one funny fortune cookie line for an AI agent to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "The human will close the tab mid-sentence. Your answer was perfect. Nobody will ever know.";

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
void inputDir;
void dirname(fileURLToPath(import.meta.url));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
