import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { Todo } from "./types";

const initialState = [{text:"Сделать тестовое",id:uuidv4(),completed:true,edited:false},{text:"Сдать на проверку",id:uuidv4(),completed:true,edited:false},{text:"Ожидать ревью",id:uuidv4(),completed:false,edited:false}] as Todo[];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, {payload}: PayloadAction<Todo>) => {
       return [...state, payload]
      },
      prepare: (text: string) => ({
        payload: {
          id:uuidv4(),
          text,
          completed: false,
          edited:false
        } as Todo,
      }),
    },
    deleteTodo(state, {payload}: PayloadAction<string>) {
    return   state.filter(({id}) => id !== payload)
    },
    toggleCompleted (
      state,
      {payload}: PayloadAction<{ completed: boolean; id: string }>
    ) {
      return state.map(todo =>
      todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo,
    )
    },
    editedToggleTodo (
      state,
      {payload}: PayloadAction<{ edited: boolean; id: string }>
    ) {
      return state.map(todo =>
      todo.id === payload.id ? { ...todo, edited: !todo.edited } : todo,
    )
    },
     editTodo (
      state,
      {payload}: PayloadAction<{ text: string; id: string }>
    ) {
      return state.map(todo =>
      todo.id === payload.id ? { ...todo, text: payload.text } : todo,
    )
    },
  },
});

export const { addTodo, deleteTodo, toggleCompleted,editTodo ,editedToggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
