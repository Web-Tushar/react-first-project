import React from 'react'
import "./customer.css"

const Customer = () => {
  return (
    <div>
     <section id="customer">
               <div class="container">
                    <div class="customer__wrapper">
                         <div class="customer__img">
                              <img src="./images/pexels-ola-dapo-3345882.jpg" alt="not_found"/>
                         </div>
                         <div class="customer__content">
                              <h3 class="sub__heading">What We Do?</h3>
                              <p class="paragraph">We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences.</p>
               
                              <h4 class="customer__content__sub__heading">Understand whole customer story</h4>
                              <p class="paragraph">Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.</p>
                              <h4 class="customer__content__sub__heading">Build trust and loyalty programs</h4>
                              <h4 class="customer__content__sub__heading">Analyze and optimize with data</h4>
                         </div>
                    </div>
               </div>
     
          </section>
    </div>
  )
}

export default Customer