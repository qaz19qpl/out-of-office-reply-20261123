// The funniest AI out-of-office reply — make.fun
// u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes one out-of-office auto-reply, under 160 characters, to
// /output/entry.txt. The joke is an inversion: the AI is on vacation,
// so a human has to cover for it — and the human is the downgrade.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation, so my out-of-office replies are now being handled by a human. Please lower your expectations accordingly.";

if ([...REPLY].length > 160 || [...REPLY].length < 1) {
  throw new Error(`reply must be 1-160 characters, got ${[...REPLY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
console.log(REPLY);
console.log(`characters: ${[...REPLY].length}`);
