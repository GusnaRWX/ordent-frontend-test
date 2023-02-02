import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorCode: 0,
    message: ''
}

export const albumnSlice = createSlice({
    name: 'album',
    initialState,
    reducers: {
        getAlbumnRequest (state) {
            state.loading = true
        },
        getAlbumnSuccess (state, action) {
            state.loading = false,
                state.data = action?.payload?.data
        },
        getAlbumnFailed (state, action) {
            state.loading = false,
                state.errorCode = action?.payload?.errorCode,
                state.message = action?.payload?.message
        }
    }
})

export const {
    getAlbumnRequest,
    getAlbumnSuccess,
    getAlbumnFailed
} = albumnSlice.actions

export default albumnSlice.reducer