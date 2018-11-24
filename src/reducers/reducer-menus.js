const menusReducer = (state = ["Biryani", "Salad", "Ice Cream"], action) => {

    switch (action.type) {
      case "ADD_ITEM":
        return [ ...state, action.payload ]
      case "REMOVE_ITEM":

        return state.filter( ( item ) => { return item !== action.payload } )
      
      default:
        return state
  
    }
  
  }

export default menusReducer

