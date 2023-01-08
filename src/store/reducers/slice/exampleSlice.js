import { createSlice } from "@reduxjs/toolkit";

// this object variable for initialize default state
const initialState = {
    loading: false,
    data: [],
    errorCode: 0,
    message: ''
}

// this section reducers used for mutation state or manipulate state
export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        // this function used for initialize request/response data from api
        exampleRequest (state) {
            state.loading = true
        },
        // this function used if request/response success from api
        exampleSuccess (state, action) {
            state.loading = false,
                state.data = action?.payload?.data
        },
        // this function used if request/response failed or error from api
        exampleFailed (state, action) {
            state.loading = false,
                state.errorCode = action?.payload?.errorCode,
                state.message = action?.payload?.message
        }
    }
})

export const {
    exampleRequest,
    exampleSuccess,
    exampleFailed
} = exampleSlice.actions

export default exampleSlice.reducer