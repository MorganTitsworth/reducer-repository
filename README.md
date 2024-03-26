useState()
- in AppProvider to manage the filter state
- in IdeaList to manage the state for filtering.

useReducer():
- in AppProvider to manage the state of ideas and categories.
- handles adding ideas
- handles toggling completion
- handles toggling line
- handles setting filters.

useContext()
- in IdeaList to access the global state managed by the AppProvider context.
