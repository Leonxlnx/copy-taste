# What makes pro tech/product website copy good: evidence from 2014–2021 archives

Research date: 2026-11-07. Every snapshot is from 2014–2021, before LLM copywriting existed.

## Method and caveats

- **Source:** raw archived HTML from the Wayback Machine, fetched through the `id_` (unmodified original) endpoint. Visible text was pulled out with a small HTML-to-text script. The script dropped scripts and styles and kept tags like `[h1]`, `[p]` and `[a]` so headings and buttons could be told apart. **Every quote below appears verbatim in one of these fetched snapshots. None are from memory.** A few headlines were split across `<span>` line breaks (Apple does this a lot). Those are rejoined with single spaces.
- **Snapshot URL:** given next to each site, without the `id_` flag, so it opens in the normal Wayback viewer.
- **Customer testimonials:** these were written by customers, not the company's copywriters. They are marked *(customer quote)* wherever they're used as evidence of the company's own choices: which quotes it picked and how it attributed them.
- **Notion:** every 2019–2020 snapshot of notion.so is a client-side JavaScript shell with no text in the HTML. Jan, Jun, Oct and Dec 2020 were all checked, and the June 2020 page was also opened in a browser, where the archived app fails to boot. From 2020 only the meta description is usable. The page copy comes from the first server-rendered snapshot, **March 2021**, which is still before 2022.
- **Superhuman:** the snapshot is dated June 2020, but the page is the long-running waitlist-era homepage.
- **Counts:** the counts in Part 3 are machine counts over extracted `[p]` and `[li]` text. They're approximate. Some pages (Linear, Tailwind 2021, Things) include customer tweets or press quotes in that text.

---

## Sources (snapshot URLs)

| Site | Snapshot(s) used |
|---|---|
| Stripe (2019) | https://web.archive.org/web/20190616005322/https://stripe.com/ |
| Stripe (2021) | https://web.archive.org/web/20210616033222/https://stripe.com/ |
| Basecamp home (2019) | https://web.archive.org/web/20190616013356/https://basecamp.com/ |
| Basecamp home (2020) | https://web.archive.org/web/20201016085709/https://basecamp.com/ |
| Basecamp "How it works" (2019) | https://web.archive.org/web/20190616013444/https://basecamp.com/how-it-works |
| Basecamp Guide to Internal Communication ("how we work", 2020) | https://web.archive.org/web/20200103211442/https://basecamp.com/guides/how-we-communicate |
| Apple iPhone 11 (2019) | https://web.archive.org/web/20191003040003/https://www.apple.com/iphone-11/ |
| Apple AirPods Pro (2019) | https://web.archive.org/web/20191102051317/https://www.apple.com/airpods-pro/ |
| Mailchimp (2015, 2018) | https://web.archive.org/web/20150616050326/http://mailchimp.com/ · https://web.archive.org/web/20180616040041/https://mailchimp.com/ |
| Slack (2014, 2016, 2019) | https://web.archive.org/web/20141015102300/https://slack.com/ · https://web.archive.org/web/20160616053245/https://slack.com/ · https://web.archive.org/web/20190615234227/https://slack.com/ |
| Superhuman (2020) | https://web.archive.org/web/20200615235232/https://superhuman.com/ |
| Linear (2020, 2021) | https://web.archive.org/web/20200616094341/https://linear.app/ · https://web.archive.org/web/20210318175323/https://linear.app/ |
| Figma (2019) | https://web.archive.org/web/20190615202712/https://www.figma.com/ |
| Dropbox (2017) | https://web.archive.org/web/20170615195052/https://www.dropbox.com/ |
| Notion (2020 meta, 2021 page) | https://web.archive.org/web/20200116024636/https://www.notion.so/ · https://web.archive.org/web/20210302011244/https://www.notion.so/ |
| Gumroad (2019) | https://web.archive.org/web/20191016002121/https://gumroad.com/ |
| HEY (2020) | https://web.archive.org/web/20200720041140/https://hey.com/ · https://web.archive.org/web/20200717185251/https://hey.com/how-it-works/ |
| Panic Transmit 5 (2019) | https://web.archive.org/web/20190616231656/https://panic.com/transmit/ |
| ZEIT (2019) / Vercel (2020) | https://web.archive.org/web/20190613213834/https://zeit.co/ · https://web.archive.org/web/20201016125446/https://vercel.com/ |
| Tailwind CSS (2020, 2021) | https://web.archive.org/web/20201116054336/https://tailwindcss.com/ · https://web.archive.org/web/20210615154925/https://tailwindcss.com/ |
| **Extra:** Things 3 by Cultured Code (2019) | https://web.archive.org/web/20190615212928/https://culturedcode.com/things/ |
| **Extra:** Pinboard (2019) | https://web.archive.org/web/20190615234752/http://pinboard.in/ |

That's 18 brands across 30 snapshots: 16 from the list plus 2 extras.

---

# Part 1: Site-by-site

## 1. Stripe
Snapshots: [2019](https://web.archive.org/web/20190616005322/https://stripe.com/) · [2021](https://web.archive.org/web/20210616033222/https://stripe.com/)

**Excerpts, 2019**
- Hero: "The new standard in online payments"
- Subhead: "Stripe is the best software platform for running an internet business."
- Subhead, 2nd sentence: "We handle billions of dollars every year for forward-thinking businesses around the world."
- Section headings: "Developers first" · "Always improving" · "Global scale" · "Explore the docs"
- Body: "We believe that payments is a problem rooted in code, not finance." · "you can get up and running with Stripe in just a couple of minutes." · "We help power millions of businesses in 100+ countries and across nearly every industry."
- Product one-liners in the menu: "Fight fraud with machine learning." · "Build your perfect point of sale." · "Everything platforms need to get sellers paid."
- CTAs: "Start Now" · "Contact Sales" · "Create Stripe account" · "Sign up instantly" · "Full API reference"
- Close: "Ready to get started?" / "Get in touch or create an account."

**Excerpts, 2021**
- Hero: "Payments infrastructure for the internet"
- Subhead (partial): "...use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online."
- Eyebrow + heading pairs: "Designed for developers" / "The world’s most powerful and easy-to-use APIs" · "Why Stripe" / "A technology-first approach to payments and finance" · "Global scale" / "The backbone for internet business"
- Sub-feature heads: "Close to the metal" · "Fastest-improving platform" · "Battle-tested reliability"
- Body: "We agonize over the right abstractions so your teams don’t need to stitch together disparate systems" · "(On average, we deploy our production API 16x per day.)" · "API requests per day, peaking at 13,000 requests a second." (under the stat "250M+") · "of U.S. adults have bought from businesses using Stripe." (under "90%")
- Pricing line: "Always know what you pay" / "Integrated per-transaction pricing with no hidden fees."
- CTAs: "Start now" · "Contact sales" · "Read the docs" · "See libraries" · "Explore partners" · "Pricing details"

**Why it works**
- **Claims carry their own receipts.** Each 2021 sub-head is an abstract claim ("Fastest-improving platform"), and the sentence under it holds a hard number: "16x per day", "99.9%+", "13,000 requests a second". Putting the proof in parentheses, "(On average, we deploy our production API 16x per day.)", makes it read like an aside, not a boast.
- **A belief stated as a contrast.** "a problem rooted in code, not finance" tells developers whose side Stripe is on in nine words.
- **The product UI is part of the copy.** The 2021 hero animates a fake dashboard ("Rocket Rides", "$3,528,198.72") and a checkout ("Pay total $65.00"). The page shows the outcome instead of describing it.
- **Labels for scanning, claims for reading.** Eyebrows are plain labels ("Global scale", "Why Stripe"). The headline under each is the claim.
- **Every CTA starts with a verb and names what's behind it**: "Read the docs", "See libraries", "Explore partners". There's also always a sales path ("Contact sales") beside self-serve.
- **What it doesn't say:** no "revolutionary", nothing like "unlock" or "seamless". Jargon ("abstractions", "close to the metal") is left in on purpose because developers are the audience.

## 2. Basecamp (homepage, "How it works", and the communication guide)
Snapshots: [home 2019](https://web.archive.org/web/20190616013356/https://basecamp.com/) · [home 2020](https://web.archive.org/web/20201016085709/https://basecamp.com/) · [how it works 2019](https://web.archive.org/web/20190616013444/https://basecamp.com/how-it-works) · [communication guide 2020](https://web.archive.org/web/20200103211442/https://basecamp.com/guides/how-we-communicate)

**Excerpts, home 2019**
- Hero: "We've been expecting you."
- Subhead: "All growing businesses run into the same fundamental problems. Hair on fire, buried under email, stuff everywhere."
- Turn: "The good news?" → "Basecamp solves them."
- Proof headings: "89% have a better handle on business." · "84% report more self-sufficient teams." · "59% have fewer weekly meetings."
- Body: "Single purpose project management and chat apps can't fix this problem — they can only make it worse." · "...makes work feel like less work." · "We use Basecamp to make software (Basecamp!), discuss ideas, plan marketing campaigns, share pet pics — you get the idea."
- Picked testimonial *(customer quote)*: "No more ‘I thought so and so was responsible for that.’"
- CTAs: "Try it FREE" · "Start a free 30 day trial"
- Footer sign-off: "Enjoy the rest of your day!"

**Excerpts, home 2020 (COVID pivot)**
- Hero: "The All-In-One Toolkit for Working Remotely."
- Body opener: "Before Basecamp: You’re wondering how you’ll quickly transition your team to remote work."
- Section headings: "One place, not all over the place." · "We literally wrote the book on working remotely." · "Companies change for the better when they work in Basecamp."
- Proof: "we've been working remotely for 20 years." · "4,000 companies signed up in the last week alone!"
- CTAs: "Try Basecamp Free" · "Give Basecamp a Try" · "Ready to get going? Engage:"

**Excerpts, "How it works"**
- H1: "How Basecamp works."
- Feature headings (plain labels): "To-do Lists" · "Message Boards" · "Schedules" · "Real-time Group Chat" · "Email Forwards"
- Body: "Basecamp will follow up on overdue tasks for you." · "Stop wasting time on status meetings." · "Stop wondering what's going on and know instead." · "Important emails shouldn’t stay stranded in an inbox."
- Bullets, lowercase and verb-first: "assign to-dos to one or more people" · "eliminate the need for daily standups"
- Objection catcher: "Still wondering if you can do something in Basecamp?" → "The answer is YES!"
- Close: "Try it free for 30 days." / "No obligations, no credit card required." Then a list of outcomes: "You'll spend less time in meetings"

**Excerpts, Guide to Internal Communication (the "how we work" page)**
- H1: "The Basecamp Guide to Internal Communication"
- Section: "Rules of thumb, and general philosophy"
- Rules: "Real-time sometimes, asynchronous most of the time." · "Meetings are the last resort, not the first option." · "Writing solidifies, chat dissolves." · "Five people in a room for an hour isn't a one hour meeting, it's a five hour meeting." · "Urgency is overrated, ASAP is poison." · "Occasionally pick random words, sentences, or paragraphs and hit delete. Did it matter?"
- Concrete practice: "98% of our internal communication happens inside Basecamp." · "Every workday at 16:30, Basecamp (the product) automatically asks every employee “What did you work on today?”"
- Close and CTA: "Tried Basecamp lately?" · "Now you can ditch Slack, Asana, Trello, Jira, Dropbox, or some other messy jumble of products." · "Try it free today and see what you've been missing."

**Why it works**
- **The pain comes in the reader's own slang** ("Hair on fire, buried under email, stuff everywhere") before Basecamp is named. Three fragments, no verbs, fast rhythm.
- **Statistics are the headings.** The 2019 proof section uses survey percentages as H3s, each followed by a named customer quote. The number makes the claim and the quote makes it human.
- **Before/after framing** is stated outright ("Before Basecamp: ... After Basecamp: ...").
- **Aphorisms with a chiasmus or antithesis** in the manifesto ("Writing solidifies, chat dissolves."; "last resort, not the first option") are easy to repeat. That's why they spread.
- **Proof of the product comes from how the company itself works:** "98%", "16:30", "20 years", "We literally wrote the book". They're credible because the claims are specific to their own habits.
- **Naming competitors** ("ditch Slack, Asana, Trello, Jira, Dropbox") turns "all-in-one" into something concrete.
- **Human sign-offs** like "Enjoy the rest of your day!" give the page a personality and cost nothing.
- **What it doesn't say:** no feature lists on the homepage, no "AI", no "platform" talk. The 2019 homepage has exactly one link to the full feature list.

## 3. Apple: iPhone 11 product page
Snapshot: [2019](https://web.archive.org/web/20191003040003/https://www.apple.com/iphone-11/)

**Excerpts**
- Hero: "iPhone 11" / "Just the right amount of everything."
- Subhead: "The fastest chip ever in a smartphone and all‑day battery life let you do more and charge less."
- Section headings: "Love at first, second, third, fourth, fifth, and sixth sight." · "It just got a whole lot harder to take a bad photo." · "Kick your video up a notch. Over a smidge. Or down a hair." · "“OK, everyone, scooch out a bit.”" · "Not enough light? No problem." · "Go from pics to video faster than a speeding toddler." · "Designed to take a spill and a splash." · "Roses are red, violets are violet." · "All in a day’s charge." · "“Look Mom, no thumbs.”" · "To Face ID, you’re just a number. And that’s a good thing." · "The other good stuff."
- Body: "Shooting in low light doesn’t have to be a shot in the dark." · "...perfect for action shots like your dog catching a frisbee." · "...the views you traveled 11,000 miles for." · "iPhone 11 is water resistant up to 2 meters for up to 30 minutes" · "...projects 30,000 invisible dots..." · "Think GPS at the scale of your living room."
- Mechanism explained in short steps: "It aligns images to correct for movement." · "It discards the sections with too much blur and fuses sharper ones."
- Price: "From $16.62/mo." / "or $399 with trade-in.*"
- CTAs: "Buy" · "Buy now" · "Watch the film" · "Watch the keynote" · "Compare with iPhone 11 Pro" · "See iPhone 11 in AR"

**Why it works**
- **Two layers of heading:** a playful H2 ("Roses are red, violets are violet.") followed by a plain H3 label ("Liquid Retina LCD."). The joke earns attention and the label carries the information.
- **Every pun sits on a fact.** "Designed to take a spill and a splash." is followed by "2 meters for up to 30 minutes". "Not enough light? No problem." is followed by a step-by-step account of Night mode.
- **Small domestic scenes** (dog and frisbee, kid's piano recital, "two‑legged or four") turn camera specs into moments the reader recognises.
- **Analogy compresses jargon:** "Think GPS at the scale of your living room." explains Ultra Wideband in eight words.
- **Mechanism as a sequence of short verb sentences** ("It aligns... It discards... It adjusts... It fine‑tunes...") makes the computation feel tangible.
- **Honesty about the trade-off:** the page keeps sending you up-market ("Compare with iPhone 11 Pro") instead of pretending the cheaper phone does everything.
- **What it doesn't say:** "we" almost never appears (0.2 per 100 words). The product name is the subject of most sentences.

## 4. Apple: AirPods Pro product page
Snapshot: [2019](https://web.archive.org/web/20191102051317/https://www.apple.com/airpods-pro/)

**Excerpts**
- Hero: "AirPods Pro" / "Magic like you’ve never heard."
- Three-line hero spec: "Active Noise Cancellation for immersive sound." · "Transparency mode for hearing what’s happening around you." · "A customizable fit for all-day comfort."
- Eyebrow + headline pairs: "Comfort" / "Arrival of the fittest." · "Active Noise Cancellation" / "Sound that cuts out the noise." · "Audio quality" / "Everything you hear is unheard of." · "Performance and design" / "A chip with serious chops." · "Battery" / "Charge wirelessly. Use tirelessly." · "Magical experience" / "Simplicity from start to Siri."
- Body: "You’ll feel your music, not your headphones." · "Noise cancellation is continuously adjusted at 200 times per second..." · "The Apple-designed H1 chip employs 10 audio cores..." · "Around 1 hr of listening time on only 5 minutes of charging"
- CTAs: "Buy AirPods Pro" · "Watch the film" · "View in AR"

**Why it works**
- **Eyebrow = label, headline = wordplay.** That template repeats in every section, so the page reads as a rhythm.
- **Wordplay built on near-rhymes and twisted idioms** ("Arrival of the fittest", "start to Siri", "wirelessly / tirelessly"). Each is short (3–5 words) and always followed by a number.
- **Benefit-first antithesis:** "You’ll feel your music, not your headphones."
- **Numbers do the persuading:** 200×/sec, 10 audio cores, 24 hrs, 4.5 hrs, 5 minutes.

## 5. Mailchimp
Snapshots: [2015](https://web.archive.org/web/20150616050326/http://mailchimp.com/) · [2018](https://web.archive.org/web/20180616040041/https://mailchimp.com/)

**Excerpts**
- 2015 hero: "Send Better Email"
- 2015 subhead: "Join more than 8 million people who use MailChimp to design and send 600 million emails every day."
- 2018 hero: "Build your brand." / "Sell more stuff."
- 2018 section headings: "Send better email" · "Automate your marketing" · "Put your data to work" · "Find your people" · "See how you’re doing" · "Get started today"
- Body: "It’s like a second brain..." · "Keep a personal touch while removing manual tasks from your to-do list." · "There’s always room to be better." · "MailChimp gives you the marketing tools to be yourself on a bigger stage." · "Our 3 advertising channels help you reach every audience." · "...get up to speed with one of our nifty guides"
- CTAs: "Sign Up Free" (three times) · "Log In"

**Why it works**
- **Every section heading is an imperative verb phrase** describing what you'll do ("Find your people", "See how you’re doing"). It reads as a to-do list for the reader.
- **Deliberately plain, small-business vocabulary:** "Sell more stuff", "nifty". It's the opposite of enterprise abstraction.
- **One CTA label, repeated** ("Sign Up Free"), with "Free" doing the risk reversal.
- **Proof as scale in the 2015 subhead:** "8 million people" and "600 million emails every day".
- **The highest "you" density in the sample:** 12.6 "you/your" per 100 body words.

## 6. Slack
Snapshots: [2014](https://web.archive.org/web/20141015102300/https://slack.com/) · [2016](https://web.archive.org/web/20160616053245/https://slack.com/) · [2019](https://web.archive.org/web/20190615234227/https://slack.com/)

**Excerpts**
- 2014 page title: "Slack: Be less busy"
- 2014 hero: "“So yeah, we tried Slack ...”" / "The Sandwich Video team tried Slack. Turns out it really did change the way they communicate."
- 2014 definition: "Slack is a platform for team communication: everything in one place, instantly searchable, available wherever you go."
- 2014 risk reversal: "Slack is free to use for as long as you want and with an unlimited number of people."
- 2014 CTAs: "Sign up for Free" · "Take the Tour"
- 2016 hero (typed animation): "A messaging app for teams" / "who put robots on Mars"
- 2016 subhead: "The team behind the Mars Curiosity Rover is one of tens of thousands of teams around the world using Slack..."
- 2016 CTA: "Create New Team" · "Your team already uses Slack? Sign in or find your team."
- 2019 hero: "Whatever work you do, you can do it in Slack" / "Slack gives your team the power and alignment you need to do your best work."
- 2019 headings: "Put collaboration at your fingertips" · "You’re in good company" · "Say hello to the collaboration hub"
- 2019 tab labels: "Organize conversations" · "Share files and documents" · "Find everything in the archive" · "Talk it out face-to-face"
- 2019 CTAs: "Try for free" · "Get started" · "See the demo" · "Try Slack for free"

**Why it works, and where it drifts**
- **2014 and 2016 are among the best heroes in the sample.** The hero *is* a customer: a real team (Sandwich Video, the Mars Curiosity Rover team) acts as both proof and headline. "who put robots on Mars" is a named, odd, memorable noun phrase.
- **The 2014 one-line definition** is a colon plus three concrete benefit phrases ("everything in one place, instantly searchable, available wherever you go").
- **The 2019 copy is a useful counterexample.** "power and alignment you need to do your best work" could describe any SaaS product. The headings lean on generic metaphors ("at your fingertips", "collaboration hub"). The specific nouns are gone, and with them the personality. That's the same company and very likely the same in-house team, after the move up-market. Only the tab labels ("Find everything in the archive") stay concrete.
- **CTAs moved from product-specific** ("Create New Team") **to generic** ("Get started").

## 7. Superhuman
Snapshot: [2020](https://web.archive.org/web/20200615235232/https://superhuman.com/)

**Excerpts**
- Hero: "The Fastest Email Experience Ever Made"
- Section opener: "Superhuman Is Not Just Another Email Client"
- Heading pairs (claim / feature name): "Blazingly Fast" / "The 100ms Rule" · "No Typos, No Regrets" / "Undo Send Built In" · "Follow Up On Time, Every Time" / "Never Drop The Ball Again" · "Fly Through Your Inbox" / "Rapid-Fire Shortcuts" · "Be Productive Anywhere" / "Offline Just Works"
- Body: "On average, we all spend 3 hours a day in email." · "The creator of Gmail, Paul Buchheit, had a rule: every interaction should be faster than 100ms." · "We've all sent them before. Misspelt names. Tragic typos. Emails we regret." · "You're sending a crucial email: trying to close a deal, meet a deadline, or land a meeting." · "When you send an email, just choose a time — for example, Monday at 8:55 am..." · "We've found, time and time again, that the keyboard is faster than the mouse."
- Team bios as proof: "Founded Rapportive, which kickstarted the Gmail extension ecosystem and was acquired by LinkedIn."
- CTA: "Request Access" (the only one). After submitting: "We're skipping you to the front of our 250k waitlist."

**Why it works**
- **Problem → mechanism → outcome inside each feature block.** The block opens with a situation in the second person ("You're sending a crucial email..."), names the tension ("But people are busy"), then gives the mechanism with a concrete example ("for example, 2 days").
- **Borrowed authority with a name and a number:** Paul Buchheit's 100ms rule turns "fast" into a standard you can check.
- **Fragments for emotional rhythm:** "Misspelt names. Tragic typos. Emails we regret."
- **Example values over abstractions:** "Monday at 8:55 am", "next week", "2 days".
- **Weakness:** the page leans on adjective stacks ("gorgeous. Blazingly fast.", "subtle, delightful, and gorgeous"), which is closer to what we now read as filler. It gets away with it because every adjective has a mechanism or number nearby.
- **Scarcity in the CTA** ("Request Access", "250k waitlist") is part of the positioning.

## 8. Linear
Snapshots: [2020](https://web.archive.org/web/20200616094341/https://linear.app/) · [2021](https://web.archive.org/web/20210318175323/https://linear.app/)

**Excerpts**
- Hero (both years): "The issue tracking tool you'll enjoy using"
- Subhead: "Linear helps streamline software projects, sprints, tasks, and bug tracking. It's built for high-performance teams."
- Headings: "Built to be lightning fast" (2020) · "Less managing, more meaning" (2020) · "An experience you'd expect from a professional tool." (2021) · "Interface, streamlined." · "Meet your command line" · "Build team momentum with Cycles" · "Set direction with Roadmap" · "Loved by product people"
- Feature grid (2021): "< 100ms" / "Built for speed" / "Synchronized in real-time across all users. No spinners or waiting." · "Created by software people for software product teams." · "We have multiple themes. Use light or dark, your choice."
- Body (2020): "No loaders, no spinners, no waiting." · "Company growing? Manage issues for multiple teams." · "On merge, the issue can automatically be closed." · "Support for other platforms will be added in the future."
- Positioning tag (2021): "Opinionated and designed for daily use."
- CTAs: "Request Early Access" (2020) → "Sign up for free ->" (2021) · close: "Get started with Linear today."
- Footer: "Linear - Designed in California"

**Why it works**
- **The hero makes an emotional promise in a category that's known for pain.** "Issue tracking" plus "you'll enjoy using" works because everyone dislikes Jira. The enemy is implied, never named.
- **Very short sentences.** Average 9.7 words, and 59% of sentences have 8 words or fewer, the most clipped in the sample. Many are fragments ("Robust. Fast to navigate.").
- **A number as a heading** ("< 100ms") above a plain label.
- **Triple negation for rhythm:** "No loaders, no spinners, no waiting."
- **Honest limits:** "Support for other platforms will be added in the future." It admits a gap instead of hiding it.
- **Jargon left as-is for its audience:** "Query and mutate data using our GraphQL API".
- **Proof:** a wall of real tweets *(customer quotes)* with handles and dates.

## 9. Figma
Snapshot: [2019](https://web.archive.org/web/20190615202712/https://www.figma.com/)

**Excerpts**
- Hero: "A better way to design."
- Subhead: "Design, prototype, and collaborate all in the browser—with Figma."
- Section headings: "Collaborate with everyone, at every phase" · "Increase efficiency with added flexibility" · "Build design systems that scale" · "Try Figma for free."
- Audience blocks: "Your designers" · "Your stakeholders" · "Your developers"
- Body: "Never worry about your files being out of date or overwriting each other’s work." · "Simply send a link to collect feedback..." · "Instead of syncing to other tools simply share a URL to receive feedback."
- Picked testimonials *(customer quotes)*: "Figma replaces Sketch, InVision and Zeplin." · "...seeing others immediately jump in, there is no going back."
- CTA: "Try Figma for free" (repeated) · "Sign Up"
- Footer "Compare" list: "Sketch" · "Adobe XD" · "Invision Studio" · "Framer"

**Why it works**
- **Three verbs and one place in the subhead** ("Design, prototype, and collaborate all in the browser") cover the whole value proposition, with the differentiator ("in the browser") last.
- **The key mechanism is a noun the reader already has: a link.** "send a link", "share a URL".
- **Competitors are named, through customers' mouths** ("replaces Sketch, InVision and Zeplin") and in a "Compare" footer.
- **Organised by who's reading** ("Your designers / Your stakeholders / Your developers").
- **Weak spot:** "Increase efficiency with added flexibility" is pure abstraction. It's the one heading in the sample that could appear on any SaaS site.

## 10. Dropbox
Snapshot: [2017](https://web.archive.org/web/20170615195052/https://www.dropbox.com/)

**Excerpts**
- Hero: "Reinventing teamwork" / "Introducing Dropbox Paper and Smart Sync — a simpler way to work together."
- Section headings: "Dropbox works the way you do" · "Take your docs anywhere" · "Send videos quickly" · "Easily manage your photos" · "Work on slides together" · "Never lose a file again"
- Sub-feature labels: "All your files" · "Any device" · "Offline access" · "Large files" · "Simple sharing" · "File recovery"
- Body: "Send your entire wedding video to family with a simple link." · "Left your phone on the train? Your photos, docs, and videos are safe." · "Sharing large files is as fast as sharing small ones." · "Then send the link by email, chat, or even text message." · "Dropbox includes 30-day version history, in case you accidentally delete a file..."
- Form microcopy: "Good passwords are hard to guess. Use uncommon words or inside jokes, non-standard uPPercasing, creative spelllling..."
- CTAs: "Sign up for free" · "Sign up free with Google" · "Try Dropbox Business" · "Get started now"

**Why it works**
- **The hero is weak, the body is strong.** "Reinventing teamwork" is vague. The section copy is all scenes: a wedding video, a phone left on a train, slides.
- **Every section heading is a verb phrase for a task the reader already does** ("Send videos quickly", "Work on slides together"). A feature name never leads.
- **A short question as the pain trigger:** "Left your phone on the train?"
- **Microcopy with a sense of humour.** The password hint misspells "spelllling" on purpose.

## 11. Notion
Snapshots: [Jan 2020, meta only](https://web.archive.org/web/20200116024636/https://www.notion.so/) · [Mar 2021, full page](https://web.archive.org/web/20210302011244/https://www.notion.so/)

**Excerpts**
- 2020 meta description: "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team"
- 2021 hero: "All-in-one workspace" / "One tool for your whole team. Write, plan, and get organized."
- Platform line under the CTA: "For teams & individuals — web, mobile, Mac, Windows."
- Section headings: "Built to empower every team" · "And connect the whole company" · "Trusted by teams of 20 to 2,000" · "Bring clarity to your team" · "Free for personal use"
- Module lines: "Turn your tribal knowledge into easy-to-find answers." · "Kanban boards, tables, lists, and more. Customize any workflow."
- Feature heads: "The missing half of Slack" → "Too many insights getting lost in Slack? Notion is your team’s long term memory." · "Embed 500+ other apps inside Notion pages."
- Per-team lists, verb-first: "Write feature specs" · "Codify processes" · "Build a flexible CRM" · "Track your content calendar"
- CTAs: "Sign up" · "Explore our free Personal Plan" · nav "Switch from Evernote" · "Switch from Confluence"

**Why it works**
- **Category claim plus a three-verb sub** ("Write, plan, and get organized.") is the same move Figma makes.
- **Positioning by naming a neighbour:** "The missing half of Slack" defines Notion against a tool everyone has, as a complement rather than a rival. "Switch from Evernote" names the tool you're leaving.
- **A specific range instead of "teams of all sizes":** "Trusted by teams of 20 to 2,000".
- **Weak spot:** "Built to empower every team" and "Bring clarity to your team" are generic. The specificity lives in the lists underneath.

## 12. Gumroad
Snapshot: [2019](https://web.archive.org/web/20191016002121/https://gumroad.com/)

**Excerpts**
- Hero: "Gumroad helps creators do more of what they love."
- Proof as H2: "We have sent over $226M to artists, designers, educators, writers, podcasters and more."
- Positioning H2: "Super-simple e-commerce and audience-building software for creators."
- Feature label / line pairs: "Simple setup" / "Get started in seconds, so you can create more" · "Sell like the pros" / "Use our heavily optimized purchase experience" · "Customer management" / "Easily respond to customers and issue refunds"
- Proof intro: "Don’t take our word for it." / "Ask our creators."
- Picked testimonials *(customer quotes)*: "i always regret it when i don’t use gumroad. the cleanest checkout around." (Jack Stratton, "Founder of Vulfpeck") · "Selling through Gumroad: the smartest move I ever made." (attributed "Brush-maker, acquired by Adobe")
- Close: "Join 40,000 creators doing what they love." · CTA "Start selling with Gumroad"

**Why it works**
- **The money figure is the second headline.** "$226M sent to creators" is the strongest proof there is for a creator marketplace, and the list of nouns ("artists, designers, educators...") lets every reader find themselves in it.
- **Specific attributions** ("Brush-maker, acquired by Adobe") do more than a job title would.
- **They kept the lowercase testimonial as written.** It reads as real.
- **The closing CTA restates the hero** ("doing what they love") and adds a number (40,000).

## 13. HEY (Basecamp, 2020)
Snapshots: [home](https://web.archive.org/web/20200720041140/https://hey.com/) · [how it works](https://web.archive.org/web/20200717185251/https://hey.com/how-it-works/)

**Excerpts, home (written as a letter)**
- Opening: "Hey everyone—" / "It’s 2020, we need to talk about email."
- "Email gets a bad rap, but it shouldn’t. Email’s a treasure."
- "But things changed."
- "And Gmail, Outlook, Yahoo, and Apple just let it happen."
- "Rather than delight in it, you deal with it."
- "Email deserves a dust off. A renovation."
- "HEY is our love letter to email..."
- Footer link: "No Spy Pixel Tracking!"

**Excerpts, how it works**
- H1: "We didn’t reinvent the wheel, only email."
- Subhead: "Email as you know it is out the door. Email as you want it just arrived."
- Offer for the curious: "Got 37 minutes? Really curious?"
- Section headings: "It all starts with a Yes or No" · "Putting email in its place" · "The Imbox is for your important email" · "‘Reply Later’ is a game changer" · "Surface files, don’t dig for them" · "It’s your show"
- Body: "Yes and they’re in, No and you’ll never hear from them again." · "That’s ridiculous." · "That’s backwards." · "You’re in control." (closes five paragraphs in a row)
- CTAs: "Start a free 14 day trial" / "no obligation, no CC required" · "Tour HEY’s top 20 features"

**Why it works**
- **A long-form letter as the homepage.** It uses the structure of a story (status quo → "But things changed." → villain → hope → product). Average sentence length is 8.2 words, and 64% of sentences have 8 words or fewer.
- **A named villain** ("Gmail, Outlook, Yahoo, and Apple just let it happen").
- **Contrast pairs everywhere:** "Rather than delight in it, you deal with it."; "Surface files, don’t dig for them".
- **A refrain as structure:** "You’re in control." repeated five times turns a feature list into an argument.
- **Coined nouns** (The Screener, The Imbox, The Feed, The Paper Trail) make features into places.
- **Two-word verdicts** ("That’s ridiculous." "That’s backwards.") voice the reader's frustration.
- **Specific time cost on a video CTA:** "Got 37 minutes?"

## 14. Panic: Transmit 5
Snapshot: [2019](https://web.archive.org/web/20190616231656/https://panic.com/transmit/)

**Excerpts**
- H1: "Transmit 5"
- Lead: "The gold standard of macOS file transfer apps just drove into the future." · "It's quite good."
- Section headings: "More Servers." · "More Sync." · "More Speed." · "Much More." · "What is Transmit?"
- Body: "Transmit now connects to 11 new cloud services..." · "We make complex services drag-and-drop simple." · "We disassembled Transmit's engine and rebuilt it, again, to significantly boost speed." · "It's very fast." · "So, you have files you need to manage on servers. Maybe you're a developer." · "That's what Transmit is for." · "Never type a server address again." · "Put simply: Transmit lets you quickly and easily manage files on the internet."
- Feature list format: "Batch Rename. Powerful, flexible, and built-in." · "Places Bar. Jump to your favorite folders with one click."
- Pricing honesty: "There's no upgrade discount, as our last paid update was in 2010. Thank you!"
- CTAs: "Try it" · "Buy it" · "Keep it forever for only $45." · "Try Transmit for 7 days — for free." · "Process My Order!"

**Why it works**
- **Understatement as personality.** "It's quite good." and "It's very fast." come after concrete claims (11 services, engine rebuilt). The understatement reads as confidence.
- **A parallel heading series** ("More Servers. More Sync. More Speed. Much More.") ends on a twist.
- **Jargon is named and then translated:** a long list of protocols (FTP, SFTP, WebDAV, S3) followed by "Put simply: Transmit lets you quickly and easily manage files on the internet."
- **It speaks to the reader's uncertainty about whether this is for them:** "Maybe you're a developer. Maybe you're a system administrator."
- **The CTAs are the simplest in the sample** ("Try it" / "Buy it"), and the price is right next to them.
- **The pricing footnote turns a refusal into goodwill** by explaining it ("our last paid update was in 2010").

## 15. ZEIT (2019) → Vercel (2020)
Snapshots: [ZEIT 2019](https://web.archive.org/web/20190613213834/https://zeit.co/) · [Vercel 2020](https://web.archive.org/web/20201016125446/https://vercel.com/)

**Excerpts, ZEIT**
- Hero: "The Global Serverless Platform makes serverless application deployment easy."
- Sub: "Don’t spend time configuring the cloud." / "Just push your code."
- Flow captions: "Push your code" → "We build, test and deploy it" → "Every deployment gets a URL." → "Just merge to go live"
- Headings: "On the Shoulders of Giants" · "By Developers, for Developers" · "Free. Unlimited. Pay as you Grow." · "Frequently Asked Questions"
- FAQ as objection handling: "Is ZEIT Now going to lock me in?" → "Now is designed around the exact opposite philosophy." · "Is ZEIT Now more expensive than configuring the cloud ourselves?" → "No, across the board:"
- Definition: "Serverless is a widely used and debated term. For us, it boils down to:"
- Pricing granularity: "$0.0000004 per Invocation"
- CTAs: "Join Free" · "Start with GitHub" · "Talk to Us"

**Excerpts, Vercel**
- Hero: "Develop. Preview. Ship."
- Sub: "Vercel combines the best developer experience with an obsessive focus on end-user performance."
- Step headings: "Start with the developer" · "Accelerate with your team" · "Delight every visitor"
- Body: "Frontend development is not meant to be a solo activity." · "Every Git branch and PR receives a live, production-like URL..." · "Scale dynamically to millions of pages without breaking a sweat."
- Stat strip: "70 Cities" · "4.5B Requests Per Week" · "9PB Data Served" · "99.99% Guaranteed Uptime"
- Trust microcopy: "No source code access will be granted."
- CTAs: "Start Deploying" · "Get a Demo" · "Continue with GitHub"

**Why it works**
- **The workflow is the headline.** "Develop. Preview. Ship." is three imperative verbs that are also the page's three sections.
- **Before/after in two short imperatives:** "Don’t spend time configuring the cloud. Just push your code."
- **The FAQ asks the buyer's scariest questions** (lock-in, cost) in the buyer's own words and answers with a flat "No".
- **Defines a disputed term instead of hiding behind it** ("Serverless is a widely used and debated term. For us, it boils down to:").
- **Stats as a single strip of unit-bearing numbers**, with no adjectives.
- **The product demo carries the copy:** a fake bot comment and team chat ("Everything looks good to me, ship it!").

## 16. Tailwind CSS
Snapshots: [Nov 2020 (v1.9 site)](https://web.archive.org/web/20201116054336/https://tailwindcss.com/) · [Jun 2021 (v2 site)](https://web.archive.org/web/20210615154925/https://tailwindcss.com/)

**Excerpts, 2020**
- Hero: "A utility-first CSS framework for rapidly building custom designs."
- Enemy heading: "Most CSS frameworks do too much."
- Turn: "Tailwind is different."
- Body: "If you're sick of fighting the framework, overriding unwanted styles, and battling specificity wars, Tailwind was made for you." · "Tailwind is more than a CSS framework, it's an engine for creating design systems."
- Headings: "Responsive to the core" · "Component-friendly" · "Designed to be customized"
- CTAs: "Get Started" · "Why Tailwind?"

**Excerpts, 2021**
- Hero: "Rapidly build modern websites without ever leaving your HTML."
- Subhead (partial): "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90..."
- Contrarian heading: "“Best practices” don’t actually work."
- Body: "If you can suppress the urge to retch long enough to give it a chance..."
- Label / kicker pairs: "Constraint-based" / "An API for your design system." · "Build anything" / "Build whatever you want, seriously." · "State variants" / "Hover and focus states? We got ’em." · "Component-driven" / "Worried about duplication? Don’t be." · "Customization" / "Extend it, tweak it, change it." · "Modern features" / "Cutting-edge is our comfort zone."
- Body: "...most Tailwind projects ship less than 10kB of CSS to the client." · "Wrestling with a bunch of complex media queries in your CSS sucks..." · "Don’t want to be one of those websites that blinds people when they open it on their phone at 2am?"
- CTAs: "Get started" · install line "npm install tailwindcss"

**Why it works**
- **The subhead names real class names** ("flex, pt-4, text-center and rotate-90"). Developers recognise them instantly, and they show instead of tell.
- **Contrarian framing**: "“Best practices” don’t actually work."; "Most CSS frameworks do too much." This picks a fight readers already half-agree with.
- **Each kicker answers an objection.** Nearly every kicker answers "but what about X?" ("Worried about duplication? Don’t be.").
- **Casual, profane-adjacent register** ("sucks", "retch", "We got ’em") from a developer talking to developers.
- **A number as the performance claim:** "less than 10kB of CSS".
- **The CTA is a command you can paste** (`npm install tailwindcss`).

## 17. Extra: Things 3 (Cultured Code)
Snapshot: [2019](https://web.archive.org/web/20190615212928/https://culturedcode.com/things/)

**Excerpts**
- Hero: "The all-new Things"
- Subhead: "Things is the award-winning personal task manager that helps you achieve your goals."
- Body: "This all-new version has been rethought from the ground up..."
- Heading: "Get Things, Get Done" (a pun on the name and GTD)
- Prices beside each platform: "$49.99 (US)" · "$9.99 (US)" · "$19.99 (US)"
- CTAs: "Watch Introduction Video" · "Download" · "15 day free trial"
- Picked press *(third-party quotes)*: Apple Design Award citation; Wired: "It’s more like a clean, crisp piece of paper, ready whenever you need it."

**Why it's worth including**
- **A minimal page where proof does almost all the work.** About a dozen named press quotes (Apple Design Award, App Store Editors’ Choice, Wired, MacStories) replace feature copy. The company's own words are sparse.
- **Prices stated plainly** next to each download, with no "Contact us".

## 18. Extra: Pinboard
Snapshot: [2019](https://web.archive.org/web/20190615234752/http://pinboard.in/)

**Excerpts**
- Hero: "Welcome to Pinboard!" / "Social Bookmarking for Introverts"
- Body: "Pinboard is a fast, no-nonsense bookmarking site for people who value privacy and speed." · "There are no ads and no third-party tracking. You pay a few bucks a year, and that's it."
- CTA: "Sign up for $11 / year"
- Press quotes chosen *(third-party quotes)*: The Guardian: "Sometimes, you don't need glitz; you need plumbing." · The Economist: "One dude in his underpants somewhere who has five windows open to terminal servers."

**Why it's worth including**
- **An audience twist in four words.** "Social Bookmarking for Introverts" contradicts itself on purpose and filters for exactly the right user.
- **The business model is part of the pitch.** "You pay a few bucks a year, and that's it." makes "no ads" believable.
- **The price is in the CTA itself** ("Sign up for $11 / year").
- **It features a mildly mocking press quote** ("One dude in his underpants"). Self-deprecation as a signal of independence and confidence.

---

# Part 2: Synthesis

## A. Rules (22), each with evidence

1. **Put a number where an adjective wants to go.** Every "fast" or "reliable" needs a figure within one sentence.
   - Stripe: "Fastest-improving platform" → "(On average, we deploy our production API 16x per day.)"
   - Linear: "< 100ms" / "Built for speed"; AirPods: "adjusted at 200 times per second"

2. **Prefer proper nouns to categories.** Name tools, competitors, customers, places, people.
   - HEY: "And Gmail, Outlook, Yahoo, and Apple just let it happen."
   - Basecamp: "Now you can ditch Slack, Asana, Trello, Jira, Dropbox, or some other messy jumble of products."

3. **Describe a moment, not a use case.** Put the feature in a scene the reader has lived.
   - Dropbox: "Send your entire wedding video to family with a simple link."
   - iPhone 11: "...perfect for action shots like your dog catching a frisbee."

4. **Name the pain in the reader's words before you name the product.**
   - Basecamp: "Hair on fire, buried under email, stuff everywhere."
   - Tailwind: "If you're sick of fighting the framework, overriding unwanted styles, and battling specificity wars..."

5. **Explain the mechanism in short verb-led steps.** "How" is more convincing than "how good".
   - ZEIT: "Push your code" → "We build, test and deploy it" → "Every deployment gets a URL."
   - iPhone 11: "It aligns images to correct for movement." "It discards the sections with too much blur and fuses sharper ones."

6. **Pair a scannable label with a one-line claim.** The label is for skimmers, the kicker for readers.
   - Tailwind: "Build anything" / "Build whatever you want, seriously."
   - AirPods: "Battery" / "Charge wirelessly. Use tirelessly."

7. **Lead with the outcome; use the feature as the proof.**
   - Superhuman: "Follow Up On Time, Every Time" / "Never Drop The Ball Again", then the mechanism ("just choose a time — for example, 2 days").
   - Basecamp: "Basecamp will follow up on overdue tasks for you."

8. **Give examples with real values** (times, amounts, durations) instead of "customizable".
   - Superhuman: "just choose a time — for example, Monday at 8:55 am"
   - iPhone 11: "water resistant up to 2 meters for up to 30 minutes"

9. **Pick an enemy: a habit, a category or an incumbent. Never the reader.**
   - Tailwind: "Most CSS frameworks do too much."
   - Basecamp: "Single purpose project management and chat apps can't fix this problem — they can only make it worse."

10. **Ask the buyer's objection out loud, then answer it flatly.**
    - ZEIT: "Is ZEIT Now going to lock me in?" → "Now is designed around the exact opposite philosophy."
    - Tailwind: "Worried about duplication? Don’t be."

11. **Admit limits and trade-offs. It buys credibility for everything else.**
    - Linear: "Support for other platforms will be added in the future."
    - Transmit: "There's no upgrade discount, as our last paid update was in 2010. Thank you!"

12. **Make statistics the headings** when they're your best proof, and pair each with a human quote.
    - Basecamp: "59% have fewer weekly meetings." + "We don't need to spend as much time in meetings now that we use Basecamp." *(customer quote)*
    - Gumroad: "We have sent over $226M to artists, designers, educators, writers, podcasters and more."

13. **Pick testimonials that sound like a person, and attribute them oddly specifically.**
    - Gumroad: "i always regret it when i don’t use gumroad." (Founder of Vulfpeck); "Brush-maker, acquired by Adobe"
    - Pinboard: "One dude in his underpants somewhere who has five windows open to terminal servers."

14. **Let a customer be the headline.**
    - Slack 2016: "A messaging app for teams who put robots on Mars"
    - Slack 2014: "“So yeah, we tried Slack ...”"

15. **Write CTAs as verb + object, and put the risk reversal right next to them.**
    - Basecamp: "Start a free 30 day trial" + "No obligations, no credit card required."
    - Pinboard: "Sign up for $11 / year"; Gumroad: "Start selling with Gumroad"; Vercel: "No source code access will be granted."

16. **Keep body sentences short, and use fragments for rhythm.** Then let one longer sentence carry the explanation.
    - HEY: "But things changed."
    - Superhuman: "Misspelt names. Tragic typos. Emails we regret."

17. **Use repetition as structure** (refrains, parallel headings, triads).
    - HEY: "You’re in control." five times in a row
    - Transmit: "More Servers." · "More Sync." · "More Speed." · "Much More."; Vercel: "Develop. Preview. Ship."

18. **Wordplay is allowed only when a fact sits directly under it.**
    - iPhone 11: "Designed to take a spill and a splash." → "2 meters for up to 30 minutes"
    - AirPods: "Arrival of the fittest." → "three sizes of soft, flexible silicone tips"

19. **Say "you" for benefits and "we" for effort and responsibility.**
    - Stripe: "We agonize over the right abstractions so your teams don’t need to stitch together disparate systems"
    - Transmit: "We disassembled Transmit's engine and rebuilt it, again, to significantly boost speed."

20. **Translate jargon once in plain words, or keep it on purpose for an expert audience. Never fog it.**
    - Transmit: "Put simply: Transmit lets you quickly and easily manage files on the internet."
    - ZEIT: "Serverless is a widely used and debated term. For us, it boils down to:"
    - Kept on purpose: Linear "Query and mutate data using our GraphQL API"; Stripe "Close to the metal".

21. **Say exactly who it's for, and by implication who it's not for.**
    - Pinboard: "...for people who value privacy and speed."
    - Linear: "Created by software people for software product teams."

22. **Show the product doing the work.** Real class names, real UI strings and real data beat descriptions.
    - Tailwind 2021: "packed with classes like flex, pt-4, text-center and rotate-90"
    - Vercel demo comment: "Everything looks good to me, ship it!"

**Counter-evidence (what drift looks like in the same archives):**
- Slack 2019: "Slack gives your team the power and alignment you need to do your best work."
- Figma 2019: "Increase efficiency with added flexibility"
- Notion 2021: "Built to empower every team"
- Dropbox 2017: "Reinventing teamwork"

Each is the weakest line on its page: abstract nouns, no named thing, no number. Each of those pages recovers in the specifics underneath. Human pros wrote filler too. The difference is that they surrounded it with concrete detail.

## B. Hero headline formulas the pros actually used

| Formula | Examples (verbatim) |
|---|---|
| **Category + unexpected promise** | "The issue tracking tool you'll enjoy using" (Linear) · "Social Bookmarking for Introverts" (Pinboard) |
| **Category + audience twist** | "A messaging app for teams who put robots on Mars" (Slack 2016) |
| **Infrastructure noun + scope** | "Payments infrastructure for the internet" (Stripe 2021) · "The Global Serverless Platform..." (ZEIT) |
| **Superlative / new standard** | "The new standard in online payments" (Stripe 2019) · "The Fastest Email Experience Ever Made" (Superhuman) |
| **"A better way to [verb]"** | "A better way to design." (Figma) |
| **Imperative triad / workflow** | "Develop. Preview. Ship." (Vercel) · "Build your brand. Sell more stuff." (Mailchimp 2018) |
| **Single imperative benefit** | "Send Better Email" (Mailchimp 2015) · "Be less busy" (Slack 2014 page title) |
| **Outcome + "without" the pain** | "Rapidly build modern websites without ever leaving your HTML." (Tailwind 2021) · "Don’t spend time configuring the cloud. Just push your code." (ZEIT) |
| **Enemy statement** (as the first section headline) | "Most CSS frameworks do too much." (Tailwind 2020) · "“Best practices” don’t actually work." (Tailwind 2021) |
| **Twisted idiom / pun** | "We didn’t reinvent the wheel, only email." (HEY) · "Just the right amount of everything." (iPhone 11) · "Magic like you’ve never heard." (AirPods Pro) |
| **Helps [who] do [what they love]** | "Gumroad helps creators do more of what they love." |
| **Conversational greeting** | "We've been expecting you." (Basecamp 2019) · "Hey everyone— It’s 2020, we need to talk about email." (HEY) |
| **Customer voice as headline** | "“So yeah, we tried Slack ...”" (Slack 2014) |
| **Name + "all-new"** | "The all-new Things" · H1 "Transmit 5" with the lead "...just drove into the future." |

Notes on heroes:
- **Length:** most are 3–9 words.
- **Subheads:** nearly always one sentence of 12–25 words that names the category and either three verbs (Figma, Notion) or a proof point (Stripe "billions of dollars", Mailchimp "8 million people").
- **The hero almost never contains an unbacked adjective without a twist.** "Fastest" (Superhuman) is immediately backed by the "100ms Rule".

## C. How section headings work: label vs. claim vs. imperative vs. question

- **Labels** (noun phrases: "Global scale", "To-do Lists", "Performance", "Schedules") are mainly scanning aids. In strong pages they're almost always **paired** with a claim or kicker right below:
  - Stripe's eyebrow "Why Stripe" over "A technology-first approach to payments and finance"
  - Apple's "Battery" over "Charge wirelessly. Use tirelessly."
  - Tailwind's "Component-driven" over "Worried about duplication? Don’t be."
  - Standalone labels show up on reference-style pages (Basecamp "How it works", Dropbox sub-features), where the body does the persuading.
- **Claims** (full assertions) carry the argument:
  - "Never lose a file again" (Dropbox)
  - "It just got a whole lot harder to take a bad photo." (Apple)
  - "We literally wrote the book on working remotely." (Basecamp)
  - "89% have a better handle on business." (Basecamp)
- **Imperatives** (verb-first headings) are the most common heading type on SMB and productivity pages:
  - Mailchimp: "Find your people", "Put your data to work"
  - Dropbox: "Send videos quickly"
  - Linear: "Set direction with Roadmap"
  - Notion's per-team lists are entirely imperatives ("Write feature specs").
- **Questions** are rare as headings. They cluster in three places:
  1. **FAQs:** ZEIT "Is ZEIT Now going to lock me in?"; Transmit "What is Transmit?"
  2. **Closing CTAs:** Stripe "Ready to get started?"; Basecamp guide "Tried Basecamp lately?"
  3. **Kickers that set up a one-word answer:** Apple "Not enough light? No problem."; Tailwind "Hover and focus states? We got ’em."
  
  In body copy, questions open paragraphs ("Left your phone on the train?", "Company growing?").
- **Title Case vs. sentence case:** Superhuman and ZEIT use Title Case. Everyone else uses sentence case, often with a final period ("A better way to design.", "Interface, streamlined."), which makes headings read as statements rather than banners.

## D. Word-level observations

**Verbs that recur (body and headings):** send, share, build, find, track, sync, ship, deploy, push, create, manage, connect, start, see, get, keep, focus, follow up, organize. They're physical and transactional. The machine count of top body words is led by *email, work, time, when, like, people, everything, files, share, send, build, make*.

**Nouns are concrete artefacts.** Files, link, URL, inbox, to-do, pull request, branch, chip, case, ear tips, receipt, wedding video, slides, server address, class names. Abstract nouns ("alignment", "efficiency", "clarity", "power") show up mainly in the weak lines listed in the counter-evidence under section A.

**Adjectives are rare and simple.** Across ~12,000 body words, a list of 40 typical marketing adjectives and adverbs appeared 261 times, about 2.2 per 100 words. The common ones are short and plain: *new* (33), *fast* (19), *simple* (15), *easy* (12), *great* (12), *best* (11). Inflated adjectives were nearly absent:

| Word | Occurrences, all snapshots | Where |
|---|---|---|
| "seamless(ly)" | 2 | ZEIT, Vercel |
| "intuitive" | 1 | Tailwind, "an intuitive {screen}: prefix" |
| "innovative" | 1 | Stripe |
| "game changer" | 1 | HEY, immediately backed by the Reply Later mechanics |
| "robust" | 4 | — |
| "leverage" | 1 | ZEIT |
| "revolutionary", "supercharge", "effortless", "synergy", "holistic" | 0 | — |

When an adjective appears it's usually anchored: "Battle-tested" → 99.9%+; "lightning fast" → "< 100ms"; "large files" → "wedding video".

**Pronouns:** "you/your" density ranges from about 2 to 12.6 per 100 words (Mailchimp highest, HEY how-it-works 8.6, Dropbox 6.8). Apple barely uses "we" (0.1–0.2 per 100 words) and makes the product the grammatical subject ("iPhone 11 shoots...", "AirPods Pro then counter it..."). Founder-led brands (Basecamp, HEY, Transmit, Stripe) use "we" for craft and conviction ("We believe...", "We agonize...", "We disassembled...").

**Register:** informal words show up deliberately and sparingly as personality signals: "stuff" (Mailchimp, Basecamp), "nifty", "sucks", "retch", "a few bucks", "scooch", "smidge", "quite good". They're never in the hero subhead of enterprise products (Stripe, Figma, Notion).

## E. Structural observations

**How much copy per section**
- **Feature blocks:** a heading of 2–8 words, then 1–3 sentences, roughly 15–45 words. Examples are Linear's grid, Dropbox's blocks and Figma's audience blocks. Linear and Notion often use one sentence or two fragments.
- **Explanatory deep-dives exist, but sit behind the scannable layer.** Apple's Night mode and Face ID paragraphs, Transmit's "What is Transmit?" and ZEIT's FAQ each run 80–200 words, placed after the headline claim has landed.
- **Long-form pages work when they're arguments or stories, not feature lists:**
  - HEY's homepage letter (about 300 words, average 8.2 words per sentence)
  - Basecamp's communication guide (148 sentences, average 13.7 words)
  - Superhuman (problem-to-solution vignettes, average 9.6 words)
- **Measured averages:** among pages with enough sentences to measure, average sentence length is about 8–17 words. Outliers are dense developer FAQs (ZEIT 24) and pages where the measurable text is mostly testimonials.

**How pages open**
1. Hero of 3–9 words: category + twist, imperative triad, or customer story.
2. One-sentence subhead with three verbs or one proof number.
3. One or two CTAs: primary self-serve ("Start now", "Sign up for free") and a secondary low-commitment or sales path ("Contact sales", "Watch the film", "Get a Demo", "Take the Tour").
4. Very often a social-proof strip right after: logos, "Powering next-gen companies", "Trusted by the best frontend teams", a stat.

**Middle**
- 3–7 feature or benefit sections, each in label + claim + 1–3 sentences form.
- The proof block (stats, named quotes, press) is usually placed after the first few features, not only at the end. Basecamp puts it directly under the hero.

**How pages close**
- **The hero's promise, restated with a number:** "Join 40,000 creators doing what they love." (Gumroad); "4,000 companies signed up in the last week alone!" (Basecamp)
- **A question:** "Ready to get started?" (Stripe); "Tried Basecamp lately?"
- **A risk-reversal line under the CTA:** "No obligations, no credit card required."; "no obligation, no CC required"; "Slack is free to use for as long as you want and with an unlimited number of people."
- **Often a human sign-off:** "Enjoy the rest of your day!" (Basecamp); "Have a great day." (HEY); "Linear - Designed in California"

## F. Measured text stats

Approximate; from the extracted `[p]`/`[li]` text.

| Page | Avg words/sentence | % sentences ≤ 8 words | "you/your" per 100 words | "we/our" per 100 words |
|---|---|---|---|---|
| HEY home (letter) | 8.2 | 64% | 4.8 | 1.9 |
| Linear 2020 | 8.7 | 53% | 3.3 | 0.3 |
| Superhuman | 9.6 | 43% | 6.6 | 2.0 |
| Linear 2021 | 9.7 | 59% | 2.2 | 1.4 |
| Vercel 2020 | 10.8 | 40% | 6.5 | 1.9 |
| HEY how-it-works | 12.5 | 40% | 8.6 | 0.0 |
| Stripe 2019 | 12.8 | 33% | 3.9 | 2.0 |
| Transmit 5 | 13.2 | 31% | 3.5 | 1.7 |
| iPhone 11 | 13.5 | 28% | 3.9 | 0.2 |
| Basecamp comms guide | 13.7 | 29% | 2.1 | 1.7 |
| Dropbox 2017 | 14.2 | 7% | 6.8 | 0.0 |
| Mailchimp 2018 | 14.7 | 14% | 12.6 | 1.0 |
| Tailwind 2021 | 15.9 | 27% | 2.7 | 0.8 |
| AirPods Pro | 16.5 | 14% | 2.3 | 0.1 |
| Stripe 2021 | 17.1 | 13% | 2.9 | 2.9 |
| ZEIT 2019 | 24.1 | 18% | 2.7 | 1.5 |

The most personality-forward pages (HEY, Linear, Superhuman) are also the most clipped: average sentences under 10 words, and roughly half of all sentences 8 words or fewer.

---

# Part 3: The five most important findings

1. **Specific nouns and numbers carry the persuasion, not adjectives.** The best lines name a real thing: "16x per day", "< 100ms", "$226M", "teams who put robots on Mars", "Gmail, Outlook, Yahoo, and Apple", "your dog catching a frisbee". Inflated adjectives were nearly absent: "seamless" appeared twice across 30 snapshots, "revolutionary" and "effortless" never. When an adjective does appear, a number or mechanism sits within a sentence of it.
2. **Every claim comes with proof right next to it.** Abstract label → hard figure (Stripe, Linear). Statistic heading → named customer quote (Basecamp). Pun → spec (Apple). Pages separate proof from claims less than you'd expect.
3. **Pain first, in the reader's own words, often with a named enemy.** "Hair on fire, buried under email, stuff everywhere." "Most CSS frameworks do too much." "That’s ridiculous." Contrarian or before/after framing gives the product something to push against.
4. **Rhythm and structure come from short sentences, fragments and repetition.** HEY, Linear and Superhuman average under 10 words per sentence. Refrains ("You’re in control."), triads ("Develop. Preview. Ship.") and parallel headings ("More Servers. More Sync. More Speed. Much More.") replace transitional filler. Headings pair a scannable label with a one-line claim or objection answer.
5. **Honesty and limits read as confidence; abstraction reads as filler, even from great teams.** Lines like "Support for other platforms will be added in the future.", "There's no upgrade discount...", "It's quite good." and "No, across the board" build trust. The weakest lines in the archive (Slack 2019's "power and alignment", Figma's "Increase efficiency with added flexibility") are the abstract ones. Human pros wrote filler too; the great pages buried it under specifics. CTAs follow the same rule: verb + object + price or risk reversal ("Sign up for $11 / year", "Start a free 30 day trial" + "No obligations, no credit card required.").
