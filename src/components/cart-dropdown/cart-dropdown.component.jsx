import React from 'react';

//components
import CustomButton from '../custom-button/custom-button.component';

//scss
import './cart-dropdown.style.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>

)

export default CartDropDown;