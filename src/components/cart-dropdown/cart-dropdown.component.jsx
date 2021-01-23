import React from 'react';

//redux
import { connect } from 'react-redux';

//redux's selectors
import { selectCartItems } from '../../redux/cart/cart.selector';

//components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

//scss
import './cart-dropdown.style.scss';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => {
                    return <CartItem key={cartItem.id} item={cartItem}/>
                })
            }
        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>

)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);