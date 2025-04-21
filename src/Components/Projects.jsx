import klinkerLogo from '../assets/Projects/klinkerLogo.svg';
import inkyhouse from '../assets/Projects/inkyhouse.svg';
//import { Link } from 'react-router-dom';
import laptop from '../assets/Projects/laptop on top.svg';

{/*import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";*/}

const Projects = () => {

  {/*const {data,isLoading,isError,error}  = useQuery({
   queryKey : ['Project'],
   queryFn : async () => {
    const res = axios.get('').then(res => res.data)
    return res.data;
   }
  })

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;*/}

  return(
    <>
    {/* Header */}
    <header className='flex items-center justify-between p-10  mx-10' style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/*Logo */}
      <div className='flex-1 justify-center ' >
        <img src={klinkerLogo} alt="klinkerLogo"/>
      </div>

      {/*navigation*/ }
      <nav className="flex-1 flex justify-center ">
        <ul className="flex space-x-15 text-[24px]">
          <li>Home</li>
          <li>Project</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="flex-1" />      

    </header>

    {/*Main*/}
    <main className ="mt-20" style={{ fontFamily: 'Poppins, sans-serif' }}>

      <div className='text-center max-w-5xl mx-auto'>
        <h1 className='text-[40px] font-semibold pb-2'>Discover Our Projects</h1>
        <p className='text-[20px] '>
        Explore our portfolio of innovative digital solutions—from cutting-edge websites to dynamic applications. Each project reflects our commitment to creativity, quality, and tailored excellence.</p>

      </div>
       {/*Projects pic*/}
      <div className='flex items-center justify-center'>

        <div>
          <img src={inkyhouse}/>
        </div>

        <div>
          <img src={laptop}/>
        </div>

      </div>
    </main>
    </>
  )
}

export default Projects