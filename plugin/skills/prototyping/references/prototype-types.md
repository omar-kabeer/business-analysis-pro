# Prototype Types and Fidelity Reference

## The four BABOK types

| Type | What it is | Use when | Risk |
| --- | --- | --- | --- |
| Throw-away (rapid) | Built to learn, then discarded | Requirements are unclear and cheap exploration is needed | Someone asks to ship it |
| Evolutionary (functional) | Built to become the solution, refined in cycles | Requirements are broadly settled and the platform is known | Early shortcuts become permanent architecture |
| Horizontal | Broad but shallow, many screens with no depth | Reviewing scope, navigation, and coverage with stakeholders | Creates an impression of near-completeness |
| Vertical | Narrow but deep, one path fully working | Proving technical feasibility or a complex rule | Says nothing about the rest of the solution |

A proof of concept is a vertical prototype whose question is "is this possible", not "is this usable". Judge it on feasibility evidence, not on interface quality.

## Fidelity ladder

1. Sketch or storyboard: flow, sequence, and the story around the screen. Minutes to produce. Best for early elicitation.
2. Wireframe: layout, content hierarchy, controls, no styling. Best for settling structure and terminology.
3. Mock-up: visual design applied, still static. Best for stakeholder alignment and brand review.
4. Clickable prototype: navigation and interaction, simulated data. Best for usability testing and workflow validation.
5. Working slice: real code against real data on one path. Best for feasibility and performance questions.

Move up the ladder only when the question at the current rung is answered. Each rung costs roughly three times the one below it and makes feedback more conservative.

## Choosing by question

| Question | Reach for |
| --- | --- |
| Do we agree what this feature is? | Storyboard or wireframe |
| Is the workflow right? | Clickable prototype, task-based test |
| Is the terminology right? | Wireframe with real content |
| Will users find it? | Clickable prototype, first-click test |
| Can the platform do this? | Vertical slice or proof of concept |
| Is the scope complete? | Horizontal prototype |
| Will the integration hold up? | Vertical slice with real interfaces |

## Running the session

- Give tasks, not tours. "Renew the policy for this customer" beats "here is the renewal screen".
- Stay quiet. Every explanation you give is a usability problem you have just hidden.
- Watch hesitation and backtracking; they are more reliable than stated preference.
- Capture verbatim quotes for the findings log. Paraphrase loses the signal.
- Three to five participants per round surfaces most issues. Run more rounds rather than bigger ones.

## Content realism

Use plausible names, long names, missing values, non-Latin characters, large numbers, and expired records. Most layout and rule failures appear only under real content. A prototype populated with tidy sample data proves nothing about the design.

## Disposition

Write one line before the prototype leaves the room: discard, evolve, or retain as reference. Unstated disposition is how throw-away prototypes end up in production.
