import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import users from './users'
import auth from './auth'
import chats from './chats'


export default combineReducers({
	auth,
	chats,
  users,
  router: routerReducer
});
