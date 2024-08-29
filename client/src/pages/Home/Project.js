import React from 'react'
//import { projects } from '../../resources/project'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
function Project() {
    const [selectedItemIndex , setSelectedItemIndex]= React.useState(0);
    const {  portfolioData } = useSelector(state => state.root);

  // Use optional chaining to safely access properties
  const {project} = portfolioData;
  return (
    <div>
    <SectionTitle title="Projects"/>
  <div className='flex py-10 gap-20 sm:flex-col'>
  <div className='flex flex-col gap-7 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
    {project.map((projects, index)=>(
      <div className=' cursor-pointer' onClick={()=>{
        setSelectedItemIndex(index);
      }}>
        <h1 className={`text-xl px-10  ${selectedItemIndex === index ?'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a34] py-3 ':'text-white'}` }>{projects.tittle}</h1>
      </div>
    )
    )}
  </div>
  <div className='flex items-center justify-center gap-10 sm:flex-col'>
  <img src={project[selectedItemIndex].image} alt='image' className='h-60 w-72'/>
  <div className='flex flex-col gap-5'>
    <h1 className='text-secondary text-2xl '>{project[selectedItemIndex].tittle}</h1>
   
    <p className='text-white'>
    {project[selectedItemIndex].description}</p>
  </div>
</div>
  </div>
  </div>
  )
}

export default Project
