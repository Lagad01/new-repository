

import { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';



import { HiMiniUserGroup } from "react-icons/hi2";
import { TbSquareRoundedChevronsRightFilled } from "react-icons/tb";
import { LuCalendarCheck } from "react-icons/lu";
// import { TbSquareRoundedChevronsLeftFilled } from "react-icons/tb";
import { FaPeopleRoof } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { BiDollarCircle } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { PiNotepad } from "react-icons/pi";
import { MdCalendarMonth } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import { AiOutlineMenuFold } from "react-icons/ai";
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";
import { useEffect } from 'react';
// import MyToggle from './MyToggle';

// import Employees from './Employees';
// import Projects from './Projects'
// import { AddEmployee } from './AddEmployee';
// import { Attendence } from './Attendence';
// import { Payroll } from './Payroll';
// import { Candidates } from './Candidates';
// import { Leaves } from './Leaves';
// import { Holidays } from './Holidays';
// import { Settings } from './Settings';


const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
  const [active1, setActiveLink] = useState('');
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(false);
};
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const toggleLightMode = () => {
    setIsDarkMode(true);
  };
  
  const linkStyles = {
    textDecoration: 'none',
    color: isDarkMode ? '#fff' : '#000',
    


  };


  return (
    <>
      <div  className="dboardcontainer" style={{  backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>

        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{width: isSidebarOpen ? '13%' : '5%'}}>

          <div className="menu" >
            <img src="HRXcelimage.jpg" className='hrexcelimg' alt="Employee" />
            {/* <img src="A.png" className='hrexcelimg' alt="Employee" /> */}

            

            <h2 className="hrexcelname" style={{ color: isDarkMode ? "#fff" : "black" }}>
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}>
                HRXcel
              </span></h2>
            <div className="toggle-btn" onClick={toggleSidebar}>

              {isSidebarOpen ? (
                <TbSquareRoundedChevronLeftFilled className='gricon' size={32} />
              ) : (

                <TbSquareRoundedChevronRightFilled className='gricon' size={24} />
              )}

            </div>


            {/* <div onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
              <AiOutlineMenuFold size={24} color={isDarkMode ? '#fff' : '#000'} />
            </div> */}

            {/* <h3 className='dboard'><RxDashboard  className='sidebaricons'/>
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}>
                DashBoard
              </span> </h3>
            <br /> */}
           
           <Link to="/dashboard"  style={linkStyles}>
    <RxDashboard  title='Dashboard' size={20}  style={{marginTop: isSidebarOpen ? '10%' : '40%' }}/>
    <span className={isSidebarOpen ? 'link-text' : 'hide-text'}  > <h6>DashBoard</h6></span>
</Link>
           
             

           
            <Link to="/employees"  style={linkStyles}>
    <HiMiniUserGroup title='Employees' size={20}  style={{marginTop: isSidebarOpen ? '10%' : '40%' }} />
    <span className={isSidebarOpen ? 'link-text' : 'hide-text'}> <h6>All Employees</h6></span>
</Link>
            <Link to="/projects" style={linkStyles}>
              <FaPeopleRoof  title='All Departments' size={20}  style={{marginTop: isSidebarOpen ? '10%' : '40%' }}  />
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'} > <h6 className='sidename'>All Departments</h6></span>
            </Link>
            <Link  to="/attendance" style={linkStyles}>
            <LuCalendarCheck  title='Time Sheet' size={20}  style={{marginTop: isSidebarOpen ? '10%' : '40%' }} />
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'>Time Sheet</h6></span>
            </Link>
           

            <Link  to="/payroll" style={linkStyles} >
              <BiDollarCircle title='Payroll'  size={20} style={{marginTop: isSidebarOpen ? '10%' : '40%' }} />
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'>Payroll</h6></span>
            </Link>
            <Link  to="/jobs" style={linkStyles} >
              <IoBagCheckOutline title='Jobs' size={20}  style={{marginTop: isSidebarOpen ? '10%' : '40%' }}/>
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'> Jobs</h6></span>
            </Link>
            <Link  to="/candidates" style={linkStyles} >
              <SlPeople  title='Candidates' size={20} style={{marginTop: isSidebarOpen ? '10%' : '40%' }}/>
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}> <h6 className='sideheads'> Candidates</h6></span>
            </Link>
            <Link  to="/leaves" style={linkStyles}>
              <PiNotepad  title='Leaves' size={20} style={{marginTop: isSidebarOpen ? '10%' : '40%' }} />
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'>Leaves</h6></span>
            </Link>
            <Link to="/holidays" style={linkStyles} >
              <MdCalendarMonth title='Holidays' size={20} style={{marginTop: isSidebarOpen ? '10%' : '40%' }} />
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'>Holidays</h6></span>
            </Link>
            <Link to="/settings" style={linkStyles} >
              <IoSettingsOutline title='Settings'  size={20} style={{marginTop: isSidebarOpen ? '10%' : '40%' }}/>
              <span className={isSidebarOpen ? 'link-text' : 'hide-text'}><h6 className='sideheads'>Settings</h6></span>
            </Link>
     <div className={isSidebarOpen ? 'link-text' : 'hide-text'}>
              
               {/* <MyToggle state={isDarkMode} setState={setIsDarkMode}/> */}
            </div>
            </div>
          </div>
        </div>
        
        
        


       
      
    </>
  );
};

export default NavBar;