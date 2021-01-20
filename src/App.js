import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

//utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async user => {

      if(user){
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state.currentUser);
          });
        });


      }else{
        this.setState({ currentUser:user });
      }
    });
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
