import { call, put, takeEvery } from "redux-saga/effects";
import instanceAxios from "../axios/apiReq";
import { getPhotoSuccess } from "./photoSclice";


export function* fetchingPhotos(action) {
    // const data = yield call(() => instanceAxios.get('list?', {page: action.payload}));
    const data = yield call(() => instanceAxios.get(`https://picsum.photos/v2/list?page${action.payload}&limit=32`));
    yield put(getPhotoSuccess(data));
}


export default function* photoSaga () {
    yield takeEvery("photos/getPhotoFetch", fetchingPhotos);
}