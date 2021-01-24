import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux's selectors
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

//components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
 
//scss
import './checkout.style.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>

    
        {
            cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)
        }
        

        <div className="total"> 
            <span>TOTAL: ${total}</span>
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);