import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function AboutProducts() {
  let [newType,setType] = useState([]);
  let [pType, setPType] = useState('');
  let [pPath, setPPath] = useState('');
  let [pImage, setPImage] = useState('');
  let [pDesc, setPDesc] = useState('');

  const typeInputHandler = (e) => {
    setPType(e.target.value)
  }
  const pathInputHandler = (e) => {
    setPPath(e.target.value)
  }
  const imageInputHandler = (e) => {
    setPImage(e.target.value)
  }
  const descInputHandler = (e) => {
    setPDesc(e.target.value)
  }


  const formSubmitEventHandler = (e) => {
    e.preventDefault()
    setType([{
      type: pType,
      path: pPath,
      image: pImage,
      desc: pDesc
    }])
    setPType('')
    setPPath('')
    setPImage('')
    setPDesc('')
    console.log(newType)
    
  }
  return (
    <>
      {/* <form onSubmit={formSubmitEventHandler}>
        <input type="text" placeholder='Product Type' onChange={typeInputHandler} />
        <input type="text" placeholder='Product Shop Path' onChange={pathInputHandler} />
        <br />
        <input type="file" onChange={imageInputHandler} value={pImage} />
        <br />
        <input type="text" placeholder='Product Description' onChange={descInputHandler} />
        <br />
        <button type='submit'>Add</button>
      </form> */}

      <div className="aboutProd">
        {
          newType.map((currType) => {
            return (
              <div className="ProductImg1">
                <img src={currType.image} alt="Sukuna T-shirt" />
                <div className="prodDetail">
                  <h1>{currType.type}</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quae quos aperiam ullam qui unde labore facilis quasi dolorem inventore maiores quisquam exercitationem, culpa nam fuga illum excepturi. Debitis, natus!</p>
                  <NavLink to={`/${currType.path}`}><button>View All</button></NavLink>
                </div>
              </div>

            )
          })

        }
        <div className="ProductImg1">
          <img src="https://i.etsystatic.com/26459479/r/il/32fced/3330056759/il_1588xN.3330056759_mzd9.jpg" alt="Sukuna T-shirt" />
          <div className="prodDetail">
            <h1>T-shirts</h1>
            <p>Express your love for anime with this eye-catching t-shirt featuring bold, vibrant artwork that captures the essence of your favorite series. Made from soft, breathable cotton, this shirt offers both comfort and style for everyday wear or special anime events.</p>
            <NavLink to='/t-shirt'><button>View All</button></NavLink>
          </div>
        </div>

        <div className="ProductImg1">
          <img src="https://pbs.twimg.com/media/EosWb0qUcAA8k6g.jpg" alt="Sukuna T-shirt" />
          <div className="prodDetail">
            <h1>Figures</h1>
            <p>Bring your favorite anime character to life with this exquisitely detailed figure, capturing every nuance of their iconic pose and expression. Perfect for collectors and fans alike, this figure boasts vibrant colors, intricate sculpting, and a dynamic stance that will stand out in any collection.</p>
            <NavLink to='/figure'><button>View All</button></NavLink>
          </div>
        </div>

        <div className="ProductImg1">
          <img src="https://down-ph.img.susercontent.com/file/ph-11134207-7qul6-lhyyvjaln47d86" alt="Sukuna T-shirt" />
          <div className="prodDetail">
            <h1>NoteBooks</h1>
            <p>Express your love for anime with this eye-catching NoteBooks featuring bold, vibrant artwork that captures the essence of your Game.  Available in a variety of sizes, it's a must-have for any anime enthusiast!</p>
            <NavLink to='/stationary'><button>View All</button></NavLink>
          </div>
        </div>

        <div className="ProductImg1">
          <img src="https://th.bing.com/th/id/OIP.78fcWPq3BGdBreiiQPFRMQHaHa?rs=1&pid=ImgDetMain" alt="Sukuna T-shirt" />
          <div className="prodDetail">
            <h1>Backpacks</h1>
            <p>Express your love for anime with these cool bags, vibrant artwork that captures the essence of your favorite Anime and Games. This shirt offers both comfort and style for everyday or special anime events. Available in a variety of colors, it's a must-have for any anime enthusiast!</p>
            <NavLink to='/backPack'><button>View All</button></NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutProducts