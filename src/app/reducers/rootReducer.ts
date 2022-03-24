import { combineReducers } from "redux";
import modelsReducers from "./modelReducers/modelsReducers";

const rootReducer = combineReducers({
  models: modelsReducers
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
