
const addItem = ( menu_item ) => {
    return { type: "ADD_ITEM", payload: menu_item }
}
const removeItem = ( menu_item ) => {
    return { type: "REMOVE_ITEM", payload: menu_item }
}

export { addItem, removeItem }