# Reference: Revision Checklist

Run this after a revision, before delivering. These are quality and fidelity
checks: does the edit say the same thing, read better, and still sound like the
author? There's no score to hit and no detector to clear; the bar is "a careful
human editor would sign off on this."

## Fidelity (most important, never trade these away)

- [ ] **Meaning preserved.** Every claim the source made, the revision still
      makes. Nothing now says something the author didn't.
- [ ] **Facts intact.** Names, numbers, dates, quantities, citations, and
      technical specifics are unchanged. (If you suspected a fact was wrong, you
      flagged it; you didn't silently reword it into a different claim.)
- [ ] **Position unchanged.** The author's stance, recommendation, or conclusion
      is the same. Tightening an argument must not flip or soften what it argues.
- [ ] **Nothing invented.** No concrete detail, statistic, or example was added
      to replace an abstraction unless it was already supported by the source. A
      vivid specific that isn't true is worse than an honest generality.
- [ ] **Scope preserved.** A qualified claim ("in most cases") didn't become
      absolute, and an absolute one didn't get hedged, unless that fixed an
      actual error.

## Voice and register

- [ ] **Sounds like the author.** The revision reads like the best version of how
      this person writes, not like a generic house style.
- [ ] **Register consistent.** Formal stayed formal, casual stayed casual; no
      drift across the piece.
- [ ] **Domain vocabulary kept.** Real terms of art the audience expects are
      still there; only buzzword fog was removed.

## Craft

- [ ] **No em-dashes.** Zero em-dashes in the output. Every one from the source
      was recast to a period, comma, colon, or parentheses, and none crept back
      in. No spaced-hyphen or en-dash stand-ins either. This check is pass/fail:
      one em-dash means it isn't done.
- [ ] **Rhythm varied.** Sentence lengths and shapes spread out; no metronome.
      Read it back: does it have a pulse?
- [ ] **Openings varied.** Paragraphs and sentences don't all start the same way.
- [ ] **Tells cleared.** Stock vocabulary, canned openers/closers, stacked formal
      connectives, and the negative-parallelism reflex are gone or down to a
      deliberate few. (See `ai-tells.md`.)
- [ ] **Filler cut.** Throat-clearing intros, recap conclusions, redundant
      restatements, and hedge-padding are removed.
- [ ] **Concrete where it counts.** Vague abstractions were pushed toward
      specifics *where the source supported it*.
- [ ] **Every sentence earns its place.** Nothing left that only restates,
      previews, or announces importance.

## Over-correction check (don't swing too far)

- [ ] **Not jittery.** Rhythm is varied, not chaotic; you didn't turn flat prose
      into random sentence-chopping.
- [ ] **Not stripped bare.** You cut filler, not substance. If the piece is now
      missing something the reader needs, restore it.
- [ ] **No worse swaps.** You didn't replace a buzzword with an even more awkward
      word just to avoid the list, and you didn't recast an em-dash into clumsier
      phrasing when a clean period or comma would do.
- [ ] **Length is appropriate.** Most edits get shorter; if this one got longer,
      there's a good reason (the source was genuinely too terse to follow).

## If a check fails

Fix it before delivering. Fidelity failures are non-negotiable: if the meaning
drifted or a fact moved, the revision is wrong no matter how well it reads, and
the fix takes priority over style. The em-dash check is likewise pass/fail and
never shipped failing. Other craft failures are worth another quick pass. When a
requested stylistic change genuinely can't be made without breaking fidelity,
deliver the faithful version and tell the user why the fuller change would have
changed the meaning.
