import {createSelector} from 'reselect'

const selectCart = state => state.cart 

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selecCartItemsCounts = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) =>(acc + cartItem.quantity), 0)
)

export const selecCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) =>(acc + (cartItem.price * cartItem.quantity)), 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)