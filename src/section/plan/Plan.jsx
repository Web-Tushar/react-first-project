import React from 'react'
import "./plan.css"

const Plan = () => {
  return (
    <div>
          <section id="plan">
               <div class="container">
                    <div class="plan_heading">
                         <h3 class="sub__heading">Choose The Right Plan</h3>
                         <div class="plan_swap">
                              <h4 class="swap_item">Monthly</h4>
                              <div class="swap_btn"></div>
                              <h4 class="swap_item">Yearly</h4>
                              <div class="save">20% save</div>
                         </div>
                    </div>
          
                    <div class="package">
                         <div class="package__wrapper">
                              <div class="package__item">
                                   <div class="package__level">
                                        <h4 class="package__level__head">Basic</h4>
                                        <p class="Monthly">Monthly Package</p>
                                        <div class="price">
                                        <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div class="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a class="common__btn" href="#">Choose plan</a>
                    
                                   </div>
               
                              </div>
                              <div class="package__item">
                                   <div class="package__level">
                                        <h4 class="package__level__head">Basic</h4>
                                        <p class="Monthly">Monthly Package</p>
                                        <div class="price">
                                             <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div class="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a class="common__btn" href="#">Choose plan</a>
                                   </div>
                              </div>
                              <div class="package__item">
                                   <div class="package__level">
                                        <h4 class="package__level__head">Basic</h4>
                                        <p class="Monthly">Monthly Package</p>
                                        <div class="price">
                                             <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div class="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a class="common__btn" href="#">Choose plan</a>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
    </div>
  )
}

export default Plan