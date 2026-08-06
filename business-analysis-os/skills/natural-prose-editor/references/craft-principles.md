# Reference: Prose Craft

The positive side of the work. The tells catalog tells you what to cut; this tells
you what good prose does, so the revision adds something rather than just
subtracting. The throughline: variation in writing should come from variation in
thought. Get the thinking right and the rhythm follows.

## Contents
1. Sentence-rhythm variation (the "burstiness" lever, as craft)
2. Concrete over abstract
3. Cutting to the claim
4. Honest uncertainty
5. Voice and register
6. Paragraph shape and flow
7. A quick read-aloud test

---

## 1. Sentence-rhythm variation

Flat prose has every sentence at roughly the same length and the same
grammatical shape. It reads like a metronome and signals machine-flattening. Good
prose varies length deliberately, and the variation tracks the meaning.

**Why it works.** A short sentence after a long one is emphasis. The reader's ear
expects more and gets a stop instead, so the short sentence hits. A long
subordinated sentence can hold a complex idea together in one breath. Used in
alternation, they give prose a pulse.

**The diagnostic.** Read a paragraph and roughly clock the sentence lengths. If
they're all bunched in the 15–25 word range with the same subject-verb-object
shape, you have flat prose. You want a real spread: some sentences of 5–10 words,
some of 30+, and genuine variety in how they're built (a fragment here, a
question there, a sentence that opens on a subordinate clause).

**How to fix it.**
- Find the longest run of same-length sentences and break it up. Split one long
  sentence into two; or fuse two choppy ones into a longer one with a clause.
- Add a deliberate short sentence where the idea wants a beat. Three words is
  fine. One word is fine, sparingly.
- Vary the openings: not every sentence should start with the subject. Lead
  sometimes with a clause ("Once the cache warms up, latency drops"), sometimes
  with a connective, sometimes with the object.
- Don't overdo it. The goal isn't maximum chaos; it's natural pulse. If you've
  turned a flat paragraph into a jittery one, you've overshot.
- Get the variation from punctuation that isn't the em-dash. Periods, commas,
  colons, and parentheses cover every rhythmic move an em-dash would, and the
  output stays dash-free.

**Worked example.**

Flat: "The migration took three weeks. The team hit two major blockers. The
blockers were resolved by mid-sprint. The system is now stable. Performance has
improved noticeably."

Varied: "The migration took three weeks, longer than planned, because we hit two
walls early and burned most of the first sprint getting past them. But it's
stable now. Performance is noticeably better."

Same facts, real pulse. Notice the variation came from grouping related facts and
subordinating the minor ones, not from random sentence-chopping, and the long
opening sentence holds together on commas rather than an em-dash.

## 2. Concrete over abstract

Abstraction is where prose hides when it doesn't know exactly what it means.
Specifics are where it earns trust.

- "Improved operational efficiency" becomes "cut average ticket resolution from
  two days to one."
- "A range of stakeholders" becomes the named teams, or at least "the ops and
  support teams."
- "Significant challenges" becomes a statement of what broke.

The move: every time you hit an abstract noun (efficiency, synergy, solutions,
capabilities, experiences, outcomes), ask "what specifically?" and push toward
that. If the source genuinely has no specific behind the abstraction, that's a
content gap. Flag it or keep the general phrasing honestly, but don't invent a
fake specific to fill it.

## 3. Cutting to the claim

Good prose front-loads the point. Weak prose buries it under setup.

- Delete the run-up. If a paragraph spends two sentences establishing context the
  reader already has before reaching the actual point, start at the point.
- Put the claim in the main clause, not a trailing subordinate one. "While there
  are many factors, the primary driver is cost" becomes "Cost is the main driver."
- One idea per sentence, mostly. If a sentence has three coordinated clauses each
  making a different claim, it's probably three sentences.

Length is not effort. A tight three-sentence paragraph that says something beats a
ten-sentence one that circles it. When trimming, the test for each sentence is:
does removing it lose information or force the reader to work harder? If neither,
cut it.

## 4. Honest uncertainty

Humans signal what they don't know; flattened AI prose asserts everything at the
same confidence. The fix is *calibration*, not hedging.

- Real uncertainty, stated specifically, reads human and builds trust: "I haven't
  load-tested this past 10k concurrent users, so I'm not sure it holds." That's
  good. Keep it.
- Reflexive hedging that qualifies nothing reads as padding: "this may
  potentially present certain challenges in some cases." That's noise. Cut it.

The difference: does the qualifier carry information (a real limit, a specific
doubt) or just soften the tone? Keep the first, cut the second.

## 5. Voice and register

You're editing someone's writing. The output should sound like the best version
of *them*, not like a house style stamped over the top.

- **Identify the register first.** Formal report, internal memo, casual post,
  technical spec, marketing page: each has its own norms. A casual draft keeps
  contractions and short asides; a formal report doesn't suddenly get breezy.
- **Match, don't flatten.** If the author writes with dry humor, preserve the
  humor. If they're terse, stay terse. If they over-explain, that's the thing to
  fix, but fix it in their voice.
- **Consistency within the piece.** Don't let register drift. A document that
  opens stiff and turns chatty halfway reads disjointed. Pick the register the
  piece is mostly in and bring the outliers to it.
- **Domain vocabulary stays.** Don't simplify genuine terms of art the audience
  expects. Editing for clarity is not dumbing down.
- **The em-dash ban applies in every register.** A breezy blog and a formal memo
  both come out dash-free; you just pick the replacement punctuation that suits
  each one's rhythm.

## 6. Paragraph shape and flow

- **Vary paragraph length** the way you vary sentence length. A one-line
  paragraph can punctuate a run of dense ones.
- **Vary openings.** If three paragraphs in a row start the same way ("The
  system...", "This approach...", "Our solution..."), change them.
- **Each paragraph follows the last for a reason.** Before keeping a transition,
  check the underlying logic is real. If two adjacent paragraphs don't actually
  connect, the fix is structural, not a "moreover" bridge.
- **One job per paragraph.** A paragraph that makes three unrelated points wants
  to be split.

## 7. A quick read-aloud test

The fastest check for naturalness is to read the text in your head as if speaking
it. Listen for:
- **The metronome.** Same length, same beat, sentence after sentence. Vary it.
- **Tongue-twisters and stacked clauses.** If you lose the thread reading it,
  the reader will too. Break it up.
- **Words you'd never say.** "Utilize," "delve," "myriad." Swap for what you'd
  actually say.
- **The recap ending.** If the last line just repeats the piece, cut it.

If it sounds like a person talking who knows their subject and respects the
reader's time, it's done. And read once more for the mark you can't keep: if a
single em-dash slipped in, recast it before you call the piece finished.
