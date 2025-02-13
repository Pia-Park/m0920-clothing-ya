import { ADD_CART_ITEM, TOGGLE_CART_HIDDEN, REMOVE_CART_ITEM, CLEAR_FROM_CART, removeItem } from './cart.actions';
import { addItemTocart, removeItemFromCart } from './cart.util'

//initial state
const INITIAL_STATE = {
    cartItems: [],
    hidden: false
}

//reducer function
const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemTocart(state.cartItems, action.payload)
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)

            }
        case CLEAR_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer