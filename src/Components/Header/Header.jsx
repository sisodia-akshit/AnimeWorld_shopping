import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {

    let cartValue = localStorage.getItem('buy') === null ? 0 : JSON.parse(localStorage.getItem('buy')).length
    let userOrders = JSON.parse(localStorage.getItem('orders'));

    const searchEventHandler = () => {
        document.getElementById('searchClickedMsg').style.display='block';

    }
    const searchMsgEventHandler = () => {
        document.getElementById('searchClickedMsg').style.display='none';

    }



    return (
        <div className='header' id='header'>
            <div className="logo">
                <NavLink to='/' className='logoTxt'>AnimeWorld</NavLink>
            </div>


            <div className="search">
                <input type='text' placeholder='Search Products' />
                <button onClick={searchEventHandler}>Search</button>
            </div>

            <div className="headerLinks">
                <NavLink to='/home' className='profile'>Shop</NavLink>
                <NavLink to='/figure' className='profile'>Newstand</NavLink>
                <NavLink to='/' className='profile'>Who we are</NavLink>
                {!userOrders && <NavLink to='/profile' className='profile'>My&nbsp;profile</NavLink>}
                {userOrders && <NavLink to='/profile' className='profile'>My&nbsp;profile&nbsp;<span style={{ backgroundColor: 'var(--theme-color)', color: '#fff', borderRadius: '50%', display: 'inline-block', width: 18, height: 18, textAlign: 'center' }}>{userOrders.length}</span></NavLink>}
            </div>

            <NavLink to='/checkout/cart' className="cartBtn" >
                <i className="fa-solid fa-cart-shopping"> &nbsp;&nbsp;&nbsp;<span id='cartValue'>{cartValue}</span></i>
            </NavLink >


            {/* <div className="register">
                <NavLink to='/Login'><button>Login</button></NavLink>
                <NavLink to='/SignUp'><button>SignUp</button></NavLink>
                
            </div> */}


            <div id="searchClickedMsg">
                <h3>To use this feature</h3>
                <p>Ask the Developer to buy Hosting :)</p>
                <button onClick={searchMsgEventHandler}>Go Back</button>
            </div>
        </div>
    )
}

export default Header