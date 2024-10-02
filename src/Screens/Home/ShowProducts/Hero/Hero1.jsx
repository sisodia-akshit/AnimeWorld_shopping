import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero1() {
  return (
    <div className="hero">
            <NavLink to='/keychain' className="heroBg">
              <img src="https://hokagestore.com/wp-content/uploads/2019/01/39003-c57a1b.jpeg" alt="" />
              <h2>Keyshains</h2>
            </NavLink>

            <NavLink to='/t-shirt' className="heroBg">
              <img src="https://i.etsystatic.com/26845242/r/il/6233df/3022225425/il_1140xN.3022225425_3tv0.jpg" alt="" />
              <h2>T-shirts</h2>
            </NavLink>

            <NavLink to='/stationary' className="heroBg">
              <img src="https://i.pinimg.com/originals/7d/43/70/7d4370677bb0e56e8b8f2bba47c2fa7e.jpg" alt="" />
              <h2>Books</h2>
            </NavLink>

            <NavLink to='/figure' className="heroBg">
              <img src="https://rivalcomix.com/wp-content/uploads/2020/09/Demon-Slayer-Nezuko-Kamado-The-Third-Ichiban-Figure-1.jpg" alt="" />
              <h2>Figures</h2>
            </NavLink >

            <NavLink to='/backPack' className="heroBg">
              <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29563642/2024/5/15/cafe3b43-233f-4877-8230-5aa440cc5e641715774048363AnimeBackpackAhegaoPrintedBagforSchoolCollege1.jpg" alt="" />
              <h2>Backpack</h2>
            </NavLink>
          </div>
  )
}

export default Hero1