import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./components/Task";
import categories from "./categories";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    console.log("Task");
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <h1 className="d-flex p-2 justify-content-center mb-3">Task Management App</h1>
      <div className="d-flex justify-content-center mb-3">
        <TaskForm addTask={addTask} categories={categories} />
      </div>
      <div className="d-flex justify-content-center">
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
