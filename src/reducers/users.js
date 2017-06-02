export const defaultState = {
loading: null,
data: null,
meta: null,
errors: null,
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'CREATE_USER_REQUESTED':
      newState.loading = true;
      return newState;
    case 'CREATE_USER_SUCCEDED':
    	newState.data = action.data
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    case 'CREATE_USER_REJECTED':
    	newState.error = action.error
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    default:
      return state;
  }
};