import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/T2_KV_Prime_Hero_PC_EN_1X._CB577195374_.jpg" alt="" className='home__image'></img>
        <div className='home__row'>
            <Product id={1} title='The lean startup' price={29.99} image="https://m.media-amazon.com/images/I/51CTIr1bJxL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg" rating={3}/>
            <Product id={2} title="MIKASA V200W, Volleyball" price={59.97} image="https://m.media-amazon.com/images/I/71yqzKxvK2L.__AC_SY300_SX300_QL70_FMwebp_.jpg" rating={4}/>
        </div>
        <div className='home__row'>
            <Product id={3} title = 'Garmin 010-02427-02 Venu Sq, GPS Smartwatch with Bright Touchscreen Display, Up to 6 Days of Battery Life, Orchid Purple' price={119.99} image="https://m.media-amazon.com/images/I/71AhHeNMg3L.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={2}/>
            <Product id={4} title="Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6, 12MP front/12MP Back Camera, Touch ID, All-Day Battery Life – Silver" price={598.99} image="https://m.media-amazon.com/images/I/61goypdjAYL.__AC_SY445_SX342_QL70_FMwebp_.jpg" rating={4}/>
            <Product id={5} title="ABOTEC Telescope for Adults Astronomy, 90mm Aperture 800mm Refractor Telescopes for Kids & Beginners, (32X-400X) Multi-Coated High Transmission Telescope with Carry Bag & Phone Mount &Wireless Control" price={199.99} image="https://m.media-amazon.com/images/I/71S8joQNMjL.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={3}/>
        </div>
        <div className='home__row'>
            <Product id={6} title='LG 34WP60C-B 34-Inch 21:9 Curved UltraWide QHD (3440x1440) VA Display with sRGB 99% Color Gamut and HDR 10, AMD FreeSync Premium and 3-Side Virtually Borderless Screen Curved QHD Tilt,Black' price={399.99} image="https://m.media-amazon.com/images/I/71xUGwGReSL.__AC_SX300_SY300_QL70_FMwebp_.jpg" rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home
