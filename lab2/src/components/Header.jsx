import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="d-flex justify-content-between"
      style={{
        padding: "10px",
        borderBottom: "1px solid",
      }}
    >
      <span className="ms-3">Mini Movie Manager</span>

      <button
        type="button"
        className="btn btn-outline-secondary me-3"
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
