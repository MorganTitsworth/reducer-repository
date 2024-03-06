import React from "react";
import { useAppContext } from "../ThemeContext";
import { useState } from "react";

export default function List() {
    const { todos, todoDispatch } = useAppContext();
    const [text, setText] = useState("");
    const [isDone, setIsDone] = useState(false);

    return (
        <div>
            <div>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={() => {
                        todoDispatch({
                            type: "ADD_TODO",
                            title: text,
                        });
                        setText("");
                        console.log(todos);
                    }}
                >
                    Add
                </button>
            </div>
            {todos.map((elm) => {
                return (
                    elm && (
                        <div key={elm.id}>
                            <h3
                                style={
                                    elm.done
                                        ? {
                                              textDecoration: "line-through",
                                              color: "gray",
                                          }
                                        : {}
                                }
                            >
                                {elm.title}
                            </h3>
                            <input
                                type='checkbox'
                                onChange={() => {
                                    todoDispatch({
                                        id: elm.id,
                                        type: "MARK_DONE",
                                    });
                                }}
                            />
                        </div>
                    )
                );
            })}
        </div>
    );
}
