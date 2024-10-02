import React from 'react'
import DemonSlayer from '../../../Data/DemonSlayer.json'
import { NavLink, useParams } from 'react-router-dom'


function ProductTop() {
    const param = useParams()


  return (
    
    <div className="productsTop" id='productTop'>
                {
                    DemonSlayer.map((curType) => {
                        if (curType.type == `${param.type}`) {
                            return (
                                <div className='typeProdCard' key={curType.id}>
                                    {
                                        curType.availableProducts.map((currProduct) => {
                                            return (
                                                <NavLink to={`/${curType.type}/${currProduct.id}`} className="prodCard" key={currProduct.id}  style={{ backgroundColor: `${currProduct.bgColor}` }}>
                                                    <div className="prodCardImg" style={{ '--bg-url': `url(${currProduct.image})` }} >
                                                        <img src={currProduct.image} alt="" />
                                                    </div>
                                                    <div className="prodCardDetails">
                                                        <h2>{currProduct.name}</h2>
                                                        <h5>{currProduct.anime}</h5>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam aliquam quas perferendis quis saepe non nisi provident, totam ipsa velit delectus in sint illo ad, cum distinctio at doloribus!</p>
                                                        <h3>${currProduct.price}&nbsp;&nbsp;&nbsp;&nbsp; <span>${currProduct.price}</span></h3>
                                                        <h4><b>Available Stock: </b>{currProduct.stock}</h4>

                                                        <div className="prodCardBtn">
                                                            <button style={{ backgroundColor: 'Green' }} >Available</button>
                                                            {/* <button style={{ backgroundColor: '#fff', color: 'black' }}>See Details</button> */}
                                                        </div>
                                                        <div className="prodCardSeeBtn">
                                                            <h5>See Details...</h5>
                                                        </div>
                                                    </div>

                                                </NavLink >
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
  )
}

export default ProductTop