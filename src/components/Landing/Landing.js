import React from 'react'
import classes from './Landing.module.css';

const Landing =()=>{
    return <div className={classes.background} >
        <h2 className={classes.heading2} >learn on demand</h2>
        <h1 className={classes.heading1} > learn from the best of the best </h1>
        <div className={classes.container}>
            <div className={classes.text_container1} >
                <h3>Fresh Content</h3>
                <p>It showed a lady fitted out with a fur hat and fur boa who sat upright</p>
            </div>
            <div className={classes.text_container2}  >
                <h3>Trusted Instructors</h3>
                <p>Raising a heavy fur muff, covered the whole lower arm towards the viewer</p>
            </div>
            <div className={classes.text_container3}  >
                <h3>Flexible Learning</h3>
                <p>Gregor then turned to look out the window at the dull weather</p>
            </div>
        </div>
    </div>
}

export default Landing