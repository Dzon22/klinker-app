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
import { useState } from "react";
import { Menu, X } from "lucide-react";
{/*import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { useState } from "react";*/}

const Projects = () => {
  const nav = useNavigate();
  const [isMenuOpen,setIsMenuOpen] = useState(false)

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
    <header className='flex items-center justify-between p-10  md:mx-10' style={{ fontFamily: 'Poppins, sans-serif' }}>

      {/*Logo */}
      <div className='flex-1 justify-center cursor-pointer' >
        <img onClick={() => nav(`/`)} src={klinkerLogo} alt="klinkerLogo"/>
      </div>

      {/*navigation*/ }
      <nav className="hidden md:flex flex-1  justify-center ">
        <ul className="flex gap-20 text-[24px]">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link className="hover:underline" to="/projects">Project</Link></li>
          <li className='whitespace-nowrap hover:underline'><Link>Contact Us</Link></li>
        </ul>
      </nav>
      <div className="flex-1" />      
      {/*Menu for smaller screens*/ }
      <div onClick={() => setIsMenuOpen(!isMenuOpen) } className="md:hidden flex justify-between items-center cursor-pointer">
        <Menu color="black" size={40}/>
      </div>
      {/*navigation for smaller screens*/ }
       {isMenuOpen && (
        <>
        <div className="">
          <nav className="">
            <ul className="absolute md:hidden flex flex-col space-y-10 cursor-pointer bg-black z-50 inset-0 h-screen w-screen items-center justify-center">
              <li><Link className="hover:underline text-white" to="/">Home</Link></li>
              <li><Link className="hover:underline text-white" to="/projects">Project</Link></li>
              <li className='whitespace-nowrap hover:underline text-white'><Link>Contact Us</Link></li>
            </ul>
          </nav>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="md:hidden rounded p-2 absolute top-0 z-50 right-1 cursor-pointer ">
            <X size={30} color="white"/>
          </button>
        </div>
        </>
       )}
    </header>

    {/*Main*/}
    <main className ="mt-20" style={{ fontFamily: 'Poppins, sans-serif' }}>

      <div className='text-center max-w-5xl mx-auto'>
        <h1 className='text-[40px] font-semibold pb-2'>Discover Our Projects</h1>
        <p className='text-[20px] '>
        Explore our portfolio of innovative digital solutions—from cutting-edge websites to dynamic applications. Each project reflects our commitment to creativity, quality, and tailored excellence.</p>

      </div>
      {/*Projects pic (pc view)*/}
      <div className="hidden md:flex justify-center items-center mt-30">
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
      {/*Projects pic (phone view)*/}
      <div className="md:hidden flex justify-center items-center mt-30">
        <div className=" grid grid-cols-2">
          
          <div className="">
            <img src={laptop} alt="Laptop" />
          </div>
          
          <div className="relative">
            <img src={inkyhouse} alt="INKYHOUSE" />

            <div className=' absolute top-17   text-sm md:text-[22px] text-white hover:underline cursor-pointer'>
              <Link to="/projects/inkyhouse"><p className='flex gap-2'>See the Project<img src={arrow}/></p></Link>
            </div>
            
          </div>
          
          <div className=" ">
            <img src={Note} alt="NOTY" />
          </div>
          
          <div className="">
            <img src={klinkerStudio} alt="Klinker Studio" />
          </div>
        
          
          <div className="">
            <img src={twoPhones} alt="Two Phones" />
          </div>
          
          <div className="">
            <img src={Resolu} alt="Resolu" />
          </div>
          </div>
      </div>
    </main>
    </>
  )
}

export default Projects