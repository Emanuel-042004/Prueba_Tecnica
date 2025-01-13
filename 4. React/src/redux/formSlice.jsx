import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
 name: 'forms',
 initialState: [],
 reducers: {
    addForm: (state, action) => {
    state.push(action.payload);
    }
 }
})

export const {addForm} = formSlice.actions;
export default formSlice.reducer;