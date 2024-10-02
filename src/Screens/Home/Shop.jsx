import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Hero1 from './ShowProducts/Hero/Hero1'
import Hero2 from './ShowProducts/Hero/Hero2'
import DemonSlayer from './../../Data/DemonSlayer.json'
import { NavLink } from 'react-router-dom'
import Decoration1 from './ShowProducts/Decoration/Decoration1'

function Shop() {
  let HeroImg = 'https://i.pinimg.com/originals/28/ef/40/28ef40e53d0036c906c3f7ce5445754f.jpg'
  
  return (
    <>
      <Header />
      <main className='main'>
        <section >
          <Hero2 img={HeroImg}/>
          <hr />
          <h1 style={{fontSize:'3rem',margin:'2rem 2rem'}}>Popular</h1>
          <Hero1/>

          <Decoration1/>  

        </section>
      </main>
      <h1 style={{fontSize:'3rem',margin:'1rem 2rem'}}>Select a Product of your choice an get an instant Delivery</h1>
      <div className="homeProductsTop" >
                {
                    DemonSlayer.map((curType) => {
                        if (curType.type == 'random') {
                            return (
                                <div className='typeProdCard2' key={curType.id}>
                                    {
                                        curType.availableProducts.map((currProduct) => {
                                            return (
                                                <NavLink to={`/${curType.type}/${currProduct.id}`} className="prodCard2" key={currProduct.id}  style={{ backgroundColor: `${currProduct.bgColor}` }}>
                                                    <div className="prodCardImg" style={{ '--bg-url': `url(${currProduct.image})` }} >
                                                        <img src={currProduct.image} alt="" />
                                                    </div>
                                                    <div className="prodCardDetails">
                                                        <h2>{currProduct.name}</h2>
                                                        <h5>{currProduct.anime}</h5>
                                                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam aliquam quas perferendis quis saepe non nisi provident, totam ipsa velit delectus in sint illo ad, cum distinctio at doloribus!</p> */}
                                                        <h3>${currProduct.price}&nbsp;&nbsp;&nbsp;&nbsp; <span>${currProduct.price}</span></h3>
                                                        <h4><b>Stock: </b>{currProduct.stock}</h4>

                                                        {/* <div className="prodCardBtn">
                                                            <button style={{ backgroundColor: 'Green' }} >Available</button>
                                                        </div> */}
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
      <Footer/>
    </>

  )
}

export default Shop