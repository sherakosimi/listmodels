import axios from "axios"
import {call, put, takeLatest, all} from "redux-saga/effects";

import {
    fetchModelsFailure,
    fetchModelsSuccess,
} from "../actions/modelActions"
import { modelTypes } from "../Actiontypes/modelsTypes";

const getModels = () => 
axios.get<any>("https://swapi.dev/api/people/")

function *fetchModelsSaga(): any {
    try{
        const response = yield call(getModels)
        yield put (
            fetchModelsSuccess({
                models: response.data.results
            })
        )
    }
    catch (e) {
        if(e instanceof Error){
            yield put(fetchModelsFailure({
                error: e.message
            }))
        }
    }
}

function* modelsSaga(){
    yield all([takeLatest(modelTypes.FETCH_MODEL_REQUEST, fetchModelsSaga)])
}

export default modelsSaga;