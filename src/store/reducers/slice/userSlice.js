import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorCode: 0,
    message: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserRequest (state) {
            state.loading = true
        },
        getUserSuccess (state, action) {
            state.loading = false,
                state.data = action?.payload?.data
        },
        getUserFailed (state, action) {
            state.loading = false,
                state.errorCode = action?.payload?.errorCode,
                state.message = action?.payload?.message
        }
    }
})

export const {
    getUserRequest,
    getUserSuccess,
    getUserFailed
} = userSlice.actions

export default userSlice.reducer