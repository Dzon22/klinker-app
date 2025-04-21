import { useParams } from 'react-router-dom'
import klinkerLogo from '../assets/Projects/klinkerLogo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import inkyhouse1 from "../assets/Projects/inkyhouse2.svg";
import inkyhouse2 from "../assets/Projects/inkyhouse3.svg";
import userProfile from '../assets/Projects/abdouArtistpic.svg'

function ProjectDetails() {
  const { name } = useParams()
  const [inkyhousePics, setInkyhousePics] = useState([inkyhouse1,inkyhouse2]);
  const [displayedPhoto,setDisplayedPhoto] = useState(inkyhouse1);
  const [isClicked,setIsClicked] = useState('')
 return (
    <>
    {/* Header */}
      <header className='flex items-center justify-between p-10  mx-10' style={{ fontFamily: 'Poppins, sans-serif' }}>
  
        {/*Logo */}
        <div className='flex-1 justify-center cursor-pointer' >
          <img onClick={() => nav(`/`)}src={klinkerLogo} alt="klinkerLogo"/>
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
      {/*Main */}
      <main className=' flex justify-center flex-col items-center '>
        {/*first section*/}
        <section className='mt-30 max-w-4xl mx-auto w-full'>
          <div className=''>
            <div className=''>
              <h1 className='text-black sm:text-xl md:text-2xl lg:text-3xl font-semibold'>E-Commerce Website for <span className='text-[#FFA751]'>{name}</span></h1>
            </div>

            <div className='mt-10'>
              <div className='md:w-[900px] md:h-[500px] sm:w-[700px] sm:h-[300px] shadow-2xl max-w-4xl '>
                <img src={displayedPhoto} alt='inkyhouse picture' className='h-full w-full object-containe '/>
              </div>
            </div>

            <div className='flex rounded gap-10 mt-10 '>
              {inkyhousePics.map((inky,key) => {
                return(
                  <div onClick={() => {
                    setIsClicked(key)
                    setDisplayedPhoto(inky)
                  }
                  } key={key} className={`h-60 w-60 rounded shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer ${isClicked === key && "border-2 border-[#FFA751]"}`}>
                    <img src={inky} alt={`inky${key}`} className='h-full w-full object-containe'/>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        {/*seconde section(description)*/}
        <section className='mt-10 text-left max-w-4xl mx-auto w-full '>
          <h1 className='text-[40px] font-bold text-[#0a0a0a] mb-6'>Project Description:</h1>

          <ul className="list-disc pl-6 space-y-12 text-3xl text-[#2B2B2B]">
            <li><span className='font-bold text-black'>User-Centric Design:</span> A modern, minimalist interface that enhances user experience with high-quality product visuals, intuitive navigation, and streamlined search and filter functionalities.</li>
            <li><span className='font-bold text-black'>Responsive Development:</span> Ensures an optimal shopping experience across desktops, tablets, and smartphones.</li>
            <li><span className='font-bold text-black'>Robust Functionality:</span> Integrated secure payment gateways, real-time inventory management, personalized recommendations, and more.</li>
            <li><span className='font-bold text-black'>Data-Driven Insights:</span> Built-in analytics and reporting tools help track sales, customer behavior, and drive decisions.</li>
          </ul>

          <p className='mt-6 text-3xl text-[#2B2B2B]'>
            This project exemplifies our commitment to delivering visually appealing and technically robust digital solutions that drive business growth.
          </p>
        </section>

        {/* Client Reviwe */}
        <section className="mt-20 max-w-4xl mx-auto w-full ">
        <h1 className='text-[40px] font-bold text-[#0a0a0a] mb-6'>Client Feedback:</h1>
        <div className="flex gap-4 items-start">
            <img src={userProfile} alt="Client avatar" className="w-14 h-14 rounded-full" />
            <div>
              <p className='font-semibold text-2xl'>Sayeh Abdou </p>
              <p className=' mt-5 relative text-3xl'>
                Klinker Studio exceeded our expectations. They delivered a robust, feature-rich e-commerce solution on time and within budget. The website has transformed our online presence, significantly improving user engagement and sales. We highly recommend their services for any digital project.
              </p>
            </div>
          </div>
        </section>
       
      </main>

  </>
  )}


export default ProjectDetails
