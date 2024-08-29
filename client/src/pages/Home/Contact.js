import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
function Contact() {
  const {  portfolioData } = useSelector(state => state.root);

  // Use optional chaining to safely access properties
  const {contacts} = portfolioData;
//     const user ={
//         name:"Himanshi Singh",
//         email : "himanshisingh0827@gmail.com",
//         age: 20,
//         gender:"Female",
//         mobile:"9427936052",
//         country:"India",
//         linkedin:"https://www.linkedin.com/in/himanshi-singh-2367a3281/"

// };
  return (
    <div>
         <SectionTitle title = "Say Hello"/>
    <div className='flex sm:flex-col items-center justify-between'>
    <div className='flex flex-col gap-1'>
        <h1 className='text-tertiary text-sm'>{'{'}</h1>
        {Object.keys(contacts).map((key)=>(
            <h1 className='ml-5 text-sm'>
                <span className='text-tertiary '>{key} : </span>
                <span className='text-tertiary'>{contacts[key]}</span>
            </h1>
        ))}
        <h1 className='text-tertiary text-sm'>{'}'}</h1>
    </div>
    <div className='h-[300px] '>
    <dotlottie-player src="https://lottie.host/85a2a1a9-c963-4b8c-af63-d24c9abfa328/8HoshRE2hC.json" background="transparent" speed="1"  autoplay></dotlottie-player>
    </div>
    </div>
    </div>
  )
}

export default Contact
