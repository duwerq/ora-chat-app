import {post} from '../../lib/request';

// Utils
import { pc_logger } from '../../utils/pc_logger';



function logoutRequest() {
  return {
    type: 'LOGOUT_REQUEST'
  }
}

function logoutResponse(payload) {
  return {
    type: 'LOGOUT_RESPONSE',
    payload
  }
}

function logoutError(error) {
  return {
    type: 'LOGOUT_ERROR',
    error
  }
}


export function logout(name, email, password, password_confirmation) {
	return dispatch => {
		dispatch(logoutRequest());
		
		let params = {
			name: name,
			email: email,
			password: password,
			password_confirmation: password_confirmation
		}
		post('/users', params, {
		}).then(response => {
			if(response){
				if(response.data){
					console.log('users/logoutResponse', response);
					dispatch(logoutResponse(response.data))
				} else{
					console.log("users/logoutError NULL response.data", response);
					dispatch(logoutError('NULL response.data'));
				}
			} else{
				console.log('users/logoutError NULL response', response);
				dispatch(logoutError('NULL response'));
			}
		}).catch(error => {
			console.log('users/logoutError ERROR', error);
			dispatch(logoutError(error));
		});
	}
}