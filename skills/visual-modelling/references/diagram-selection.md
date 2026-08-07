# Diagram Selection Reference

Pick the form from the question the audience is asking.

| Question | Form | Notation |
| --- | --- | --- |
| What is in scope and what talks to us? | Context diagram, scope model | Mermaid flowchart |
| How does the work flow, and who does each step? | Process model, swimlane, activity diagram | BPMN 2.0, Mermaid flowchart |
| What is the end to end flow of value? | Value chain, value stream map, SIPOC | Mermaid flowchart |
| Where does data come from and go? | Data flow diagram | Mermaid flowchart with stores |
| What are the things and how do they relate? | Entity relationship diagram, class model | Mermaid erDiagram, PlantUML class |
| What states can this thing be in? | State diagram, state table | Mermaid stateDiagram-v2 |
| In what order do components interact? | Sequence diagram | Mermaid sequenceDiagram, PlantUML |
| Who uses the system and for what? | Use case diagram | PlantUML |
| Who are the stakeholders and how close are they? | Onion diagram, stakeholder map | Mermaid flowchart, radial layout |
| Why is this happening? | Fishbone or Ishikawa, cause and effect tree | Mermaid flowchart, right to left |
| How does this break down? | Functional decomposition, WBS | Mermaid flowchart or mindmap |
| What is everything we thought of, grouped? | Mind map, affinity diagram | Mermaid mindmap |
| Who reports to whom? | Organisational chart | Mermaid flowchart |
| What does the customer experience, step by step? | Customer journey map | Mermaid journey |
| Where are we going over time? | Roadmap, transition states | Mermaid timeline or gantt |

## Levelling

When one view cannot hold the model, decompose rather than shrink the font.

- Level 0: context. One process box, all external entities.
- Level 1: the main flow, five to nine steps.
- Level 2: the inside of a single level 1 step.

Number children after their parent (3.1, 3.2) and keep inputs and outputs balanced across levels. State the levelling scheme on every diagram in the set.

## Readability rules

- One diagram answers one question.
- Under about 20 nodes. Beyond that, decompose.
- One direction of flow throughout: left to right, or top to bottom.
- Activities are labelled verb plus noun ("Approve invoice"). Entities are nouns. States are adjectives or past participles ("Submitted", "Cancelled").
- Colour carries no meaning unless the legend says it does, and never carries meaning alone.
