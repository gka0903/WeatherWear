import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: ["",],
};

const clothesSlice = createSlice({
    name: "clothes",
    initialState,
    reducers: {
        setClothes: (state, action: PayloadAction<Array<string>>) => {
            state.value = action.payload;
        }
    },
});

export const {setClothes} = clothesSlice.actions;
export default clothesSlice.reducer;