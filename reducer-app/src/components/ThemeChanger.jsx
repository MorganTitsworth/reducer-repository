import React from "react";
import { useAppContext } from "../ThemeContext";

export default function ThemeChanger() {
    const { themeDispatch } = useAppContext();

    return (
        <div>
            <button onClick={() => themeDispatch({ type: "LIGHT" })}>
                Light
            </button>
            <button onClick={() => themeDispatch({ type: "DARK" })}>
                Dark
            </button>
            <button onClick={() => themeDispatch({ type: "RED" })}>Red</button>
        </div>
    );
}
