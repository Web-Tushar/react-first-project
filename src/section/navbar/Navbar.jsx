import React from 'react'
import "./navbar.css"

const Navber = () => {
  return (
    <div>
     
       <nav id="navber">
          <div class="container">
               <div class="nav__wrapper">
                     <div class="nav__logo">
                         <picture>
                              <img src="./images/Logo.png" alt="not_found"/>
                         </picture>
                    </div>
             
                    <div class="nav__menu">
                         <ul class="nav__menu__list__wrapper">
                              <li>
                                   <a class="nav__link" href="#">home</a>
                              </li>
                              <li>
                                   <a class="nav__link" href="#">about</a>
                              </li>
                              <li>
                                   <a class="nav__link" href="#">service</a>
                              </li>
                              <li>
                                   <a class="nav__link" href="#">portfolio</a>
                              </li>
                              <li>
                                   <a class="nav__link" href="#">price</a>
                              </li>
                              <li>
                                   <a class="nav__link" href="#">blog</a>
                              </li>
                         </ul>
                    </div>
                    <div class="nav__btn">
                          <a class="common__btn" href="#">contact us</a>
                    </div>
               </div>
          </div>
      
       </nav>
     
    </div>
  )
}

export default Navber