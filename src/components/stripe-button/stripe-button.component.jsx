import React from 'react';

//react-stripe-checkout
import StripeCheckout from 'react-stripe-checkout';

//scss
import './stripe-button.style.scss';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ID1TSDaM0skiAwcCnVqk0OcJKWZhj6dyAvrTnGMXsvEOvdH7QBtNlTN8rW1NrQxhzMW5yfvdXDP0ANsJeUj5ABk00YamTfSQs';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amoun={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;