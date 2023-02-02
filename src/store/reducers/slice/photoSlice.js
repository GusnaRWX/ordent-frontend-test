import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorCode: 0,
    message: ''
}

export const photoSlice = createSlice({
    name: 'photo',
    initialState,
    reducers: {
        getPhotoRequest (state) {
            state.loading = true
        },
        getPhotoSuccess (state, action) {
            state.loading = false,
                state.data = action?.payload?.data
        },
        getPhotoFailed (state, action) {
            state.loading = false,
                state.errorCode = action?.payload?.errorCode,
                state.message = action?.payload.message
        }
    }
})

export const {
    getPhotoRequest,
    getPhotoSuccess,
    getPhotoFailed
} = photoSlice.actions

export default photoSlice.reducer