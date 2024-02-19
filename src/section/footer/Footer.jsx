import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
     <footer>
               <div class="container">
                    <div class="footer_wrapper">
                         <div class="footer_details">
                              <picture>
                                   <img src="./images/footerrLogo.png"  alt="not_found"/>
                              </picture>
                              <p class="paragraph">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                         </div>
                         <div class="content_group">
                              <div class="footer_Features">
                                   <h4 class="footer_heading">Features</h4>
                                   <ul  class="footer_list">
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Benifit</li>
                                   <li>Pricing</li>
                                   <li>Blog</li>
                                   </ul>
                              </div>
                              <div class="footer_Products">
                                   <h4 class="footer_heading">Products</h4>
                                   <ul class="footer_list">
                                        <li>Task Management</li>
                                        <li>Company growth</li>
                                        <li>Time tracking</li>
                                   </ul>
                              </div>
                              <div class="footer_Support">
                                   <h4 class="footer_heading">Support</h4>
                                   <ul class="footer_list">
                                        <li>Customer service</li>
                                        <li>Accessibility</li>
                                        <li>Contact us</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div class="copy_right">
                         <div class="main_copy_right">
                              <p>@20201 Innovate.All rights reserved.</p>
                         </div>
                         <div class="main_copy_right2">
                              <p>Privacy policy</p>
                              <p>Terms & condition</p>
                         </div>
                    </div>

               </div>
         </footer>
    </div>
  )
}

export default Footer