import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

//utils
import { auth } from './firebase/firebase.utils';

//pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//components
import Header from './components/header/header.component';



class App extends Component {

  constructor() {
    super();

    this.state = {
      currentUser:null,
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuthauth();
  }

  render() {
    return (
      <div >
          <Header currentUser={this.state.currentUser}/>
  
          <Switch >
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/shop'} component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndSignUpPage}/>
          </Switch>
          
        
      </div>
    );
  }
  
}

export default App;
