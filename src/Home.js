import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home_container">
              <img 
                    className="homeImage"
                    src= "https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg" 
                    alt=""
                />
           <div className="home_cards">
              <div className="home_row">
              
              <Product
              id="115446"
              title="APPLE"
              subtitle="iPhone 12 Pro (Graphite, 128 GB) A14 Bionic Chip with Next Generation Neural Engine Processor"
              price={"₹ 1,15,900"}
              image="https://m.media-amazon.com/images/I/71XXJC7V8tL.jpg"
              rating ={5}
              />


              <Product
              id="127446"
              title="SAMSUNG"
              subtitle="Galaxy Z Fold3 5G (Phantom Black, 512 GB)  (12 GB RAM), Snapdragon 888 5G (5 nm)"
              price={"₹ 1,57,999"}
              image="https://images.samsung.com/levant/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg"
              rating ={5}/>                
              </div>



              <div className="home_row">
              <Product 
              id="133234"
              title="APPLE"
              subtitle="M1 Chip with 8‑Core CPU and 8‑Core GPU  ||  8GB unified Memory  ||  256GB Storage"
              price={"₹ 1,22,900"}
              image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672874000"
              rating ={5}/>



              <Product 
              id="118448"
              title="APPLE"
              subtitle="M1 Chip with 8‑Core CPU and 7‑Core GPU  ||  8GB unified memory  ||  256GB Storage"
              price={"₹ 92,900"}
              image="https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg"
              rating ={5}/>
             



              <Product
              id="113346"
              title="DELL"
              subtitle="XPS 13 11th Gen Intel® Core™ i5-1135G7  ||  8GB 4267MHz  ||   512GB SSD  ||  Intel® Iris Xe Graphics"
              price={"₹ 1,41,990.00"}
              image="https://i.gadgets360cdn.com/products/large/Dell-XPS-13-DB-795x800-1608184909.jpg"
              rating ={5}/>
              </div>

              <div className="home_row">
              {/*product1*/}
              <Product
              id="144563"
              title="SONY"
              subtitle="A80J || BRAVIA XR || OLED || 4K Ultra HD || High Dynamic Range (HDR) || Smart Display (Google TV) A80J Series
              "
              price={"₹ 2,49,900"}
              image="https://www.sony.com.tw/image/cf24b41374702061b74b577da50a329d?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9"
              rating ={4}/> 
              </div>
        </div>
        </div>
    )
}

export default Home
