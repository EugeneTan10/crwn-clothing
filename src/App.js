import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

//redux
import { connect } from 'react-redux';

//redux's selectors
import { selectCurrentUser } from './redux/user/user.selector';

//actions
import { setCurrentUser } from './redux/user/user.action';

//utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

//components
import Header from './components/header/header.component';




class App extends Component {

  unsubcribeFromAuth = null;
  
  componentDidMount() {
    const { setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuthauth();
  }

  render() {
    return (
      <div >
          <Header/>
  
          <Switch >
            <Route exact path={'/'} component={HomePage}/>
            <Route path={'/shop'} component={ShopPage}/>
            <Route exact path={'/checkout'} component={CheckoutPage}/>
            <Route
              exact
              path='/signin'
              render={() =>
                this.props.currentUser ? (
                  <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
