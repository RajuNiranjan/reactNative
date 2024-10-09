import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Todo {
  task: string;
  id: number;
  isCompleted: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const genId = Date.now();
      state.todos.push({
        id: genId,
        task: action.payload,
        isCompleted: false,
      });
    },
    checkTask: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(task => task.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(task => task.id !== action.payload);
    },
  },
});

export const {addTask, checkTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;
