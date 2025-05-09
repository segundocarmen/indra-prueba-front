import { createSlice } from '@reduxjs/toolkit';
import { UserDefault } from './initialvalues';

export const userSlice = createSlice({
    name: 'user',
    initialState: UserDefault,
    reducers: {
        setUserData: (_state, action) => action.payload
    }
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
