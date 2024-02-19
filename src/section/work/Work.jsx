import React from 'react'
import "./work.css"

const Work = () => {
  return (
    <div>
     <section id="work">
               <div class="container">
                    <div class="work__heading">
                         <h3 class="sub__heading">Selected Works</h3>
                         <p class="paragraph">We are convinced that aesthetics leads to a form of harmony and provides well-being.</p>
                    </div>
                    <div class="work__wrapper">
                         <div class="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>

                              <div class="img_one__tag">
                                   <h4>01. Fresh & Care (Grocery Store)</h4>
                              </div>
                         </div>
                         <div class="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>
                              <div class="img_two__tag">
                                   <h4>02. Purl house (Jewellary Store)</h4>
                              </div>
                         </div>
                         <div class="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>
                              <div class="img_three__tag">
                                   <h4>03. Fashionate (Clothing Store)</h4>
                              </div>
                         </div>
                    </div>
               </div>          
          </section>
    </div>
  )
}

export default Work