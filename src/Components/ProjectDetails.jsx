import { useParams } from 'react-router-dom'

function ProjectDetails() {
  const { name } = useParams()

 return (
    <>
    {/*header*/}
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

  </>
  )}


export default ProjectDetails
