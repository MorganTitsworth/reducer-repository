import React from "react";
import { useAppContext } from "../../AppContext";
import { useState } from "react";
import "./list.css";

export default function List() {
    const { todos, todoDispatch } = useAppContext();
    const [text, setText] = useState("");

    return (
        <div className="todoContainer">
            <div className="topContent">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="todoInput"
                />
                <button
                    onClick={() => {
                        todoDispatch({
                            type: "ADD_TODO",
                            title: text,
                        });
                        setText("");
                    }}
                    className="todoBtn"
                >
                    Add
                </button>
            </div>
            {todos.map((elm) => {
                return (
                    elm && (
                        <div
                            className="todo"
                            key={elm.id}
                            style={
                                elm.done
                                    ? { backgroundColor: "rgb(82, 82, 82)" }
                                    : {}
                            }
                        >
                            <input
                                type="checkbox"
                                onChange={() => {
                                    todoDispatch({
                                        id: elm.id,
                                        type: "MARK_DONE",
                                    });
                                }}
                            />
                            <div className="todoContent">
                                <h3
                                    style={
                                        elm.done
                                            ? {
                                                  textDecoration:
                                                      "line-through",
                                                  color: "gray",
                                              }
                                            : {}
                                    }
                                >
                                    {elm.title}
                                </h3>
                                <div className="todoContentBtns">
                                    <button>Edit</button>
                                    <button onClick={() => todoDispatch({type: 'DELETE_TODO', id: elm.id})}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
}
