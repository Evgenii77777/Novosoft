import { useSelector } from "react-redux";

import { TodoItem } from "./todo-item";
import { RootState } from "../../redux/store";

import styles from "./todo-list.module.css";

export const TodoList = () => {
  const todoList = useSelector((state: RootState) => state);
  const doneTodo = todoList.todos.filter((el) => el.completed).length;
  const notDoneTodo = todoList.todos.filter((el) => !el.completed).length;

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Выполненные задачи: {doneTodo}</h3>
        <ul className={styles.list}>
          {todoList.todos
            .filter((el) => el.completed)
            .map((todo) => (
              <TodoItem todo={todo} />
            ))}
        </ul>
      </div>
      <div className={styles.box}>
        <h3>Невыполненные задачи: {notDoneTodo}</h3>
        <ul className={styles.list}>
          {todoList.todos
            .filter((el) => !el.completed)
            .map((todo) => (
              <TodoItem todo={todo} />
            ))}
        </ul>
      </div>
    </div>
  );
};
