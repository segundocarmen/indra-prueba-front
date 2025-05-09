import { createSlice } from '@reduxjs/toolkit';
import { ApplicationDefault } from './initialvalues';

export const applicationSlice = createSlice({
    name: 'application',
    initialState: ApplicationDefault,
    reducers: {
        setApplicationConnection: (state, action) => {
            const data = action.payload;
            state.connection = data;
        },
        setApplicationStep: (state, action) => {
            const data = action.payload;
            state.step = data;
        }
    }
});

export const { setApplicationConnection, setApplicationStep } =
    applicationSlice.actions;

export default applicationSlice.reducer;
