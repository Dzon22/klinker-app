import klinkerLogo from '../assets/Projects/klinkerLogo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import inkyhouse from '../assets/Projects/inkyhouse.svg';
import laptop from '../assets/Projects/laptop on top.svg';
import Note from '../assets/Projects/Note.svg';
import klinkerStudio from '../assets/Projects/klinker studio.svg';
import twoPhones from '../assets/Projects/twoPhones.svg';
import Resolu from '../assets/Projects/resolu.svg';
import arrow from '../assets/Projects/Arrow .svg'

{/*import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";*/}

const Projects = () => {
  const nav = useNavigate();

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
      <div className='flex-1 justify-center cursor-pointer' >
        <img onClick={() => nav(`/`)} src={klinkerLogo} alt="klinkerLogo"/>
      </div>

      {/*navigation*/ }
      <nav className="flex-1 flex justify-center ">
        <ul className="flex gap-20 text-[24px]">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link className="hover:underline" to="/projects">Project</Link></li>
          <li className='whitespace-nowrap hover:underline'><Link>Contact Us</Link></li>
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
        <div className="flex justify-center items-center mt-30">
          <div className="w-[976px] h-[834px] relative">
            
            <div className="absolute top-0 left-0">
              <img src={laptop} alt="Laptop" />
            </div>
            
            <div className="absolute top-0 right-0">
              <img src={inkyhouse} alt="INKYHOUSE" />

              <div className='absolute bottom-5 left-5   text-[22px] text-white hover:underline cursor-pointer'>
                <Link to="/projects/inkyhouse"><p className='flex gap-2'>See the Project<img src={arrow}/></p></Link>
              </div>
              
            </div>
            
            
            <div className="absolute top-[320px] -left-16 ">
              <img src={Note} alt="NOTY" />
            </div>
            
            <div className="absolute top-[334px] right-0">
              <img src={klinkerStudio} alt="Klinker Studio" />
            </div>
            
            
            <div className="absolute top-[1000px] left-1">
              <img src={twoPhones} alt="Two Phones" />
            </div>
            
            <div className="absolute top-[1000px] -right-7">
              <img src={Resolu} alt="Resolu" />
            </div>
          </div>
        </div>
    </main>
    </>
  )
}

export default Projects