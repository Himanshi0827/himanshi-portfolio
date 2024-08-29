import React from 'react'
import SectionTitle from '../../components/SectionTitle'
//import {experiences} from '../../resources/experiences'
import { useSelector } from 'react-redux';
function Experiences() {
  const [selectedItemIndex , setSelectedItemIndex]= React.useState(0);
  const {  portfolioData } = useSelector(state => state.root);

  // Use optional chaining to safely access properties
  const {experience} = portfolioData;
  //const { company,tittle,period,description } = experience;
  return (
    <div>
      <SectionTitle title="Experiences"/>
    <div className='flex py-10 gap-20 sm:flex-col'>
    <div className='flex flex-col gap-7 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
      {experience.map((experiences, index)=>(
        <div className=' cursor-pointer' onClick={()=>{
          setSelectedItemIndex(index);
        }}>
          <h1 className={`text-xl px-10  ${selectedItemIndex === index ?'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a34] py-3 ':'text-white'}` }>{experiences.period}</h1>
        </div>
      )
      )}
    </div>
    <div className='flex flex-col gap-5'>
      <h1 className='text-secondary text-2xl '>{experience[selectedItemIndex].tittle}</h1>
      <h1 className='text-tertiary text-2xl '>{experience[selectedItemIndex].company}</h1>
      <p className='text-white'>
InternIntern
Bhaskaracharya Institute For Space Applications and Geo-Informatics · Full-timeBhaskaracharya Institute For Space Applications and Geo-Informatics · Full-time
May 2024 - Present · 2 mosMay 2024 to Present · 2 mos
Gandhinagar, Gujarat, India · On-siteGandhinagar, Gujarat, India · On-site
Java Database Connectivity (JDBC), Spring Boot and +1 skill</p>
    </div>

    </div>
    </div>
  )
}

export default Experiences
