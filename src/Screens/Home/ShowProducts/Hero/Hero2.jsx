import React from 'react'

function Hero2(props) {
  return (
    
    <>
    <div className="heroTop">
        <div className="heroTopContainer">
        <h1>Get the  latest Anime Products Collection with 10% Discount.</h1>
        <img src={props.img} alt="" width='100%' style={{objectFit:'cover'}} />

        </div>
    </div>
    </>
  )
}

export default Hero2