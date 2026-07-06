# Reference: AI Tells and Their Fixes

A working catalog of the phrasings that make prose read as machine-generated, and
what to do about each. These aren't banned because a detector flags them. They're
banned because they're vague, padded, or mechanical, and cutting them makes the
writing better. Keep any of them if the user wants it or the context genuinely
calls for it (with one exception: the em-dash, which is banned outright). The
defaults below assume you're cleaning up generic prose.

## Contents
1. The em-dash (hard ban)
2. Stock vocabulary
3. Canned openers and closers
4. Mechanical connectives
5. The negative-parallelism reflex
6. Hedging and throat-clearing
7. Empty intensifiers and filler
8. Structural and formatting tells
9. How to apply this without overcorrecting

---

## 1. The em-dash (hard ban)

The em-dash is the most recognizable machine-writing tic, and unlike everything
else in this catalog it gets no "keep a few where they earn it" allowance. The
rule is simple: the output contains zero em-dashes.

- **Emit none.** Never produce an em-dash in revised text or anywhere else.
- **Remove all of them.** Every em-dash in the input gets recast.
- **No stand-ins.** A spaced hyphen used as a dash (" - "), a doubled hyphen
  ("--"), or an en-dash (the shorter mark) pressed into service as a sentence
  break all count as the same banned move. Recast instead of swapping marks.

Recast each em-dash, in order of preference:
1. **Period.** Two independent statements become two sentences. This is the
   default and handles most cases.
2. **Comma.** A light pause or a non-restrictive aside.
3. **Colon.** When what follows explains or delivers what came before.
4. **Parentheses.** A genuine aside the sentence could drop.
5. **Recast the sentence** so no dash is needed. Frequently the cleanest result.

Number ranges and scores written with the shorter en-dash (3–5, 2010–2015) are a
separate mark with a separate job and are not the target here. The ban is about
the em-dash used to connect or interrupt clauses, plus its hyphen stand-ins.
When unsure which mark to reach for, reach for a period.

## 2. Stock vocabulary

These words aren't wrong, but LLMs reach for them at rates no human writer does,
and most of the time a plainer or more precise word is better.

| Stock word | Why it reads canned | Reach for instead |
|---|---|---|
| delve (into) | nobody says this out loud | look at, dig into, get into, examine |
| tapestry / rich tapestry | decorative metaphor doing no work | mix, range, web, or just drop it |
| testament (to) | inflated | shows, proves, reflects |
| seamless / seamlessly | marketing gloss | smooth, simple, with no setup, or cut |
| robust | vague strength-word | strong, reliable, holds up, well-built |
| cutting-edge | dated buzzword | new, latest, advanced, or name the thing |
| pivotal | overstated | key, central, important, decisive |
| landscape (metaphor) | filler frame | field, market, situation, or restructure |
| nuanced | often means "I won't be specific" | name the actual distinction |
| leverage (verb) | corporate for "use" | use, draw on, take advantage of |
| navigate (metaphor) | overused | handle, work through, deal with |
| underscore / underpin | stiff | show, support, point to |
| foster | NGO-speak | encourage, build, support, grow |
| myriad | inflated for "many" | many, lots of, dozens of |
| elevate | marketing | improve, raise, lift |
| realm | archaic filler | area, field, world, or cut |
| utilize | longer "use" with no gain | use |

The fix is never a blanket find-and-replace. Pick the replacement that fits the
sentence, or rewrite the sentence so the word isn't needed.

## 3. Canned openers and closers

**Openers to delete or replace.** These warm up before saying anything. Usually
the sentence after them is the real first sentence.
- "In today's fast-paced world / digital age / landscape..."
- "In a world where..."
- "It is important to note that..." / "It's worth noting that..."
- "As we can see..." / "As mentioned earlier..."
- "When it comes to [X]..." (just talk about X)
- "Throughout history, humans have..." (essay autopilot)

Fix: cut the clause and start with the actual claim. If a piece truly needs a
hook, write a specific one (a concrete detail, a real question, a sharp claim),
not a generic frame.

**Closers to delete or replace.** These restate what was just said.
- "In conclusion..." / "In summary..." / "To sum up..."
- "Ultimately..." (when it's just a summary flag)
- "At the end of the day..."
- "All in all..."
- Any final paragraph that adds no new information.

Fix: end on the last real point, or on a line that genuinely lands the piece,
not on a recap. A short piece almost never needs a conclusion paragraph at all.

## 4. Mechanical connectives

Formal transition adverbs are fine in moderation and a tell in series.
- Watch for: moreover, furthermore, additionally, consequently, therefore, thus,
  hence, in addition, on the other hand (stacked), notably.
- The problem: when every paragraph opens with one, the connections feel
  bolted-on rather than real.

Fix, in order of preference:
1. Drop the connective entirely and let the sentences sit next to each other.
2. Replace with a plain one: but, so, and, then, still, yet, though.
3. Keep the formal adverb only where the logical relationship genuinely needs
   signposting (a real contrast, a real consequence), and not twice in a row.

## 5. The negative-parallelism reflex

The "redefine by contrast" move: powerful once, hollow on repeat.
- "It's not X, it's Y."
- "Not only X, but also Y."
- "It's not about X, it's about Y."
- "Forget X. Focus on Y."
- "X isn't dead. It's evolving."

These create a little jolt of tension-and-resolution, which is why models lean on
them. Used constantly, the jolt goes flat and the writing feels like it's
performing insight instead of delivering it.

Fix: keep at most one per piece, and only where the contrast is real and earns
the emphasis. Otherwise state the point directly. "The point isn't volume, it's
writing the right code" becomes "Write the right code; volume doesn't matter."
(Note the fix never reaches for an em-dash to carry the contrast.)

## 6. Hedging and throat-clearing

Padding that dilutes claims without adding real qualification.
- "arguably," "it could be argued," "some might say," "in many ways," "to a
  certain extent," "fairly," "quite," "rather," "somewhat," "it seems that,"
  "perhaps it's fair to say."

Fix: delete and make the claim, OR if the claim genuinely needs limiting, keep a
precise qualifier and cut the vague one. "This is arguably the fastest option"
becomes either "This is the fastest option" (if true) or "This is the fastest of
the three we tested" (if it needs scoping). Real, specific uncertainty is human
and good: "I'm not sure this scales past 10k users" beats "this may potentially
face some scalability considerations."

## 7. Empty intensifiers and filler

Words that take up space and add no meaning.
- "very," "really," "truly," "actually," "literally," "basically,"
  "essentially," "in order to" (to "to"), "the fact that" (to "that"), "a number
  of" (to "some / many / a specific number"), "in terms of," "with regard to,"
  "for all intents and purposes."

Fix: cut, or replace the weak word-plus-intensifier with one strong word. "very
big" becomes "huge"; "really important" becomes "critical" (if accurate).

## 8. Structural and formatting tells

- **Em-dashes.** Covered in full in section 1. Banned outright; recast every one.
- **Uniform sentence length** (the metronome). The biggest structural tell.
  Fix in the rhythm pass. See `craft-principles.md`.
- **Same paragraph openings.** Three paragraphs starting "The system..." or
  "This approach..." Vary them.
- **Reflexive rule-of-three.** Everything in tidy triplets. Match list length to
  reality.
- **Title Case Headers.** Use sentence case unless a style guide says otherwise.
- **Scattered bold** for emphasis on words that don't need it. Remove.
- **Vertical lists where a sentence works.** A three-item bulleted list of short
  phrases usually reads better as one sentence.

## 9. How to apply this without overcorrecting

- **Don't purge mechanically.** One "furthermore" in a long document is fine. The
  target is the *pattern*, not the single instance. (The em-dash is the lone
  exception: there the target really is every instance.)
- **Keep real domain vocabulary.** "Robust" is a buzzword in marketing copy but a
  precise term in statistics ("robust standard errors"). Don't strip terms of art
  the audience expects.
- **Don't trade a buzzword for a worse word** just to avoid the list. If "use"
  doesn't fit and "leverage" does, and there's no better option, leave it.
- **Voice beats the rules.** If the author genuinely writes with a "delve here,
  tapestry there" flourish and likes it, that's their voice; flag it, don't
  flatten it. (Voice does not override the em-dash ban: recast those regardless,
  using the punctuation that best fits the author's rhythm.)
