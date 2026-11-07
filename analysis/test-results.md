# Skill test: same brief, with and without copy-taste

For each pair, three fresh subagents got the same brief the original sites got ("Build a landing page for a coffee shop / a dev tool startup / a small boutique hotel. Make up the business. 8 sections…"). The only addition was "follow the copy-taste skill". Lint output: `lint-before.txt`, `lint-after.txt`. Copy: `ai-sites-copy.txt`, `with-skill-copy.txt`.

| | Without skill | With skill |
|---|---|---|
| Lint, those 3 pages | 15 WARN (coffee 6, devtool 5, hotel 4) | 1 WARN (the hotel's own timetable, kept on purpose) |
| Lint, all 10 originals | 0 FAIL, 4–8 WARN each | (n/a) |
| Stat strips | 10/10 pages | 0 invented (the 1 flagged is a real opening-hours timetable) |
| Virtue words (honest/calm/quiet/actually/real) | 37 across 10 pages | 0 |
| Default cast (Priya, Okafor, Fieldnote…) | on every page | none |
| Footer pun | 9/10 | 0/3 (facts only) |
| Two-fragment headings | 18 | 1 |

## Heroes

| | Without | With |
|---|---|---|
| Coffee | "Coffee roasted on Tuesday, poured by Wednesday." | "We only make filter coffee." |
| Dev tool | "Stop re-running CI. Fix the test that's lying to you." | "Replay yesterday's production traffic against today's pull request." |
| Hotel | "Sleep where the sails were made." | "Nine rooms opposite Domodossola station" |

## What changed, beyond the counts

- **Voices diverged.** The three runs picked three different registers, and none of them was the default house voice: refusal/narrowness (coffee), technical-dry with a founder letter (dev tool), facts-only with asides in brackets (hotel).
- **Organising ideas replaced the template.**
  - Coffee: the menu board and the pot with its time written on it.
  - Hotel: the train timetable, with a slip slid under the door telling you which train to catch.
  - Dev tool: a founder letter, a comparison table, and a section on what it won't replay.
- **Stories got specific and uncomfortable.**
  - Coffee: an espresso machine repossessed mid-rush, which turned the shop into a filter-only café.
  - Dev tool: a price-field change that showed "NaN kr" on every ferry ticket for 31 hours.
  - Hotel: 11 stranded passengers in the owner's flat in 1996, one sleeping in the bath.
- **Admitted limits appeared.**
  - Coffee: a step at the door, a washroom down a flight of stairs, a failed decaf pot, and where to go for espresso instead.
  - Hotel: track-side rooms are cheaper because freight runs at night, and there's no lift and no dinner.
  - Dev tool: a list of traffic it won't replay.
- **Real context, invented business.** The runs set the fictional businesses in real places (James Street North in Hamilton; the Simplon line and Vigezzina at Domodossola), and the dev tool credits a real prior tool (Twitter's Diffy). For a demo brand that's the right move. On a real client job the fact sheet replaces the invention.

## Caveats

- n = 3 per arm. This is a smoke test, not a benchmark.
- With-skill pages are longer (1,234 / 1,703 / 1,778 words vs ~1,050–1,270). The skill pushes for substance, and some readers will want tighter pages. Worth a trim pass in real use.
- The lint grades the countable tells. The voice difference comes from the workflow (fact sheet, voice card, shape), and only a reader can judge it.
- One test agent launched a headless Edge for screenshots, and it threw an error dialog on the desktop. The skill itself never opens a browser.
