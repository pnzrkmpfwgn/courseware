import React from 'react';
import classes from './Footer.module.css';

// Images
import Img1 from '../../../assets/1.jpg';
import Img2 from '../../../assets/2.jpg';
import Img3 from '../../../assets/3.jpg';
import Logo from '../../../assets/Logo2.png'

const Footer =()=>{
    return <>
        <div className={classes.sections_container}> 
            <div className={classes.section1_container}>
               <div> 
               <img className={classes.logo} src={Logo} alt="logo"></img>
                <p className={classes.text} >We are team of different geeks that believe in producing top-quality courses and category based on best videos</p>
                <div className={classes.info} >
                <i className="fa fa-phone-square" ></i><span> 088 12345 67890</span><br />
                <i className="fa fa-envelope-square"></i> <span>info@courseware.com</span>
                </div>
                <div className={classes.social_media_links} >
                    <i className="fab fa-facebook-square fa-2x" ></i>
                    <i className="fab fa-twitter-square fa-2x" ></i>
                    <i className="fab fa-google-plus-square fa-2x" ></i>
                    <i className="fab fa-youtube-square fa-2x" ></i>
                </div>
                </div>
                <div>  
                <h4>QUICK LINKS</h4>
                <ul>
                <li><i className="fa fa-angle-double-right" ></i> Courses</li>
                <li><i className="fa fa-angle-double-right" ></i> Events</li>
                <li><i className="fa fa-angle-double-right" ></i> About Us</li>
                <li><i className="fa fa-angle-double-right" ></i> Gallery</li>
                <li><i className="fa fa-angle-double-right" ></i> Become a Teacher</li>
                <li><i className="fa fa-angle-double-right" ></i> Contact</li>
                </ul>
                </div>
            </div>
            <div className={classes.section2_container}>
               <div className={classes.news_container} >
               <h4>NEWS</h4>
                <div className={classes.news_item} >
                    <img src={Img1} alt=""/>
                    <div className={classes.news}>
                        <p>Guide to WordPress Custom Post Type</p>
                        
                        <i className="far fa-comment"></i>
                        <span> 23 Comments </span>
                        
                    </div>
                </div>
                <div className={classes.news_item} >
                    <img src={Img2} alt=""/>
                    <div className={classes.news}>
                        <p>SEO friendly WordPress and Squarespace</p>
                        <div>
                        <i className="far fa-comment"></i>
                        <span> 23 Comments </span>
                        </div>
                    </div>
                </div>
                <div className={classes.news_item} >
                    <img src={Img3} alt=""/>
                    <div className={classes.news}>
                        <p>David Braun: Chief Monster of Web Design</p>
                        <div>
                        <i className="far fa-comment"></i>
                        <span> 23 Comments </span>
                        </div>
                    </div>
                </div>

               </div>
            
            <div>
            <h4>SUPPORT</h4>
                <ul>
                <li><i className="fa fa-angle-double-right" ></i> FAQ</li>
                <li><i className="fa fa-angle-double-right" ></i> Documentation</li>
                <li><i className="fa fa-angle-double-right" ></i> Forums</li>
                <li><i className="fa fa-angle-double-right" ></i> Career</li>
                <li><i className="fa fa-angle-double-right" ></i> Community</li>
                <li><i className="fa fa-angle-double-right" ></i> Management</li>
                </ul>
            </div>
            </div>
        </div>
        <footer>
        <div className={classes.footer_text} >
            <div>Copyright &copy; 2018 Courseware, All rights reserved</div>
            <div> <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            </ul> </div>
        </div>
        </footer>
    </>
}
export default Footer;