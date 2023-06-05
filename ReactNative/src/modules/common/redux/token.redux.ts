import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITokens } from '../../../@types/tokens';

const initialState: ITokens = {
  accessToken: '',
  refreshToken: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    signin: (state, action: PayloadAction<ITokens>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    signout: (state) => {
      state = initialState;
    },
  },
});

export const { signin, signout } = tokenSlice.actions;
export const tokenReducer = tokenSlice.reducer;
