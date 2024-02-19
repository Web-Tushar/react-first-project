import React from 'react'
import "./navbar.css"

const Navber = () => {
  return (
    <div>
     
       <nav id="navber">
          <div className="container">
               <div className="nav__wrapper">
                     <div className="nav__logo">
                         <picture>
                              <img src="./images/Logo.png" alt="not_found"/>
                         </picture>
                    </div>
             
                    <div className="nav__menu">
                         <ul className="nav__menu__list__wrapper">
                              <li>
                                   <a className="nav__link" href="#">home</a>
                              </li>
                              <li>
                                   <a className="nav__link" href="#">about</a>
                              </li>
                              <li>
                                   <a className="nav__link" href="#">service</a>
                              </li>
                              <li>
                                   <a className="nav__link" href="#">portfolio</a>
                              </li>
                              <li>
                                   <a className="nav__link" href="#">price</a>
                              </li>
                              <li>
                                   <a className="nav__link" href="#">blog</a>
                              </li>
                         </ul>
                    </div>
                    <div className="nav__btn">
                          <a className="common__btn" href="#">contact us</a>
                    </div>
               </div>
          </div>
      
       </nav>
     
    </div>
  )
}

export default Navber