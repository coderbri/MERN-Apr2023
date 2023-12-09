# Todo List

This is a simple Todo List application built with React. The app allows users to add, mark as complete, and delete tasks. Tasks are stored locally in the browser, so they persist even if the user refreshes the page.

<div align="center">
<img src="./readme-assets/TodoList-Demo.gif" width="450px" height="auto">
</div>

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Code Overview](#code-overview)


## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-todo-list.git
   ```

2. Navigate to the project directory:
   ```bash
   cd todolist-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit [ http://localhost:5173/]( http://localhost:5173/).


## Features

- **Add Task:** Users can add a new task by entering text into the input field and clicking the "Add" button. The app validates that the input is not empty before adding a task.

- **Toggle Completion:** Users can mark a task as complete by clicking the checkbox next to the task. The completion status is visually indicated through styling.

- **Delete Task:** Users can delete a task by clicking the "Delete" button next to the task.

## Usage

1. Open the application in your browser.
2. Use the input field to add new tasks.
3. Click the checkbox to mark tasks as complete.
4. Click the "Delete" button to remove tasks.


## Code Overview

### App.jsx

- **State Management:**
  - Manages the `todoList` state using the `useState` hook.
  - Uses `useEffect` to load tasks from `localStorage` when the component mounts.
  
### NewTaskForm.jsx

- **Task Input Handling:**
  - Handles user input for new tasks.
  - Validates that the task input is not empty.
  - Generates a random ID for each new task.
  - Updates the `todoList` state and saves it to `localStorage` when a new task is submitted.

### DisplayTasks.jsx

- **Task Display and Actions:**
  - Maps over the `todoList` and displays each task.
  - Handles toggling the completion status of tasks using the `toggleTaskCompletion` function.
    - **toggleTaskCompletion:** Lifting state function responsible for updating the completion status of a task. It uses the `setTodoList` function passed down from the parent component to update the state.
  - Styles completed tasks differently using the `styled` function.
  - Handles task deletion using the `handleTaskDeletion` function.
    - **handleTaskDeletion:** Lifting state function responsible for deleting a task. It uses the `setTodoList` function to update the state and `localStorage` to persist the changes.

### Local Storage and Session Persistence

The application leverages `localStorage` to persist the todo list between sessions. The `useEffect` in `App.jsx` loads the todo list from `localStorage` when the component mounts, ensuring that the user's tasks persist even if the browser is refreshed. Additionally, the `NewTaskForm` and `DisplayTasks` components update `localStorage` whenever there is a change to the todo list, ensuring that the data is saved between sessions.

---
<p align="right">Completed: ２０２３年１２月＿日（＿）</p>