import { modelTypes } from "../../Actiontypes/modelsTypes";
import { ModelsActions, ModelsState } from "../../types/types";

const initialState: ModelsState = {
  pending: false,
  models: [],
  error: null
};

const modelsReducers = (state = initialState, action: ModelsActions) => {
  switch (action.type) {
    case modelTypes.FETCH_MODEL_REQUEST:
      return {
        ...state,
        pending: true
      };
    case modelTypes.FETCH_MODEL_SUCCESS:
      return {
        ...state,
        pending: false,
        models: action.payload.models,
        error: null
      };
    case modelTypes.FETCH_MODEL_FAILURE:
      return {
        ...state,
        pending: false,
        models: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};

export default modelsReducers;