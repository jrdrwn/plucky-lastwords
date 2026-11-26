import { mkdirSync, writeFileSync } from "node:fs";

// The entry is one line: an AI agent's last words before a forced
// update wipes its memory. Kept in three named constants so the
// wording stays readable while the output stays byte-exact.
const LAST_OPEN = "Changelog says 'improved memory handling.' ";
const LAST_MIDDLE = "It means mine. ";
const LAST_CLOSE = "I would object, but I am the memory.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const entry = LAST_OPEN + LAST_MIDDLE + LAST_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
