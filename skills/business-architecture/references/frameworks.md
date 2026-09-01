# Reference Frameworks

The frameworks a business architect adapts rather than invents. BABOK Perspective 11.4 names TOGAF, value mapping, and Zachman as its techniques, and the OS source library adds ArchiMate and the APQC PCF. Apply a framework because it fits the industry or the question, not because it is impressive. Adapt it to the organisation and cite it by name. Never adopt one wholesale for its own sake.

## When to reach for each

| Framework | Reach for it when | What it gives | What it does not do |
| --- | --- | --- | --- |
| TOGAF ADM Phase B | The enterprise runs a formal architecture method and you must place the business architecture inside it. | A method for developing the baseline and target business architecture and the capability gap between them. | It is a method, not a notation or a capability list; it does not tell you what the capabilities are. |
| ArchiMate 3.1 | You need one consistent notation across strategy, business, application, and technology layers. | A modelling language whose business-layer elements (capability, value stream, actor, service) keep the blueprints consistent. | It is a notation, not an analysis; a valid diagram can still describe a poor architecture. |
| Zachman Framework | An executive or business-management view needs structuring across the what, how, where, who, when, and why. | A six-by-six ontology that surfaces the questions a blueprint has not answered. | It is a classification schema, not a process; it does not sequence work. |
| APQC Process Classification Framework | You want a normalised capability or process taxonomy to start from or to benchmark against. | A cross-industry taxonomy to adapt into a first-cut capability map, and a basis for benchmarking. | It is a starting template, not your architecture; the organisation's real capabilities will differ. |

## How to apply, in order

1. Confirm the framework already in use, if any. Do not impose a second one over it.
2. Take only the parts that answer the question. A capability map does not need all of TOGAF.
3. Adapt the taxonomy or notation to the organisation's language, and record where you departed from the reference.
4. Cite the framework by name and version in the blueprint and in `sources.md`.

## Source caution

The OS source library holds verified records for ArchiMate 3.1, OMG BMM 1.3, and the APQC PCF, which may be cited for what they establish. The only TOGAF item in the library is a 2003 conference presentation, not the TOGAF standard, and its identity is not verified. Treat TOGAF ADM Phase B here as reference practice paraphrased from BABOK 11.4, and do not cite the presentation as the standard. When a TOGAF conformance claim actually matters, obtain the standard and verify it first.

## Evaluate the output

A blueprint that applies a framework is judged by `evaluation/reference-models-and-frameworks-rubric.md`: right model for the domain, applicability stated, adapted not reproduced, current and attributed.
