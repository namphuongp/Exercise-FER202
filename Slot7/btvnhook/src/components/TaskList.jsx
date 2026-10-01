import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <p
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        Không có công việc.
      </p>
    );
  }

  return (
    <div
      style={{
        padding: "10px 15px 25px",
      }}
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
