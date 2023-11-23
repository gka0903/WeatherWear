import {configureStore} from '@reduxjs/toolkit'
import locationSlice from "./slices/locationSlice"
import temperatureSlice from "./slices/temperature";
import clothesSlice from "./slices/clothesSlice";
import isTempSlice from "./slices/isTempSlice";

export const store = configureStore({
    reducer: {
        location: locationSlice,
        temperature: temperatureSlice,
        clothes: clothesSlice,
        isTemp: isTempSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;