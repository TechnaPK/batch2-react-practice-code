const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USERS":
      return action.payload
    case "ADD_USER":
      return [ action.payload, ...state ]
    default:
      return state

  }
}

export default usersReducer

