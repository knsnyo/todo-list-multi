import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tokenReducer } from './token.redux';

const rootReducer = combineReducers({
  tokenReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
