import { createReducer, updateObject } from "./reducerUtilities";

interface Route {
  key: string;
  title: string;
}
interface TabsState {
  index: number;
  routes: Route[];
}

const initialState: TabsState = {
  index: 0,
  routes: [
    { key: "latest", title: "LATEST" },
    { key: "collection", title: "COLLECTIONS" }
  ]
};

const setIndex = (state: TabsState, { payload }: any) =>
  updateObject(state, {
    index: payload
  });

export default createReducer(initialState, {
  SET_TAB_INDEX: setIndex
});
