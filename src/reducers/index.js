import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import users from './users'
import auth from './auth'


export default combineReducers({
	auth,
  users,
  router: routerReducer
});
