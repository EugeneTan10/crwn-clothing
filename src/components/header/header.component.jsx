import React from 'react';

//redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//redux's selectors
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';

//logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

//scss
import './header.style.scss';

//utils
import { auth } from '../../firebase/firebase.utils';

//styled-componenets
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.style';

//components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop' >SHOP</OptionLink>
            <OptionLink to='/shop' >CONTACT</OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>

       
        {
            hidden ? null :
            <CartDropDown />
        }
        
    </HeaderContainer>

);

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);