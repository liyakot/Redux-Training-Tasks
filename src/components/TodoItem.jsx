import { useDispatch } from "react-redux";
import { toggleCompletedTodo, removeTodo } from "../features/todo/todoSlice";
import { FaCheckDouble, FaTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="todo">
      <div
        className="todo_text"
        style={{ color: todo.completed ? "rgb(48, 255, 151)" : "white" }}
      >
        {todo.text}
      </div>
      <div className="todo_icons">
        <FaCheckDouble
          onClick={() => toggleTodoHandler(todo.id)}
          className="button_icon button_icon_todo"
        />
        <FaTrashAlt
          onClick={() => removeTodoHandler(todo.id)}
          className="button_icon button_icon_todo"
        />
      </div>
    </div>
  );
};

export default TodoItem;
