import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
     <footer>
               <div className="container">
                    <div className="footer_wrapper">
                         <div className="footer_details">
                              <picture>
                                   <img src="./images/footerrLogo.png"  alt="not_found"/>
                              </picture>
                              <p className="paragraph">Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                         </div>
                         <div className="content_group">
                              <div className="footer_Features">
                                   <h4 className="footer_heading">Features</h4>
                                   <ul  className="footer_list">
                                   <li>Home</li>
                                   <li>About</li>
                                   <li>Benifit</li>
                                   <li>Pricing</li>
                                   <li>Blog</li>
                                   </ul>
                              </div>
                              <div className="footer_Products">
                                   <h4 className="footer_heading">Products</h4>
                                   <ul className="footer_list">
                                        <li>Task Management</li>
                                        <li>Company growth</li>
                                        <li>Time tracking</li>
                                   </ul>
                              </div>
                              <div className="footer_Support">
                                   <h4 className="footer_heading">Support</h4>
                                   <ul className="footer_list">
                                        <li>Customer service</li>
                                        <li>Accessibility</li>
                                        <li>Contact us</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
                    <div className="copy_right">
                         <div className="main_copy_right">
                              <p>@20201 Innovate.All rights reserved.</p>
                         </div>
                         <div className="main_copy_right2">
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