import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from './Testimony.module.css';
import img from '../../assets/testimony.png';

const responsive={
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
}


const Testimony=()=>{
    return <div className={classes.container}>
        <Carousel  showDots={true} arrows={true} responsive={responsive}>
        <div className={classes.person} ><div className={classes.avatar} ><img className={classes.img} src={img} alt=""/><p>Julian Warren</p> <small>-student</small> </div>
         <h4>Awesome Learning Site</h4> <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. </p> </div>

         <div className={classes.person} ><div className={classes.avatar} ><img className={classes.img} src={img} alt=""/><p>Julian Warren</p> <small>-student</small> </div>
         <h4>Awesome Learning Site</h4> <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. </p> </div>

         <div className={classes.person} ><div className={classes.avatar} ><img className={classes.img} src={img} alt=""/><p>Julian Warren</p> <small>-student</small> </div>
         <h4>Awesome Learning Site</h4> <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit. </p> </div>
        </Carousel>
    </div>
}

export default Testimony