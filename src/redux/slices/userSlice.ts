import {createSlice} from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: "user",
    initialState: "",
    reducers: {
        getToken: (state) => {
            console.log(state)
        }
    }

})

export const  {getToken} = userSlice.actions
export default userSlice.reducer