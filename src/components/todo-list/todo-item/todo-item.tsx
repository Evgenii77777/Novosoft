import { useDispatch } from "react-redux";
import cn from "classnames";

import { Button } from "../../button";
import { Todo } from "./item-type";
import { AppDispatch } from "../../../redux/store";
import {
  deleteTodo,
  editTodo,
  editedToggleTodo,
  toggleCompleted,
} from "../../../redux/todos/todos-reducer";

import trash from "./assets/trash.svg";
import edit from "./assets/edit.svg";
import done from "./assets/done.svg";
import close from "./assets/close.svg";
import save from "./assets/save.png";
import styles from "./todo-item.module.css";

interface TodoProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li
      key={todo.id}
      className={cn(styles.item, { [styles.completed]: todo.completed })}
    >
      {!todo.edited && (
        <p className={cn(styles.text, { [styles.done]: todo.completed })}>
          {todo.text}
        </p>
      )}
      {todo.edited && (
        <input
          onChange={(e) =>
            dispatch(editTodo({ text: e.target.value, id: todo.id }))
          }
          value={todo.text}
        />
      )}
      <div>
        <Button
          img={todo.edited ? save : edit}
          alt={todo.edited ? "save" : "edit"}
          func={() =>
            dispatch(editedToggleTodo({ edited: !todo.edited, id: todo.id }))
          }
        />
        <Button
          img={trash}
          alt="trash"
          func={() => {
            dispatch(deleteTodo(todo.id));
          }}
        />
        <Button
          img={todo.completed ? done : close}
          alt={todo.completed ? "done" : "close"}
          func={() => {
            dispatch(
              toggleCompleted({ completed: !todo.completed, id: todo.id })
            );
          }}
        />
      </div>
    </li>
  );
};
