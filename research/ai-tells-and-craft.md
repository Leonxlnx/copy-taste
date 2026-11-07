# AI-slop tells and copywriting craft: research for an anti-slop website copywriting skill

Compiled 2026-11-07. Sources are cited inline, with a full list at the end. Slop examples marked "(illustrative)" were written for this report and are not quotes. Quotes from sources are short. Where I paraphrase a book I have not re-read for this report (Ogilvy, Schwartz, Provost), I say so.

---

## 0. Executive summary

1. **Slop comes from a mechanism, so the fix has to target the mechanism.** Wikipedia's guide explains slop as regression to the mean: models pick the most broadly applicable phrasing, and RLHF smooths it toward "broadly palatable" prose. The specific, unusual fact gets replaced by a generic positive claim ([WP:AISIGNS](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)). The CMU/PNAS study found instruction-tuned models use present-participial clauses at 2 to 5 times the human rate and nominalizations at 1.5 to 2 times, with base models much closer to human rates ([Reinhart et al.](https://arxiv.org/abs/2410.16107), [CMU release](https://www.cmu.edu/news/stories/archives/2025/february/is-it-human-or-is-it-ai)). For a landing page the root problem is missing input (no real customer language, proof, or differentiator). Word lists do not fix that.
2. **The tell list keeps changing, and fixes create new tells.** The October 2026 Wikipedia page moves em-dash overuse to "historical indicators" (2022 to September 2026), because newer models suppress or hard-code away em dashes. It now flags heavy comma and period use, 8 to 20 word sentences, "rather than" constructions (nearly absent before GPT-5.6, July 2026), and a new vocabulary: "quietly," "steady," "practical," "clearer," "dependable," "matters," "leverage," "prioritize" ([WP:AISIGNS](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)). Anti-slop skills that ban em dashes and "not X but Y" outright are now producing these replacement tics.
3. **Structure is a stronger tell than vocabulary.** Every serious source (Wikipedia, humanizer, stop-slop, marketingskills, tropes.fyi) now ranks sentence shapes above banned words: negative parallelism, forced triads, -ing riders, fragment drumbeats, tidy closers, colon or question reveals, and perfect section balance. The marketingskills ai-tells reference states the key rule: "Swapping a banned word for a synonym just creates a new tell," so fixes must come from facts ([marketingskills ai-tells.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/references/ai-tells.md)).
4. **For marketing copy, the worst slop is at the content level: fake proof and claims any competitor could make.** That includes invented round numbers, hollow testimonials ("Game-changer for our team! — Sarah K."), "Trusted by 10,000+ teams" with no logos, and "Whether you're a solo founder or a global enterprise." The classic craft canon (Ogilvy's facts over adjectives, Wiebe's voice-of-customer mining, Dunford's competitive alternatives, Harry Dry's "Can nobody else say this?", the NN/g finding that objective, non-promotional copy is 27% more usable) is the positive half that most anti-slop skills leave out.
5. **No existing skill covers the whole landing-page job.** The best ones (coreyhaines31/marketingskills copywriting + copy-editing, forint573/human-copywrite) have swap tests, `[NEED: proof]` placeholders, ban vs. cap tiers, and second-generation tells. None runs a real research step (VoC mining, positioning, awareness level) before drafting. None couples copy to page layout, even though a 3-column feature grid is what forces the rule of three. None evaluates output against a reader instead of its own checklist. Several also ship their own templates (CTA formulas, a canonical section order), which reproduces the sameness they try to remove.

---

## 1. Why AI text reads as AI (the mechanism)

| Mechanism | Evidence | Implication for a skill |
|---|---|---|
| Regression to the mean: the most probable phrasing is the most generic | WP:AISIGNS "Underlying mechanism" section; its example turns a specific inventor into a generic "titan of industry" | Specificity has to come from inputs (facts, customer words). It cannot come from style rules. |
| RLHF and instruction tuning push toward "broadly palatable", positive, dense prose | WP:AISIGNS; Reinhart et al. (PNAS 2025): participial clauses 2 to 5x, nominalizations 1.5 to 2x the human rate, gaps largest in instruction-tuned models | Expect -ing riders and noun stacks ("enhanced collaboration capabilities"). Prefer verbs and plain "is/has". |
| Excess vocabulary spikes | Kobak et al.: in 14M+ PubMed abstracts, "delves" r=28.0, "underscores" r=10.9, "showcasing" r=10.2; at least 13.5% of 2024 abstracts LLM-processed (v5) ([arXiv 2406.07016](https://arxiv.org/abs/2406.07016)) | Word lists work only as clusters. One flagged word proves nothing. |
| Over-represented n-grams across models | Antislop paper: some patterns appear 1,000x+ more often in LLM output than in human text; the sampler handles 8,000+ patterns ([arXiv 2510.15061](https://arxiv.org/abs/2510.15061)); [slop-forensics](https://github.com/sam-paech/slop-forensics) builds word, bigram, and trigram slop lists and model "phylogenies" | Slop lists depend on the model and the genre. The antislop list is fiction-heavy (Elara, "barely above a whisper"). |
| Era drift | WP:AISIGNS era table: GPT-4 era "delve/tapestry"; GPT-4o "align with/enhance/showcasing"; GPT-5 "emphasizing/highlighting"; mid-2026+ "quietly/steady/practical/clearer/matters/leverage/multifaceted" | Keep the lexicon in a dated, swappable file. Reason about why a pattern is slop rather than memorizing a list. |
| Suppressing one tell produces a substitute | WP:AISIGNS: once em dashes were suppressed (GPT-5.1 late 2025, hard-coded avoidance from Sept 2026), models leaned on commas and periods; "Y rather than X" rose as "not X but Y" was discouraged | Every ban needs a positive alternative and an over-correction check. |
| Human detection is poor | WP:AISIGNS cites a 2025 study putting untrained human discrimination at chance; heavy LLM users do much better (~90%, per a 2025 preprint summarized at [jetwong.neocities.org](https://jetwong.neocities.org/ai/signs-of-ai-writing)) | The target reader (a buyer who reads a lot of AI copy) is getting better at spotting it. "Sounds AI" has become a trust cost. |

---

## 2. Catalog of AI-slop tells

Format: **Tell**: slop example (illustrative unless sourced). *Why it reads as AI.* Sources in brackets.

Severity notes follow the useful convention from humanizer and marketingskills. **Ban** means one occurrence is a tell. **Cap** means fine once, a tell when repeated or stacked. **Weak alone** means it only counts alongside other tells.

### 2.1 Lexical (single words)

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Classic AI vocabulary (Ban-tier): delve, tapestry, testament, realm, embark, beacon, multifaceted, paradigm, myriad, plethora, meticulous(ly), intricate/intricacies, interplay, garner, bolstered, "boasts" (= has) | "Our platform is a testament to meticulous engineering." | These words showed large post-2022 frequency spikes and co-occur. Clusters of them are statistically unusual in human text. [WP:AISIGNS §5.1; Kobak et al.; marketingskills ai-tells] |
| Marketing verbs and adjectives (Cap-tier): elevate, unlock, unleash, empower, harness, supercharge, turbocharge, streamline, seamless, robust, effortless, powerful, cutting-edge, innovative, revolutionary, transformative, holistic, comprehensive, next-level, world-class, best-in-class, game-changer | "Unlock seamless collaboration and elevate your workflow." | Each one replaces a fact. "Seamless" stands in for the real setup steps or time, "robust" for the uptime or failure case, "innovative" for what alternatives can't do. [marketingskills ai-tells & copy-editing] |
| Abstract-noun metaphors: landscape, ecosystem, journey, space, world of, realm, hub, one-stop shop | "Navigate the ever-evolving landscape of modern finance." | They are dying metaphors in Orwell's sense: they "save the writer" from finding words. GOV.UK bans "hub/portal/one-stop shop" because metaphors "don't say what you mean". [Orwell; GOV.UK A to Z] |
| Significance words: pivotal, crucial, vital, key (as an adjective), significant, enduring, indelible, deeply rooted, focal point | "Data plays a pivotal role in today's businesses." | Puffery: the model inflates importance to fill space. [WP:AISIGNS §4.1] |
| Mid-2026+ vocabulary: quietly, steady, practical, clearer, dependable, echoed, foster, leverage, matters, multifaceted, prioritize, universally, challenge | "A steady, practical tool that quietly does the work that matters." | This is the current generation's default "understated" register. Several anti-slop skills now recommend exactly this calm, plain-sounding vocabulary. [WP:AISIGNS §5.1; tropes.fyi "Quietly and magic adverbs"] |
| Empty intensifiers (Cap): truly, genuinely, incredibly, deeply, fundamentally, significantly, simply, actually, literally, honestly | "We genuinely care about truly simple software." | Emphasis with no information. "Genuinely" and "honestly" also perform sincerity. [stop-slop phrases.md; marketingskills] |
| Corporate plain-English offenders: utilize, facilitate, leverage, deliver, deploy, drive, tackle, transform, foster, empower, impact (verb), key, robust, streamline, going forward | "We facilitate impactful outcomes going forward." | Human bureaucratic jargon too, but LLMs default to it in business registers. [GOV.UK words to avoid] |
| Copula avoidance: serves as, stands as, functions as, represents, boasts, features, offers (in place of is/has) | "The dashboard serves as a central hub that boasts real-time insights." | Measured declines in "is/are" in AI-edited text. Plain copulas read human. [WP:AISIGNS §5.2] |
| Synonym cycling (elegant variation) | "The app... the platform... the solution... the tool..." for one product in one section | A leftover of older repetition penalties. Humans repeat the product name. On a landing page, cycling also blurs what the product is. [WP:AISIGNS historical; tropes.fyi] |
| Invented concept labels | "Say goodbye to context debt." | A coined, analytical-sounding term that is never defined. [tropes.fyi] |

**Caveat:** WP:AISIGNS stresses that one vocabulary word is probably coincidence, that overusing a word doesn't mean its synonyms are overused, and that "fancy" prose is not a sign unless it uses the specific AI-favored words.

### 2.2 Phrasal templates (fill-in-the-blank stock lines)

| Template | Slop example | Why it reads as AI |
|---|---|---|
| Era opener | "In today's fast-paced digital world, teams need..." | Generic scene-setting that fits any product. [marketingskills; jalaalrd] |
| "Unlock the power of X" / "Harness the power of X" | "Unlock the power of your data." | Stock content-marketing hero. Says no outcome and no number. [marketingskills] |
| "X, reimagined" / "The future of X is here" / "X made simple" / "X, without the Y" | "Invoicing, reimagined." | Claims difference without saying what is different. [marketingskills] |
| "Say goodbye to X (and hello to Y)" | "Say goodbye to spreadsheets." | Stock before/after. Doesn't show the new workflow. [marketingskills] |
| "Whether you're A or B..." | "Whether you're a solo founder or a Fortune 500 enterprise, we've got you covered." | A false inclusivity range. It refuses to name a best-fit customer, which positioning work (Dunford) says you must do. It is also a false range (tropes.fyi): two poles that aren't a real scale. |
| "From X to Y" false range | "From startups to enterprises, from design to deployment." | The range sounds comprehensive but isn't a scale. [tropes.fyi "False ranges"; marketingskills] |
| "Join thousands of happy customers" / "Trusted by teams worldwide" | | Social proof with nothing behind it. Use the real count, logos, or a named quote. [marketingskills] |
| "Effortless" / "in just a few clicks" / "in minutes" | "Set up in just a few clicks." | An unverifiable ease claim. Give the real step count or time. [marketingskills] |
| "Imagine a world where..." / "Imagine if..." | | Stock futurism opener. [tropes.fyi] |
| Throat-clearing: "Here's the thing:", "Let's be clear:", "Here's what you need to know", "Let's dive in" | | Announces a point instead of making it. [stop-slop; humanizer #4] |
| Emphasis crutches: "Full stop.", "Let that sink in.", "And that changes everything." | | Fake-profound kicker. [stop-slop; marketingskills] |
| Chatbot residue: "Certainly!", "Great question!", "I hope this helps", "Let me know if...", "Here is a version you can...", "[Your Company Name]" | Footer: "© 2025 [Company Name]. All rights reserved." | Conversation pasted into the artifact, or a template never filled in. The strongest single-occurrence tell. [WP:AISIGNS "Communication intended for the user", placeholder text] |
| Didactic and hedging disclaimers: "It's important to note", "based on available information", "specific details are limited" | | Era-specific (2023 to 2025) safety and hedge reflexes. [WP:AISIGNS] |
| Recap closer: "In summary", "In conclusion", "Overall,", "Ready to transform your X? Get started today." | | Section summaries and the canned final CTA band. [WP:AISIGNS historical; marketingskills] |

### 2.3 Structural (sentence and paragraph shapes)

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Negative parallelism / contrast reveal: "It's not X, it's Y" / "Not because X. Because Y." | "It's not just a CRM. It's your growth engine." | It fakes a reveal by rebutting a claim nobody made. The single most-cited modern tell. Kriss (NYT Magazine, Dec 2025) singles it out with em dashes as the signature of LinkedIn posts and college essays ([Longreads summary](https://longreads.com/2025/12/04/why-does-a-i-write-like-that)). [WP:AISIGNS §5.3; stop-slop; humanizer #1] |
| "Not only X but also Y" | "Not only faster, but also smarter." | Same family. [WP:AISIGNS] |
| Negation list: "Not X. Not Y. Just Z." / "No X, no Y, just Z." | "No setup. No code. Just results." | A tripled negative parallelism narrowing to a "truth". [tropes.fyi; stop-slop; marketingskills] |
| "Y rather than X" (the 2026 variant) | "Built for outcomes rather than activity." | The replacement for "not X but Y" once that was suppressed. Nearly absent before July 2026. [WP:AISIGNS] |
| Superficial -ing rider | "We rebuilt the editor, ensuring a seamless experience and empowering teams to do their best work." | A participle tacked onto a fact to add vague significance. Empirically 2 to 5x the human rate. [WP:AISIGNS §4.4; Reinhart et al.; humanizer #15] |
| Trailing pile-on | "...that saves time, reduces errors, and helps your team focus on what matters most." | The sentence won't stop at its claim. [marketingskills] |
| Rhetorical question answered at once: "The result? X." / "Why does this matter? Because..." | "The result? 3x faster launches." | False suspense. [tropes.fyi; marketingskills; stop-slop] |
| Colon reveal | "One thing changed everything: automation." | Same staged reveal. [marketingskills] |
| Arguing with no one / rebutting objections nobody raised | "This isn't another bloated enterprise tool." | Strawman negation. [humanizer #5] |
| False agency (abstract subjects doing things) | "The data tells a story." "The market rewards speed." "Your workflow transforms." | No human actor. Stop-slop's fix is to name who acts. [stop-slop structures.md; marketingskills "abstract subjects"] |
| Distant narrator | "People tend to underestimate onboarding." | Talks about people instead of to the reader. [stop-slop] |
| Vague connection | "Associated with faster growth." "Linked to better retention." | Implies a relationship without stating it. Wikipedia lists it among the most common current signs. [WP:AISIGNS §4.5] |
| Inflated significance / "testament" frame | "This launch marks a pivotal moment in how teams collaborate." | Puffery that ties trivia to grand trends. [WP:AISIGNS §4.1] |
| "Despite challenges..." formula | "Despite its challenges, the future looks bright." | Problems acknowledged only to dismiss them. [WP:AISIGNS §4.7; tropes.fyi] |
| Heading echoed in the first sentence | H2 "Real-time collaboration" → "Our real-time collaboration lets you collaborate in real time." | Restates instead of advancing. [humanizer #24] |
| Self-narration / reasoning leak / process bleed | "Below, we outline the key features." "We've added a powerful dashboard to help you..." | Writes about the document or the build. Agent-built sites often write copy in build-timeline order. [humanizer #25; tropes.fyi "Reasoning leak"; human-copywrite "process bleed"] |
| Fractal summaries / one-point dilution | Every section ends by restating the page's thesis | One idea padded through repetition. [tropes.fyi] |
| Compulsive counting | "Here are 3 reasons teams love us:" | Announces structure instead of content. [tropes.fyi] |

### 2.4 Rhythm

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Rule of three / forced triads | "Faster. Smarter. Simpler." "Plan, track, and ship." Three feature cards, three testimonials, three pricing tiers, three stats | Triads make thin analysis look complete. Stronger as a signal where nobody would normally bother with a flourish. On landing pages the template's 3-column grid also forces them. [WP:AISIGNS §5.5; humanizer #6; stop-slop] |
| Fragment drumbeat / staccato bursts | "Built for speed. Designed for teams. Loved by developers." | Manufactured punch. Over-correction skills ("short sentences!") also cause it. [stop-slop; marketingskills second-gen] |
| Uniform sentence length (low burstiness) | Every sentence 12 to 18 words | Human writing varies widely. Detectors use burstiness. Mid-2026 models skew to 8 to 20 words. [WP:AISIGNS; jetwong summary] |
| Every paragraph ends with a punchline / tidy closer | "...And that's the point." "Because your time matters." | A pull-quote ending that could close any page. [stop-slop "cut quotables"; marketingskills "tidy closers"] |
| Anaphora / repeated openers | "With X, you can... With Y, you can... With Z, you can..." | Template repetition. [humanizer #7; tropes.fyi] |
| Perfect balance | Every section has a header, a 2-line paragraph, and 3 bullets of equal length | Real writers spend words where they know the most. Uniform weight shows nobody knew anything in particular. [marketingskills second-gen; noslop "evenness problem"] |
| Wisdom-shaped sentences | "Great products start with great conversations." | Sounds like an insight nobody would dispute, so it carries no information. [marketingskills second-gen] |

**Craft counterpoint:** Gary Provost's passage (in *100 Ways to Improve Your Writing*, 1985) shows that a run of same-length short sentences becomes monotonous. Varying length makes "music": short sentences hit, long ones carry the reader along. The lesson is variation driven by meaning. It is not "always use short sentences" and not "always vary" as a mechanical rule.

### 2.5 Punctuation and formatting

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Em-dash overuse (2022 to Sept 2026 era tell) | "Our platform—built for teams—changes everything." | Dashes where a human would use commas, parentheses, or colons. Formulaic "punched up" sales writing. Now a historical indicator for newer models; Claude reportedly still uses them more than professionals (July 2026 study cited on WP:AISIGNS). [WP:AISIGNS] |
| The new opposite tic: comma and period monotony | Long runs of comma-joined clauses or periods only, no semicolons, colons, or parentheses | The substitute pattern after dash suppression. Wikipedia flags it, with a citation-needed tag. Anti-slop skills that ban all dashes produce it. [WP:AISIGNS] |
| Bold as decoration / bold label on every bullet ("inline-header lists") | "**Speed:** ..., **Security:** ..., **Scale:** ..." | Formatting by rule. [WP:AISIGNS Style; humanizer #19] |
| Title case in headings | "Everything You Need To Grow Your Business" | AI defaults to title case. **But** house style can require it: Mailchimp's guide uses title case for headings and buttons ([Mailchimp TL;DR](https://styleguide.mailchimp.com/tldr/)), so this is weak alone. [WP:AISIGNS] |
| Emoji as structure | "🚀 Fast setup", "✨ AI-powered", "🔒 Secure" | Emoji at the start of headings or list items. [WP:AISIGNS] |
| Curly quotes in plain-text contexts | | Weak alone. Chatbots default to typographic quotes. [WP:AISIGNS] |
| Markdown leakage | "**bold**" asterisks, "##", "---" rendered literally on a page | Unambiguous. [WP:AISIGNS markup] |
| Exclamation and hype punctuation | "Get started today!" | Hype punctuation in body copy. [marketingskills; jalaalrd] |
| Arrows and unicode decoration | "Get started →", "✓ No credit card" | Template chrome. [Anthropic frontend-design; marketingskills] |
| Visual-copy tells on generated pages | Tracked ALL-CAPS eyebrow above every heading; one highlighted or gradient word in the headline; middle-dot meta strings ("Fast · Secure · Simple"); 01/02/03 numbered markers on non-sequences; fade-up on every section | Anthropic's frontend-design skill calls these "the commonest tells of a generated page". The copy and the layout produce the slop together. [anthropics/skills frontend-design] |

### 2.6 Rhetorical and tone

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Promotional or brochure register | "Nestled in the heart of downtown, our vibrant studio boasts breathtaking views." | Travel-brochure puffery (historical tell, 2023 to 2025). In a landing page the genre is persuasive, but unearned puffery still reads as AI. NN/g found "marketese" made pages measurably less usable. [WP:AISIGNS; NN/g] |
| Borrowed authority / vague attribution | "Experts agree...", "Industry leaders trust...", "Featured in leading publications" (no names) | Weasel words. Unnamed sources stand in for proof. [WP:AISIGNS §4.6, §4.2; humanizer #17] |
| Hedge stacks | "may potentially help to somewhat improve" | Qualifiers piled up to repair an overclaim. [humanizer #9] |
| Omniscient casual | Chatty voice that is certain about everything and says who it's for ("everyone") | Real brands scope claims and say who it isn't for. [marketingskills second-gen] |
| Chummy or false intimacy | "We get it." "Let's be honest..." "You deserve better." | Performed empathy. [marketingskills tone; stop-slop "performative emphasis"] |
| Fake vulnerability | "We were skeptical too. Then we built X." (no real story) | Risk-free confession. [marketingskills; tropes.fyi] |
| Over-explaining / teacher voice | "Let's break this down." "Think of it as a Swiss Army knife for your inbox." | Patronizing hand-holding and analogies that clarify less than the original. [tropes.fyi; Ogilvy (paraphrase) disliked analogies in ads] |
| Grandiose stakes | "The way the world works is changing forever." | Stakes inflation. [tropes.fyi] |
| Performed cleverness | "Less busywork, more good work." | Witty pairings as a default. Keep one only if the brand is playful and the line is true. [marketingskills] |
| Collaborative "we" | Switching a single founder's "I" to a corporate "we" | [tropes.fyi] |

### 2.7 Content-level: vagueness and fake proof (the most damaging in marketing copy)

| Tell | Slop example | Why it reads as AI |
|---|---|---|
| Swappable claims (fails the swap test) | "The all-in-one platform for modern teams." | A competitor could paste it unchanged. Harry Dry's third test is "Can nobody else say this?"; one logo-swap test of 50 SaaS homepages found more than half failed ([signalscore](https://signalscore.pages.dev/blog/logo-test-competitive-differentiation), practitioner source). |
| Unfalsifiable claims | "Quality you can trust." "Built for performance." | Fails "Can I falsify it?" (Harry Dry, via [Demand Curve](https://www.demandcurve.com/newsletters/growth-newsletter-202)). Ogilvy's position, paraphrased: superlatives and generalities don't persuade, facts do. |
| Unpicturable claims | "Empower your team to achieve more." | Fails "Can I visualize it?" Compare Dry's examples "1,000 songs in your pocket" and "Couch to 5K". |
| Fake-specific numbers (reflexive specificity) | "Save 10+ hours a week." "3x faster." "98% customer satisfaction." "Join 50,000+ teams." with no source | Round, neat, unsourced numbers used as a style. A model asked to "be specific" invents them, which is worse than vagueness because it is false. marketingskills: every number must be real and sourced or marked `[NEED: proof]`. |
| Hollow testimonials | "This tool completely changed how our team works! — Sarah J., Marketing Manager" | No company, no before/after, no specific detail, superlative-only. Often a placeholder treated as real. Ogilvy (paraphrase) favored testimonials from real, identifiable users. Fabricated reviews are also a legal and ethics problem. |
| Logo walls and "as seen in" with nothing behind them | "Trusted by industry leaders" + grey placeholder logos | Borrowed authority. [WP:AISIGNS §4.2 "canned emphasis on notability"] |
| Benefit without mechanism | "AI-powered insights that drive growth." | No how. Schwartz (paraphrase): solution-aware and sophisticated markets need the mechanism. |
| Feature parity lists | Six features, each an icon + 2-word title + a 1-line benefit of equal length | Says nothing about what alternatives lack (Dunford's "unique attributes"). |
| Missing target customer | "For teams of all sizes." | No best-fit customer, so every line goes generic. |
| Invented urgency or scarcity | "Limited spots available!" on a SaaS signup | Integrity failure. human-copywrite explicitly bans manufactured scarcity and urgency. |
| Generic FAQ | "Is my data secure? Absolutely. We take security seriously." | Answers with assurance instead of facts (SOC 2? encryption? region?). |
| Canonical AI page skeleton | Hero → logos → 3 features → how it works (1-2-3) → 3 testimonials → pricing (3 tiers, "Most popular") → FAQ → "Ready to get started?" band | Every section is present because the template has it, not because a reader question needs answering. |

### 2.8 Second-generation and over-correction tells (what anti-slop rules produce)

These matter most for skill design. Sources: marketingskills "Second-Generation Tells", vstaln/noslop "over-application tells", WP:AISIGNS era notes.

| Over-correction | How a rule causes it |
|---|---|
| Comma splices and period-only monotony | "Never use em dashes" with no positive alternative. |
| "Y rather than X", "instead of", "without the" | Banning "not X but Y" without removing the underlying contrast-reveal impulse. |
| Two-item tic ("fast and simple", "plan and ship") | stop-slop's "prefer two items to three". |
| Fragment cosplay / staccato | "Short punchy sentences" or "cut words" rules applied everywhere. |
| Calm-minimalist vocabulary tic: quietly, steady, practical, clear, simple, honest, real | Banning hype words, so the model reaches for understated synonyms. Mid-2026 Wikipedia lists several of these as the new AI vocabulary. |
| Anchor stuffing / reflexive specificity | "Be specific" leads to invented numbers, names, and anecdotes. |
| Signature closers and punchy one-line morals | Telling the model to "end strong". |
| Every draft identical | One rule pack applied to everything gives a uniform new house style that detectors and readers learn. noslop: "if outputs all look alike, you're over-applying it." |
| Plain-but-empty copy | Passes every style check and says nothing distinctive. human-copywrite calls this a failure ("substance"). |
| Deliberate lopsidedness as a tic | "Vary section length" turns into one long section and one tiny one on every page. |

### 2.9 What is NOT a reliable tell (from WP:AISIGNS "Ineffective indicators")

Perfect grammar; mixed registers; "bland" or "robotic" prose by itself; fancy or academic prose without AI-specific words; transition words alone ("Additionally"); unsourced content. Human-leaning signals: plain "is/has" phrasing, plain verbs ("wrote" not "authored"), definitive superlatives ("the only", "the first"), qualifiers like "perhaps" and "tends to", and even wordy constructions like "in order to". A skill should not "fix" these.

---

## 3. Catalog of craft principles

Each row: principle, one-line rationale, source.

### 3.1 Research before writing (message before medium)

| Principle | Rationale | Source |
|---|---|---|
| Steal the message from prospects (voice-of-customer) | Customers' own words for pains, outcomes, and objections beat anything the company invents. Wiebe's review-mined headline beat the control with 400%+ more clicks. | Copyhackers, [review mining](https://copyhackers.com/2014/10/amazon-review-mining/) |
| Mine where the audience already talks: reviews of competitors, books, forums, support tickets, sales calls | If you have no customers to interview, review sites substitute. Start from the outcome they want, not your product. | Copyhackers; [CXL VoC](https://cxl.com/blog/voice-of-customer/) |
| Record verbatim; summarize as little as possible | Paraphrase destroys the vivid phrasing that is the whole point. | Copyhackers |
| Recurring themes set the message hierarchy | What comes up most is what the page must say first. | Copyhackers |
| Tag messages by motivation, value, or anxiety | The tags map directly to headline, benefits, and objection-handling sections. | CXL message-mining template |
| Position against competitive alternatives (what customers would do without you, often "spreadsheet" or "do nothing") | Differentiation only means something relative to a real alternative. | April Dunford, *Obviously Awesome* ([summary](https://www.wudpecker.io/blog/obviously-awesome-the-guide-to-perfecting-your-product-positioning)) |
| Unique attributes → value → best-fit customers | A claim needs an attribute that alternatives lack and proof of it. Name who cares most. | Dunford |
| Diagnose the reader's awareness level: Unaware, Problem-aware, Solution-aware, Product-aware, Most aware | Each level needs a different headline. Most-aware readers want the product and the offer. Problem-aware readers need the problem named in their words. Unaware readers need identification or story. | Eugene Schwartz, *Breakthrough Advertising* (1966) (paraphrase; [Personal MBA](https://personalmba.com/levels-of-awareness/)) |
| Copy channels existing desire; it doesn't create it | Find the desire already in the market and attach the product to it. | Schwartz (paraphrase) |
| Market sophistication: in crowded markets, a bare claim no longer works; show a new mechanism | Explains why "faster/easier/better" fails for SaaS. The how becomes the headline. | Schwartz (paraphrase) |
| Start from purpose, audience, and what they need to know | Usefulness is defined before writing. | Mailchimp, [Writing principles](https://styleguide.mailchimp.com/writing-principles/) |
| Write for the user need, in words users already use (check search terms) | Users scan for their own vocabulary. | GOV.UK, [clear language](https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/) |

### 3.2 Specificity and proof

| Principle | Rationale | Source |
|---|---|---|
| Facts, not adjectives; the more informative the ad, the more persuasive | Superlatives and generalities are discounted. Specific facts are believed. | David Ogilvy, *Ogilvy on Advertising* (1983) (paraphrase) |
| The Rolls-Royce lesson: a single specific, vivid detail beats a claim | The clock-noise headline proved quietness without saying "quiet". It came from a technical editor's review: mined language. | Ogilvy ([summary](https://muchcurious.substack.com/p/ogilvy-on-advertising)) |
| The consumer is intelligent (Ogilvy's "isn't a moron" line) | Respect the reader. Don't insult them with puffery. | Ogilvy |
| Three tests: Can I visualize it? Can I falsify it? Can nobody else say this? | Picturable, provable, and ownable claims stick. Everything else is wallpaper. | Harry Dry, Marketing Examples (via [Demand Curve](https://www.demandcurve.com/lessons/fundamental-rules-of-good-copy)) |
| Objective beats promotional | NN/g: objective copy 27% more usable, concise 58%, scannable 47%, all three 124%. Users dislike "marketese". | [NN/g](https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/) |
| Speak truth: avoid dramatic storytelling and grand claims; focus on real strengths | Overclaiming erodes trust. | Mailchimp writing goals |
| Replace each vague word with the fact it stands for | "Seamless" becomes the setup steps or minutes; "robust" becomes the uptime or failure case. | marketingskills copy-editing |
| Never invent proof; mark gaps visibly | A visible `[NEED: …]` beats a believable lie. | marketingskills; human-copywrite |
| Long copy sells when the product needs explanation | Readers who are interested read on. Ogilvy found long, factual copy often outperformed short. | Ogilvy (summary) |
| Headlines get about 5x the readership of body copy | Most of the page's work happens in the headline and subhead. | Ogilvy |

### 3.3 Plain language and clarity

| Principle | Rationale | Source |
|---|---|---|
| Never use a stock figure of speech | Ready-made phrases think for you and hide your meaning from yourself. | Orwell, [Politics and the English Language](https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/) |
| Short word over long; cut any cuttable word; active over passive; everyday word over jargon | Each removes friction between reader and meaning. | Orwell rules 2 to 5 |
| Break any rule sooner than say anything barbarous | Rules serve meaning. Mechanical rule-following is its own failure. This is the anti-over-correction rule. | Orwell rule 6 |
| No "verbal false limbs" ("give rise to", "serve the purpose of") | Use the single verb. Same family as "serves as". | Orwell |
| Write like you talk; ask "would I say this to a friend?" | Spoken language is simpler and closer. Listen for the "clank". | Paul Graham, [Write Like You Talk](https://paulgraham.com/talk.html) |
| Read it aloud | Catches unnatural phrasing and rhythm. | Graham; Mailchimp TL;DR; humanizer |
| Plain English is for experts too | Higher-literacy readers also prefer it because it's faster. | GOV.UK |
| Sentences of 25 words or fewer; paragraphs of 5 sentences or fewer | Long sentences and -ion/-ment nouns slow reading. | GOV.UK clear language |
| Avoid buzzwords and metaphors: say the specific action ("run" a workshop, not "facilitate" it) | Metaphors "don't say what you mean". | GOV.UK A to Z "Words to avoid" |
| Clarity over cleverness; plainspoken; no fluffy metaphors | Clarity first, entertainment second. | Mailchimp Voice & Tone |
| Lead with the main point; group related ideas; descriptive headers | Readers scan. Front-load. | Mailchimp TL;DR; NN/g |

### 3.4 Voice and tone

| Principle | Rationale | Source |
|---|---|---|
| Voice is constant; tone flexes with the reader's state | Pricing (anxious), error (frustrated), onboarding (curious) need different tones from the same voice. | [Mailchimp Voice & Tone](https://styleguide.mailchimp.com/voice-and-tone/) |
| Define voice as "X but not Y" pairs (e.g., smart but not snobbish, weird but not inappropriate) | Pairs are actionable; single adjectives aren't. | Mailchimp |
| Humor only when it fits and comes naturally; if unsure, keep a straight face | Forced humor is a slop source ("performed cleverness"). | Mailchimp |
| "Don't market at people; communicate with them" | The respect principle. | Mailchimp writing goals |
| Build a writer: who's writing, what they know cold, what they find boring, their arguable opinion, what they'd cut | Produces uneven density, honest limits, and real opinions, which are the human texture. Never invent experience. | marketingskills ai-tells "Build a Writer" |
| A statistical voice fingerprint from a real corpus | Positive targets (sentence-length variance, number density, contractions, claim-then-proof) beat bans. | realrossmanngroup rossmann-voice |

### 3.5 Interface and web copy

| Principle | Rationale | Source |
|---|---|---|
| Copywriting is interface design; every letter matters | "Submit" vs. "Save" vs. "Create" is a design decision. | 37signals, [Getting Real](https://basecamp.com/gettingreal/09.7-copywriting-is-interface-design) |
| Avoid jargon and internal names; customers shouldn't have to think like engineers | Internal names are a classic agent-built-site leak. | Getting Real |
| Buttons contain actions; link text names the destination, never "click here" or "learn more" | Accessibility and scannability. | Mailchimp Web Elements & Accessibility |
| Name things from the user's view; keep action verbs consistent through a flow ("Publish" → "Published") | Consistency builds trust and reduces errors. | Anthropic frontend-design skill |
| Errors say what happened and how to fix it; empty states invite action | Microcopy is part of the pitch. | Anthropic frontend-design |
| One topic per page; one primary action per page | Focus converts. | Mailchimp; marketingskills |
| Concise, scannable, objective | The NN/g combined effect is 124%. | NN/g |
| Hire writers; clear writing is clear thinking | 37signals treats writing as a core hiring signal. | 37signals [Hire Great Writers](https://37signals.com/podcast/hire-great-writers/) |

### 3.6 Rhythm

| Principle | Rationale | Source |
|---|---|---|
| Vary sentence length for music: short for impact, long to carry | Same-length runs drone. Variation reads as a person thinking. | Gary Provost, *100 Ways to Improve Your Writing* (described, not reproduced) |
| Sentence length follows the idea, not a rule | Over-correcting to "short and punchy" is itself a tell. | marketingskills "Build a writer"; noslop |

---

## 4. Survey of existing skills and prompts

Legend: **[read]** = I read the SKILL.md or reference files directly. **[readme]** = I read only the README or repo page.

### 4.1 blader/humanizer [read]
- **URL:** https://github.com/blader/humanizer (SKILL.md v3.1.0)
- **Approach:** A single SKILL.md derived from WP:AISIGNS. It explains why AI text sounds this way using six "habits" (staging, rhythm by rule, inflation, formatting by rule, leftovers, wrong reader) and catalogs 26 patterns under them. Patterns 1 to 5 justify an edit on one sighting; patterns marked *weak alone* need nearby tells. Workflow: mark tells, draft, check (read aloud, nothing added or lost), then a final rewrite that restates each point rather than patching phrases. Output modes for pasted text, files, and embedded use. A user writing sample overrides the rules, including the dash rule. "When not to act" protects quotes, names, pre-2022 text, specific details, mixed feelings, and genuine asides.
- **Strengths:** Mechanism-first taxonomy. Weak-alone tiering. A firm "add no facts, names, numbers" rule. It names the tells that most often survive (1, 2, 6, 8, 19). It treats a voice sample as an override. It preserves human texture.
- **Weaknesses:** Editing only, with no drafting or research. It inherits Wikipedia's encyclopedic bias: "Sales language" (#16) is a tell in an encyclopedia but is the genre on a landing page, so it gives no guidance on legitimate persuasion. The absolute zero-dash rule (unless a sample has dashes) feeds the comma and period monotony tic Wikipedia now flags. It has nothing on proof, positioning, or page structure.

### 4.2 hardikpandya/stop-slop [read]
- **URL:** https://github.com/hardikpandya/stop-slop (SKILL.md + references/phrases.md, structures.md, examples.md)
- **Approach:** 8 core rules (cut filler, break formulaic structures, active voice with human subjects, be specific, put the reader in the room, vary rhythm, trust readers, cut quotables), 12 quick checks, and a 5-dimension 1 to 10 self-score (Directness, Rhythm, Trust, Authenticity, Density; below 35/50 means revise). References list banned structures (binary contrasts, negative listing, dramatic fragmentation, rhetorical setups, false agency, narrator-from-a-distance, passive voice, Wh- starters) with fixes.
- **Strengths:** Short and memorable. The "false agency" and "narrator from a distance" categories are original and useful ("the market rewards" becomes "buyers pay for"). Every banned structure comes with a fix.
- **Weaknesses:** Several rules are blunt enough to create new tics. "Prefer two items to three" produces a pair tic. Banning all -ly adverbs and all Wh- sentence openers removes legitimate lines ("What you get", "Why teams switch"). "Every sentence needs a human subject" fights product copy, where the product is often the right subject. "Avoid em dashes" has no positive alternative. The 50-point rubric is graded by the same model that wrote the text, so it is easy to game. There is no craft for persuasion, proof, or research.

### 4.3 coreyhaines31/marketingskills: `copywriting` + `copy-editing` [read]
- **URLs:** https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting (SKILL.md, references/ai-tells.md, copy-frameworks.md, natural-transitions.md); https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing
- **Approach:** Reads a product-marketing context file (including a "Learnings" section of tested angles), gathers page purpose, audience, objections, proof, and traffic source, then diagnoses the input: A (blank or slop, so rebuild from facts), B (real voice, so restore it), or C (point edit). Drafts 2 to 3 candidates per unit with a three-question gate (picture it? prove it? could a competitor write it?). ai-tells.md is a strong taxonomy: Ban vs. Cap tiers, scope (short copy, long copy, section), structural patterns, an openers and closers table, a marketing-phrase table with replacements, a vocabulary list (ban, cap, intensifiers), Second-Generation Tells, Build-a-Writer, 9 rewrite rules (including "vary the fixes", "don't invent to de-slop", "flag a missing differentiator"), and a 6-step self-check with a grep-like search for "not / isn't / no / without / ? / : / —". copy-editing adds "Seven Sweeps" (Clarity, Voice & Tone, So What, Prove It, Specificity, Heightened Emotion, Zero Risk) and an optional expert-panel score.
- **Strengths:** The closest thing to a complete anti-slop copywriting skill. Its key insight: fixes come from facts, and synonym swaps create new tells. It has `[NEED: proof]` and `[NEED: differentiator vs. named competitors]` placeholders, explicit second-generation tells, a swap test, and an exception list (a single "No card required" is fine). It cites its sources, including a "case for the defense" counter-view.
- **Weaknesses:** It ships its own templates. CTA formula "[Action Verb] + [What They Get] + [Qualifier]" (e.g., "Start My Free Trial"), the "transformation arc" headline and "Now you can" test, and a default page skeleton (hero, social proof, problem, benefits, how it works, objections, final CTA) are exactly the patterns that make AI landing pages look alike when applied by default. Research is limited to a context file: there is no review-mining or VoC procedure and no explicit awareness-level mapping (copy-frameworks.md may cover frameworks; not verified). The expert-panel score is self-graded. It does not connect copy to layout (grids that force triads, eyebrow labels, highlighted words).

### 4.4 forint573/human-copywrite [readme]
- **URL:** https://github.com/forint573/human-copywrite
- **Approach:** SKILL.md plus trigger-loaded references (process bleed, website copy, substance, integrity, AI-tell catalog, voice setup and calibration, QA scorecard), an optional `scripts/copy_scan.py` heuristic scanner, `tests/` with an eval harness (`make model-eval`, with-vs-without-skill comparison), and a portable single-file build. Writes from a "source sheet" (reader, problem, product, proof, objection, next step) ordered by the reader's questions. 30+ tells tagged always-fix, cluster-fix, or context. A `/human-copywrite setup` creates MY_OWN_VOICE.md, which can override taste but never integrity. Fixed reply shape: deliverable, then a note with Changed / Verify / Placeholders / Flagged / Register.
- **Strengths:** The "process bleed" concept fits agent-built sites, where the chat history leaks into copy in build order. It has a substance test (passing style checks is not enough), integrity rules (no invented proof, no stripped caveats, no fake urgency), visible placeholders, existing specifics flagged for verification rather than deleted, a persistent voice file, and an actual eval harness.
- **Weaknesses (from README only):** Its research step is the source sheet; there is no VoC mining method. Its layout coupling is unknown. Model calibration is pinned to specific model versions, so it will drift.

### 4.5 vstaln/noslop [readme]
- **URL:** https://github.com/vstaln/noslop
- **Approach:** A "linter, not a style." Draft plainly, then two scans: (1) slop tells and (2) over-application tells (anchor stuffing, fragment cosplay, signature closers, punchy one-line morals). Optional structure layers are written as menus of moves (construction.md for fiction, structure-nonfiction.md), only for long pieces that sag. Modes: modest, balanced, max. The VOICE check flags hard failures only. Scores are "lab diagnostics", never a ship gate. Detector smoke tests run on a strict iteration budget with no score farming.
- **Strengths:** The only skill built around its own failure mode. Its stated success criterion is that a careful reader finishes the page. It names the "evenness problem". Menus instead of rules avoid new templates.
- **Weaknesses:** Aimed at essays and fiction, not conversion copy. No proof or positioning guidance.

### 4.6 jalaalrd/anti-ai-slop-writing [readme]
- **URL:** https://github.com/jalaalrd/anti-ai-slop-writing
- **Approach:** SKILL.md (<500 lines) plus references/banned-words.md. 50+ banned words, 35+ banned phrases, 16 banned openers, 10 structural patterns, punctuation (em dashes, exclamation, ellipses), formatting (markdown in plain text, emoji bullets, hashtag stacks), and accuracy (invented stats, fabricated quotes, fake anecdotes). Claims grounding in a CMU 2025 study, WP:AISIGNS, and "52 million Buffer posts".
- **Strengths:** Broad, portable, and it includes accuracy (fabrication) as a category.
- **Weaknesses:** Almost entirely prohibitions with little positive craft. The study claims aren't verifiable from the repo page. It is the purest example of a "ban words, get synonyms" skill.

### 4.7 realrossmanngroup/no_ai_slop_writing_rules [readme]
- **URL:** https://github.com/realrossmanngroup/no_ai_slop_writing_rules
- **Approach:** Two skills: `no-ai-slop` (24 rules, WRONG/RIGHT pairs, self-check, a big detection reference) and `rossmann-voice` (a voice profile from 513,683 words of corpus analysis: testable-number density, high sentence-length variance, claim-then-proof paragraphs, contractions, contempt through precision rather than adjectives; a Claim-Mechanism-Reality argument pattern).
- **Strengths:** The best example of a positive, measured voice target paired with bans. Its heading example ("The Pricing Trap" → "how to avoid scam pricing") is directly relevant to web copy.
- **Weaknesses:** Built for one person's voice. The approach generalizes but the content does not.

### 4.8 tropes.fyi / tropes.md (by ossama.is) [read catalog page]
- **URL:** https://tropes.fyi, https://tropes.fyi/tropes-md
- **Approach:** 49 tropes in 6 categories (Word Choice, Sentence Structure, Paragraph Structure, Tone, Formatting, Composition), each with a description, "avoid patterns like" examples, and a trend tag (consistent, rising, new, fading). A single-file version goes into system prompts. It closes with the note that a single use may be fine, while clusters and repetition are the problem.
- **Strengths:** Trend tags address drift. It has original categories: compulsive counting, invented concept labels, premise stacking, the tie-back, self-echo, fractal summaries, rapid-fire historical analogies, and "Think of it as...".
- **Weaknesses:** A catalog, not a workflow. No craft or proof guidance.

### 4.9 Sam Paech: antislop-sampler, auto-antislop, slop-forensics [read list and README]
- **URLs:** https://github.com/sam-paech/antislop-sampler (slop_phrase_prob_adjustments.json), https://github.com/sam-paech/auto-antislop, https://github.com/sam-paech/slop-forensics, paper https://arxiv.org/abs/2510.15061
- **Approach:** Decoding-time backtracking suppresses ~8,000 patterns without destroying vocabulary. The published phrase list (~550 weighted entries) is fiction-heavy: "symphony", "testament to", "kaleidoscope", "delve", "tapestry", "barely above a whisper", "maybe, just maybe", "shivers down", and invented names (Elara, Kael, Lyra, Oakhaven, Whisperwood). Slop-forensics profiles the over-represented words, bigrams, and trigrams of each model and builds model family trees.
- **Strengths:** An empirical method that shows slop is measurable and model-specific.
- **Weaknesses for this use:** It works at the token and phrase level, which can't touch structure or proof. The list targets creative writing, not marketing, and it requires sampler access (not available to a Claude skill). The useful lesson is the method: derive the list from data for your genre.

### 4.10 Anthropic's own skills [read]
- **URL:** https://github.com/anthropics/skills/tree/main/skills (folders include brand-guidelines, doc-coauthoring, frontend-design, internal-comms, theme-factory, among others)
- **frontend-design:** The most relevant. It covers microcopy (user's-view naming, "Save changes" over "Submit", consistent verbs through a flow, errors as guidance, empty states as invitations, sentence case, no filler) and lists visual slop that sits next to copy (eyebrows, single accented headline word, ALL-CAPS labels, 01/02/03 markers, middle-dot meta strings, appended "→", fade-up everywhere). Its advice to "spend your boldness in one place" applies to copy too.
- **doc-coauthoring:** No anti-slop rulebook. Its useful idea is reader testing: a fresh Claude instance with no context answers predicted reader questions to find gaps. That is a model for evaluating copy against a reader.
- **internal-comms:** Defers to per-format example files. No prose-quality rules on the main page.
- **Overall:** Anthropic has no dedicated anti-slop or copywriting skill.

### 4.11 Others found, not read in depth
- haidrrrry/humanize-ai-writing (https://github.com/haidrrrry/humanize-ai-writing): separate ai-tells.md and fixes with before/after examples, plus a CLI check that exits non-zero on tells. Lint-in-CI is a useful idea.
- elithrar/anti-slop (listed at https://www.ui-skills.com/skills/elithrar/anti-slop): preserves author voice across blogs, docs, and email.
- Zack Proser, "How to wire an anti-slop pass into your pipeline" (https://zackproser.com/blog/stop-slop-scrub-pass): run anti-slop after the draft is structured, fact-checked, and in voice, not during drafting.

---

## 5. Gaps: what a great anti-slop website/landing-page copywriting skill should do that none does well

1. **Research before writing, with a real VoC procedure.** No skill runs Wiebe-style message mining. A strong skill would gather or request verbatim customer language (reviews of the product and competitors, support tickets, sales-call notes, forum threads, G2/Capterra/App Store/Reddit). It would tag each line as pain, desire, objection, or outcome, and as motivation, value, or anxiety, then rank by frequency to set the message hierarchy. With no VoC available, it says so and lowers its confidence instead of inventing a persona.
2. **Positioning and awareness as explicit inputs.** Before the hero, record: competitive alternative (Dunford), unique attributes with proof, best-fit customer, awareness level (Schwartz), and market sophistication. Then pick the hero type from those (most-aware: product + offer; problem-aware: name the pain in their words; sophisticated market: lead with mechanism). Current skills apply one headline formula to every page.
3. **A proof ledger, not just placeholders.** Keep an inventory of every number, name, logo, quote, certification, and integration, with its source. Every claim on the page links to a ledger entry or becomes `[NEED: …]`. Testimonials must carry a name, role, company, a specific before/after detail, and permission status; superlative-only quotes are rejected. Round numbers with no source get flagged. This fixes the most damaging marketing slop (fake specificity), which current skills handle with one line.
4. **Template-free page architecture.** Derive sections from the reader's questions in order (what is it, is it for me, how does it work, why believe you, what does it cost, what if it fails, what do I do now), using VoC frequency. Do not start from the canonical AI skeleton. Section count, card count, and list lengths follow the content: four real features means four cards, not three; one strong testimonial beats three hollow ones. No skill addresses grid-driven triads.
5. **Couple copy with layout.** Website slop is copy plus chrome. The skill should rule on eyebrow labels, highlighted headline words, 01/02/03 markers, "→" on every link, stat strips, logo walls, and icon-title-blurb feature grids. Copy lengths should fit real layout constraints (hero headline about 6 to 12 words that reads in about 5 seconds; subhead 1 to 2 sentences) without forcing equal-length blurbs (the "perfect balance" tell). Anthropic's frontend-design covers the visual side and the copy skills cover the words; nothing joins them.
6. **Microcopy as part of the pitch.** Cover buttons, form labels, inline validation, error and empty states, nav labels, pricing-table fine print, footer, meta title and description, OG text, and alt text, with consistent verbs across the flow (37signals, Mailchimp, frontend-design). Most copy skills stop at hero + sections + CTA.
7. **Process-bleed and agent-specific leak checks.** Catch internal component names, prompt phrasing, "we've added", build-order narration, leftover `[Company Name]`, lorem ipsum, "© 2024", placeholder logos, fake "Sarah J." testimonials, and features described that the product doesn't have. Only human-copywrite names this, and it is the most common failure when an agent builds a whole site.
8. **Over-correction defenses designed in.** For every ban, give a positive alternative and a substitute-tic check: dash ban → comma/period monotony; "not X but Y" → "rather than"; hype words → "quietly/steady/practical"; triads → pairs; "be specific" → invented numbers; "punchy" → fragments. Use cluster thresholds (Ban/Cap/weak alone) instead of absolute bans, plus a cross-page check: if three pages from the skill share a cadence or closer, the skill is the tic (noslop's insight). Orwell's rule 6 should be in the skill.
9. **A positive voice model, not only a ban list.** Combine Mailchimp-style "X but not Y" voice pairs, tone shifts by reader state per page type (pricing is anxious, onboarding curious, errors frustrated), build-a-writer answers, and, when samples exist, a measured fingerprint (sentence-length variance, contraction rate, number density, person). House style overrides generic tells: Mailchimp's title-case headings would be "AI tells" under Wikipedia's rules.
10. **Persuasion the genre legitimately needs.** Encyclopedic tell lists treat all promotional language as slop. A landing page has to persuade. The skill should separate earned persuasion (specific benefit, named proof, real urgency like a dated price change, risk reversal, an honest "not for you if…") from puffery. NN/g's objective-language finding and Ogilvy's facts-sell finding say the same thing: the persuasion should come from facts, with the adjectives cut.
11. **Reader-based evaluation, not self-scoring.** Replace self-graded rubrics with (a) a fresh-context reader sub-agent (doc-coauthoring style) given only the page and a persona drawn from VoC, which must answer "what is this, who is it for, why this over [named alternative], what does it cost, what would make me hesitate"; (b) a swap test against named competitors' actual hero lines; (c) Dry's visualize/falsify/only-we tests per headline and section claim; (d) a lint pass for Ban patterns (the haidrrrry CLI idea) as a hard gate; (e) read-aloud. Never iterate to beat an AI detector (noslop, humanizer).
12. **Drift-proof lexicon.** Keep word and phrase lists in a dated, replaceable reference file tagged by era and trend (tropes.fyi's consistent/rising/fading), with the reason each pattern reads as AI. The workflow should depend on reasons (mechanism, fact replacement, reader questions), not memorized lists, so the skill still works when GPT-7 or Claude's next model has a different favorite word.
13. **Interview mode when inputs are thin.** When there is no VoC, proof, or differentiator, the skill should ask a short, ordered set of questions (who switched to you from what and why, your one number you'd bet on, the objection you hear most, what you're not for) before drafting, then draft the best honest page possible with visible `[NEED]` gaps. Current skills either invent or produce a blank-faced generic page.

---

## 6. Sources

**Catalogs and research**
- Wikipedia, "Wikipedia:Signs of AI writing" (WikiProject AI Cleanup), version as of Oct 2026: https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- Reinhart et al., "Do LLMs write like humans? Variation in grammatical and rhetorical styles" (PNAS 2025): https://arxiv.org/abs/2410.16107 ; CMU release: https://www.cmu.edu/news/stories/archives/2025/february/is-it-human-or-is-it-ai
- Kobak et al., "Delving into LLM-assisted writing in biomedical publications through excess vocabulary": https://arxiv.org/abs/2406.07016
- Paech et al., "Antislop" (2025): https://arxiv.org/abs/2510.15061
- Sam Kriss, "Why Does A.I. Write Like … That?", NYT Magazine, Dec 2025 (read via secondary summary): https://longreads.com/2025/12/04/why-does-a-i-write-like-that
- tropes.fyi: https://tropes.fyi , https://tropes.fyi/tropes-md
- Signs-of-AI-writing compilation with statistics: https://jetwong.neocities.org/ai/signs-of-ai-writing
- NN/g, "Concise, SCANNABLE, and Objective: How to Write for the Web": https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/

**Skills and tools**
- blader/humanizer: https://github.com/blader/humanizer
- hardikpandya/stop-slop: https://github.com/hardikpandya/stop-slop
- coreyhaines31/marketingskills copywriting: https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting ; ai-tells.md: https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/references/ai-tells.md ; copy-editing: https://github.com/coreyhaines31/marketingskills/tree/main/skills/copy-editing
- forint573/human-copywrite: https://github.com/forint573/human-copywrite
- vstaln/noslop: https://github.com/vstaln/noslop
- jalaalrd/anti-ai-slop-writing: https://github.com/jalaalrd/anti-ai-slop-writing
- realrossmanngroup/no_ai_slop_writing_rules: https://github.com/realrossmanngroup/no_ai_slop_writing_rules
- haidrrrry/humanize-ai-writing: https://github.com/haidrrrry/humanize-ai-writing
- sam-paech antislop-sampler: https://github.com/sam-paech/antislop-sampler ; slop-forensics: https://github.com/sam-paech/slop-forensics ; auto-antislop: https://github.com/sam-paech/auto-antislop
- Anthropic skills: https://github.com/anthropics/skills/tree/main/skills (frontend-design, doc-coauthoring, internal-comms)
- Zack Proser, anti-slop pass in a pipeline: https://zackproser.com/blog/stop-slop-scrub-pass

**Craft**
- Orwell, "Politics and the English Language": https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/
- Paul Graham, "Write Like You Talk": https://paulgraham.com/talk.html
- Mailchimp Content Style Guide: https://styleguide.mailchimp.com/ ; Voice & Tone: https://styleguide.mailchimp.com/voice-and-tone/ ; Writing principles: https://styleguide.mailchimp.com/writing-principles/ ; TL;DR: https://styleguide.mailchimp.com/tldr/ ; Accessibility: https://styleguide.mailchimp.com/writing-for-accessibility/
- GOV.UK clear language: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/ ; A to Z (words to avoid): https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/style-guides/a-to-z-style-guide/
- 37signals, Getting Real, "Copywriting is interface design": https://basecamp.com/gettingreal/09.7-copywriting-is-interface-design ; Hire Great Writers: https://37signals.com/podcast/hire-great-writers/
- Copyhackers, review mining: https://copyhackers.com/2014/10/amazon-review-mining/ ; CXL VoC: https://cxl.com/blog/voice-of-customer/
- Ogilvy summary: https://muchcurious.substack.com/p/ogilvy-on-advertising (book: *Ogilvy on Advertising*, 1983)
- Schwartz awareness levels: https://personalmba.com/levels-of-awareness/ (book: *Breakthrough Advertising*, 1966)
- Harry Dry's three rules: https://www.demandcurve.com/lessons/fundamental-rules-of-good-copy , https://www.demandcurve.com/newsletters/growth-newsletter-202
- April Dunford positioning summary: https://www.wudpecker.io/blog/obviously-awesome-the-guide-to-perfecting-your-product-positioning
- Gary Provost background: https://en.wikipedia.org/wiki/Gary_Provost (passage described, not reproduced)
- Logo/swap test (practitioner): https://signalscore.pages.dev/blog/logo-test-competitive-differentiation

**Verification notes:** Read directly: WP:AISIGNS (full page in three passes), the humanizer, stop-slop, and marketingskills SKILL.md and reference files, the antislop phrase list, Anthropic skill files, Mailchimp, GOV.UK, Orwell, Graham, Getting Real, Copyhackers review mining, and NN/g. human-copywrite, noslop, jalaalrd, rossmann, and slop-forensics come from repo READMEs only. Kriss, Ogilvy, Schwartz, Dunford, and Harry Dry come from secondary summaries plus my own knowledge of the books, and are marked as paraphrase. The Wikipedia page's model-era details (GPT-5.6, GPT-6, Sept 2026 em-dash change) are taken as the page states them.
