export const defaultState = {
loading: null,
data: null,
meta: null,
errors: null,
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'LOGIN_REQUEST':
      newState.loading = true;
      return newState;
    case 'LOGIN_RESPONSE':
    console.log("login response", action.payload)
    	newState.data = action.payload
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
     case 'LOGIN_ERROR':
      newState.error = action.error
      newState.meta = action.meta
      newState.loading = false;
      return newState;
    case 'LOGOUT_REQUEST':
      newState.loading = true;
      return newState;
    case 'LOGOUT_RESPONSE':
      newState.data = action.d
      newState.meta = action.meta
      newState.loading = false;
      return newState;
    case 'LOGOUT_ERROR':
      newState.error = action.error
      newState.meta = action.meta
      newState.loading = false;
      return newState;
    default:
      return state;
  }
};