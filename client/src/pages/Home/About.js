// import React from 'react'
// import SectionTitle from '../../components/SectionTitle'
// import { useSelector } from 'react-redux';

// function About() {
//   const {loading , portfolioData}= useSelector(state => state.root);
//   const {about} = portfolioData;
//   const { skills = [] } = about;
//   const { lottieURL, description,  description2}=about;
//     // const skills =   [
//     //     "Languages",
//     //     "Framework",
//     //   "Concepts",
//     //     "Database",
//     //    " Internship Skills",
//     //    " Data Analysis",
//     //     "Artificial intelligence",
//     //     "Courses Completed",

//     // ]
//   return (
//     <div>
//     <SectionTitle title = "About"/>
//     <div className='flex w-full items-center sm:flex-col'>
//         <div className='h-[70vh] w-1/2 sm:w-full'>
//         {/* <dotlottie-player src="https://lottie.host/e168918e-4145-4501-9a8d-d3bf3c197d09/vTZVfo4HD0.json" background="transparent" speed="1"  autoplay></dotlottie-player> */}
//         <dotlottie-player src={lottieURL} background="transparent" speed="1"  autoplay></dotlottie-player>
//         </div>
//         <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
// <p className='text-white'>
// {description || " "}
// </p>
// <p className='text-white'>
// {description2 || " "}
// </p>
//         </div>
//     </div>

//     <div className='py-5'>
//     <h1 className='text-tertiary test-xl'>Skills</h1>
//  <div className='flex flex-wrap gap-10 mt-5'> {skills.map((skill,index)=>(
//     <div className='border border-tertiary py-3 px-10 rounded'>
// <h1 className='text-tertiary '>{skill}</h1>
//   </div>
//   )
  
//   )}</div>
//     </div>

//     </div>
//   )
// }

// export default About



import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function About() {
  const { loading, portfolioData } = useSelector(state => state.root);

  // Use optional chaining to safely access properties
  const {abouts} = portfolioData;
  const { skills , lottieURL, description, description2 } = abouts;

  return (
    <div>
      <SectionTitle title="About" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[70vh] w-1/2 sm:w-full'>
          {/* Render the lottie player only if lottieURL is available */}
          {lottieURL ? (
            <dotlottie-player src={lottieURL} background="transparent" speed="1" autoplay></dotlottie-player>
          ) : (
            <div>Loading animation...</div>
          )}
        </div>
        <div className='flex flex-col gap-5 w-1/2 sm:w-full'>
          <p className='text-white'>
            {description || " "}
          </p>
          <p className='text-white'>
            {description2 || " "}
          </p>
        </div>
      </div>

      <div className='py-5'>
        <h1 className='text-tertiary text-xl'>Skills</h1>
        <div className='flex flex-wrap gap-10 mt-5'>
          {skills.map((skill, index) => (
            <div key={index} className='border border-tertiary py-3 px-10 rounded'>
              <h1 className='text-tertiary'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
