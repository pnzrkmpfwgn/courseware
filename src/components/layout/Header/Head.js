import React from 'react';
import classes from './Header.module.css';

const Head=()=>{
    return <div className={classes.head}>
   <div className={classes.head_item_container} >
       <span className={classes.head_item}> <i className="fa fa-phone" ></i>  </span>
       <span className={classes.head_item}>(+61) 38376 6284</span>
       <span  className={classes.head_item}> <i className="fa fa-envelope" ></i> </span>
       <span className={classes.head_item} > support@courseware.com </span>
   </div>

 <div className={classes.head_item_container} >
 <span className={classes.head_item} >   myCourseware</span>
 <span className={classes.head_item} > Cart </span>
 <span className={classes.head_item} ><i className="fa fa-shopping-cart" ></i></span>
 <span className={classes.head_item} > Search</span>
 <span className={classes.head_item} ><i className="fa fa-search"></i></span> 

 </div>
    </div>
}

export default Head;