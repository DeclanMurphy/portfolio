import { configureStore } from '@reduxjs/toolkit';
import { bioReducer, addBio } from './slices/bioSlice';

const store = configureStore({
  reducer: {
    bios: bioReducer
  }
});

export { store, addBio };
export * from './thunks/bioThunks';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
