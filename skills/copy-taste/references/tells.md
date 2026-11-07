# Tells: what makes copy read as model-written

Dated November 2026. The tells shift with every model generation, so learn *why* each one reads as AI and don't just memorise the lists. One tell alone proves nothing. Clusters and repetition are the signal.

Severity:
- **Ban:** one occurrence is a tell.
- **Cap:** fine once, a tell when repeated or stacked.
- **Context:** only counts alongside other tells.

---

## Generation 1: the classic tells (you mostly avoid these, but check)

**Ban words.** delve, tapestry, testament, realm, embark, beacon, multifaceted, paradigm, myriad, plethora, meticulous, intricate, interplay, garner, boasts (meaning "has").

**Marketing ban/cap words.** elevate, unlock, unleash, empower, harness, supercharge, turbocharge, streamline, seamless, robust, effortless, cutting-edge, innovative, revolutionary, transformative, holistic, next-level, world-class, best-in-class, game-changer, state-of-the-art, bespoke, curated, elevated.
- In the pre-LLM pro sample, "leverage", "cutting-edge", "state-of-the-art", "bespoke", "best-in-class" and "high-quality" appeared **zero** times across ~60 brand pages.
- "Seamless" appeared twice across 30 tech snapshots.

**Abstract-noun metaphors.** landscape, ecosystem, journey (unless it's literal travel), space ("in the X space"), hub, one-stop shop, world of, experience (as a hero noun).

**Stock templates (ban).**
- "In today's fast-paced world"
- "Unlock the power of"
- "X, reimagined"
- "The future of X is here"
- "Say goodbye to X"
- "Whether you're A or B"
- "From X to Y" used as a false range
- "Join thousands of happy customers"
- "Trusted by teams worldwide"
- "Imagine a world where"
- "Ready to transform your X?"
- "Look no further"

**Chatbot residue (ban, the strongest single tell).**
- "Certainly!", "I hope this helps"
- `[Company Name]`, lorem ipsum, "© 2024" on a 2026 page
- Placeholder logos and "Sarah J., Marketing Manager"

**Structure.**
- "It's not just X, it's Y"
- "Not only X but also Y"
- -ing riders: ", ensuring a seamless…", ", empowering teams to…"
- The colon reveal ("One thing changed everything: X")
- The rhetorical question answered at once ("The result? 3x faster.")

**Punctuation.**
- Em dashes everywhere (now largely suppressed by newer models)
- Emoji as bullets
- Exclamation marks in body copy
- "→" on every link
- Markdown leaking into rendered text

---

## Generation 2: your tells now (from the 10-site test, November 2026)

These look like good copy, which is why they survive review. Each entry gives the tell, what it looks like, and the fix.

### The house voice (meta-tell)
- **What it is.** Warm, wry, modest, slightly literary and gently anti-corporate, used for every brand.
- **Fix.** Pick a register from `voices.md`. A CI tool should sound like Stripe or Linear. A luxury hotel should sound like Aman. A juice brand can sound like innocent.

### Manufactured specificity (Ban for real businesses)
- **What it looks like.** "Port Ellery Harbor, 6:12 a.m., from the window of Room 9" · "Batch No. 047" · "40 steps to the water" · "1,260°" · "38% fewer re-runs".
- **Why it reads as AI.** The model learned that specifics persuade and now produces them as decoration.
- **Fix.** Use only fact-sheet details, or a `[NEED: …]` placeholder. In fiction, use fewer details and make them stranger, with a story attached.

### The stat strip
- **What it looks like.** A row of 3–4 big numbers with small labels, under the hero or the story. It appeared on 10/10 test pages, sometimes twice.
- **Fix.** Put numbers in sentences, next to the claim they prove. Keep a strip only for 3+ real numbers a buyer cares about.

### Two-fragment heading "X. Y."
- **What it looks like.** "Short menu. Long list of regulars." · "Slow at the start. Fast at the end." · "Twelve rooms. Three ways to stay." · "Four steps. About three minutes."
- **Severity.** Cap at 1 per page.
- **Fix.** Use the other heading types: a plain label with a claim beneath it, an imperative ("Send videos quickly"), a question kicker ("Not enough light? No problem."), a full-sentence claim, or a customer quote.

### Number-pair heading
- **What it looks like.** "Four projects, four very different problems." · "Four kinds of work, one way of working." · "Six ways to practice, one honest goal." · "Eight weeks, one sky at a time."
- **Severity.** Cap at 0–1.
- **Fix.** Say what the section is about. "Recent work" plus a strong first line is better.

### Contrast frame (and its substitutes)
- **What it looks like.** "Freshness isn't a slogan here." · "treat a tight budget as a brief, not an obstacle" · "In their words, not ours." · "That's not a setting. It's how we built it."
- **Substitutes to count.** When you suppress the frame, it comes back as "rather than", "instead of" and "without the".
- **Severity.** Cap at 2 total across all forms.
- **Fix.** State the positive fact on its own. "We roast on Tuesday and sell by Saturday" needs no slogan to argue against.

### Negation run
- **What it looks like.** "No spreadsheets. No guilt." · "No fragrance, no fillers, no twelve-step routine." Two independent sites wrote "No forms, no questions." and "No forms, no back-and-forth."
- **Severity.** Cap at 1.
- **Fix.** Keep it only if every item is a checkable refusal (Allbirds: "No flashy logos. No senseless details.").

### Virtue words (Ban when used about yourself)
- **What it looks like.** honest, honestly, calm, quiet, quietly, actually, real, genuinely, truly, simple, simply, thoughtful, carefully, intentional, steady, practical, dependable, "matters". Examples: "one honest number" · "a calm, honest budgeting app" · "products you actually need".
- **Fix.** Show honesty through an admission or a limit. Oatly: "We are not a perfect company, not even close". Pros never call themselves honest.

### The wry closer
- **What it looks like.** "They hold spoons now." · "Nobody has asked for one yet." · "very good stroopwafels" · "Your neck will thank you by week three." · "The kettle is always on." One joke ("I didn't edit their answers, though I was tempted to") appeared on two unrelated sites.
- **Severity.** Cap at 2 per page, never in consecutive paragraphs.
- **Fix.** End most paragraphs on information. Move the humour into microcopy.

### The footer pun
- **What it looks like.** "Every Tuesday since 2019." · "Made in Rotterdam, fired at 1,260°." · "Grown on Alder Street since 2019." · "Made in a backyard with a folding chair." It appeared on 9/10 test pages.
- **Fix.** Put facts in the footer: address, company number, links. Use a human sign-off only if the brand is a comedy brand, or if it's a plain courtesy like Basecamp's "Enjoy the rest of your day!"

### Brand-name metaphor run into the ground
- **What it looks like.** Kiln: "fired until they hold their shape", a process step called "Fire", "fired at 1,260°". Keel: "keeps you level", "stay level".
- **Severity.** Cap at 1.

### The origin-story template
- **What it looks like.** "[Year], [two first-named founders] [found/bought] [an old hardware store / sail loft / tile factory / greenhouse / cooperage]. They spent [N] restoring it and kept [one original detail you can still see]." It appeared 6/10 times.
- **Fix.** Use the real origin. If you're inventing one, avoid the restored-building and founding-couple pattern. Start in a specific moment that went wrong.

### Polished testimonials
- **What it looks like.** Always three. Each is a tiny story with a number and a callback punchline: "Our tins now outsell our fish." · "That took me ten minutes to fix and three years to notice." · "I'm not eating ramen every January anymore."
- **Fix.** Use real quotes only, roughness included. Name, role and company or town. Fewer is fine, and none is fine. Press quotes from a named critic and outlet also work.

### The default cast (Ban in fiction)
- **People.** Priya (Raman/Shah/Nair/Natarajan), Daniel Okafor, Amara Okafor, Marcus, Dana, Aisha K., Lena M., Tomas, Nora, Maya, Mara & Theo, Isla, Ines, Jess, Sarah J., Elara.
- **Companies.** Fieldnote, Kestrel, Halcyon, Brightloop, Acme, Northwind, Lumen, Nimbus, Apex, Zenith.
- **Places.** Maine harbours, Portland OR, Copenhagen, Rotterdam, Lisbon.
- **Fix.** Use real names. In fiction, pick names that fit the actual locale and generation of the business, and don't reuse any name across pages.

### Section-template monoculture
- **What it looks like.** Every section is an eyebrow, a claim H2, a 1–2 sentence lede and 3–4 cards with an H3 and one sentence each. The process is always 01/02/03/04. "Kind words" as a testimonial heading appeared ×3. A "Most popular" badge and "No card required" show up everywhere.
- **Fix.** Shape the page from reader questions and the brand's organising idea (see SKILL.md §3).

### Response-time promises
- **What it looks like.** "within two working days" ×3, "within one business day", "usually within a day".
- **Fix.** Keep one, if it's true.

### "Since [year]"
- **What it looks like.** It appeared 11 times across 7 sites.
- **Fix.** Use it once, where it matters.

### Perfect evenness
- **What it looks like.** Every card is the same length, every section the same weight, every paragraph has the same arc.
- **Fix.** Spend words where you know the most. Some sections should be two lines and one should run long.

### Microcopy left unwritten
- **What it looks like.** The hero gets five rewrites while the cookie banner, form errors, empty states and confirmation messages are generic or missing.
- **Fix.** Write them in voice. Pros put their best lines there.

---

## Over-correction traps (what anti-slop rules produce)

| Rule you applied | Tic it produces | Counter |
|---|---|---|
| "No em dashes" | Comma-splice and period-only monotony | Use colons, parentheses and semicolons where they're natural |
| "No 'not X but Y'" | "Y rather than X", "instead of", "without the" | Count all of them together. State the positive |
| "No hype words" | Virtue and calm vocabulary (quietly, steady, honest, practical) | Facts instead of any adjective |
| "Avoid threes" | Everything in pairs | List as many items as there really are |
| "Be specific" | Invented numbers and anecdotes | The fact sheet, or a `[NEED]` placeholder |
| "Short, punchy sentences" | Fragment drumbeat | Let one sentence per section run long |
| "End strong" | A moral or quip on every paragraph | End on information |
| "Add personality" | A joke in every section | Set a humour budget. Put it in microcopy |
| "Vary section length" | One giant section and one tiny one on every page | Let length follow material |
| The same rule pack on every page | A new, uniform house style | Run the cross-page sameness check |

---

## Not tells (don't "fix" these)

- Perfect grammar.
- Plain "is/has".
- "In order to".
- Transition words on their own.
- Title case when it's the house style (Mailchimp uses it).
- A single "No card required".
- A true superlative that's narrow and checkable ("the world's largest independently-owned design studio", Pentagram).
- Fragments and refrains used on purpose ("You're in control." repeated, HEY).
- Lists of three when there are three things.
- Pre-2022 copy the user wrote themselves.
- Sales language on a sales page. Persuasion is the genre. The test is whether it's built on facts.
