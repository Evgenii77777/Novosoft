import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../../../redux/todos/todos-reducer";
import { AppDispatch } from "../../../redux/store";

import { Button } from "../../button";

import styles from "../todo-list.module.css";

export const TodoAdd = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        text="Добавить"
        func={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      />
    </div>
  );
};
