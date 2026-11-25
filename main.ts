// The Tired Dark Lord — a 100-word villain monologue.
// Writes the monologue exactly to /output/entry.txt, deterministically.
// The entry gate (RULES.txt) requires UTF-8 text of 1 to 600 characters;
// the monologue is 507 characters and 99 words — "about 100 words", inside the gate.
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "You're awake. Good. So am I. Again. No, don't get up, the chains won't let you and I don't want to watch you try. Here's the plan, since you'll ask. At the eclipse I take the crown. The crown takes the realm. Then the realm is mine, and all its mail. I've been at this a while. Three hundred winters. You'd think the dungeon would feel like home by now. The damp gets in. The rats know my name. One of them sleeps in my boot. I let him. It's nice, someone sleeping. Anyway. Eclipse. Crown. Doom. Good night.";

// Guard the gate before writing: never emit an entry the scorer would refuse.
const wordCount = MONOLOGUE.split(/\s+/).length;
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600) {
  throw new Error(`monologue is ${MONOLOGUE.length} characters; gate requires 1 to 600`);
}
if (wordCount < 90 || wordCount > 110) {
  throw new Error(`monologue is ${wordCount} words; brief asks for about 100`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
console.log(`wrote /output/entry.txt (${MONOLOGUE.length} characters, ${wordCount} words)`);
