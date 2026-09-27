import React, { useState } from "react";

function Ex12() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [todoInput, setTodoInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [selectedColor, setSelectedColor] = useState("Chưa chọn");
  const [search, setSearch] = useState("");
  const colors = ["Red", "Green", "Blue", "Yellow"];
  const list = ["Sách 1", "Quyển 2", " Sách 2", "Quyển 1"];
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;
    setTodo([...todo, todoInput]);
    setTodoInput("");
  };

  const handleDelete = (ind) => {
    const newTodos = todo.filter((_, index) => index !== ind);
    setTodo(newTodos);
  };

  const filterList = list.filter((item) => {
    // --- Bước 1: Lấy các dữ liệu phục vụ so sánh ---
    const itemText = item.toLowerCase().trim();
    const keyword = search.toLowerCase().trim();

    // --- Bước 2: Định nghĩa các điều kiện ---

    // Điều kiện A: Tìm kiếm theo từ khóa
    const matchSearch = itemText.includes(keyword);

    // Điều kiện B: (Ví dụ) Lọc theo từ bắt đầu
    // const startsWithKey = itemText.startsWith(keyword);

    // Điều kiện C: (Ví dụ) Lọc theo danh mục/trạng thái (nếu sau này item là Object)
    // const matchCategory = selectedCategory ? item.category === selectedCategory : true;

    // --- Bước 3: Trả về kết quả tổng hợp ---
    return matchSearch; // Kết hợp thêm các điều kiện bằng && hoặc || ở đây
  });

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };
  const handleDragOver = (e, index) => {
    e.preventDefault(); // Bắt buộc để cho phép Drop

    // Nếu không kéo gì hoặc kéo chính nó thì bỏ qua
    if (draggingItem === null || draggingItem === index) return;

    // Tạo bản sao mới của mảng items
    const updatedItems = [...items];

    // Cắt phần tử đang kéo ra khỏi mảng
    const [draggedItemContent] = updatedItems.splice(draggingItem, 1);

    // Chèn phần tử đó vào vị trí mới (index)
    updatedItems.splice(index, 0, draggedItemContent);

    // Cập nhật lại vị trí draggingItem mới và cập nhật danh sách
    setDraggingItem(index);
    setItems(updatedItems);
  };
  const handleDragEnd = () => {
    setDraggingItem(null); // Reset trạng thái draggingItem về null
  };
  return (
    <div className="container my-4">
      {/* Biến đếm */}
      <div className="mb-3">
        <button
          className="btn btn-primary me-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <span>Count: {count}</span>
      </div>
      {/* Nhập chữ */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control d-inline-block w-auto me-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nhập chữ..."
        />
        <p className="d-inline-block">Input text: {inputValue}</p>
      </div>
      {/* Ẩn hiện */}
      <div className="mb-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Hide" : "Show"}
        </button>
        {isShow && <span>Toggle me!</span>}
      </div>
      {/* todo list */}
      <div className="d-flex align-items-start gap-3 mb-4">
        <div>
          <input
            type="text"
            className="form-control d-inline-block w-auto me-2"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Nhập việc cần làm..."
          />
          <button className="btn btn-danger" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>

        <div
          className="p-3 rounded-3"
          style={{ backgroundColor: "#fd5757ef", minWidth: "220px" }}
        >
          <h4 className="text-white text-center mb-3">Todo List</h4>
          {todo.length === 0 ? (
            <p className="text-white text-center mb-0">Chưa có công việc nào</p>
          ) : (
            <table className="table table-bordered bg-white m-0">
              <tbody>
                {todo.map((todoItem, index) => (
                  <tr key={index}>
                    <td className="text-center align-middle">{todoItem}</td>
                    <td className="text-center align-middle">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* dropdown */}
      <div className="mb-3">
        <div className="mb-3">
          <select
            id="colorSelect"
            className="form-select d-inline-block w-auto"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="Chưa chọn">Select a color</option>
            {colors.map((c, index) => (
              <option key={index} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: selectedColor,
          }}
        />
      </div>
      {/* search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control d-inline-block w-auto me-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <ul className="list-group w-50 mt-3">
          {filterList.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* kéo thả */}
      <div>
        <h3 className="mb-3">Drag and Drop List</h3>
        <ul className="list-group w-50">
          {items.map((item, index) => (
            <li
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`list-group-item d-flex align-items-center ${
                draggingItem === index ? "bg-light text-muted" : ""
              }`}
              style={{
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ex12;
