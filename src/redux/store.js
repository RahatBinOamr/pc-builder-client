import { configureStore } from '@reduxjs/toolkit';
import addReducer from './addData/addReducer';
import { api } from './api';
import buttonReducer from './button/buttonReducer';

export const store = configureStore({
  reducer: {
    buttonData: buttonReducer,
    addData: addReducer,
    [api.reducerPath]: api.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
