import React,{useEffect,useState} from 'react';
import Course from './Course';
import classes from './Courses.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from '../../assets/giphy.gif';

const responsive={
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
}

const Courses =()=>{
    const [state,setState] = useState(null);
    useEffect(async () => {
        const response = await fetch("https://picsum.photos/200/300")
        const data = await response.json();
        setState(data);
    }, [])
  
     return <div className={classes.container}>
    <div className={classes.heading_container}>
    <div> 
    <h3>Popular Courses</h3>
    <p>Donec rutrum conque leo eget malesuada </p>
    </div>
    <div className={classes.btn_container} >
    
    </div>
 </div>
 
 <Carousel arrows={true} responsive={responsive}>
   {/* Note:The Courses api doesn't send data sometimes so you may have to uncomment code's this part to see the carousel cards.   */}

   {state===null ? <img src={Spinner} /> : state.map(data=>{
         return <Course 
         key={data.id}
        image={data.image} 
        avatar={data.author_avatar} 
        title={data.title} 
        price={data.price} 
        rating={data.rating}
        users={data.users}
        comments={data.comments}
        duration={data.duration}
        />
     })}
 </Carousel>
</div>
}

export default Courses
