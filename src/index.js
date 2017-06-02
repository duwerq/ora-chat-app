import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from './reducers'

// components
import App from "./App"
import CreateUser from './components/users'

const history = createHistory()

const middleware = routerMiddleware(history)

const createStoreWithMiddleware = applyMiddleware(middleware, thunkMiddleware);

const store = createStore(
  reducers,
  createStoreWithMiddleware
)

console.log("store", store)
ReactDOM.render(
  <Provider store={store}>    
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/register" component={CreateUser}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)