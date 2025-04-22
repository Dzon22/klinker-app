import klinkerLogo from '../assets/Studio/klinkerLogo.svg';
import { Link } from 'react-router-dom';
import backGround from '../assets/Studio/backGround.svg';
import threePic from '../assets/Studio/threePicTogether.svg';
import whiteStar from '../assets/Studio/white star.svg';
import purpleStar from '../assets/Studio/purple star.svg';
import multipleCart from '../assets/Studio/multipleCards-cropped.svg';
import klinkerReviews from '../assets/Studio/klinkerGoodReviews.svg';
import purpleSquare from '../assets/Studio/purple square.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Studio = () => {
  const nav = useNavigate();
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  
  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <img src={backGround} alt="BackGround" className="absolute inset-0 w-full h-full object-cover z-0" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-8 px-4">
          <p className="text-[40px] md:text-[64px] text-white leading-snug font-jost">
            we transform ideas into breathtaking<br />
            visual stories.<span className="text-white"> Film </span>
            <span className="bg-gradient-to-r from-white via-[#ED90D1] to-[#ED1CAE] bg-clip-text text-transparent">Making...</span>
          </p>
          <div className="p-[2px] rounded-3xl bg-gradient-to-b from-white to-[#ED1CAE]">
            <button className="text-white text-[18px] md:text-[21px] rounded-3xl px-8 py-4 bg-neutral-900 backdrop-blur-[60px] bg-opacity-80 w-fit flex-shrink-0">
              Get Started
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="absolute top-0 left-0 w-full p-6  z-20">

          <div className="bg-[#D0D0D0]/10 backdrop-blur-[60px] rounded-none w-full h-full absolute inset-0 opacity-90" />

          <div className="relative z-10 flex flex-wrap justify-between items-center gap-4">
            
            {/* Logo */}
            <img onClick={() => nav('/')} className="cursor-pointer w-32" src={klinkerLogo} alt="klinker logo" />

            {/* Navigation */}
            <nav className="hidden md:block text-white text-[18px] md:text-[24px]">
              <ul className="flex gap-6 md:gap-12">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link className="hover:underline">Gallerie</Link></li>
                <li><Link className="hover:underline">Contact Us</Link></li>
              </ul>
            </nav>

            {/* get started Button */}
            <div className="hidden md:block p-[2px] rounded-3xl bg-gradient-to-b from-white to-[#ED1CAE]">
              <button className="text-white text-[18px] md:text-[21px] rounded-3xl px-8 py-4 bg-neutral-900 backdrop-blur-[60px] bg-opacity-80 w-fit flex-shrink-0">
                Get Started
              </button>
            </div>

            {/*Menu for smaller screens*/ }
            <div onClick={() => setIsMenuOpen(!isMenuOpen) } className="md:hidden cursor-pointer">
              <Menu color="white" size={40}/>
            </div>
            
          </div>

        </header>
        {/*navigation for smaller screens*/ }
        {isMenuOpen && (
              <>
              <div className="">
                <nav className="">
                  <ul className="absolute md:hidden flex flex-col space-y-10 cursor-pointer bg-black z-50 inset-0 h-screen w-screen items-center justify-center">
                    <li><Link to="/" className="hover:underline text-white">Home</Link></li>
                    <li><Link className="hover:underline text-white">Gallerie</Link></li>
                    <li><Link className="hover:underline text-white">Contact Us</Link></li>
                    <li><Link className="hover:underline text-white">Get Started</Link></li>
                  </ul>
                </nav>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}  className="md:hidden rounded p-2 absolute top-0 z-50 right-1 cursor-pointer ">
                  <X size={30} color="white"/>
                </button>
              </div>
              </>
            )}
      </div>


      {/* MAIN  */}
      <main className=" py-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/*first Section*/}
        <section>

          <div className='flex items-center justify-center'>
            <div className=" grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-20 text-white">
              <div className='space-y-8 w-[500px]'>

                <div className='pl-15 whitespace-nowrap'>
                  <h1 className='text-[60px]'>what we offer</h1>
                  <p className='text-[25px] text-[#9C9C9C]'>we have 3 diffrent services at our studio</p>
                </div>

                <div className='flex flex-col space-y-8 text-[20px] '>

                  <div className='flex gap-4'>
                    <img src={purpleStar} alt='purple star' />
                    <p ><span className='font-semibold'>Film making:</span> Craft compelling visual stories that engage your audience and drive your message home.</p>
                  </div>

                  <div className='flex gap-4'>
                    <img src={whiteStar} alt='white star' />
                    <p ><span className='font-semibold'>3D Design:</span> Transform your ideas into immersive, photorealistic models that captivate and inspire.</p>
                  </div>

                  <div className='flex gap-4'>
                    <img src={whiteStar} alt='white star' />
                    <p ><span className='font-semibold'>Branding:</span> Build a powerful identity that resonates, from logo design to full-scale brand development.</p>
                  </div>

                </div>
              </div>
              <div className='flex justify-center'>
                <img src={threePic} alt="three pic" />
              </div>
            </div>
          </div>

        </section>
        {/*second section*/}
        <section className='mt-40 '>

          <div className='text-center max-w-5xl mx-auto'>
            <h1 className='text-[37px] bg-gradient-to-r from-white to-[#777777] bg-clip-text text-transparent pb-2'>Unveil Our Creative World</h1>

            <p className='text-[16px] text-[#CCCDCE]'>
            Explore our curated gallery of recent projects that capture our passion for innovative design, cinematic storytelling, and striking photography. Let these visuals inspire your next creative journey.</p>
          </div>

          <div className='flex justify-center relative'>
            <img src={multipleCart} alt="multiple cards"/>
          
            <button className='text-[24px] text-white absolute  bottom-60 hover:underline cursor-pointer'>View All</button>
          </div>
        </section>
        {/*the third section*/}
        <section className=''>

          <div className='text-center max-w-5xl mx-auto'>
            <h1 className='text-[37px] bg-gradient-to-r from-white to-[#777777] bg-clip-text text-transparent pb-2'>Unveil Our Creative World</h1>

            <p className='text-[16px] text-[#CCCDCE]'>
            We believe our work speaks for itself—and so do our clients. Here's what some of our partners have to say about their experience with Klinker Studio.</p>
          </div>

          <div className='flex justify-center  pt-20'>
            <img src={klinkerReviews} alt="klinker good reviws"/>
          </div>
        </section>
        {/*the last section */}
        <section className='mt-40'>

          <div className='text-center max-w-5xl mx-auto'>
            <h1 className='text-[37px] bg-gradient-to-r from-white to-[#777777] bg-clip-text text-transparent pb-2'>Stay in the Loop</h1>

            <p className='text-[16px] text-[#CCCDCE]'>
            Subscribe with your email to get the latest news, updates, and exclusive content from Klinker Studio.</p>
          </div>

          <div className='flex justify-center relative pt-20'>
            <img src={purpleSquare} alt="purpleSquare" />

              <div className='flex items-center gap-10 absolute   top-1/2'>
                <div className=''>
                  <input type='text' name="emailAdressStudio" placeholder='Enter your email address' className=' text-white text-[24px] w-[740px] h-[95px] p-4 focus:outline-none backdrop-blur-[60px] border  rounded-[24px] pl-10'/>
                </div>

                <div className='bg-white px-12 py-8 rounded-[24px] cursor-pointer'>
                  <button className='text-[20px]  font-semibold cursor-pointer'>Subscribe</button>
                </div>
              </div>
              

          </div>
          
          <></>
          
        </section>
      </main>
    </div>
  );
}

export default Studio;
