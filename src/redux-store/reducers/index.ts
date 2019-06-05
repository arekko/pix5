import { combineReducers } from "redux";
import photoReducer from "./photoReducer";
import tabsReducer from "./tabsReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  photo: photoReducer,
  user: userReducer,
  tabs: tabsReducer
});

export type AppState = typeof rootReducer;
