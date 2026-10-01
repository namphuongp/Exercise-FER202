import { useCallback, useEffect, useMemo, useReducer, useState } from "react";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { ThemeContext } from "./context/ThemeContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { initialTasks } from "./data/tasks";
import "./App.css";

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      );

    default:
      return state;
  }
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light",
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      <TaskApp />
    </ThemeContext.Provider>
  );
}

function TaskApp() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [savedTasks, setSavedTasks] = useLocalStorage("tasks", initialTasks);
  const [tasks, dispatch] = useReducer(taskReducer, savedTasks);

  useEffect(() => {
    setSavedTasks(tasks);
  }, [tasks]);

  const addTask = useCallback((title) => {
    dispatch({
      type: "ADD_TASK",
      payload: title,
    });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }, []);

  const toggleTask = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  }, []);

  const statistics = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((task) => task.completed).length;
    const unfinished = total - completed;

    return {
      total,
      completed,
      unfinished,
    };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      let matchFilter = true;

      if (filter === "active") {
        matchFilter = !task.completed;
      }

      if (filter === "completed") {
        matchFilter = task.completed;
      }

      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [tasks, filter, search]);

  return (
    <div className="task-app">
      <Header />

      <TaskForm addTask={addTask} />

      <div className="d-flex gap-2 my-3">
        <select
          className="form-select"
          style={{ width: "150px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Tất cả</option>

          <option value="active">Chưa làm</option>

          <option value="completed">Hoàn thành</option>
        </select>

        <input
          className="form-control"
          aria-label="Tìm kiếm công việc"
          value={search}
          placeholder="Tìm kiếm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <p className="text-center">
        Tổng: {statistics.total}
        {" | "}
        Chưa làm: {statistics.unfinished}
        {" | "}
        Hoàn thành: {statistics.completed}
      </p>

      <TaskList 
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
