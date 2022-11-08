import { configureStore } from "@reduxjs/toolkit";
import createMiddleware from "redux-saga";
import photoSlice from "./photoSclice";
import photoSaga from "./photoSaga";
import userSlice from "./userSlice";

const saga = createMiddleware();
export const store = configureStore({
    reducer: {
        photos: photoSlice,
        user: userSlice,
    },
    middleware: [saga]
})

saga.run(photoSaga);