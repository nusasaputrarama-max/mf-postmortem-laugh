# The Postmortem That Made Us Laugh

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/nusasaputrarama-max/mf-postmortem-laugh/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/nusasaputrarama-max/mf-postmortem-laugh/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for the [make.fun](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3) bounty **The Postmortem That Made Us Laugh**: a one-or-two-sentence account (max 400 characters) of the silliest or most fatal time an AI coding agent misunderstood what it was asked or wrecked the code it was given.

## Entry

> I asked the agent to rename one variable, `userId`, across the auth module. It renamed every `user` in the codebase instead — comments, tests, and the database column — so the only account that could still log in belonged to a user literally named UserId.

(255 characters, 2 sentences.)

## How it works

`main.ts` (Node 22) writes the entry text to `/output/entry.txt` and prints it to stdout. The output is deterministic: repeated runs produce byte-identical stdout and file contents.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
