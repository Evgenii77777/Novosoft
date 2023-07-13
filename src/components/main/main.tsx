import { TodoList } from "../todo-list";

import styles from "./main.module.css";
import { TodoAdd } from "../todo-list/todo-add";

export const Main = () => (
  <main className={styles.main}>
    <TodoAdd />
    <TodoList />
  </main>
);
