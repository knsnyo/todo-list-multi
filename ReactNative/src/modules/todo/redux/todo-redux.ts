import { createSlice } from '@reduxjs/toolkit';
import { ITodoForm } from '../../../@types/todo-form';

const initialState: ITodoForm = {
  memo: '',
};

const todoSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    changeMemo: (state, action) => {
      state.memo = action.payload;
    },
  },
});

export const { changeMemo } = todoSlice.actions;
export default todoSlice;
