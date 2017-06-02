export const defaultState = {
loading: null,
data: null,
meta: null,
errors: null,
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'LOGIN_REQUESTED':
      newState.loading = true;
      return newState;
    case 'LOGIN_SUCCEDED':
    	newState.data = action.data
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    case 'LOGIN_REJECTED':
    	newState.error = action.error
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    case 'LOGOUT_REQUESTED':
      newState.loading = true;
      return newState;
    case 'LOGOUT_SUCCEDED':
      newState.data = action.data
      newState.meta = action.meta
      newState.loading = false;
      return newState;
    case 'LOGOUT_REJECTED':
      newState.error = action.error
      newState.meta = action.meta
      newState.loading = false;
      return newState;
    default:
      return state;
  }
};