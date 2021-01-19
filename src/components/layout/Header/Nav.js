import React from 'react';
import classes from './Header.module.css';

import Logo from '../../../assets/Logo.png';
const Nav=()=>{
    return <div className={classes.nav} >
        <div className={classes.logo}> <img src={Logo} alt=""/> </div>
        <div className={classes.nav_links}>
        <ul>
            <li>Demos <i className="fa fa-angle-down"></i></li>
            <li>Courses <i className="fa fa fa-angle-down"></i></li>
            <li>Instructors<i className="fa fa fa-angle-down"></i></li>
            <li>Blog <i className="fa fa fa-angle-down"></i></li>
            <li>Pages<i className="fa fa fa-angle-down"></i></li>

        </ul>
        
          </div>
    </div>
}

export default Nav