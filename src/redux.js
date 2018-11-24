import {createStore, combineReducers} from 'redux';

const menusReducer = ( state = [ "Biryani", "Salad", "Ice Cream" ], action ) => {

  switch( action.type ){
    case "ADD_ITEM":
      return [ ...state, action.payload ]
    default:
      return state

  }

}

const usersReducer = ( state = ["Tahir", "Umar"], action ) => {
  return state;
}

const allReducers = combineReducers({menusReducer, usersReducer})

let store = createStore( allReducers );

export default store




// import { createStore, combineReducers } from 'redux'

// const menusReducer = ( state = ["Biryani", "Qourma"], action ) => {
//   return state
// }

// const allReducers = combineReducers( { menusReducer } );

// let store = createStore( allReducers )

// export default store













// const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_USER':
//       return [...state, action.text]
//     default:
//       return state
//   }
// }





// switch (action.type) {
//   case 'ADD_MENU_ITEM':
//     return [...state, action.text]
//   default:
//     return state
// }




// let newState = state.slice();
//       newState.push(action.text)
//       return newState;