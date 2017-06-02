import {post} from '../../lib/request';

// Utils
import { pc_logger } from '../../utils/pc_logger';



function createUserRequest() {
  return {
    type: 'CREATE_USER_REQUEST'
  }
}

function createUserResponse(payload) {
  return {
    type: 'CREATE_USER_RESPONSE',
    payload
  }
}

function createUserError(error) {
  return {
    type: 'CREATE_USER_ERROR',
    error
  }
}


export function createUser(details) {
	return dispatch => {
		dispatch(createUserRequest());
		
		let params = {
			name: details.name,
			email: details.email,
			password: details.password,
			password_confirmation: details.passwordConfirmation
		}
		post('/users', params, {
		}).then(response => {
			if(response){
				if(response.data){
					console.log('users/createUserResponse', response);
					dispatch(createUserResponse(response.data))
				} else{
					console.log("users/creatUserError NULL response.data", response);
					dispatch(createUserError('NULL response.data'));
				}
			} else{
				console.log('createUserError NULL response', response);
				dispatch(createUserError('NULL response'));
			}
		}).catch(error => {
			console.log('createUserError ERROR', error);
			dispatch(createUserError(error));
		});
	}
}