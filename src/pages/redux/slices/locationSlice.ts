import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setMyLocation: (state, action: PayloadAction<object>) => {
            state.value = action.payload;
        }
    },
});

export const {setMyLocation} = locationSlice.actions;
export default locationSlice.reducer;