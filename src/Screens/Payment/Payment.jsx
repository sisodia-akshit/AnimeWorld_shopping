import React from 'react'
import CheckOutHeader from '../../Components/CheckoutHeader/CheckOutHeader'
import QRcode from './../../Data/qrCode.jpg'
import { NavLink } from 'react-router-dom';
function Payment() {
    let userCart = JSON.parse(localStorage.getItem('buy'));
    let cartPrice = userCart.map(currItem => currItem.price * currItem.qty)
    let subTotal = cartPrice.reduce((accum, curr) => accum + curr, 0)
    let discount = (subTotal > 1000) ? 0.1 * subTotal : 0;
    let shippingFee = (subTotal > 110) ? 1 : 2;
    let tax = (subTotal * 18) / 100;
    let totalAmount = subTotal - discount + shippingFee + tax;

    const CodInputHandler = () => {
        document.getElementById('CodPayment').style.display = 'block'
        document.getElementById('UpiPayment').style.display = 'none'
        document.getElementById('CardPayment').style.display = 'none'
    }
    const UpiInputHandler = () => {
        document.getElementById('CodPayment').style.display = 'none'
        document.getElementById('UpiPayment').style.display = 'block'
        document.getElementById('CardPayment').style.display = 'none'
    }
    const CardInputHandler = () => {
        document.getElementById('CodPayment').style.display = 'none'
        document.getElementById('UpiPayment').style.display = 'none'
        document.getElementById('CardPayment').style.display = 'block'
    }


    const CodBtnClickedEventHadler = () => {
        document.getElementById('payment').style.backgroundColor = '#00000066'
        document.getElementById('payment').style.filter = ' blur(4px)'

        setTimeout(function () {
            document.getElementById('orderConfirmed').style.display = 'block'
            localStorage.setItem('orders', JSON.stringify(userCart));
            localStorage.removeItem('buy')

        }, 50)

        setTimeout(function () {
            location.href = '/home'

        }, 5000)
    }
    return (
        <>
            <CheckOutHeader />
            <div id='payment'>
                <h1 style={{ paddingLeft: '2rem' }}>Select Payment Method</h1>
                <div style={{ display: 'flex', height: '100%' }}>
                    <div className="paymentContainer">
                        <div className="paymentTypes">
                            <h3 onClick={CodInputHandler}>Cash On Delivery</h3>
                            <h3 onClick={UpiInputHandler}>UPI(Pay via any App)</h3>
                            <h3 onClick={CardInputHandler}>Credit/Debit Card</h3>
                        </div>


                        <div className="paymentMethod">

                            <div className="paymentMethod-COD" id='CodPayment'>
                                <legend>Cash On Delivery</legend>

                                <div className="paymentMethodContainer-inner">
                                    <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cash-on" />
                                    <label for="cashOnDelivery">Cash On Delivery</label>

                                    <div className="paymentMethodBtn">
                                        <button onClick={CodBtnClickedEventHadler}>Place Order</button>
                                    </div>

                                </div>


                            </div>


                            <div className="paymentMethod-UPI" id='UpiPayment'>
                                <legend>UPI</legend>
                                <div className="paymentMethodContainer-inner">
                                    <input type="radio" id="byUPI" name="paymentMethod" value="up" />
                                    <label for="byUPI">UPI (Pay via any App)</label>

                                    <div className="UpiPaymentImg">
                                        <img src={QRcode} alt="" width={200} height={200} />
                                    </div>
                                </div>
                            </div>


                            <div className="paymentMethod-Card" id='CardPayment'>
                                <legend>Credit/Debit Card</legend>
                                <form className="paymentMethodContainer-inner">
                                    <div>
                                        {/* <label>Card Number</label> */}
                                        <input type="text" id='cardNumber' placeholder='Card Number' className='cardInput' name="cardNumber" required />
                                    </div>
                                    <input type="text" id='ownerName' placeholder='Name on card' className='cardInput' name="ownerName" required />
                                    <div className="cardSecurityDetails">
                                        {/* <label>Expiration Date:</label> */}
                                        <input type="month" className='cardExp' name="expdate" required />
                                        {/* <label>Security Code:</label> */}
                                        <input type="password" className='cardCVV' placeholder='CVV' name="securitycode" maxLength="3" required />
                                    </div>

                                    <div className="cardPaymentBtn">
                                        <button type='submit'>PayNow</button>
                                    </div>

                                </form>

                            </div>
                            <div className="orderSummery" style={{ width: '30rem', height: 'fit-content', padding: '3rem 2rem' }}>

                                <div className="orderSummeryDetails" style={{ backgroundColor: '#0000000a', padding: '1rem 2rem', height: 'fit-content' }}>
                                    <p>Subtotal<span>${subTotal}</span></p>
                                    <p>Discount<span>-${discount}</span></p>
                                    <p>Shipping Fee<span>${shippingFee}</span></p>
                                    <p>Tax<span>${tax}</span></p>
                                    <hr />
                                    <h4><b>Total<span>${totalAmount}</span></b></h4>
                                    {/* <NavLink to='/checkout/cart/address' >Place Order</NavLink > */}
                                </div>
                            </div>

                        </div>



                    </div>

                </div>


            </div>

            <div id="orderConfirmed">
                <h3>Thank you for shopping with us.</h3>
                <p>Your order has been successfully placed. Order Number is 999</p>
                <NavLink to='/home'><button>Go Back</button></NavLink>
            </div>
        </>
    )
}

export default Payment