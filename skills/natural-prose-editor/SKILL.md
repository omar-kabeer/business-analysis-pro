---
name: natural-prose-editor
description: Revise prose so it reads like a thoughtful, specific human wrote it: clear, direct, varied in rhythm, and free of stock AI phrasing, filler, and em dashes, while preserving meaning, facts, intent, and the author's voice. This is the Business Analysis OS house-style editor and should be applied to every prose deliverable before it is delivered. Use it whenever the user wants to clean up a draft, make writing sound less like AI, tighten bloated writing, fix flat or robotic prose, de-cliche a document, vary sentence rhythm, enforce the no em dash rule, or edit AI-assisted drafts such as proposals, reports, articles, posts, and emails. Use it even when the user only says make this better, this sounds off, or tighten this up.
---

# Natural Prose Editor

Turn flat, generic, or over-produced prose into writing that sounds like a real
person with something to say. The job is editorial: improve clarity, rhythm, and
honesty of expression. It is not to disguise authorship or beat a detector. The
aim is to make the writing genuinely good, which is a different and more useful
goal.

## What this skill is for

Use it on writing the user is entitled to edit and wants to read naturally:
their own drafts, AI-assisted drafts they're shaping into their own voice, or
text they've been asked to clean up. Typical asks: "make this proposal sound
less like a chatbot wrote it," "tighten this," "this reads robotic, fix the
rhythm," "cut the fluff but keep the meaning."

Do not use it to pass off machine-generated work as human-authored in contexts
where authorship is supposed to be disclosed and verified (graded coursework,
attestations of original authorship, anywhere a human-authored guarantee is part
of the deal). That's not editing; it's misrepresentation, and this skill isn't
built for it. Nothing here is tuned to defeat detection software, and it
shouldn't be repurposed for that.

## When to activate

Activate on any of these, explicit or implied:
- "Make this sound less like AI / less robotic / more human."
- "Tighten this," "cut the fluff," "trim this down," "it's too wordy."
- "This reads flat / generic / stiff, fix it."
- "De-cliché this," "kill the buzzwords," "vary the rhythm."
- "Edit / polish / clean up" applied to a paragraph, draft, or document.
- A pasted draft plus any signal of dissatisfaction with how it reads.

If the user just wants a fresh piece written from scratch, you can apply these
principles directly, but the skill's core is *revision* of existing text.

## The em-dash ban (non-negotiable)

Do not use em-dashes. Not in the revised text, not in anything this skill
produces. The em-dash (—) is the single most recognizable machine-writing tic,
and a flat ban is simpler and more reliable than "use a few where they earn it."

Rules:
- **Never emit an em-dash in output.** Zero. Not even one "earned" em-dash.
- **Remove every em-dash already in the input.** Each one gets recast, not kept.
- **Don't smuggle it back in.** A spaced hyphen used as a dash (" - "), or a
  doubled hyphen ("--"), or an en-dash (–) standing in for an em-dash, all count
  as the same banned move. Recast the sentence instead.

How to recast an em-dash, in order of preference:
1. **A period.** If the mark joins two independent statements, split them: "It
   works now. The bug is gone."
2. **A comma.** For a light pause or a non-restrictive aside. "The build, finally,
   passed."
3. **A colon.** When the second part explains or delivers the first. "One thing
   was clear: the cache was the bottleneck."
4. **Parentheses.** For a true aside the sentence could drop. "The migration (three
   weeks, longer than planned) is done."
5. **Recast the sentence** so the dash isn't needed at all. Often the cleanest fix.

En-dashes in number ranges and scores (3–5, 2010–2015) are a different mark with
a different job; this ban is about the em-dash used as a sentence connector or
interrupter, and its spaced-hyphen stand-ins. When in doubt, prefer a period.

## Core principles

These are the levers. They overlap, and good editing pulls several at once.

**Preserve the payload first.** Meaning, facts, claims, numbers, names, and the
author's actual position must survive intact. If a fix would change what the text
asserts, don't make it; find another fix. When in doubt about a fact, flag it
rather than silently rewording it into something different.

**Keep the author's voice.** You're editing *their* writing, not replacing it
with yours. Match the existing register (formal report, casual post, technical
memo). Don't make a plain-spoken draft ornate or a careful draft breezy. The
target is "the best version of how this person writes," not "how the editor
writes."

**Vary the rhythm on purpose.** Uniform sentence length is the single biggest
tell of machine-flattened prose, and it's also just dull to read. Mix long,
subordinated sentences with short, blunt ones. A four-word sentence after a
thirty-word one lands hard; that's the point. Let the rhythm follow the meaning:
fast where the idea is simple, slower where it's intricate. (Details and a
diagnostic in `references/craft-principles.md`.)

**Prefer the concrete and specific.** Abstract nouns and hedged generalities are
what text reaches for when it doesn't know exactly what it means. "Stakeholders
benefit from enhanced operational efficiency" says almost nothing; "the ops team
closes tickets a day faster" says something. Push every vague phrase toward the
specific thing it's gesturing at.

**Make every sentence earn its place.** Cut sentences that only restate the
previous one, preview what's coming, or announce that something is important.
Introductions that warm up before saying anything ("In today's fast-paced
landscape...") and conclusions that summarize three sentences of content ("In
conclusion, as we've seen...") are usually deletable in full. If removing a
sentence loses nothing, it was filler.

**Cut hedging and throat-clearing.** "It is important to note that," "arguably,"
"it could be said that," "fairly," "in many ways": these dilute claims and add
nothing. Say the thing. If a claim genuinely needs a qualifier, keep the
qualifier and drop the padding around it. Real uncertainty is fine and human;
reflexive hedging is just noise.

**Earn your transitions, or drop them.** A chain of "Furthermore... Moreover...
Additionally..." signals that the connections are mechanical. Often the cleanest
transition is none: let two sentences sit next to each other and trust the reader
to see the link. When you do need a connective, prefer the plain one ("but,"
"so," "and then") over the formal adverb.

**Resist the reflexive rule-of-three.** Not every list needs exactly three items
in parallel cadence. Sometimes it's two. Sometimes it's one strong example.
Sometimes it's a real list of seven. Match the count to reality, not to rhythm.

**Don't manufacture randomness.** The goal is variation that *comes from the
meaning*, not noise sprinkled in to look irregular. Don't insert a deliberate
typo, a non-sequitur, or a forced "quirky" aside. Human writing reads varied
because the thought underneath it varies; emulate the cause, not the symptom.

## The forbidden-by-default patterns

Strip or rework these unless the user explicitly wants them or the context
genuinely calls for one. Full list with fixes in `references/ai-tells.md`.

- **The em-dash:** banned outright. See the em-dash ban above. This one has no
  "keep a few" exception.
- **Stock vocabulary:** delve, tapestry, testament, seamless(ly), robust,
  cutting-edge, pivotal, landscape (as metaphor), nuanced, leverage (as verb),
  realm, navigate (as metaphor), underscore, foster, myriad, elevate.
- **Canned openers:** "In today's fast-paced world / digital landscape," "In a
  world where," "It is important to note that," "As we can see," "When it comes
  to."
- **Canned closers:** "In conclusion," "Ultimately," "At the end of the day,"
  "In summary," any closing line that only restates the body.
- **Mechanical connectives in series:** moreover, furthermore, additionally,
  consequently, therefore. Fine once in a while, a tell when stacked.
- **Negative-parallelism reflex:** "It's not X, it's Y," "Not only X but also
  Y," "Forget X. Focus on Y." Powerful once; hollow when it's every other
  paragraph.
- **The metronome:** paragraph after paragraph of subject-verb-modifier-clause
  at the same length and shape.
- **Decorative formatting:** Title Case On Every Header, bold scattered for
  emphasis it doesn't need, vertical lists where a sentence would do.

## Workflow

Work through these passes in order. Earlier passes change what later passes see,
so don't try to do everything at once.

1. **Read for meaning.** Before touching anything, understand what the text is
   actually claiming and what the author is trying to do. Note the register and
   audience. You can't preserve a payload you haven't identified.

2. **Mark the tells.** Scan for the forbidden patterns and stock vocabulary
   above. Flag every em-dash for removal. Note the rhythm: are sentences
   clustered at one length? Do paragraphs open the same way? Are transitions
   doing real work or just sitting there? Consult `references/ai-tells.md` if you
   want the full catalog.

3. **Cut.** Remove filler sentences, throat-clearing openers, summary closers,
   redundant restatements, and hedge-padding. This pass usually shrinks the text;
   that's expected and good. Don't replace yet, just delete what doesn't earn
   its place.

4. **Rework word choice.** Swap stock vocabulary for the plain or precise word.
   Push abstractions toward concretes. Keep terms of art the audience expects;
   don't dumb down genuine domain vocabulary, only the buzzword fog.

5. **Diversify the rhythm.** Now fix cadence. Break some long sentences; fuse
   some short choppy ones; add a deliberate short sentence where the idea wants a
   beat. Vary paragraph openings. Read it back in your head: if it sounds like a
   metronome, it isn't done. See `references/craft-principles.md` for the
   length-variation diagnostic.

6. **Naturalize the flow.** Re-examine transitions: keep the ones doing real
   work, drop the decorative ones, replace formal adverbs with plain connectives
   where it reads better. Make sure paragraphs follow each other for a reason.

7. **Remove every em-dash.** Make a dedicated pass for this. Recast each one to a
   period, comma, colon, or parentheses per the em-dash ban. Check that you
   didn't introduce a new em-dash anywhere during passes 3 through 6, and that
   you didn't substitute a spaced hyphen or en-dash in its place.

8. **Validate.** Run the checks in `references/revision-checklist.md`: meaning
   preserved? facts and numbers intact? voice consistent? anything cut that
   shouldn't have been? rhythm varied? zero em-dashes? If the edit drifted the
   meaning or flattened the voice, fix it before delivering.

## Output

Default: return the revised text, ready to use, in the same format the user gave
you (prose stays prose, a memo stays a memo). Keep the structure unless the
structure itself was the problem. The revised text contains no em-dashes.

If the user asks "what did you change?" or the edit was substantial, you can
append a short, plain list of the kinds of changes made ("cut the opening
paragraph, broke up the long middle sentences, swapped 'leverage/robust/seamless'
for plainer words, removed the em-dashes"), but lead with the revised text, and
don't pad the explanation. Don't narrate every micro-edit.

If a requested change would damage meaning or misstate a fact, say so and offer
the closest faithful alternative rather than making the change.

## Examples

**Example 1: de-slop a corporate sentence**

Input: "In today's fast-paced digital landscape, it is important to note that
leveraging robust, cutting-edge solutions can seamlessly enhance operational
efficiency across the organization."

Output: "Better tools would help the org move faster. Right now the bottleneck is
how long tickets sit before anyone picks them up."

(Cut the warm-up clause and the hedge; replaced the buzzword stack with the
actual claim; added a concrete to anchor it. Note: the concrete must reflect what
the source actually meant. If the original gave no specifics, ask or keep it
general rather than inventing a detail.)

**Example 2: break the metronome**

Input: "The system processes incoming requests efficiently. It validates each
request against the schema. It then routes the request to the correct handler. It
logs the outcome for later analysis."

Output: "The system validates each incoming request against the schema, routes it
to the right handler, and logs the outcome. Fast, and easy to trace when
something breaks."

(Four identical short sentences fused into one varied one plus a short beat;
meaning preserved, rhythm no longer flat.)

**Example 3: kill the negative-parallelism reflex (and don't reach for a dash)**

Input: "It's not about writing more code. It's about writing the right code. It's
not about speed. It's about sustainability."

Output: "The point isn't volume of code. It's writing the right code, and writing
it so it lasts."

(Collapsed two stacked "not X, it's Y" beats into one point that says the same
thing without the drumbeat. A period does the work an em-dash would have; the ban
holds even in the rewrite.)

**Example 4: preserve voice, don't overwrite, still no em-dash**

Input (a deliberately casual blog draft): "ok so I finally tried the new build
and honestly? it just works. no config, no weird errors, nothing."

Output: "Finally tried the new build, and honestly it just works. No config, no
weird errors, nothing."

(Light touch: smoothed one ragged opener, kept the casual register and the
author's voice completely. The original interruptive beat becomes a period, not
an em-dash. Don't formalize a casual draft just because you can.)

## Operating standard

This skill operates under the governing system prompt in `prompts/ba-operating-system-prompt.md`: frame the need with the BACCM before proposing a solution, cite the BABOK section the work traces to, and keep every output traceable and decision-grade. Before delivering, produce the artefact on its matching template in `templates/`, then score it against its rubric in `evaluation/` and reach a pass, checking the rubric's common failure modes. Where the work needs a capability the OS does not own, bind it through `docs/skill-bindings.md`.
