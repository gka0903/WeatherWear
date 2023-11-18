import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 28,
};

const temperatureSlice = createSlice({
    name: "temperature",
    initialState,
    reducers: {
        setTemperature: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const {setTemperature} = temperatureSlice.actions;
export default temperatureSlice.reducer;