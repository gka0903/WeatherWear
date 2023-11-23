import {createSlice} from "@reduxjs/toolkit";

interface LocationState {
    value: {
        lat: number;
        lng: number;
    };
}

const initialState: LocationState = {
    value: {
        lat: 37.5665, // 기본 위도
        lng: 126.9780, // 기본 경도
    },
};


const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setMyLocation: (state, action) => {
            state.value = action.payload;
        }
    },
});

export const {setMyLocation} = locationSlice.actions;
export default locationSlice.reducer;