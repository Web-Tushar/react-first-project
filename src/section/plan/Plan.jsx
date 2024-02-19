import React from 'react'
import "./plan.css"

const Plan = () => {
  return (
    <div>
          <section id="plan">
               <div className="container">
                    <div className="plan_heading">
                         <h3 className="sub__heading">Choose The Right Plan</h3>
                         <div className="plan_swap">
                              <h4 className="swap_item">Monthly</h4>
                              <div className="swap_btn"></div>
                              <h4 className="swap_item">Yearly</h4>
                              <div className="save">20% save</div>
                         </div>
                    </div>
          
                    <div className="package">
                         <div className="package__wrapper">
                              <div className="package__item">
                                   <div className="package__level">
                                        <h4 className="package__level__head">Basic</h4>
                                        <p className="Monthly">Monthly Package</p>
                                        <div className="price">
                                        <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div className="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a className="common__btn" href="#">Choose plan</a>
                    
                                   </div>
               
                              </div>
                              <div className="package__item">
                                   <div className="package__level">
                                        <h4 className="package__level__head">Basic</h4>
                                        <p className="Monthly">Monthly Package</p>
                                        <div className="price">
                                             <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div className="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a className="common__btn" href="#">Choose plan</a>
                                   </div>
                              </div>
                              <div className="package__item">
                                   <div className="package__level">
                                        <h4 className="package__level__head">Basic</h4>
                                        <p className="Monthly">Monthly Package</p>
                                        <div className="price">
                                             <p><span>30</span>/Month</p>
                                        </div>
                                   </div>
                                   <div className="basic__details">
                                        <p> Responsive Design
                                        Dynamic Elements
                                        Service Pages
                                        Custom Design & Features</p>
                    
                                        <a className="common__btn" href="#">Choose plan</a>
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