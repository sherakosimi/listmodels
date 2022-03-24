import { all, fork } from "redux-saga/effects";
import modelsSaga from "./modelsSaga"

export  function* rootSaga() {
  yield all([fork(modelsSaga)]);
}
