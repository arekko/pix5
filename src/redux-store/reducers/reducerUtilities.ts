export const updateObject = (oldValue: object, newValue: object) => ({
  ...oldValue,
  ...newValue
});

export const createReducer = (initialState: any, handlers: any) => (
  state = initialState,
  action: any
) => {
  return handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;
};
