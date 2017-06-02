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


export function createUser(name, email, password, password_confirmation) {
	return dispatch => {
		dispatch(createUserRequest());
		
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
					console.log('users/createUserResponse', response);
					dispatch(createUserResponse(response.data))
				} else{
					console.log("(users/creatUserError) NULL response.data", response);
					dispatch(createUserError('NULL response.data'));
				}
			} else{
				console.log('(actions/services/fetchServices.js) NULL response', response);
				dispatch(createUserError('NULL response'));
			}
		}).catch(error => {
			console.log('(actions/services/fetchServices.js) ERROR', error);
			dispatch(createUserError(error));
		});
	}
}