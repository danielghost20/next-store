import {createSlice} from '@reduxjs/toolkit'

type AuthProps = {
    user: any | null
}

const initialState: AuthProps = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserCredentials : (state, action) => {
            state.user = action.payload
        },
        removeUserCredentials : (state) => {
            state.user = null
        }
    }

})

export const  {getUserCredentials} = userSlice.actions
export default userSlice.reducer