import React from 'react'
import "./counter.css"

const Counter = () => {
  return (
    <div>
     <section id="counter">
               <div class="container">
                    <div class="counter__item__one">
                         <div class="counter__img">
                              <img src="./images/11111.jpg" alt="not_found"/>
                         </div>
                         <div class="counter__item__content">
                              <h3 class="sub__heading">01</h3>
                              <h5 class="counter__item__heading">Make your business visible online</h5>
                              <p class="paragraph">Open an online store and become an international seller. Your customers will enjoy shopping online!</p>
                         </div>
                    </div>
                    <div class="counter__item__two">
                         <div class="counter__item__content">
                              <h3 class="sub__heading">02</h3>
                              <h5 class="counter__item__heading">Make your eCommerce business stand out</h5>
                              <p class="paragraph">We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do.</p>
                         </div>
                         <div class="counter__img">
                              <img src="./images/2222.jpg" alt="not_found"/>
                         </div>
                    
                    </div>
                    <div class="counter__item__three">
                         <div class="counter__img">
                              <img src="./images/33333.jpg" alt="not_found"/>
                         </div>
                         <div class="counter__item__content">
                              <h3 class="sub__heading">03</h3>
                              <h5 class="counter__item__heading">Grow with your audience</h5>
                              <p class="paragraph">We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people.</p>
                         </div>
                    </div>
               </div>
  
          </section>
    </div>
  )
}

export default Counter