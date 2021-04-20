import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import brandLogo from '../../assets/shopping-bag.svg'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = process.env.REACT_STRIPE_apiKey

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout 
            label='Pay NOw'
            name='Clothing ya'
            billingAddress
            shippingAddress
            image={brandLogo}
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton