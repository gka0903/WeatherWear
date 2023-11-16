import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<object>) => {
            state.value = action.payload;
        }
    },
});

export const {setLocation} = locationSlice.actions;
export default locationSlice.reducer;