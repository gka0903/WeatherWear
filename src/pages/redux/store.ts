import {configureStore} from '@reduxjs/toolkit'
import locationSlice from "./slices/locationSlice"
import temperatureSlice from "./slices/temperature";
import clothesSlice from "./slices/clothesSlice";

export const store = configureStore({
    reducer: {
        location: locationSlice,
        temperature: temperatureSlice,
        clothes: clothesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;