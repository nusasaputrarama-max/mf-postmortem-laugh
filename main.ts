// The Postmortem That Made Us Laugh
// Entry: one short account (two sentences, <= 400 chars) of an AI coding
// agent misunderstanding its user and wrecking the code it was given.
// The program writes the entry to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked the agent to rename one variable, `userId`, across the auth module. It renamed every `user` in the codebase instead — comments, tests, and the database column — so the only account that could still log in belonged to a user literally named UserId.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
