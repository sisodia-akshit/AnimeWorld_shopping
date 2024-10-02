import React from 'react'
import { NavLink } from 'react-router-dom'

function CheckOutHeader() {
    let cartValue = localStorage.getItem('buy') === null ? 0 : JSON.parse(localStorage.getItem('buy')).length

    return (
        <div className='header' id='header'>
            <div className="logo" style={{width:'fit-content'}} >
                <NavLink to='/' className='logoTxt'>AnimeWorld</NavLink>
            </div>


            <div style={{ textAlign:'center', whiteSpace: 'nowrap', width: '100%' }}>
                cart----------Address----------Payment
            </div>


            <NavLink to='/checkout/cart' className="cartBtn" >
                <i className="fa-solid fa-cart-shopping"> &nbsp;&nbsp;&nbsp;<span id='cartValue'>{cartValue}</span></i>
            </NavLink >

        </div>
    )
}

export default CheckOutHeader