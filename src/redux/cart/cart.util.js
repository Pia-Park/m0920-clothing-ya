export const addItemTocart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)
    if(existingCartItem){
        return cartItems.map(item => 
            item.id === cartItemToAdd.id?
            {...item, quantity: item.quantity + 1} //update quantity 
            :item
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}] //new quantity 
}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id)
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    } 
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ?
            {...cartItem, quantity: cartItem.quantity -1}
            : cartItem
        )

}

