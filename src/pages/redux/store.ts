import {configureStore} from '@reduxjs/toolkit'
import locationSlice from "./slices/locationSlice"
import temperatureSlice from "./slices/temperature";

export const store = configureStore({
    reducer: {
        location: locationSlice,
        temperature: temperatureSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;