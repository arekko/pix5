import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import tabsReducer from "./tabsReducer";
export const rootReducer = combineReducers({
  photo: photoReducer,
  tabs: tabsReducer
});

export type AppState = typeof rootReducer;
