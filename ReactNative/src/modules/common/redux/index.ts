import { configureStore } from '@reduxjs/toolkit';
import signinSlice from '../../signin/redux/signin-redux';
import signupSlice from '../../signup/redux/signup-redux';
import todoSlice from '../../todo/redux/todo-redux';

const store = configureStore({
  reducer: {
    signin: signinSlice.reducer,
    signup: signupSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
