import { useRef, useState } from "react";

import { Button } from "react-bootstrap";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) {
      inputRef.current.focus();
      return;
    }

    addTask(text);
    setInput("");
    inputRef.current.focus();
  };

  return (
    <form className="d-flex gap-2 my-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        aria-label="Tên công việc"
        ref={inputRef}
        type="text"
        value={input}
        placeholder="Nhập tên công việc"
        onChange={(e) => setInput(e.target.value)}
      />

      <Button type="submit">Thêm</Button>
    </form>
  );
}

export default TaskForm;
