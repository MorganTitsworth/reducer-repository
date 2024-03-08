import { AppProvider, useAppContext } from "./AppContext";
import ThemeChanger from "./components/ThemeChanger/ThemeChanger";
import { useState, useEffect } from "react";
import "./App.css";
import List from "./components/List/List";
import axios from "axios";

const Main = () => {
    const { theme } = useAppContext();
    const [imgData, setImgData] = useState();
    const [canDisplay, setCanDisplay] = useState(false);

    useEffect(() => {
        axios
            .get(
                `https://api.unsplash.com/photos/random?&query=${theme}&orientation=landscape&client_id=k6kZxCBgIFiypQSUZ3WICAniq3lYxUisfSyEGJDrubo`
            )
            .then((res) => {
                setImgData(res.data.urls.full);
                setCanDisplay(true);
            })
            .catch((err) => console.log(err));
    }, [theme]);

    return (
        <div className='app-container'>
            <div className='background'>
                <div className='bgImgContainer'>
                    {canDisplay ? (
                        <div
                            className='bgImg'
                            style={{
                                backgroundImage: "url(" + imgData + ")",
                            }}
                        ></div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className='content' style={{
                                backgroundImage: "url(" + imgData + ")",
                            }}>
                    <div className='otherContent'>
                        <h2>To-Do's</h2>
                        <div className='themeContent'>
                            <h4>Change Theme:</h4>
                            <ThemeChanger />
                        </div>
                    </div>
                    <List />
                </div>
            </div>
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
