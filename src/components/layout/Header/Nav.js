import React,{useState} from 'react';
import classes from './Header.module.css';

import Logo from '../../../assets/Logo.png';
const Nav=()=>{
    const[dropdown1,setDropDown1]=useState(classes.dropdown1+ " " +classes.dropdown_close);
    const[dropdown2,setDropDown2]=useState(classes.dropdown2+ " " +classes.dropdown_close);
    const[dropdown3,setDropDown3]=useState(classes.dropdown3+ " " +classes.dropdown_close);
    const[dropdown4,setDropDown4]=useState(classes.dropdown4+ " " +classes.dropdown_close);
    const[dropdown5,setDropDown5]=useState(classes.dropdown5+ " " +classes.dropdown_close);

    return <div className={classes.nav} >
        <div className={classes.logo}> <img src={Logo} alt=""/> </div>
        <div className={classes.nav_links}>
        <ul>
            <li  onMouseOver={()=>setDropDown1(classes.dropdown1 + " " + classes.dropdown_open)} onMouseLeave={()=>setDropDown1(classes.dropdown1 + " " + classes.dropdown_close)}  ><span>Demos <i className="fa fa-angle-down"></i> </span><br/> <div className={dropdown1}> <p>Lorem</p> <hr /> <p> Lorem </p> </div></li>
            <li onMouseOver={()=>setDropDown2(classes.dropdown2 + " " + classes.dropdown_open)} onMouseLeave={()=>setDropDown2(classes.dropdown2 + " " + classes.dropdown_close)} ><span  >Courses <i className="fa fa fa-angle-down"></i></span> <br/><div className={dropdown2}> <p>Lorem</p> <hr /> <p> Lorem </p> </div> </li>
            <li onMouseOver={()=>setDropDown3(classes.dropdown3 + " " + classes.dropdown_open)} onMouseLeave={()=>setDropDown3(classes.dropdown3 + " " + classes.dropdown_close)} ><span  >Instructors<i className="fa fa fa-angle-down"></i></span><br/><div className={dropdown3}> <p>Lorem</p> <hr /> <p> Lorem </p> </div></li>
            <li onMouseOver={()=>setDropDown4(classes.dropdown4 + " " + classes.dropdown_open)} onMouseLeave={()=>setDropDown4(classes.dropdown4 + " " + classes.dropdown_close)} ><span  >Blog <i className="fa fa fa-angle-down"></i></span><br/><div className={dropdown4}> <p>Lorem</p> <hr /> <p> Lorem </p> </div></li>
            <li onMouseOver={()=>setDropDown5(classes.dropdown5 + " " + classes.dropdown_open)} onMouseLeave={()=>setDropDown5(classes.dropdown5 + " " + classes.dropdown_close)} ><span  >Pages<i className="fa fa fa-angle-down"></i></span><br/><div className={dropdown5}> <p>Lorem</p> <hr /> <p> Lorem </p> </div></li>

        </ul>
        
          </div>
    </div>
}

export default Nav