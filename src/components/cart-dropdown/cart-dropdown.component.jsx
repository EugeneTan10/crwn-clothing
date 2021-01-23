import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//router
import { withRouter } from 'react-router-dom';

//redux's selectors
import { selectCartItems } from '../../redux/cart/cart.selector';

//redux's actions
import { toggleCartHidden } from '../../redux/cart/cart.action';

//components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

//scss
import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
                :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => { 
            history.push('/checkout'); 
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>

)

const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropDown));