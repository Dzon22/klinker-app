import logo from "../assets/Home/klinker-logo.png";
import manLaptopPhone from "../assets/Home/manLaptopPhone.png";
import iphone15Phone from "../assets/Home/iphone15RosePhone.png";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import manLaptop from "../assets/Home/manLaptop.png";
import iphone15 from "../assets/Home/iphone15Rose.png";
import yellowline from '../assets/Home/yellowLinePc.svg';
import yellowlinePhone from '../assets/Home/yellowLinePhone.svg';
import appIcone from "../assets/Home/phoneIcon.png";
import WebIcone from "../assets/Home/worldIcon.png";
import DesktopIcone from "../assets/Home/desktopIcon.png"
import ladyRocket from "../assets/Home/lady with rocket.png";
import appExemple from "../assets/Home/applicationExemple.png";
import ecomExemple from "../assets/Home/ecomerceExemple.png";
import appExempleBig from "../assets/Home/applicationExempleBigger.png";
import threeCards from "../assets/Home/threeCards.png";
import purpleSquare from '../assets/Home/purpleSquare.svg';
import manHoldingPc from '../assets/Home/man holding pc.png';
import arrowRight from '../assets/Home/arrow right.svg';
import yellowsquare from '../assets/Home/yellowSquare.svg';
import manHodingPcLeft from '../assets/Home/man holding pc left eye.svg';
import arrowRightSmall from '../assets/Home/arrowRightPhone.svg';
import userIcone from '../assets/Home/userIcone.svg';
import EmailIcone from '../assets/Home/emailIcone.svg';      

import desktopImage from '../assets/Home/desktop image.svg'
import desktopImagePhoneView from '../assets/Home/desktop image(phoneView).svg';

import mapIcone from "../assets/Home/mapIcone.svg";
import phoneIcone from "../assets/Home/phoneIcone.svg";
import smsIcone from "../assets/Home/smsIcone.svg";

import YoutubeIcone from "../assets/Home/YoutubeIcone.svg";
import TwitterIcone from "../assets/Home/TwitterIcone.svg";
import FacebookIcone from "../assets/Home/FacebookIcone.svg";
import InstagramIcone from "../assets/Home/InstagramIcone.svg";

import map from '../assets/Home/map.svg';
import klinkerFooterLogo from '../assets/Home/klinkerFooterLogo.svg'
const Home = () => {
  return(
    <>
    {/*Header*/}
    <header className=" hidden md:flex items-center justify-between m-8 " style={{ fontFamily: 'Poppins, sans-serif' }}>

      <div>
        <img src={logo} alt="klinker logo" className="cursor-pointer"/>
      </div>
      {/*navigation*/ }
      <nav>
        <ul className="flex gap-8 text-2xl  " >
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link className="hover:underline" to="/projects">Projects</Link></li>
          <li>
          <ScrollLink
            className="hover:underline cursor-pointer"
            to="contact"
            smooth={true}
            duration={1200}
          >
            Contact Us
          </ScrollLink>
          </li>
          <li><Link className="hover:underline" to="/studio">Studio</Link></li>
        </ul>
      </nav>
      {/*My account button*/}
      <div>
        <button className="text-white bg-[#FFA300] px-[40px] py-[14px] rounded-2xl cursor-pointer " >My account</button>
      </div>

    </header>

    {/*Main*/}
    <main className="" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/*the first section(pc view)*/ }
      <section className="hidden md:block">

        <div className="flex justify-center mt-20 md:mb-8">

          <p className="text-[#291682] font-semibold  text-[85px]  ">
            Your Digital Partner
          </p>
        </div>

       <div className="flex justify-center">
          <button className="text-white bg-[#FFA300] px-[40px] py-[14px] rounded-2xl  cursor-pointer" >Get Started</button>
       </div>
        
        <div className="flex justify-center my-16">

          <div>
            <img src={manLaptop} alt="man putting his hand on top of a laptop"/>
          </div>

          <div>
            <img src={iphone15} alt="iphone 15 mockup"/>
          </div>

        </div>

        <div className=" mx-auto max-w-6xl">
          <p className="font-semibold text-[40px]" >trusted by company</p>
          <ul className="text-[#CCC7C7] font-semibold text-[40px] flex gap-14">
            <li>Resolu</li>
            <li>Order</li>
            <li>femina</li>
            <li>dela3a</li>
          </ul>
        </div>

        <div className="flex justify-center gap-48 px-10 mt-10 text-white bg-[#FFA300] rounded-4xl mx-auto max-w-6xl p-6 leading-20" >
          <div className="flex flex-col  items-center ">
            <p className="text-[85px]">3y</p>
            <p className="text-[37px]">Experience</p>
          </div>

          <div className="flex flex-col  items-center">
            <p className="text-[85px]">32</p>
            <p className="text-[37px]">Projects</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[85px]">12</p>
            <p className="text-[37px]">Partners</p>
          </div>
        </div>
      </section>
      {/*the first section (phoneView)*/}
      <section className="md:hidden">
        <div className=" flex mt-12 mx-5">

          <div className="relative flex flex-col">
            <p className=" font-semibold  text-[45px]  ">
              Your Digital Partner
            </p>
            <p className="text-[15px] text-[#353535]  ">
            We  Create . Develop<p>Innovate . Adevertise</p>
            </p>
          </div>
          <div className="">
            <img className ="absolute left-[284px] top-[65px]" src={iphone15Phone} alt="iphone 15 mockup"/>
            <img className ="absolute left-[168px] top-[160px]" src={manLaptopPhone} alt="man putting his hand on top of a laptop"/>
          </div>
        </div>
        
        <div className="flex justify-center mt-24">
          <button className="text-white bg-gradient-to-b from-[#C56BE3] via-[#7477DC] to-[#1F83D5] px-[40px] py-[14px] rounded-2xl " >Get Started</button>
        </div>

        
        <div className="flex justify-center mt-10">
          <div className="flex flex-col  items-center">
            <p className="font-semibold text-[17px]" >trusted by company</p>
            <ul className="text-[#CCC7C7] font-semibold text-[17px] flex gap-7">
              <li>Resolu</li>
              <li>Order</li>
              <li>femina</li>
              <li>dela3a</li>
            </ul>
          </div>
       </div>

        <div className="flex flex-col gap-10 px-10 mt-10 text-white bg-gradient-to-b from-[#C56BE3] via-[#7477DC] to-[#1F83D5] rounded-4xl mx-20 p-4" >
          <div className="flex flex-col  items-center">
            <p className="text-[60px]">3y</p>
            <p className="text-[20px]">Experience</p>
          </div>

          <div className="flex flex-col  items-center">
            <p className="text-[60px]">32</p>
            <p className="text-[20px]">Projects</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[60px]">12</p>
            <p className="text-[20px]">Partners</p>
          </div>
        </div>
        
      </section>
      {/*the second section (Services)*/}
      <section className="mt-40">

        <div className="flex flex-col items-center md:max-w-5xl md:mx-auto mx-2">
          <p className="text-[40px] md:text-[62px] text-[#2B107D]" >Our Services</p>

          <p className="text-center text-[#474747] text-[13px] md:text-[25px]   " >
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:mx-auto  mx-10 mt-30 max-w-6xl" >

          <div className="flex flex-col space-y-4 p-8 shadow-2xl rounded-4xl w-[340px]">

            <div>
              <img src={WebIcone} className="bg-[#2A0F7C] p-2 rounded-xl" alt="web Icone"/>
            </div>

            <p className="text-[27px] text-[#2A0F7C] font-semibold">Web Dev</p>

            <p className="text-[#474747] text-[14px]">Web application e-com website and web designe and landing pages </p>

          </div>

          <div className="flex flex-col space-y-4 p-8 shadow-2xl rounded-4xl w-[340px]">
            <div>
              <img src={appIcone} className="bg-[#2A0F7C] p-2 rounded-xl" alt="app Icone"/>
            </div>
            <p className="text-[27px] text-[#2A0F7C] font-semibold">Mobile Dev</p>

            <p className="text-[#474747] text-[14px]">Custom cross-plateforme mobile app ready to market and Deployed </p>
          </div>

          <div className="flex flex-col space-y-4 p-8 shadow-2xl rounded-4xl w-[340px]">

            <div>
              <img src={DesktopIcone} className="bg-[#2A0F7C] p-2 rounded-xl" alt="Desktop Icone"/>
            </div>

            <p className="text-[27px] text-[#2A0F7C] font-semibold">Desktop App</p>

            <p className="text-[#474747] text-[14px]">Custom desktop app for company in windows , lunix and mac os</p>
          </div>

        </div>

        {/*the yellow box (pc view)*/}

        <div className="hidden relative md:flex bg-[#FFA300] rounded-4xl  mt-60 p-10 max-w-6xl mx-auto" >

          <div className="flex flex-col space-y-4">
            
            <p className="font-bold text-[32px] text-white">Special offre for start-up</p>

            <p className=" text-[17px] text-white">Your journey starts now. Let's build it together.</p>

            
            <div>
              <button className="text-[#FFA300] bg-white rounded-3xl px-[26px] py-[15px] cursor-pointer">
              Claim Your Offer
              </button>
            </div>
          </div>
 
          <div className="absolute right-20 -bottom-28">
           <img src={ladyRocket} alt="lady with a rocket beside here"/>
          </div>

          <div>
            <p className="absolute right-8 bottom-15 font-extrabold text-[56px] text-white leading-none">15%<br/>OFF</p>
          </div>
        </div>

        {/*the yellow box (phone view)*/}

        <div className="md:hidden relative flex flex-col bg-gradient-to-l from-[#FFA751] via-[#FFC455] to-[#FFE259] rounded-4xl  mt-40 p-8 w-full " >

          <div className="flex " >

            <div className="flex flex-col space-y-4">
              <p className="font-bold text-[20px] text-white leading-none">Special offre for <span className="font-bold text-[30px] text-white"><br/>Startups</span></p>
              <p className=" text-[11px] text-white">Your journey starts now. Let's build it together.</p>
            </div>
            
            <div className="">
              <button className=" bg-white rounded-xl px-4 py-2 font-bold text-[9px] whitespace-nowrap cursor-pointer">
              Claim Your Offer
              </button>
            </div>
          </div>

          <div className="pb-80 pt-10">
            <p className=" text-center font-extrabold text-[56px] text-white leading-none">15%<br/>OFF</p>
          </div>

          <div className="absolute -bottom-20">
           <img src={ladyRocket} alt="lady with a rocket beside here"/>
          </div>

          
        </div>
      </section>
      {/*the third section (Services)*/}
      <section className="mt-40">

        <div className="flex flex-col items-center mb-20 md:max-w-5xl md:mx-auto mx-2">
          <p className="  text-[40px] md:text-[62px] text-[#2B107D]" >Our Projects</p>

          <p className="text-center text-[#474747] text-[13px] md:text-[25px]  md:mx-20 " >
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          </p>
        </div>

        <div className="flex flex-col items-center gap-10" >

          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 space-y-4 md:space-y-0">
            <div className="flex flex-col space-y-2 md:p-8 shadow-xl/20 md:w-[495px] w-[300px] justify-center items-center rounded-[18.61px] ">
              <p className="text-[55px] font-semibold text-neutral-700 ">APP</p>
              <div>
                <img src={appExemple} alt="application mobile exemple"/>
              </div>
            </div>

            <div className="flex flex-col space-y-2 items-center justify-center md:p-8 p-4 md:w-[495px] w-[300px] shadow-2xl rounded-[18.61px]   ">
              <p className="text-[55px] font-semibold text-neutral-700">ECOM</p>
              <div className="pl-12 ">
                <img src={ecomExemple} alt="ecommerce website exemple"/>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex relative shadow-2xl p-8 rounded-[18.61px] ">
            <p className="text-[176px] font-semibold text-neutral-700 ">SOFTWARE</p>
            <div>
              <img src={desktopImage} alt="desktop Image" className="absolute -bottom-3 left-1/3"/>
            </div>
          </div>

          {/*for phone view*/}
          <div className="md:hidden relative shadow-2xl p-8 rounded-[18.61px] w-[300px] flex flex-col justify-center items-center ">
            <p className="text-[67px] font-semibold text-neutral-700 ">SOFT</p>
            <div>
              <img src={desktopImagePhoneView} alt="desktop Image" className=""/>
            </div>
            <p className="text-[67px] font-semibold text-neutral-700 ">WARE</p>
          </div>

          {/*
          <div className="shadow-2xl p-8 rounded-[18.61px]">
           <img src={pcExemple} alt="SOFTWARE pic"/>
          </div>*/}
          <p className="text-[36px] text-[#301680] text-center hover:underline cursor-pointer">View All</p>
        </div>
        {/*the fourth section (Process)*/}
        <section className="mt-40" >

          <div className="flex flex-col items-center mb-20 md:max-w-5xl md:mx-auto mx-2">
            <p className="  text-[40px] md:text-[62px] text-[#FABB18]" >Our Process</p>

            <p className="text-center text-[#474747] text-[13px] md:text-[25px]  md:mx-20 " >
            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            </p>
          </div>
          
          <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center justify-items-center">
            <div className="w-full flex justify-center">
              <img src={appExempleBig} alt="application mobile exemple mor bigger" className="max-w-full" />
            </div>

            <div className="w-full flex justify-center">
              <img src={threeCards} alt="three cards" className="max-w-full" />
            </div>
          </div>
          </div>
          {/*the purple square (pc view)*/}
          <div className="hidden md:flex justify-center relative max-w-7xl mx-auto">

            <img src={purpleSquare} alt="purpleSquare"/>

            <p className=" absolute top-10 left-30 text-[46px] text-white">Start your experience with k-linker</p>

            <p className="absolute text-[20px] top-33 left-30 text-white leading-7">simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/>has been the industry's standard dummy text ever since the 1500s</p>

            
            <div className="absolute right-0 bottom-0">
              <img src={manHoldingPc} alt="man holding pc"/>
            </div>

            <div className="absolute bottom-0 left-22   " >
              <button className="cursor-pointer bg-[#FFA300] text-white px-[55px] py-[26px] text-[32px] rounded-3xl flex items-center justify-center gap-4">
                Start a Proposal <img src={arrowRight}/>
              </button>
            </div>
            
          </div>

          {/*the yellow square (phone view)*/}
          <div className="md:hidden flex justify-center items-center relative max-w-sm mx-auto mt-20">

            <img src={yellowsquare} alt="yellowSquare"/>

            <p className=" font-bold absolute top-2 left-10 text-[24px] text-white">Start your experience<br/> with k-linker</p>

            <p className="absolute text-[14px] top-22 left-10 text-white leading-5">simply dummy text of the<br/> printing and typesetting industry.<br/> Lorem Ipsum has been the<br/> industry's standard dummy text<br/> ever since the 1500s</p>

            
            <div className="absolute right-0 bottom-0">
              <img src={manHodingPcLeft} alt="man holding pc left eye"/>
            </div>
             
            <div className="absolute bottom-0 left-4   ">
              <button className="bg-gradient-to-r from-[#FFE259] to-[#FFA751] text-white px-2 py-4 text-[12px] rounded-xl flex items-center justify-center gap-2">
                Start a Proposal <img src={arrowRightSmall}/>
              </button>
            </div>
            
          </div>

        </section>

        <div className="hidden md:flex mt-30 w-full">
          <img src={yellowline} alt="yellow line" className="w-full"/>
        </div>
        
        <div className="md:hidden mt-14 w-full">
          <img src={yellowlinePhone} alt="yellow line for phone view" className="w-full"/>
        </div>

      </section>
      {/*the fifth section (Contact Us)*/}
      <section className="mt-40" id="contact" >

        <div className="flex flex-col items-center mb-20 md:max-w-5xl md:mx-auto mx-2">
          <p className="  text-[40px] md:text-[62px] text-[#FABB18]" >Contact Us</p>

          <p className="text-center text-[#474747] text-[13px] md:text-[25px]  md:mx-20 " >
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
          </p>
        </div>

        <div className="flex justify-center items-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/*Form*/}
            <div className="flex flex-col space-y-4">
              <div className="p-4  text-[20px] text-[#737373] border-1 border-[#9D9D9D] rounded-xl flex gap-2 ">
                <img src={userIcone} alt="userIcone"/>
                <input type="text" name="FullName" id="FullName" placeholder="Full Name" className="w-[400px] focus:outline-none"/>
              </div>
              
              <div className="p-4  text-[20px] text-[#737373] border-1 border-[#9D9D9D] rounded-xl flex gap-2">
                <img src={EmailIcone} alt="EmailIcone"/>
                <input type="text" name="EmailAddress" id="EmailAddress" placeholder="Email Address" className="w-[400px] focus:outline-none"/>
              </div>

              <div className="p-4  text-[20px] text-[#737373] border-1 border-[#9D9D9D] rounded-xl">
                <textarea type="text" placeholder="Your Message" name="message" id="message" className="w-full h-32 resize-none outline-none" />
              </div>

              <div className="p-4 cursor-pointer bg-gradient-to-r from-[#FFE259] to-[#FFA751] rounded-xl flex justify-center">
                <button className="text-white text-[20px] cursor-pointer">Envoyer le message</button>
              </div>
            </div>

            {/*Klinker Agency Information*/}
            <div className="flex justify-center">
              <div className="flex flex-col space-y-6">
                <div className="flex gap-4">
                  <img src={mapIcone} alt="location icone"/>
                  <p>wiam sidi djilali sidi bel-abbes algerie</p>
                </div>

                <div className="flex gap-4">
                  <img src={phoneIcone} alt="phone icone"/>
                  <p>+213 6 99 54 23 92</p>
                </div>

                <div className="flex gap-4">
                  <img src={smsIcone} alt="sms icone"/>
                  <p>contact@k-linker.com</p>
                </div>

                <div>
                  <ul className="flex gap-6">
                    <li><img src={YoutubeIcone} alt="YoutubeIcone" className="cursor-pointer"/></li>
                    <li><img src={InstagramIcone} alt="InstagramIcone" className="cursor-pointer"/></li>
                    <li><img src={FacebookIcone} alt="FacebookIcone" className="cursor-pointer"/></li>
                    <li><img src={TwitterIcone} alt="TwitterIcone" className="cursor-pointer"/></li>
                  </ul>
                </div>

                <div>
                  <img src={map} alt="map"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      {/*Footer*/}
        <footer className="bg-gradient-to-r from-[#FFE259] to-[#FFA751] mt-40 pb-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center p-14">
              <img src={klinkerFooterLogo} alt="klinker logo footer"/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-8">
              
              <div className="flex flex-col space-y-6 font-semibold p-6">
                <h1 className="font-semibold text-xl mb-6">Reach Us</h1>
                <div className="flex gap-4">
                  <img src={mapIcone} alt="location icone"/>
                  <p>wiam sidi djilali sidi bel-abbes algerie</p>
                </div>

                <div className="flex gap-4">
                  <img src={phoneIcone} alt="phone icone"/>
                  <p>(+213) 6 99 54 23 92</p>
                </div>

                <div className="flex gap-4">
                  <img src={smsIcone} alt="sms icone"/>
                  <p>contact@k-linker.com</p>
                </div>
              </div>

              <div className="flex justify-center items-center md:gap-20 gap-10 p-4">
                <div className="flex flex-col space-y-4 h-[150px]">
                  <h1 className="font-semibold text-xl mb-6">Company</h1>
                  <ul className="flex flex-col space-y-4">
                    <li className="cursor-pointer hover:underline whitespace-nowrap">Who We Are ?</li>
                    <li className="cursor-pointer hover:underline">Contact</li>
                    <li className="cursor-pointer hover:underline">Solution</li>
                  </ul>
                </div>

                <div className="flex flex-col space-y-4 h-[150px]">
                  <h1 className="font-semibold text-xl mb-6">Legal</h1>
                  <ul className="flex flex-col space-y-4">
                    <li className="cursor-pointer hover:underline">Privacy Policy</li>
                    <li className="cursor-pointer hover:underline whitespace-nowrap">Terms & Services</li>
                    <li className="cursor-pointer hover:underline">Team</li>
                  </ul>
                </div>

                <div className="flex flex-col space-y-4 h-[150px]">
                  <h1 className="font-semibold text-xl mb-6 whitespace-nowrap">Quick Links</h1>
                  <ul className="flex flex-col space-y-4">
                    <li className="cursor-pointer hover:underline">Downloads</li>
                    <li className="cursor-pointer hover:underline">Forum</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </footer>
    </main>
    </>
  )
}


export default Home