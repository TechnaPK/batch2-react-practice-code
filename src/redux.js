import { createStore, combineReducers } from 'redux';

import menusReducer from './reducers/reducer-menus'
import usersReducer from './reducers/reducer-users'

const allReducers = combineReducers({ menusReducer, usersReducer })

let store = createStore(allReducers);

window.store = store

export default store