import React from 'react';
import Landing from './components/Landing/Landing';
import Layout from './components/layout/Layout';
import Services from './components/Services/Services';
import Courses from './components/Courses/Courses';
import TopCourses from './components/TopCourses/TopCourses';
import Testimony from './components/Testimony/Testimony';
import GetStarted from './components/GetStarted/GetStarted';



const App =()=>{
  return <>
    <Layout>
     <Landing/>
     <Services />
     <Courses />
     <TopCourses />
     <Testimony />
     <GetStarted/>
    </Layout>
  </>
}

export default App;