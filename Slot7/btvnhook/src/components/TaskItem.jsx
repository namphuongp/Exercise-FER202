import { memo } from "react";
import { Button } from "react-bootstrap";
function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className="d-flex align-items-center py-2">
      <input
        className="form-check-input"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <span
        style={{
          flex: 1,
          marginLeft: "5px",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>

      <Button onClick={() => deleteTask(task.id)}>Xóa</Button>
    </div>
  );
}

export default memo(TaskItem);
