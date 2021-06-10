import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux'
import workoutReducer from './store/workout-reducer'
import weightLogReducer from './store/weightlog-reducer'
import authReducer from './store/auth-reducer'
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}


const myEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const appStore = createStore(combineReducers({workoutReducer, weightLogReducer ,authReducer}) , myEnhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
