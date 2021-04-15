import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Logo from '../../assets/ClothingYa.png'
import {auth} from '../../firebase/firebase.util'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartIcon from '../cart-icon/cart-icon.component'


import './header.styles.scss'

const Header = ({currentUser, hiddenProps}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src={Logo} alt="logo"  className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>

            {
                currentUser ? (<div className="option" onClick={()=> auth.signOut()}>Sign out</div>)
                :(<Link className="option" to="/signin">
                Sign In </Link>)
            }
        

            {/* <CartDropdown cartItems={[]}/> */}
            <CartIcon />
            {
                hiddenProps ? null : <CartDropdown cartItems={[]} />
            }
    


        </div>
    </div>
)

const mapStateToProps = (state) => ({
    hiddenProps : state.cart.hidden
})

// const mapStateToProps = ({cart: {hidden}}) => ({
//     hiddenProps : hidden
// })

// const mapStateToProps = (state) => {
//     console.log(state.cart.hidden);
//     return state
// }


export default connect(mapStateToProps)(Header)