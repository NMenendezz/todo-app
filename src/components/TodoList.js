import Todo from "./Todo";
import TodoFilters from "./TodoFilters";

const TodoList = ({
  todos,
  handleSetCompleted,
  removeTodo,
  activeFilter,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleClearCompleted,
}) => {
  return (
    <div className="container">
      <div className="todos">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleSetCompleted={handleSetCompleted}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default TodoList;
