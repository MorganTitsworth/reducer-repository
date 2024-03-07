import React from "react";
import { useAppContext } from "../../AppContext";
import "./themeChanger.css";

export default function ThemeChanger() {
    const { themeDispatch } = useAppContext();

    return (
        <div className='themeChangerContainer'>
            <button
                className='light'
                onClick={() => themeDispatch({ type: "LIGHT" })}
            ></button>
            <button
                className='dark'
                onClick={() => themeDispatch({ type: "DARK" })}
            ></button>
            <button
                className='red'
                onClick={() => themeDispatch({ type: "RED" })}
            ></button>
            <button
                className='blue'
                onClick={() => themeDispatch({ type: "BLUE" })}
            ></button>
            <button
                className='green'
                onClick={() => themeDispatch({ type: "GREEN" })}
            ></button>
        </div>
    );
}
