import React, {useState, useEffect} from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {auth ,createUserProfileDocument} from './firebase/firebase.util'

// const HatsPage = () => {
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// }

const Page404 = () => {
  <div>
    <h1>Page not found</h1>
  </div>
}

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  
  useEffect(()=>{

    let unsubscribeFromAuth = null
    
    unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      // console.log(userAuth);
      const userRef =  await createUserProfileDocument(userAuth)

      userRef.onSnapshot((snapShot) => {
        // console.log(snapShot.data());
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
      })

    })
    //componentDidUnmount <-remove from doc 
    //cleanup function 3 componentDidUpdate

    return () => {
      unsubscribeFromAuth()
    }

  }, [])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
