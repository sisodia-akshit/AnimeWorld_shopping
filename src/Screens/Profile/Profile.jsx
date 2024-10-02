import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function Profile() {

  let userOrders = JSON.parse(localStorage.getItem('orders'));

  if(!userOrders){
    return (
      <>
      <Header />
      <h1 style={{height:'100vh'}}>You do not have any recent orders.</h1>
      <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      {/* <div>You Have to Register to get started
        <NavLink to='/login'><button>Register</button></NavLink>
      </div> */}


      <h5><b>Note:</b>This website is just for showcase sensitive, so you will not going to get your order. Please make sure you have accepted the terms of service.</h5>
      <h1>Your Order</h1>
      <p>Your Order Placed on {new Date().toLocaleString()} will arrive in 30 minutes.</p>
      <b>here is your order list :</b>
      <ol style={{display:'flex',flexWrap:'wrap'}}>
        {
          userOrders.map((currItem, index) => {
            return (
              <li className="cartProduct" id='cartProduct' key={index} onClick={(event) => cartProdClicked(currItem, index, event)}>
                <div className="cartProdImg">
                  <img src={currItem.image} alt="img" height={300} />
                </div>
                <h4>{currItem.name}</h4>
                <p>${currItem.price} / piece</p>
                <b>Qty: {currItem.qty}</b>
                <button className="removeOrder" onClick={(event) => getItemId(index, event)}><i className="fa-solid fa-xmark"></i></button>
                <div className="oneProdTotalPrice"><h4>${currItem.qty * currItem.price}</h4></div>
              </li>
            )
          })
        }
      </ol>

      <Footer />
    </>

  )
}

export default Profile