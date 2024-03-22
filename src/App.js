import logo from './logo.svg';
import './App.css';
import { UserOne } from './components/UserOne';
import { UserTwo } from './components/UserTwo';
import { ToDoProvider } from './hooks/ToDoContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ToDoProvider>
          <UserOne/>
          <UserTwo/>
      </ToDoProvider>
      </header>
    </div>
  );
}

export default App;
