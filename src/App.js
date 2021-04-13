import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

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
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
