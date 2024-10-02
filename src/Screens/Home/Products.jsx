import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ProductTop from './ShowProducts/ProductTop';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Hero1 from './ShowProducts/Hero/Hero1';
import Decoration1 from './ShowProducts/Decoration/Decoration1';
import Hero2 from './ShowProducts/Hero/Hero2';

function Products() {
    let HeroImg = 'https://blog.fromjapan.co.jp/en/wp-content/uploads/2018/02/ANISTATUE-Figures.jpg'

    const goPreviousPage = () => {
        history.back();
    }

    return (
        <>
            <Header />
            <div className='products' id='products'>
                <div className="productsXtop">
                    <NavLink to="" onClick={goPreviousPage}><h2>&lt;&lt; Go Back</h2></NavLink>
                    <h1>Get 10% Discount on order above $1000.</h1>
                </div>
                <Hero2 img={HeroImg} />

                <Hero1/>
                <Decoration1 />

                <div className="productPageDesign" id='productPageDesign'>
                    {/* <nav className='filterNav'>
                    <div className="filterNavContainer">
                        <div className="filter">
                            <h1>hello</h1>
                            <h3 style={{ position: 'absolute', bottom: "0" }}>FILTERS <span>All</span></h3>
                        </div>
                    </div>

                </nav> */}


                    <ProductTop />


                </div>

            </div>
            <Footer />
        </>
    )
}

export default Products