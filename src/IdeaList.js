// IdeaList.js
import React from "react";
import { useAppContext } from "./AppContext";

const IdeaList = () => {
  const { state, dispatch, filter, setFilter } = useAppContext();

  const toggleIdea = (index) => {
    dispatch({ type: "TOGGLE_IDEA", payload: index });
  };

  const toggleComplete = (index) => {
    dispatch({ type: "TOGGLE_COMPLETE", payload: index });
  };

  const filteredIdeas = (category) =>
    category
      ? state.ideas.filter((idea) => idea.category === category)
      : state.ideas;

  return (
    <div>
      <h2>Ideas</h2>
      <div>
        {state.categories.map((category, index) => (
          <button key={index} onClick={() => setFilter(category)}>
            {category}
          </button>
        ))}
        <button onClick={() => setFilter(null)}>All</button>
      </div>
      <ul>
        {filteredIdeas(filter).map((idea, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: idea.decoration ? "line-through" : "",
                cursor: "pointer",
              }}
              onClick={() => toggleIdea(index)}
            >
              {idea.text}
            </span>
            <button onClick={() => toggleComplete(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;
