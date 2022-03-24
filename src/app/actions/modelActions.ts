import { modelTypes } from "../Actiontypes/modelsTypes"
import { 
FetchModelsRequest, FetchModelsSuccess,
FetchModelsFailure,
    FetchModelsSuccessPayload,
    FetchModelsFailurePayload,
} from "../types/types"

export const fetchModelsRequest = (): FetchModelsRequest => ({
  type: modelTypes.FETCH_MODEL_REQUEST
});

export const fetchModelsSuccess = (
  payload: FetchModelsSuccessPayload
): FetchModelsSuccess => ({
  type: modelTypes.FETCH_MODEL_SUCCESS,
  payload
});

export const fetchModelsFailure = (
  payload: FetchModelsFailurePayload
): FetchModelsFailure => ({
  type: modelTypes.FETCH_MODEL_FAILURE,
  payload
});
