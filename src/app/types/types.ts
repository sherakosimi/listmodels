import { modelTypes } from "../Actiontypes/modelsTypes";

export interface ModelsState {
  pending: boolean;
  models: any[];
  error: string | null;
}

export interface FetchModelsSuccessPayload {
  models: any[];
}

export interface FetchModelsFailurePayload {
  error: string;
}

export interface FetchModelsRequest {
  type: typeof modelTypes.FETCH_MODEL_REQUEST;
}

export type FetchModelsSuccess = {
  type: typeof modelTypes.FETCH_MODEL_SUCCESS;
  payload: FetchModelsSuccessPayload;
};

export type FetchModelsFailure = {
  type: typeof modelTypes.FETCH_MODEL_FAILURE;
  payload: FetchModelsFailurePayload;
};

export type ModelsActions =
  | FetchModelsRequest
  | FetchModelsSuccess
  | FetchModelsFailure;
