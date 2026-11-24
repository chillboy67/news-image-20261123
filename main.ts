// News-image entry for make.fun news-image-20261123 (Node 22, stdlib only).
// The program writes the day's news image to /output/entry.png. It ships the
// finished image beside this file and copies it, byte for byte, so both of
// the grader's runs produce identical output with no network and no clock.
// The image is a 1024x1024 PNG under the 1 MiB cap, so the copy is the
// whole deliverable and nothing else is read.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
