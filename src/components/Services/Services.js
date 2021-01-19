import React from 'react';
import classes from './Services.module.css';

/*Images*/
import img1 from '../../assets/business.png';
import img2 from '../../assets/computer.png';
import img3 from '../../assets/science.png';
import img4 from '../../assets/music.png';
import img5 from '../../assets/photography.png';
import img6 from '../../assets/culinary.png';

const Services =()=>{
    return <div className={classes.grid_container}>
        <div className={classes.grid_item} >
        <img className={classes.img} src={img1} alt="Business"/>
        <h1>Business</h1>
        <p>Drops of rain could be heard hitting the pane, which made him feel quite sad. How about if I sleep a little bit longer and forget all of this nonsense</p>
        </div>
        
        <div className={classes.grid_item} >
        <img className={classes.img} src={img2} alt="Computer and IT"/>
        <h1>Computer & IT</h1>
        <p>He threw himself onto his right and rolled back to where he was. He must have tried it hundred times, shut his eyes so that wouldn't have to look</p>
        </div>

           
        <div className={classes.grid_item} >
        <img className={classes.img} src={img3} alt="Science"/>
        <h1>Science</h1>
        <p>At the floundering legs, he looks and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p>
        </div>

        <div className={classes.grid_item} >
        <img className={classes.img} src={img4} alt="Music"/>
        <h1>Music</h1>
        <p>Doing business like this takes much effort than doing your own business at home, and on top of that there's the curse of travelling</p>
        </div>

        <div className={classes.grid_item} >
        <img className={classes.img} src={img5} alt="Photography"/>
        <h1>Photography</h1>
        <p>He worries about making train connections and irregular food, contact with different people all the time so that you or anyone become friendly.</p>
        </div>

        <div className={classes.grid_item} >
        <img className={classes.img} src={img6} alt="Culinary"/>
        <h1>Culinary</h1>
        <p>It can all go to Hell. He felt a slight itch up on his belly, pushed himself up on his back towards the headboard so that he lift his head better</p>
        </div>
    </div>
}

export default Services;