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

const Studio = () => {
  const nav = useNavigate();
  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img src={backGround} alt="BackGround" className="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 space-y-8 px-4">
          <p className="text-[64px] text-white leading-snug" style={{ fontFamily: 'Jost, sans-serif' }}>
            we transform ideas into breathtaking<br />
            visual stories.<span className="text-white"> Film </span>
            <span className="bg-gradient-to-r from-white via-[#ED90D1] to-[#ED1CAE] bg-clip-text text-transparent">Making...</span>
          </p>
          <div className="p-[2px] rounded-3xl bg-gradient-to-b from-white to-[#ED1CAE]">
            <button className=" cursor-pointer text-white text-[21px] rounded-3xl px-8 py-4 bg-neutral-900 backdrop-blur-[60px] bg-opacity-80 w-full h-full">
              Get Started
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="absolute top-0 left-0 w-full p-6 px-10 z-20">
          <div className="absolute inset-0 opacity-[0.86] bg-[#D0D0D0]/10 backdrop-blur-[60px] rounded-none"></div>
          <div className="flex justify-between items-center relative z-10">
            {/*logo*/}
            <img onClick={() => nav(`/`)}className="cursor-pointer" src={klinkerLogo} alt="klinker logo" />

            <nav>
              <ul className="text-white flex gap-18 text-[24px] ">
                <li><Link to="/" className='hover:underline cursor-pointer'>Home</Link></li>
                <li><Link className='hover:underline cursor-pointer'>Gallerie</Link></li>
                <li><Link className='hover:underline cursor-pointer'>Contact Us</Link></li>
              </ul>
            </nav>
            <div className="p-[2px] rounded-3xl bg-gradient-to-b from-white to-[#ED1CAE]">
              <button className="cursor-pointer text-white text-[21px] rounded-3xl px-8 py-4 bg-neutral-900 backdrop-blur-[60px] bg-opacity-80 w-full h-full">
                Get Started
              </button>
            </div>
          </div>
        </header>
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
