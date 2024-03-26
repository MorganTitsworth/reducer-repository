import React from "react";
import IdeaForm from "./IdeaForm";
import IdeaList from "./IdeaList";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <h1>Brainstorming App</h1>
        <IdeaForm />
        <IdeaList />
      </div>
    </AppProvider>
  );
};

export default App;
