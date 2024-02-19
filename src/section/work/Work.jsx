import React from 'react'
import "./work.css"

const Work = () => {
  return (
    <div>
     <section id="work">
               <div className="container">
                    <div className="work__heading">
                         <h3 className="sub__heading">Selected Works</h3>
                         <p className="paragraph">We are convinced that aesthetics leads to a form of harmony and provides well-being.</p>
                    </div>
                    <div className="work__wrapper">
                         <div className="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>

                              <div className="img_one__tag">
                                   <h4>01. Fresh & Care (Grocery Store)</h4>
                              </div>
                         </div>
                         <div className="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>
                              <div className="img_two__tag">
                                   <h4>02. Purl house (Jewellary Store)</h4>
                              </div>
                         </div>
                         <div className="work__img">
                              <img src="./images/33333.jpg" alt="not_found"/>
                              <div className="img_three__tag">
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