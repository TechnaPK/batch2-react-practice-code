const setUsers = ( users ) => {
    return { type: "SET_USERS", payload: users }
}


const addUser = ( user ) => {
    return { type: "ADD_USER", payload: user }
}

export { setUsers, addUser }