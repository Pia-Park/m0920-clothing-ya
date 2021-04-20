import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss'

import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import { CartDropdownContainer, CartDropdownButton } from './cart-dropdown.styles'
import { withRouter } from 'react-router'


const CartDropdown = ({ cartItemProps, history, dispatch }) => {

    return (
        <CartDropdownContainer>
            <div className="cart-items">               
                {
                    cartItemProps.length ? 
                    cartItemProps.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) : (
                        <span className="empty-message">Your cart is empty</span>
                    )
                }
            </div>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())}}
            >
                Go to Checkout
            </CartDropdownButton>

        </CartDropdownContainer>
    )
}

const mapStateToProps = (state) => ({
    cartItemProps: state.cart.cartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown))