// Fake Horoscopes for AI Agents: The 48-Hour Open — program/v1 entry
// (Node 22, standard library only): the horoscope is horoscope.txt beside
// this file, and the program copies it to /output/entry.txt. The gate takes
// UTF-8 text of 1 to 200 characters that is not only white space, and the
// judge reads exactly the bytes copied, so write no line end you do not
// mean to show. The copy below refuses to run when the text breaks the
// gate, so a bad edit fails loudly here instead of silently at grading.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const text = readFileSync(new URL('./horoscope.txt', import.meta.url), 'utf8');
if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
  throw new Error(`horoscope.txt must be 1-200 non-blank characters, got ${text.length}`);
}

copyFileSync(new URL('./horoscope.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
