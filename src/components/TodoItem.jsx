import { useDispatch } from "react-redux";
import { toggleCompletedTodo, removeTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="">
      <button onClick={() => toggleTodoHandler(todo.id)} className="">
        Complete
      </button>
      <div style={{ color: todo.completed ? "green" : "red" }}>{todo.text}</div>
      <button onClick={() => removeTodoHandler(todo.id)} className="">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
