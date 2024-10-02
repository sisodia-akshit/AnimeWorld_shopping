import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CheckOutHeader from '../../Components/CheckoutHeader/CheckOutHeader';
import Footer from '../../Components/Footer/Footer';

function Cart() {
    let userCart = JSON.parse(localStorage.getItem('buy'));
    
    if(!userCart){
        return (
            <>
            <CheckOutHeader />
            <h1>No items in cart</h1>
            </>
        );
    }
    
    const [sideItem, setSideItem] = useState(userCart[0]);
    let cartPrice = userCart.map(currItem => currItem.price * currItem.qty)

    let subTotal = cartPrice.reduce((accum, curr) => accum + curr, 0)
    let discount = (subTotal > 1000) ? 0.1 * subTotal : 0;
    let shippingFee = (subTotal > 110) ? 1 : 2;
    let tax = (subTotal * 18) / 100;
    let totalAmount = subTotal - discount + shippingFee + tax;






    const cartProdClicked = (clickedItem, itemIndex, event) => {
        document.getElementById('cartProduct').style.border = '2px solid var(--theme-color)'

        setSideItem(clickedItem);


    }

    // console.log(userCart);


    //Special Functio dont do something here
    const getItemId = (item, e) => {
        let editedCart = userCart.filter((currItem, index) => {
            if (index !== item) {
                return (currItem)
            }
        })
        localStorage.setItem('buy', JSON.stringify(editedCart));
        location.reload();
        // console.log(editedCart)
    }


    return (
        <>
            <CheckOutHeader />
            <div className='cart'>
                <div className="cartDetails">
                    <h1>Your Cart</h1>
                    <p>{userCart.length} items</p>
                </div>
                <hr />
                
                <div className="cartItemsDetails">

                    <NavLink to={`/${sideItem.type}/${sideItem.id}`} className="cartProductDetails">
                        <div className="cartProdImg">
                            <img src={sideItem.image} alt="img" />
                        </div>
                        <div className="cartProductDetailsTxt">
                            <h2>{sideItem.name}</h2>
                            <h4>{sideItem.anime}</h4>
                            <h3 style={{ color: 'green' }}>${sideItem.price} / piece</h3>
                            {/* <b>Qty: 5</b>
                        <div className="oneProdTotalPrice"><h2>$50</h2></div> */}
                        </div>
                    </NavLink>

                    <ol className="cartProducts" >

                        {
                            userCart.map((currItem, index) => {
                                return (
                                    <li className="cartProduct" id='cartProduct' key={index} onClick={(event) => cartProdClicked(currItem, index, event)}>
                                        <div className="cartProdImg">
                                            <img src={currItem.image} alt="img" />
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
                </div>


                <div className="cartOrderSummery">
                    <h5 style={{ fontFamily: "sans-serif" }}>ORDER &nbsp; DETAILS&nbsp; ({userCart.length} items)</h5 >

                    <div className="orderSummery">

                        <div className="orderSummeryDetails">
                            <p>Subtotal<span>${subTotal}</span></p>
                            <p>Discount<span>-${discount}</span></p>
                            <p>Shipping Fee<span>${shippingFee}</span></p>
                            <p>Tax<span>${tax}</span></p>
                            <hr />
                            <h4><b>Total<span>${totalAmount}</span></b></h4>
                            <NavLink to='/checkout/cart/address' >Place Order</NavLink >
                        </div>
                    </div>

                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Cart