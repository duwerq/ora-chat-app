export const defaultState = {
loading: null,
data: [],
meta: null,
errors: null,
};

export default (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'LIST_CHATS_REQUESTED':
      newState.loading = true;
      return newState;
    case 'LIST_CHATS_RESPONSE':
    console.log("response", action.payload)
    	newState.data = action.payload
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    case 'LIST_CHATS_ERROR':
    	newState.error = action.error
    	newState.meta = action.meta
    	newState.loading = false;
    	return newState;
    default:
      return state;
  }
};