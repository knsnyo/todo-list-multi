import { createSlice } from '@reduxjs/toolkit';
import { ISignupForm } from '../../../@types/signup-form';

const initialState: ISignupForm = {
  id: '',
  password: '',
  passwordValid: '',
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
    changePasswordValid: (state, action) => {
      state.passwordValid = action.payload;
    },
    init: (state) => {
      state = {
        id: '',
        password: '',
        passwordValid: '',
      };
    },
  },
});

export const { changeId, changePassword, changePasswordValid, init } =
  signupSlice.actions;
export default signupSlice;
