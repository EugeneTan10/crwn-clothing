import React from 'react';

//redux
import { connect } from 'react-redux';

//redux's selectors
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

//redux's actions
import { toggleCartHidden } from '../../redux/cart/cart.action';

//logo
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

//scss
import './cart-icon.style.scss';

const CartIcon = props => (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{props.itemCount}</span>
    </div>
)

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);