import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TodoItem from "../components/TodoItem";

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

  return (
    <div>
      <h1>Redux Toolkit Todo App</h1>
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={todoValue}
          placeholder="Write an essay..."
          className=""
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button type="submit" className="" onClick={addTodoHandler}>
          Add
        </button>

        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </form>
    </div>
  );
};

export default Todos;
