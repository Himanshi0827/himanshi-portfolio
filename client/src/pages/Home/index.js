import React from 'react'
import Intro from './Intro'
import Header from '../../components/Header'
import About from './About'
import Experiences from './Experiences'
import Project from './Project'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'
function Home() {
  const { portfolioData}= useSelector(state => state.root);
  return (
    <div >
       <Header/>
       {portfolioData &&(
         <div  className='bg-primary px-40 sm:px-5 '>
 <Intro/>
 <About/>
 <Experiences/>
 <Project/>
 <Courses/>
 <Contact/>
 <Footer/>
 <LeftSider/>
 </div>
       )}
 {/* <div  className='bg-primary px-40 sm:px-5 '>
 <Intro/>
 <About/>
 <Experiences/>
 <Project/>
 <Courses/>
 <Contact/>
 <Footer/>
 <LeftSider/>
 </div> */}
 
   
    </div>
  )
}

export default Home
