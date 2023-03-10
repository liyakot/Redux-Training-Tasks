import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TodoItem from "../components/TodoItem";
import { FaPlus } from "react-icons/fa";

const Todos = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const todos = useSelector((state) => state.todo.todos);

  const addTodoHandler = () => {
    const todo = {
      id: Date.now(),
      text: todoValue,
      completed: false,
    };

    dispatch(addTodo(todo));
    setTodoValue("");
  };

  const errorHandler = () => {
    alert("This field is empty...");
  };

  return (
    <div className="container">
      <h1 className="header">Redux Toolkit Todo App</h1>
      <form className="todos" onSubmit={(e) => e.preventDefault()}>
        <div className="todos_creator">
          <input
            type="text"
            value={todoValue}
            placeholder="Write an essay..."
            className="input"
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
          <FaPlus
            className="button_icon"
            onClick={todoValue ? addTodoHandler : errorHandler}
          />
        </div>

        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </form>
    </div>
  );
};

export default Todos;
