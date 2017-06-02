import {get} from '../../lib/request';

function listChatsRequest() {
  return {
    type: 'LIST_CHATS_REQUEST'
  }
}

function listChatsResponse(payload) {
  return {
    type: 'LIST_CHATS_RESPONSE',
    payload
  }
}

function listChatsError(error) {
  return {
    type: 'LIST_CHATS_ERROR',
    error
  }
}


export function listChats() {
	return dispatch => {
		dispatch(listChatsRequest());
		
		let params = {
			page: 1,
			limit: 50
		}
		get('/chats', params, {
		}).then(response => {
			if(response){
				if(response.data){
					console.log('users/listChatsResponse', response);
					dispatch(listChatsResponse(response.data.data))
				} else{
					console.log("users/listChatsError NULL response.data", response);
					dispatch(listChatsError('NULL response.data'));
				}
			} else{
				console.log('users/listChatsError NULL response', response);
				dispatch(listChatsError('NULL response'));
			}
		}).catch(error => {
			console.log('users/listChatsError ERROR', error);
			dispatch(listChatsError(error));
		});
	}
}