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
      newState.loading = true;
      return newState;
    case 'CREATE_USER_RESPONSE':
    	newState.data = action.payload
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    case 'CREATE_USER_ERROR':
    	newState.error = action.error
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    default:
      return state;
  }
};