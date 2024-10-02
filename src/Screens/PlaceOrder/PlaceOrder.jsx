import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CheckOutHeader from '../../Components/CheckoutHeader/CheckOutHeader';

function PlaceOrder() {

    let [fName,setFName]=useState('');
    let [lName,setLName]=useState('');
    let [mobile,setMobile]=useState('');
    let [address,setAddress]=useState('');
    let [locality,setLocality]=useState('');
    let [pinCode,setPinCode]=useState('');
    let [city,setCity]=useState('');
    let [state,setState]=useState('');
    let [message,setMessage]=useState('');


    const fNameEventHandler=(event)=>{
        setFName(event.target.value);
    }
    const lNameEventHandler=(event)=>{
        setLName(event.target.value);
    }
    const mobileEventHandler=(event)=>{
        setMobile(event.target.value);
    };



    const addressEventHandler=(event)=>{
        setAddress(event.target.value);
    }
    const localityEventHandler=(event)=>{
        setLocality(event.target.value);
    }
    const pinCodeEventHandler=(event)=>{
        setPinCode(event.target.value);
    }
    const cityEventHandler = (event) => {
        setCity(event.target.value);
    }
    const stateEventHandler = (event) => {
        setState(event.target.value);
    }
    const messageEventHamdler = (event) => {
        setMessage(event.target.value);
    }





    const userAddressEventhandler=(e)=>{
        e.preventDefault();
        let userAddress = `${address}, ${locality}, ${city}(${state}), ${pinCode}`;
        console.log(userAddress)
        location.href= '/checkout/payment'
    }

    return (
        <>
        <CheckOutHeader/>
        <div className='placeorder'>
                <h1 style={{textAlign:'center',marginTop:'1rem'}}>Add an address for delivery</h1>

            <div className="placeOrder-inner">
                <form className='deliveryForm' onSubmit={userAddressEventhandler}>
                    <div className="userDetails">
                        <b>CONTACT DETAILS</b>

                        <div className="userName" style={{ display: 'flex', marginTop: '.5rem' }}>
                            <div className="firstName" style={{display:'flex',flexDirection:'column',marginRight:'2rem'}}>
                                <label htmlFor="firstName" style={{ whiteSpace: 'nowrap' }}>First Name</label>
                                <input required type="text" placeholder="First Name" id="firstName" name='firstName' value={fName} onChange={fNameEventHandler} /> 
                            </div>

                            <div className="lastName" style={{display:'flex',flexDirection:'column'}}>
                                <label htmlFor="lastName" style={{ whiteSpace: 'nowrap' }}>Last Name</label>
                                <input required type="text" placeholder="Last Name" id="lastName" name='lastName'  value={lName} onChange={lNameEventHandler} /> 
                            </div>
                        </div>

                        {/* <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" id="email" name='email' /> */}

                        <label htmlFor="mobile">Mobile</label>
                        <input required type="number" placeholder="Mobile Number" id="mobile" name='mobile' value={mobile} onChange={mobileEventHandler} />
                    </div>
                    <div className="userDetails">
                        <b>ADDRESS DETAILS</b>

                        <label htmlFor="address">Address</label>
                        <input required type="text" placeholder="Address(House No,Apartment,Street,Area)" id="address" name='address' value={address} onChange={addressEventHandler} /> 

                        <label htmlFor="locality">Locality</label>
                        <input required type="text" placeholder="Town/Locality" id="locality" name='locality' value={locality} onChange={localityEventHandler} />

                        <label htmlFor="pinCode">Pin Code</label>
                        <input required type="text" placeholder="Pin Code" id="pinCode" name='pinCode'  value={pinCode} onChange={pinCodeEventHandler} /> 

                        <div className="stateDiv">
                            <input required type="text" placeholder="City / District *" id="city" name='city' value={city} onChange={cityEventHandler} /> 
                            <input required type="text" placeholder="State*" id="state" name='state'  value={state} onChange={stateEventHandler} /> 
                        </div>

                        <span id="address-error"></span>

                    </div>

                    <textarea rows="3" placeholder="add  message(optional)" id="orderMessage" value={message} onChange={messageEventHamdler}/>
                    <span id="msg-error"></span>

                    <div className="placeOrderBtn">
                       <button type="submit" id="placeOrderButton">Continue</button>
                    </div>


                </form>
            </div>



            {/* <div className='product-details'>
                <div style={{ display: 'flex', height: '33vh', borderBottom: '1px solid rgba(76, 75, 75, 0.457)', position: 'relative' }}>
                    <NavLink to='' onClick={back}>  <h5 className='product-details-back'>Back</h5></NavLink>
                    <div>
                        <img className='buy-img' src={currr.image} />
                    </div>
                    <div className='product-details-price'>
                        <h1>{currr.watchNamae}</h1>
                        <h3>{currr.description}</h3>
                        <h2>Price : {currr.price}</h2>
                    </div>
                </div>
                <div className='sub-total'>
                    <h2>Sub Total</h2>
                    <h3>{currr.price}</h3>
                </div>
                <div className='sub-total'>
                    <h2>Delivery Charges</h2>
                    <h3>$30</h3>
                </div>
                <div className='sub-total'>
                    <h2>Total</h2>
                    <h3> {currr.price} + 30</h3>
                </div>
                <div className='place'>
                    <button >Place Order</button>
                </div>
            </div> */}

        </div>
        </>
    )
}

export default PlaceOrder