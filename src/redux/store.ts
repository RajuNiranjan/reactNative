import {combineReducers, configureStore} from '@reduxjs/toolkit';
import todoReducer from './reducers/Todo.reducer';

const combineReducer = combineReducers({
  todo: todoReducer,
});

export const store = configureStore({
  reducer: combineReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
