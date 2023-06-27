const Todo = ({ todo, handleSetCompleted, removeTodo }) => {
  const { id, text, completed } = todo;
  return (
    <div className="todo">
      {completed ? (
        <img
          onClick={() => handleSetCompleted(id)}
          width="24"
          alt=""
          src="./assets/check-icon.svg"
        />
      ) : (
        <img
          onClick={() => handleSetCompleted(id)}
          width="24"
          alt=""
          src="./assets/circle-icon.svg"
        />
      )}
      <p className={completed ? "todo-text completed" : "todo-text"}>{text}</p>
      <img
        onClick={() => removeTodo(id)}
        width="24"
        alt=""
        src="./assets/delete-icon.svg"
      />
    </div>
  );
};

export default Todo;
