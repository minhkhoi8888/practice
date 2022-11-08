import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    photos: [],
    isLoading: false
}

export const photoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        getPhotoFetch: (state) => {
            state.isLoading = true;
        },
        getPhotoSuccess: (state, action) => {
            state.photos.push(...action.payload);
            state.isLoading = false;
        },
        getPhotoFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getPhotoFetch, getPhotoSuccess, getPhotoFailure } = photoSlice.actions;
export default photoSlice.reducer;