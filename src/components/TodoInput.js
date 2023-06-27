import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleTodo = (e) => {
    if (e.key.toLowerCase() === "enter") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="What´s next...?"
      className="todo-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => handleTodo(e)}
      autoFocus
    />
  );
};

export default TodoInput;
