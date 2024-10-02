import React, { useState } from 'react'
import DemonSlayer from '../../Data/DemonSlayer.json'
import { NavLink, useParams } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';



function ProdDetail() {
    const [qty, setQty] = useState(1);
    const [prodImage, setProdImg] = useState()
    const openProduct = useParams()
    let productType = DemonSlayer.find(item => item.type === openProduct.type);



    let cartItem;
    if (localStorage.getItem('buy') !== null) {
        cartItem = JSON.parse(localStorage.getItem('buy'));
    }

    let buy = [];

    const buyBtnEventHandler = () => {
        let product = productType.availableProducts.find(item => item.id === openProduct.id);
        product.qty = qty;
        console.log(product)
        if (cartItem) {
            buy = cartItem;

        }
        buy.push(product)
        localStorage.setItem('buy', JSON.stringify(buy));
        document.getElementById("cartValue").innerText = buy.length;

        // console.log(buy)

    }

    let selectQtyEventHandler = (e) => {
        setQty(e.target.value)
    }
    let displayImgEventHandler = (e) => {
        setProdImg(e.target.src)
    }




    return (
        <>
            <Header />
            <>
                <h1>ProductDetails</h1>

                {
                    productType.availableProducts.map((currProd) => {
                        if (currProd.id === openProduct.id) {
                            if (currProd.type === 't-shirt') {
                                return (
                                    <div className='productDetails' key={currProd.id} >
                                        <div className="prodDetailsImg" >
                                            {!prodImage && <img src={currProd.image} alt={currProd.name} />}
                                            {prodImage && <img src={prodImage} alt={currProd.name} />}
                                        </div>

                                        <div className="prodDetailsDescription" >
                                            <h1>{currProd.name}</h1>
                                            <div className='productAnime'>{currProd.anime}</div>
                                            <div className="productRating"><span style={{ whiteSpace: 'nowrap' }}><b style={{ color: 'black' }}>4.2 </b> * | 24 Ratings</span></div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis modi optio inventore impedit voluptatibus nihil aliquid, officia culpa repudiandae facere doloremque quas ut quasi omnis, excepturi harum quam commodi.</p>

                                            <hr />


                                            <h2>${currProd.price}</h2>
                                            <span>inclusive of all taxes</span>

                                            <div className="selectSize">
                                                <h3>SELECT SIZE</h3>
                                                <div className="sizeList">
                                                    <span>S</span><span>M</span><span>L</span><span>XL</span>
                                                </div>
                                            </div>

                                            <div className="productQty" >
                                                <p>Quantity </p>
                                                <select name="qty" id="qty" onChange={selectQtyEventHandler}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                </select>
                                            </div>

                                            <b>Free Delivery for orders prize above $10</b>

                                            <div className="productImages">
                                                {
                                                    currProd.images.map((currImg) => {
                                                        return <img src={currImg.image} key={currImg.imgNum} alt="Product Img" onClick={displayImgEventHandler} />
                                                    })
                                                }

                                            </div>


                                            <div className="productDetailsBtn">
                                                <button style={{ border: '.5px solid #888' }} onClick={buyBtnEventHandler}  >Add to Cart</button>
                                                <NavLink to='/checkout/cart' onClick={buyBtnEventHandler} ><button style={{ backgroundColor: 'var(--theme-color)', color: '#fff' }} >Buy Now</button></NavLink>
                                            </div>

                                        </div>

                                    </div>
                                )
                            }
                            return (
                                <div className='productDetails' key={currProd.id} >
                                    <div className="prodDetailsImg" >
                                        {!prodImage && <img src={currProd.image} alt={currProd.name} />}
                                        {prodImage && <img src={prodImage} alt={currProd.name} />}
                                    </div>

                                    <div className="prodDetailsDescription" >
                                        <h1>{currProd.name}</h1>
                                        <div className='productAnime'>{currProd.anime}</div>
                                        <div className="productRating"><span style={{ whiteSpace: 'nowrap' }}><b style={{ color: 'black' }}>4.2 </b> * | 24 Ratings</span></div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis modi optio inventore impedit voluptatibus nihil aliquid, officia culpa repudiandae facere doloremque quas ut quasi omnis, excepturi harum quam commodi.</p>

                                        <hr />


                                        <h2>${currProd.price}</h2>
                                        <span>inclusive of all taxes</span>

                                        {/* <b>discount : {currProd.discount}% off</b> */}

                                        <div className="productQty" >
                                            <p>Quantity </p>
                                            <select onChange={selectQtyEventHandler} name="qty" id="qty">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>

                                        <b>Free Delivery for orders prize above $10</b>

                                        <div className="productImages">
                                            {
                                                currProd.images.map((currImg) => {
                                                    return <img src={currImg.image} key={currImg.imgNum} alt="Product Img" onClick={displayImgEventHandler} />
                                                })
                                            }

                                        </div>

                                        <div className="productDetailsBtn">
                                            <button style={{ border: '.5px solid #888' }} onClick={buyBtnEventHandler} >Add to Cart</button>
                                            <NavLink to='/checkout/cart' onClick={buyBtnEventHandler}><button style={{ backgroundColor: 'var(--theme-color)', color: '#fff' }} >Buy Now</button></NavLink>
                                        </div>

                                    </div>

                                </div>
                            )
                        }
                    })
                }


                <hr />


            </>
            <Footer />
        </>
    )
}

export default ProdDetail