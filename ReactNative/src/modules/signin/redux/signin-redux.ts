import { createSlice } from '@reduxjs/toolkit';
import { ISigninForm } from '../../../@types/signin-form';

const initialState: ISigninForm = {
  id: '',
  password: '',
};

const signinSlice = createSlice({
  name: 'signin',
  initialState,
  reducers: {
    changeId: (state, action) => {
      state.id = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    init: (state) => {
      state = initialState;
    },
  },
});

export const { changeId, changePassword, init } = signinSlice.actions;
export default signinSlice;
