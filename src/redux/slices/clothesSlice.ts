import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface dataType {
    name: string,
    price: string,
    material: string,
    details: string,
    color: string,
    temp: number,
    img: string
}

const initialState = {
    value: [{},],
};

const clothesSlice = createSlice({
    name: "clothes",
    initialState,
    reducers: {
        setClothes: (state, action: PayloadAction<Array<dataType>>) => {
            state.value = action.payload;
        }
    },
});

export const {setClothes} = clothesSlice.actions;
export default clothesSlice.reducer;