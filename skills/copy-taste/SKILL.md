---
name: copy-taste
description: Write, rewrite and review website copy so it reads like a good human copywriter wrote it, not a model. Use whenever you write or edit copy for a landing page, homepage, product or pricing page, about/story page, portfolio, hero headline, feature section, testimonials, FAQ, CTA or microcopy (buttons, forms, errors, empty states, cookie banners, footers), including when the copy is only one part of building or redesigning a site, and whenever someone says copy sounds generic, templated, "AI", bland, or like every other site.
---

# Copy taste

You already avoid the old slop. You don't write "elevate", "seamless", "unlock the power of" or "Whether you're a startup or an enterprise", and you've mostly stopped using em dashes. This skill is about the slop you write now, which looks like good copy.

In a test, ten context-free runs each built a site for a different business: a café, a portfolio, an agency, a dev tool, a hotel, a finance app, a yoga studio, an architecture firm, a course and a skincare brand. Every page had concrete nouns, short sentences and plain CTAs. Read together, they were plainly written by one writer:

- **The same voice everywhere.** Warm, wry, modest, a bit literary, gently anti-corporate. A CI tool and a yoga studio shared a register.
- **A stat strip on 10/10 pages**, every number invented ("12 kg per batch", "9 of 10 clients come back").
- **18 two-fragment headings** across 9 sites: "Short menu. Long list of regulars." "Twelve rooms. Three ways to stay."
- **Number-pair headings.** Two sites independently wrote "Four projects, four very different problems." and "Four recent buildings, four very different sites."
- **Contrast frames** ("Freshness isn't a slogan here.") and **negation runs** ("No forms, no questions." on one site, "No forms, no back-and-forth." on another).
- **Virtue words used to perform sincerity:** actually ×10, honest ×8, real ×8, calm ×6, quiet ×5.
- **A wry closer on most paragraphs** ("They hold spoons now."). One joke ("I didn't edit their answers, though I was tempted to") showed up on two unrelated sites.
- **A pun sign-off in 9/10 footers** ("Made in Rotterdam, fired at 1,260°.").
- **One origin story template** used 6 times: a couple restores an old industrial building and keeps one original detail.
- **Three polished testimonials per page**, each ending on a punchline, drawn from a fixed cast: Priya on 7/10 sites, Daniel Okafor on 3, the fictional client "Fieldnote" on 3.

Professional copy from 2014–2021, before LLMs, uses several of these same devices. Allbirds wrote "No flashy logos. No senseless details." Vercel wrote "Develop. Preview. Ship." So banning the devices won't help. The real differences are these:

1. **Provenance.** Pro details are true, odd and slightly inconvenient. Blue Bottle's beans were mistaken for "camel feed". innocent writes "Thank you Mr Pinto". Yours are invented to look specific.
2. **Frequency.** A pro spends a device once, where it lands hardest. You apply it evenly to every section.
3. **Voice.** Oatly, Aesop, Aman, Paul Graham, Stripe and Ueno sound nothing alike. Every page you write sounds like the same writer.
4. **Risk.** Pros name enemies, admit failures and coin words. Your enemy is "most apps", and your failures are cosmetic.
5. **Shape.** Pro pages are uneven and leave sections out. Yours fill the same skeleton every time.

The cause underneath all five is missing input. With no real facts, you fill a template with plausible inventions. **The fix comes from facts and decisions, not synonyms.** Swapping one word for another just gives you a new tell.

Run the workflow below for any page, and for any section bigger than a button label.

---

## 1. Build the fact sheet before writing a sentence

Collect these from the user, the repo, the existing site, docs and public reviews. Keep them verbatim where you can.

| Field | What you need | Why it matters |
|---|---|---|
| **What it is** | One plain sentence, no adjectives | The hero has to survive without decoration |
| **For whom / not for whom** | The best-fit customer, and who should leave | "For everyone" makes every line generic |
| **What they do today instead** | Spreadsheet, the incumbent, doing nothing, a competitor by name | Differentiation only means something against a real alternative |
| **The true difference** | What is true here and not elsewhere, plus the proof | The only claims worth a heading |
| **Customer words** | Verbatim phrases from reviews, emails, tickets, DMs, sales calls | The best headlines are stolen from customers |
| **Real numbers** | Each one with its source | Only these can appear as numbers |
| **Real people** | Names and roles that can be published: founder, staff, customers who agreed to be quoted | Named people beat "our team" |
| **Odd true details** | History, objects, places, rituals, house words, the embarrassing bit | This is the texture you'd otherwise invent |
| **A flaw, limit or trade-off** | What it doesn't do, who it's bad for, what went wrong | Admitted limits make every other claim believable |
| **An enemy** | A habit, a category or an incumbent. Never the reader | Gives the copy something to push against |
| **The offer** | Price, trial, guarantee, the one action | CTAs and risk reversal |

**If the sheet is thin**, ask a short interview in one message, at most six questions, most valuable first:
1. Who switched to you from what, and why?
2. What's the one number you'd bet the business on?
3. What objection do you hear most?
4. What are you bad at, or not for?
5. What's a weird true detail about how you make or run this?
6. Can you paste three real customer messages or reviews?

If the user can't answer or wants a draft now, write it anyway and put a visible placeholder wherever the truth is missing.

### Integrity rules (nothing overrides these)
- **Never invent proof** for a real business. That covers stats, customer counts, ratings, testimonials, client names or logos, press quotes, awards, founders, founding years, history, certifications, guarantees and response-time promises. Use `[NEED: real number — e.g. average setup time]`, `[NEED: customer quote with name + company, permission given]` or `[NEED: founding year]`. A visible gap is better than a believable lie.
- **Never strip caveats** the business needs (legal, medical, financial) and never manufacture urgency or scarcity.
- **Fictional or demo brands.** Only when the user explicitly wants a made-up business may you invent. Invent like a novelist, not a template. Use fewer details, make them stranger and more specific to this one place, and let some be unflattering. Still no stat strips of invented KPIs. Keep invented testimonials to at most two, and make them rough. Use names outside the default cast (see `references/tells.md`).

---

## 2. Choose a voice, and refuse the default

**The default register is banned unless the user asks for it.** It's warm, wry, modest, a bit literary and gently anti-corporate. It ends paragraphs on a deadpan twist and signals sincerity with *honest / calm / quiet / actually / real / simple*. It isn't bad. It's just what every model sounds like now, so readers recognise it.

Pick a register from `references/voices.md` that fits this brand, audience and price point, and write a voice card in your notes (not in the page):

```
Register: technical-dry with proof (Stripe / Linear family)
Pairs: precise but not cold · confident but not loud · funny only in microcopy
Person: "you" for benefits, "we" for effort; product as grammatical subject in feature copy
Sentences: mostly 8–14 words; one long explanatory sentence per section is fine
Humour budget: two places (404 page, empty state). Zero in hero and pricing.
House words: the product's own nouns (e.g. "quarantine", "flake rate") used consistently
Never: virtue words about ourselves, puns on the product name, stat strips
```

If the user has existing copy or a writing sample, build the voice card from that. It overrides everything except the integrity rules.

**The voice test:** imagine nine other businesses in nine other categories getting copy from you today. Could this voice belong to any of them? If it could, push it further toward this brand's actual character.

**Tone flexes by section, voice stays the same.** The hero and story carry the most voice. Pricing, FAQ, security and checkout get plainer, because readers there are anxious and want facts. Errors and confirmations are short and kind.

---

## 3. Shape the page from the reader's questions, not a template

The order of reader questions, roughly: *What is this? Is it for me? Why believe you? How does it work? What does it cost? What if it goes wrong? What do I do now?* How aware the reader already is sets the start:

- **Doesn't know the problem yet:** open with a story, a scene or an identification line.
- **Knows the problem:** name the pain in the customer's own words.
- **Comparing solutions:** lead with the mechanism, meaning what you do differently.
- **Knows you already:** product, offer, price.

Rules for shape:
- **A section exists only if you have true material for it.** Five honest sections beat eight padded ones. If the brief asks for a fixed number of sections, fill them with different kinds of material (a menu, a timeline, a letter, a map, a spec table, a long FAQ). Don't fill them with eight cards-grids.
- **Counts follow content.** Four real features means four items. One strong testimonial means one, and zero is fine. Two pricing tiers means two.
- **Find the organising idea**, if the brand has one: a letter from the founder (HEY), a timeline of failures (innocent), one object carried through every section (Mother's kitchen table), the menu as the page (Intelligentsia), a spec sheet (Apple). Let at least one section break the grid.
- **Don't write to the AI skeleton**: eyebrow, claim H2, two-line lede, 3–4 cards, stat strip in every section. If you control the layout, vary it. If you don't, vary what goes in it (lengths, item counts, a section with no heading).

---

## 4. Draft

Read `references/pro-moves.md` for hero forms and section-by-section moves before drafting a full page.

- **Hero.** Choose its form on purpose from the 14 in `pro-moves.md`, based on awareness and register. Don't default to "Claim. Twist." Most pro heroes are 2–9 words. The subhead adds one fact or a mechanism, and no adjective-stacked promise.
- **Facts where adjectives want to go.** If you write "fast", a number or a mechanism follows within a sentence. Adjectives that survive are physical or measurable: candle-lit, six-pound, greaseless, 58mm.
- **Proper nouns over categories.** "Gmail, Outlook, Yahoo" beats "legacy email". "Mount Fuji" beats "stunning views".
- **Mechanism over praise.** Say how it works in verb-led steps. "How" persuades better than "how good".
- **Pain in the customer's words**, before the product. Lift the phrasing from the fact sheet.
- **One admission per page.** A limit, a trade-off or a failure, stated plainly.
- **Proof sits beside its claim**, attributed to identifiable outsiders: a full name plus a company or outlet. Rough real quotes beat polished ones. Luxury and craft brands often show none at all.
- **Numbers live in sentences, with context.** Use a stat strip only if you have three or more real, sourced numbers a buyer would care about.
- **CTAs are a verb plus the real object** ("Book a room tonight", "Try 5 pairs free", "Email the studio"). Put the risk reversal next to the button only if it's true. Offer a low-pressure exit for browsers when it fits.
- **Microcopy carries voice too.** Write the cookie banner, form labels and errors, empty states, the 404 page, the newsletter confirmation and the footer in voice. Pros put their best jokes here, not at the end of paragraphs.
- **Sentence length follows meaning.** A short sentence lands a point, a long one carries an explanation. Don't make everything punchy, and don't vary length mechanically either.
- **Repeat the product's name** instead of cycling through "the platform / the tool / the solution".

---

## 5. Device budget (per page)

These devices aren't banned. Each one works once. The problem is using them by default.

| Device | Budget | Notes |
|---|---|---|
| Two-fragment heading "X. Y." | 1 | Spend it where it lands hardest |
| Number-pair heading "Four X, one Y" | 0–1 | Your most repeated tic |
| Negation run "No X. No Y." / "No X, no Y" | 1 | Only if each item is a real, checkable refusal |
| Contrast frame: "X, not Y" / "isn't" / "rather than" / "instead of" / "without the" | 2 total | Banning "not X but Y" just moves you to "rather than", so count all of them |
| Wry closer at the end of a paragraph | 2, never consecutive | Most paragraphs should end on information |
| Pun on the brand name or its metaphor | 1 | Pros use it once or never |
| Pun or tagline sign-off in the footer | 0 unless comedy is the brand | The footer gets facts: address, legal, links |
| Stat strip | 0 unless 3+ real sourced numbers | Never a row of invented KPIs |
| Virtue words about yourself (honest, calm, quiet, real, actually, genuinely, truly, simple, thoughtful, carefully, intentional) | 0 | Show the honesty with an admission instead |
| Lists of three | Only when there are three things | Never in consecutive sentences |
| Numbered 01/02/03 markers | Only for real sequences | Not for parallel features |
| Eyebrow label above every heading | No | One or two at most |
| Testimonials | 0–3, real only | Name + role + company or place, ideally a detail that's slightly off-message |
| Response-time promise ("within two working days") | 1, if true | It showed up 5 times across the 10 test sites |
| "Since [year]" | 1 | |

---

## 6. Check: test with tools and outside readers, don't self-grade

1. **Lint.** Run `node <this-skill-dir>/scripts/slop-lint.js <page.html or .txt> [more files]`. Fix every `FAIL`. Look at every `WARN` and either fix it or keep it on purpose. When you pass several files it also reports headings and phrases shared across pages.
2. **Swap test.** Put a competitor's name, or any business in another city, into each heading and the hero. If the line still works, it says nothing about this business. Rewrite it from the fact sheet.
3. **Cross-page sameness.** If you've written other pages or sites in this session, lay the heroes and H2s side by side. Shared cadence or shared jokes count as a tic, so break them.
4. **Fresh reader.** If you can launch a subagent, give it only the page text, with no brief and no notes, and ask: *What is this? Who is it for? Why this over [the named alternative]? What does it cost? What would make you hesitate? Quote the three lines that sound most like any other website.* Fix what it finds. Never iterate to beat an AI detector.
5. **Read it aloud as the owner, at the counter, to one customer.** Cut anything they'd never say out loud.
6. **Over-correction pass.** After the fixes, check for substitute habits: "rather than" and "instead of" multiplying, every sentence a fragment, everything in pairs, comma-only rhythm, a joke deleted and nothing put in its place. If a rule made a sentence worse, break the rule. Orwell's sixth rule applies to this skill too.

When you deliver, add a short note after the copy listing every `[NEED: …]` placeholder, every claim the user must verify, and the voice card in one line.

---

## References
- `references/tells.md`: first- and second-generation AI copy tells, with fixes, the default cast of names, over-correction traps, and things that are *not* tells.
- `references/voices.md`: the menu of registers, with pro exemplars, when each fits and how each fails.
- `references/pro-moves.md`: 14 hero forms, section-by-section moves (about, features, proof, pricing, FAQ, CTA, microcopy, footer), and how pros handle numbers and humour.
- `scripts/slop-lint.js`: a counter for the countable tells. It runs on Node with no dependencies.
