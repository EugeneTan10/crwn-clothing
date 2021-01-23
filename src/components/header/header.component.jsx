import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux's selectors
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

//router
import { Link } from 'react-router-dom';

//logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

//scss
import './header.style.scss';

//utils
import { auth } from '../../firebase/firebase.utils';

//components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => (
    <div className="header">

        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>

        <div className="options">
            <Link className="option" to='/shop' >SHOP</Link>
            <Link className="option" to='/shop' >CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropDown />
        }
        
    </div>
);

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);