import React from 'react';

import classes from './TopCourses.module.css';


const TopCourses =()=>{
    return <div>
       <div className={classes.heading_container} >
       <h1> Top Courses </h1>
        <p>Donec rutrum conque leo eget malesuada</p>
       </div>
      <div className={classes.container} >
      <div className={classes.grid}>
       <div className={classes.item1} > <p>BECOME A WORDPRESS EXPERT</p> </div>
       <div className={classes.item2} > <p>COMPLETE PYTHON MASTERCLASS</p> </div> 
        <div className={classes.item3} > <p>BEGINNER TO PRO IN EXCEL</p> </div>
       <div className={ classes.item4} > <p>THE ULTIMATE COURSE TO BECOME JAVASCRIPT NINJA</p> </div>
       </div>
      </div>
     <div className={classes.btn_container} >  <div className={classes.btn} > Browse All </div> </div>
    </div>
}

export default TopCourses;