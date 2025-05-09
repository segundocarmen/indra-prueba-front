import { configureStore } from '@reduxjs/toolkit';
import application from './slices/application';
import user from './slices/user';
import plan from './slices/plans';

export const store = configureStore({
    reducer: {
        application,
        user,
        plan
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
