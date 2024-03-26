// IdeaForm.js
import React, { useState } from "react";
import { useAppContext } from "./AppContext";

const IdeaForm = () => {
  const { dispatch } = useAppContext();
  const [idea, setIdea] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_IDEA", payload: { text: idea, category } });
    setIdea("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your idea"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
      </select>
      <button type="submit">Add Idea</button>
    </form>
  );
};

export default IdeaForm;
