import { createSlice } from '@reduxjs/toolkit';
import { PlanDefault } from './initialvalues';

export const planSlice = createSlice({
    name: 'plan',
    initialState: PlanDefault,
    reducers: {
        setContractor: (state, action) => {
            const data = action.payload;
            state.contractor = data;
        },
        setPlansList: (state, action) => {
            const data = action.payload;
            state.list = data;
        },
        setPlanSelected: (state, action) => {
            const data = action.payload;
            state.selected = data;
        }
    }
});

export const { setContractor, setPlansList, setPlanSelected } =
    planSlice.actions;

export default planSlice.reducer;
