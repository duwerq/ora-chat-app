import {post} from '../../lib/request';

// Utils
import { pc_logger } from '../../utils/pc_logger';



function loginRequest() {
  return {
    type: 'LOGIN_REQUEST'
  }
}

function loginResponse(payload) {
  return {
    type: 'LOGIN_RESPONSE',
    payload
  }
}

function loginError(error) {
  return {
    type: 'LOGIN_ERROR',
    error
  }
}


export function login(name, email, password, password_confirmation) {
	return dispatch => {
		dispatch(loginRequest());
		
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
					console.log('users/loginResponse', response);
					dispatch(loginResponse(response.data))
				} else{
					console.log("users/loginError NULL response.data", response);
					dispatch(loginError('NULL response.data'));
				}
			} else{
				console.log('users/loginError NULL response', response);
				dispatch(loginError('NULL response'));
			}
		}).catch(error => {
			console.log('users/loginError ERROR', error);
			dispatch(loginError(error));
		});
	}
}