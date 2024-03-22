Overview

    This messaging app allows users to send messages and view them in real-time. It's built using React and Hooks: useState, useEffect, useContext, useReducer.

Usage

Sending Messages
1. Enter your message in the textarea provided.
2. Click the "Send" button to submit your message.
3. Your message will be displayed in the message board.

Deleting Messages
    You can delete messages by right-clicking on them.

Folder Structure

-hooks Folder
    Contains a JavaScript file that exports ToDoContext. This file creates a context named "TodoContext" using createContext. It also provides a function useToDo to replace useContext for easier access to the context data across different files within the App directory.

-Operation
Contains the main components and logic for the messaging app.

    1. State Management: Utilizes useReducer to manage messages and useState to store each user's message.
    2. Message Input: The textarea allows users to write messages.
    3. Sending Messages: When the "Send" button is clicked, a handleClick event is triggered. This event uses dispatch to send the message data, including the message ID, content, and user, to the reducer.
    4. Displaying Messages: Messages are displayed in the message board component.
    5. Deleting Messages: The useEffect hook is used to delete messages. An addEventListener allows users to delete messages by right-clicking on them.

How Hooks Are Used
1. useState: Used to manage the state of user messages. Two separate state variables userOneMessage and userTwoMessage are created to store messages for each user.
2. useReducer: Manages the global state of the application. The messageReducer function handles actions related to messages, such as adding new messages.
3. useEffect: Used to add a context menu event listener for deleting messages. This hook ensures that the event listener is added only once when the component mounts and removed when the component unmounts.
    -The contextmenu is the menu when you right-click. So the useEffect listens for the right click. It the tagName is P and there is no class "delete-button", to create a button with the class name in the location where the tagName P is. When you click the button, it removes the target, and later removes the EvenListener