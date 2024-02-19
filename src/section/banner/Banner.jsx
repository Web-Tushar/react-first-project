import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <div>
      <section id="banner">
               <div class="container">
                    <div class="banner__content">
                         <h1 class="banner__content__head">
                              We build E-commerce solution your business
                         </h1>
                         <p class="banner__content__text">Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
          
                         <div class="banner__btn">
                              <a class="common__btn" href="#">contact us</a>
                              <a class="common__btn" href="#">learn more</a>
                         </div>
                         <div class="banner__img">
                              <img src="./images/image content.png" alt="not_found"/>
                         </div> 
                    </div>
               </div>
       </section>
    </div>
  )
}

export default Banner