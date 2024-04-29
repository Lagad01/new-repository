import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { RxDashboard } from "react-icons/rx";
import './Sidebar.css'; // Import your sidebar CSS file
import { TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { TbSquareRoundedChevronLeftFilled } from "react-icons/tb";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const toggleDarkMode = () => {
        setIsDarkMode(false);
    };

    return (
<>
            <div className="dboardcontainer" style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000' }}>

                <div className="sidebar" style={{ width: isSidebarOpen ? '225px' : '80px', backgroundColor: isDarkMode ? '#333' : '#f0f0f0' }}>


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
                            <h3 className='dboard'><RxDashboard />
                                <span className={isSidebarOpen ? 'link-text' : 'hide-text'}>
                                    DashBoard
                                </span> </h3>
                        </div>
                        <Navbar expand="lg" className={isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}>
                            <Container fluid>
                               

                                            <Link to="/dashboard/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                            <Link to="/employees" className="nav-link">All Employees</Link>
                                        
                            </Container>
                        </Navbar>
                        </div>
                        </div>
                    </>
                    );
};

                    export default Sidebar;
