import React from 'react';
import classes from './Courses.module.css';

const Course =(props)=>{
    return <div className={classes.card}>
    <img className={classes.img} src={props.image} alt=""/>
    <img className={classes.avatar} src={props.avatar} alt=""/>
    <div className={classes.info}>
    <p>{props.title}</p>
    
    
    <div className={classes.features}><span className={classes.price} > ${props.price} </span>
     <span className={classes.rating} >{props.rating} <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i> </span></div>
    <hr/>
  <div className={classes.details}>
  <i className="fa fa-user-friends"></i> <span>{props.users}</span>
    <i className="fa fa-comment"></i> <span>{props.comments}</span>
    <i className="fa fa-clock"></i> <span>{props.duration}</span>
  </div>
    </div>
    </div>
}

export default Course;