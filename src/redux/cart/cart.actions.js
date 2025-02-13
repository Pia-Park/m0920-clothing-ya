//action types
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART'



//action creator
export const addItem = (item) => ({
    type: ADD_CART_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: REMOVE_CART_ITEM,
    payload: item
})

export const clearItem = (item) => ({
    type: CLEAR_FROM_CART,
    payload: item
})

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})


