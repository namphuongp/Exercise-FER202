import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        padding: "10px",
        borderBottom: "1px solid var(--bs-border-color)",
      }}
    >
      <span>Mini Task Manager</span>

      <button
        type="button"
        className="btn btn-outline-secondary"
        aria-label="Chế độ tối"
        aria-pressed={darkMode}
        onClick={toggleTheme}
        style={{
          marginLeft: "50px",
        }}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}

export default Header;
