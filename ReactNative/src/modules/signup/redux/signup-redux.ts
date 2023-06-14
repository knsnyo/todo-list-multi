import { createSlice } from '@reduxjs/toolkit';
import { ISignupForm } from '../../../@types/signup-form';

const initialState: ISignupForm = {
  id: '',
  password: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    changeId: (state, action) => {
      state.id = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    init: (state) => {
      state = {
        id: '',
        password: '',
      };
    },
  },
});

export const { changeId, changePassword, init } = signupSlice.actions;
export default signupSlice;
