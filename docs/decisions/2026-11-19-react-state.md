# Use reducers and state machines for React state

Date: 2026-11-19

Status: Accepted

React’s `useState` currently manages local values such as the site header’s open flag and the selected scene on the home page. We considered allowing it for simple values and requiring explicit transitions only for multi-step flows. We chose a single rule for all new state code because we prefer a consistent way to express updates, even for simple values.

Follow the state rule in [AGENTS.md](../../AGENTS.md). Reducer actions name the events that update local state. State machines make it explicit which events can move a workflow between states. This can add boilerplate for simple toggles. Existing call sites migrate when their state logic changes. The rule is documented in the repository and applied during review.
