# Audit: copy from 10 context-free AI-built sites

Ten subagents each got a plain brief ("build a landing page for a coffee shop / portfolio / agency / dev tool / hotel / finance app / fitness studio / architecture firm / online course / skincare brand, 8 sections, write all the copy"). None was told about copy quality, AI tells, or any skill. Raw text: `ai-sites-copy.txt`. Counts: `pattern-counts.txt`.

## The headline finding

**First-order slop is gone.** Across ~11,800 words there are 4 em dashes (all in `<title>` tags), zero "elevate / seamless / unlock / empower / delve / tapestry", zero "Whether you're A or B", zero "In today's fast-paced world". A skill that bans the classic word list would pass every one of these pages.

**Second-order slop has taken its place.** The model has learned the *costume* of good copy (specifics, short sentences, wry asides, anti-marketing tone) and now applies it identically everywhere. Read one page and it's charming. Read ten and you can see the template. An Oregon café, a Lisbon CI tool and an Edinburgh architecture practice all sound like the same writer, someone who reads Monocle and writes Mailchimp microcopy.

## The tells, ranked by how often they appear

### 1. The stat strip (10/10 sites)
Every page has a row of 3–4 big numbers under the hero or the story, usually with a label underneath.
- coffee: `6:30am / 12 kg / 3` · portfolio: `11 / 43 / 9 of 10` · agency: `112 / 22 / 74% / 6` · devtool: `38% / 11 min / 4.2 days` · hotel: `12 rooms / 40 steps / Apr–Dec` and again `1884 / 3 years / 11 of 12 / 2` · finance: `410,000+ / $612 / 4.8★ / 12,000+` · fitness: `42 / 14 / 6:15` · architecture: `68 / 11 / 40% / 1` · course: `16 / 3,100+ / 4.9/5` · skincare: `4.9 / 11 / 60` and again `0 / 100% / 92% / Refill`

Every one of these numbers is invented. Several are numbers nobody would put in a hero (the café's "3 coffees on rotation", the studio's "1 partner leading every project"). The strip is there because the template has one, not because a number earned it.

### 2. Manufactured specificity (10/10)
The model has absorbed the rule "be specific" and now uses precise invented detail as a style: "Port Ellery Harbor, 6:12 a.m., from the window of Room 9", "Batch No. 047", "1,260°", "40 steps to the water", "Fails on 1 in 15 runs on 2-core runners". On a real site, specificity is evidence: the detail is true and someone checked it. Here it's decoration. **In real use this is the most dangerous habit: the model will make up proof for a real business.**

### 3. The two-fragment heading "X. Y." (18 headings across 9/10 sites)
"Short menu. Long list of regulars." · "No black box. No big reveal." · "Slow at the start. Fast at the end." · "Built in 1884. Restored one beam at a time." · "Twelve rooms. Three ways to stay." · "Know what you can spend. Then go spend it." · "Simple memberships. Cancel any month." · "Four products. That's the whole lineup." · "Four steps. About three minutes." Any one of them is fine. Eighteen in ten pages is a tic.

### 4. The number-pair heading (8 headings, 7/10 sites)
"Four projects, four very different problems." (portfolio) and "Four recent buildings, four very different sites." (architecture): two independent agents wrote nearly the same sentence. Also: "Four kinds of work, one way of working.", "Six ways to practice, one honest goal.", "Eight weeks, one sky at a time.", "Four disciplines. One team in the room."

### 5. The contrast frame "X, not Y" / "isn't" (14 hits, 8/10)
"Freshness isn't a slogan here." · "'It's flaky' isn't a diagnosis. This is." · "treat a tight budget as a brief, not an obstacle" · "feel a pose, not watch yourself in it" · "In their words, not ours." · "That's not a setting. It's how we built it." The old "It's not just X, it's Y" has been shortened, but it's the same move.

### 6. The negation run "No X. No Y." (5 hits, 4/10)
"No spreadsheets. No guilt." · "No fragrance, no fillers, no twelve-step routine." · "No forms, no questions." (course) / "No forms, no back-and-forth." (skincare). Two independent pages wrote the same refund line.

### 7. Understated-virtue vocabulary: the new "seamless"
| word | uses | sites |
|---|---|---|
| actually | 10 | 6 |
| honest | 8 | 6 |
| real | 8 | 5 |
| calm | 6 | 4 |
| quiet/quietly | 5 | 4 |
"one honest number", "four honest essentials", "one honest goal", "honest timelines", "a calm, honest budgeting app". The model now signals sincerity with words, which is the same mistake as signalling innovation with "innovative".

### 8. The wry closer / quirk quota (10/10)
Most paragraphs end on a small deadpan twist: "They hold spoons now." · "Nobody has asked for one yet." · "launched it with a single, very patient toddler" · "very good stroopwafels" · "repeat until it feels reasonable" · "Your neck will thank you by week three." · "The kettle is always on." · "Sometimes the answer is one." The same joke shows up twice, independently: "I didn't edit their answers, though I was tempted to" (portfolio) / "We didn't edit the answers, though one of them asked us to" (agency).

### 9. The pun footer sign-off (9/10)
"Every Tuesday since 2019." · "Designed and built by hand in Copenhagen." · "Made in Rotterdam, fired at 1,260°." · "Made in Lisbon and Toronto." · "Closed January through March. See you in spring." · "Grown on Alder Street since 2019." · "Made in a backyard with a folding chair."

### 10. Brand-name metaphor wrung dry
Kiln: "fired until they hold their shape", step named "Fire", "fired at 1,260°", "Stoneware. And standards." Keel: "keeps you level", "stay level". Fernhouse: "growing at their own pace", "Bloom Prenatal", "Grown on Alder Street". Pros use the pun once, or never.

### 11. The origin-story template (6/10)
*[Year], [two first-named founders] [bought/found] [old industrial building: hardware store / sail loft / tile factory / greenhouse / cooperage / kitchen table]. They spent [N months/years] restoring it. They kept [one original detail you can still see].* Coffee, hotel, agency, fitness, architecture, skincare. Founders: Mara & Theo, Nora & Tomas, Isla & Tomas, Nora (again).

### 12. The default cast (repeated names across independent agents)
Priya appears on 7/10 sites (Priya Raman on 4). Okafor on 5 (Daniel Okafor on 3). Daniel on 4, Tomas on 3, Nora on 2. Fictional client companies repeat too: **Fieldnote** on 3 sites, **Kestrel** on 2, **Halcyon** on 2. Two of ten businesses are in Maine. The model has a small fixed pool of "plausible" names, and it shows.

### 13. Testimonials that are too well-written (10/10)
Always 3 (sometimes 4). Each one is a little story: a setup, a number, and a punchline that calls back to it. "Our tins now outsell our fish." · "That took me ten minutes to fix and three years to notice." · "I'm not eating ramen every January anymore." · "That's the kind of place this is." Real customer quotes are flatter, more specific about odd things, and rarely land a joke. Pros mostly use press quotes, named company logos, or no testimonials at all.

### 14. Section template monoculture
Nearly every section follows: eyebrow label ("Our story", "How we work", "Kind words" ×3) → H2 claim → 1–2 sentence lede → 3–4 cards (H3 + one sentence) → optional stat strip. 8/10 have a numbered 01/02/03/04 process. Response-time promises everywhere ("within two working days" ×3, "within one business day", "usually within a day"). "Most popular" badge ×3. "No card required" ×3.

### 15. Voice homogeneity (the meta-tell)
Take away the nouns and you can't tell which page is which. Every brand is warm, wry, modest, a bit literary and gently anti-corporate. Nobody is loud, nobody is weird, nobody is technical-dry, nobody has an enemy, nobody takes a risky position. A devtool and a yoga studio share a register.

## What the AI copy does well (keep it)
- Short sentences, concrete nouns, real prices, hours, addresses, practical info (FAQ answers are strong).
- Headlines say what the thing is (no "Welcome to the future of X").
- Plain CTAs: "See the menu", "Book a room", "Start free", "Email the studio".
- The devtool page shows the product doing its job (terminal output, a diff) instead of describing it.

So a good skill must **not** just make the copy shorter or "more specific". The model already does that. It has to break the template, stop fabricating, and give each brand a voice of its own.
