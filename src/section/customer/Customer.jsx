import React from 'react'
import "./customer.css"

const Customer = () => {
  return (
    <div>
     <section id="customer">
               <div className="container">
                    <div className="customer__wrapper">
                         <div className="customer__img">
                              <img src="./images/pexels-ola-dapo-3345882.jpg" alt="not_found"/>
                         </div>
                         <div className="customer__content">
                              <h3 className="sub__heading">What We Do?</h3>
                              <p className="paragraph">We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences.</p>
               
                              <h4 className="customer__content__sub__heading">Understand whole customer story</h4>
                              <p className="paragraph">Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.</p>
                              <h4 className="customer__content__sub__heading">Build trust and loyalty programs</h4>
                              <h4 className="customer__content__sub__heading">Analyze and optimize with data</h4>
                         </div>
                    </div>
               </div>
     
          </section>
    </div>
  )
}

export default Customer