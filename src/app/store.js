/* import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
 */
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/todo/todoSlice";
import postSlice from "../features/post/postSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
    posts: postSlice,
  },
});
