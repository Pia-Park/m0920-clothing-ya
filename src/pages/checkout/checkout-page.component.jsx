import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {
    CheckoutHeaderContainer, 
    CheckoutPageContainer, 
    HeaderBlockContainer, 
    TotalContainer, 
    WarningContainer
} from './checkout-page.styles'

import {
    selectCartItems,
    selecCartTotal,

} from '../../redux/cart/cart.selector'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <TotalContainer>Total: ${total}</TotalContainer>
        <WarningContainer>

        </WarningContainer>
        {/* stripe button here */}
        <StripeCheckoutButton />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selecCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)