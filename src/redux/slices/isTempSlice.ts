import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: false
    ,
};

const temperatureSlice = createSlice({
    name: "temperature",
    initialState,
    reducers: {
        setIsTemp: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const {setIsTemp} = temperatureSlice.actions;
export default temperatureSlice.reducer;