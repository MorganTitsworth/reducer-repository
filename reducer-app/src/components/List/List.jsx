import React from "react";
import { useAppContext } from "../../AppContext";
import { useState, useEffect } from "react";
import "./list.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

export default function List() {
    const { todos, todoDispatch } = useAppContext();
    const [text, setText] = useState("");
    const [updateText, setUpdateText] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div className='todoContainer'>
            <div className='topContent'>
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='todoInput'
                    placeholder='Add a to-do...'
                />
                <button
                    onClick={() => {
                        todoDispatch({
                            type: "ADD_TODO",
                            title: text,
                        });
                        setText("");
                    }}
                    className='todoBtn'
                >
                    Add
                </button>
            </div>
            {todos.map((elm) => {
                return (
                    elm && (
                        <div
                            className='todo'
                            key={elm.id}
                            style={
                                elm.done
                                    ? { backgroundColor: "rgb(82, 82, 82)" }
                                    : {}
                            }
                        >
                            <input
                                type='checkbox'
                                onChange={() => {
                                    todoDispatch({
                                        id: elm.id,
                                        type: "MARK_DONE",
                                    });
                                }}
                            />
                            <div className='todoContent'>
                                {elm.editing ? (
                                    <input
                                        value={updateText}
                                        type='text'
                                        onChange={(e) =>
                                            setUpdateText(e.target.value)
                                        }
                                    />
                                ) : (
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
                                )}
                                <div className='todoContentBtns'>
                                    {elm.editing ? (
                                        <button
                                            onClick={() => {
                                                todoDispatch({
                                                    type: "UPDATE_TODO",
                                                    id: elm.id,
                                                    title: updateText,
                                                });
                                                setUpdateText("");
                                                setIsEditing(!isEditing);
                                            }}
                                        >
                                            Update
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    todoDispatch({
                                                        type: "EDIT_TODO",
                                                        id: elm.id,
                                                    });
                                                    setIsEditing(!isEditing);
                                                    setUpdateText(elm.title);
                                                }}
                                                disabled={isEditing}
                                            >
                                                <FaPencilAlt />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    todoDispatch({
                                                        type: "DELETE_TODO",
                                                        id: elm.id,
                                                    })
                                                }
                                                disabled={isEditing}
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                );
            })}
        </div>
    );
}
