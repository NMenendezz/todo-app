import { useState, useEffect } from "react";
import Title from "./components/Title";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import todoServices from "./services/todoServices";
import "./App.css";

const { getTodos, create, update, remove } = todoServices;
const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    getTodos().then((todoList) => {
      setTodos(todoList);
    });
  }, []);

  const addTodo = (text) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;

    const newTodo = {
      id: lastId + 1,
      text,
      completed: false,
    };

    create(newTodo).then((returnedTodo) => {
      setTodos(todos.concat(returnedTodo));
    });
  };

  const handleSetCompleted = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };

    update(id, updatedTodo).then((returnedTodo) => {
      setTodos(todos.map((todo) => (todo.id !== id ? todo : returnedTodo)));
    });
  };

  const removeTodo = (id) => {
    remove(id).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  const handleClearCompleted = () => {
    const completedIds = todos
      .filter((todo) => todo.completed)
      .map((todo) => todo.id);
    setTodos((todos) =>
      todos.filter((todo) => !completedIds.includes(todo.id))
    );

    completedIds.forEach((id) => {
      remove(id);
    });
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => !todo.completed);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="todo-app">
      <Title title="To-Do List 📝" />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        handleSetCompleted={handleSetCompleted}
        removeTodo={removeTodo}
        activeFilter={activeFilter}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default App;
