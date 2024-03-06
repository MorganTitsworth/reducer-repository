import { AppProvider, useAppContext } from "./ThemeContext";
import ThemeChanger from "./components/ThemeChanger";
import List from "./components/List";
import "./App.css";

const Main = () => {
    const { theme } = useAppContext();

    return (
        <div>
            <ThemeChanger />
            <List />
        </div>
    );
};

function App() {
    return (
        <AppProvider>
            <Main />
        </AppProvider>
    );
}

export default App;
