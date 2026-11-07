# copy-taste

A Claude Code skill for writing website copy that doesn't read like a model wrote it.

Most anti-slop prompts ban words like "elevate", "seamless" and "unlock". Current models stopped writing those. I had ten fresh Claude agents each build a landing page with no instructions about copy. Across 11,800 words they used 4 em dashes and none of the usual buzzwords.

The pages still read as machine-written. Side by side, they sounded like one writer:

- **A row of invented stats** on all 10 pages ("12 kg per batch", "9 of 10 clients come back")
- **18 headings shaped "X. Y."**, such as "Short menu. Long list of regulars." and "Twelve rooms. Three ways to stay."
- **Near-identical lines on unrelated sites.** The portfolio wrote "Four projects, four very different problems." and the architecture firm wrote "Four recent buildings, four very different sites."
- **Sincerity words used 37 times**: `honest`, `actually`, `real`, `calm`, `quiet`
- **A pun in the footer** on 9 of 10 pages
- **The same invented people.** "Priya" appears on 7 sites, and a made-up client called "Fieldnote" on 3.

copy-taste goes after that second layer.

## Before and after

Three fresh agents got the same brief as the originals ("build a landing page for a coffee shop / dev tool / boutique hotel, make up the business"), plus the skill.

| | No skill | With copy-taste |
|---|---|---|
| Coffee hero | Coffee roasted on Tuesday, poured by Wednesday. | We only make filter coffee. |
| Dev tool hero | Stop re-running CI. Fix the test that's lying to you. | Replay yesterday's production traffic against today's pull request. |
| Hotel hero | Sleep where the sails were made. | Nine rooms opposite Domodossola station |
| Lint warnings (3 pages) | 15 | 1, kept on purpose (a real timetable) |
| Sincerity words | 37 across 10 pages | 0 |

The skill also changed what the pages were about. The coffee shop became filter-only after its leased espresso machine was taken back mid-rush, and the page lists where to get a latte instead. The dev tool opens with a founder letter about a price field that showed "NaN kr" on every ferry ticket for 31 hours. The hotel admits its track-side rooms are cheaper because freight trains run at night.

The pages are in [`examples/`](examples). The full comparison is in [`analysis/test-results.md`](analysis/test-results.md).

## Install

As a plugin:

```
/plugin marketplace add Leonxlnx/copy-taste
/plugin install copy-taste@copy-taste
```

Or copy the skill folder:

```bash
git clone https://github.com/Leonxlnx/copy-taste
cp -r copy-taste/skills/copy-taste ~/.claude/skills/
```

## Use

Claude loads the skill on its own when you ask it to write or review copy for a landing page, homepage, about page, portfolio, pricing table, CTA or microcopy. You can also name it: "rewrite this hero with copy-taste".

To use it from another skill, such as a frontend or design skill, add this to that skill's `SKILL.md`:

```markdown
## Copy
All visible text on the page follows the `copy-taste` skill. Load it before writing copy.
Before finishing, run `node ~/.claude/skills/copy-taste/scripts/slop-lint.js <page.html>`,
fix every FAIL, and fix or keep on purpose every WARN.
```

## What the skill makes Claude do

1. **Build a fact sheet before writing.** This covers what it is, who it's for and who it isn't for, what customers use today instead, real numbers with sources, customer words verbatim, one flaw, and one enemy. If the facts are thin, Claude asks up to six questions. Missing proof becomes a visible `[NEED: …]` placeholder and is never invented.
2. **Pick a voice.** Claude chooses one of 12 registers taken from real sites: technical-dry like Stripe, founder letter like HEY, proper-noun restraint like Aman, self-aware absurd like Oatly, and so on. The default model voice (warm, wry, modest, a joke at the end of every paragraph) is off the table unless you ask for it.
3. **Shape the page from the reader's questions.** The usual skeleton (eyebrow, heading, three cards, stat strip) is out. A section exists only if there is true material for it.
4. **Spend each device once.** A per-page budget covers "X. Y." headings, "No X. No Y." runs, "not X" and "rather than" contrasts, wry closers, puns on the brand name, stat strips and testimonials.
5. **Check with tools and a second reader.** Self-assigned scores don't count. Claude runs the linter, a swap test (would the line work for a competitor?), a cross-page check, and a fresh-context reader with no brief.

## The linter

```bash
node skills/copy-taste/scripts/slop-lint.js page.html [more.html ...] [--json]
```

It runs on Node with no dependencies, and reads HTML, Markdown or plain text.

- **FAIL**: the classic buzzwords, stock phrases ("Whether you're…", "Unlock the power of"), and leftover chatbot text or unfilled name placeholders.
- **WARN**: anything over budget. That means two-fragment and number-pair headings, contrast frames (counted together with their "rather than" and "instead of" substitutes), negation runs, sincerity words, -ing riders, stat strips, the default cast of names, footer sign-off lines, eyebrow labels on every section, and uniform sentence length.
- **INFO**: lists of three, quoted testimonials, open `[NEED]` placeholders, and sentence-rhythm stats.

Pass several files and it also prints the first headings side by side and flags heading phrases shared between pages. That's how it caught the two "four very different" headings. It exits with code 1 if any file has a FAIL. Word-level checks skip text in quotes and backticks, so customer quotes and cited examples don't count against the page.

## How it was built

1. **Ten context-free sites.** Ten subagents each built a site for a different business: café, portfolio, agency, dev tool, hotel, finance app, yoga studio, architecture firm, online course, skincare brand. None was given any guidance on copy. See [`analysis/ai-copy-audit.md`](analysis/ai-copy-audit.md).
2. **Professional copy, verifiably human.** Separate agents pulled 53 sites from the Wayback Machine, all dated 2014–2021 so the copy predates LLM copywriting. The tech set includes Stripe, Basecamp, Apple, Linear, HEY, Tailwind and others. The brand set includes Blue Bottle, Stumptown, Oatly, innocent, Patagonia, Aesop, Aman, Hoxton, Pentagram, Ueno, Paul Graham, Frank Chimero and others. Every quote was taken from a fetched snapshot. See [`research/pro-copy-tech.md`](research/pro-copy-tech.md) and [`research/pro-copy-brand.md`](research/pro-copy-brand.md).
3. **Prior art.** This covers Wikipedia's *Signs of AI writing*, ten existing anti-slop and copywriting skills, and the craft canon: Ogilvy, Schwartz, Copyhackers, Mailchimp's style guide, GOV.UK, Orwell and Paul Graham. See [`research/ai-tells-and-craft.md`](research/ai-tells-and-craft.md).
4. **Comparison, then the skill, then a test against the same briefs.** See [`analysis/comparison.md`](analysis/comparison.md).

The main finding: the pros use the same devices the models do. Allbirds wrote "No flashy logos. No senseless details." and Vercel wrote "Develop. Preview. Ship." A word or pattern ban can't separate the two. These things can:

- **Provenance.** Pro details are true, odd and sometimes unflattering: Blue Bottle's beans were mistaken for "camel feed", and innocent wrote a whole timeline about nearly going bankrupt. Model details are invented to look specific.
- **Frequency.** A pro spends a device once. The model uses it in every section.
- **Voice.** Oatly, Aesop, Aman and Stripe sound nothing alike. Ten model pages sounded like one writer.
- **Risk.** Pros name enemies, admit failures and coin words.
- **Shape.** Pro pages are uneven and leave sections out.

## Repo layout

```
.claude-plugin/          plugin + marketplace manifest
skills/copy-taste/
  SKILL.md               the workflow
  references/tells.md    first- and second-generation tells, over-correction traps, non-tells
  references/voices.md   12 registers with exemplars and a category → voice table
  references/pro-moves.md  14 hero forms and section-by-section moves
  scripts/slop-lint.js   the linter
research/                pro copy analysis (tech, brand) and the AI-tells survey
analysis/                audit, comparison, test results, raw extracted copy, lint output
examples/without-skill/  the 10 context-free sites
examples/with-skill/     the 3 test sites
```

## Limits

- **The test is small.** It used three pages per side, so treat it as a smoke test.
- **Pages got longer** with the skill: 1,234–1,778 words, against about 1,050–1,270 without. Trim them when you use it for real.
- **The tells are dated November 2026.** Models change what they overuse, and the tell list will need updates. The workflow (facts, voice, budget, outside reader) should outlast the list.
- **The linter only counts.** It can't tell whether the voice is right. Only a reader can.
- **English only.**

## Credits

Quotes from the sites in `research/` are short excerpts used for analysis. They belong to their owners.

The skill builds on:
- Wikipedia's [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
- [Mailchimp's Content Style Guide](https://styleguide.mailchimp.com/)
- [GOV.UK writing guidance](https://www.gov.uk/guidance/content-design/writing-for-gov-uk)
- Copyhackers' review mining
- Earlier skills: [humanizer](https://github.com/blader/humanizer), [stop-slop](https://github.com/hardikpandya/stop-slop), [marketingskills](https://github.com/coreyhaines31/marketingskills), [human-copywrite](https://github.com/forint573/human-copywrite) and [noslop](https://github.com/vstaln/noslop)

The full source list is at the end of [`research/ai-tells-and-craft.md`](research/ai-tells-and-craft.md).

## License

MIT
