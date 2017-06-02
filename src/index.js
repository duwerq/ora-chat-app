import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';


// components
import App from "./App"
import CreateUser from './components/users'
import Login from './components/auth/login'
import Chats from './components/chats'


let socket = io('https://private-93240c-oracodechallenge.apiary-mock.com/chats?page=1&limit=50', {
  extraHeaders: {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization" :"Bearer BBJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
    "Access-Control-Allow-Credentials": true,
  }
  });
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const history = createHistory()

const middleware = routerMiddleware(history)

const createStoreWithMiddleware = applyMiddleware(middleware, thunkMiddleware, socketIoMiddleware);

const store = createStore(
  reducers,
  createStoreWithMiddleware,

)

console.log("store", store)
ReactDOM.render(
  <Provider store={store}>    
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={CreateUser}/>
        <Route path="/chats" component={Chats}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)