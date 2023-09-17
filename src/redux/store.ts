import { configureStore } from '@reduxjs/toolkit'
import userRefucer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userRefucer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch