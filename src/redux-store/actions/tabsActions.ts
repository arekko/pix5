import { TabsActionTypes } from "../constants";
import { SET_TAB_INDEX } from "./../constants";

export const setTabIndex = (index: number): TabsActionTypes => ({
  type: SET_TAB_INDEX,
  payload: index
});
