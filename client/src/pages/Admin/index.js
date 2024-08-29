import React, { useEffect } from 'react'
import Header from '../../components/Header'
import {Tabs} from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExp from './AdminExp';
import AdminProject from './AdminProject';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
// import AdminProject from './AdminProject';
const {TabPane} = Tabs;
function Admin() {
  const {portfolioData}= useSelector((state)=> state.root);
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      window.location.href="/admin-login"
    }
  },[])
  
  
  return (
    <div>
      <Header/>
      <div className='flex gap-1 items-center px-5 py-2 '>
      <h1 className='text-3xl text-primary '>Portfolio Admin</h1>
    <div className='w-60 h-[1px] bg-primary'></div>
    </div>
      {/* <h1 className='text-2xl my-5 text-primary'> Portfolio Admin</h1> */}
      {portfolioData &&
        <div className='p-3'>
      <Tabs defaultActiveKey='1' onChange={onchange}>
<TabPane tab = 'Intro' key='1'>
  <AdminIntro/>
</TabPane>
<TabPane tab = 'About' key='2'>
  <AdminAbout/>
</TabPane>
<TabPane tab = 'Experiences' key='3'>
  <AdminExp/>
</TabPane>
<TabPane tab = 'Project' key='4'>
  <AdminProject/>
</TabPane>
<TabPane tab = 'Courses' key='5'>
  <AdminCourses/>
</TabPane>
<TabPane tab = 'Contact' key='6'>
  <AdminContact/>
</TabPane>
      </Tabs>
      </div>}
      
    </div>
  )
}

export default Admin
