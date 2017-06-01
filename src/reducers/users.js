export const defaultState = {
loading: null,
data: null,
meta: null,
errors: null,
};


export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
      newState.settingsState = "loading";
      return newState;
    
    default:
      return state;
  }
};