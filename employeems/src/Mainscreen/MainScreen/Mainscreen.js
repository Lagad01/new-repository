import React from 'react'
import Navbar from '../Navbar'
import { Routes,Route } from 'react-router-dom'
import AllEmployees from '../Employees/AllEmployees'
import AddEmployee from '../Employees/AddEmployee/AddEmployee'
import Sidebar from '../Sidebar'
import { useState } from 'react';
import Addemployeemanual from '../Employees/AddEmployee/AddEmployeeManual/AddEmployeemanual'
import ViewEmployeedetails from '../Employees/ViewEmployees/ViewEmployeedetails'
const Mainscreen = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div>
      <Routes>
        <Route path="employees" element={<AllEmployees  isSidebarOpen={isSidebarOpen}/>}/>
        <Route path="employees/addemployee" element={<AddEmployee/>} />
        <Route path="employees/addemployee/Addemployeemanual" element={<Addemployeemanual isSidebarOpen={isSidebarOpen}  />}/>
        <Route path="/employees/ViewEmployeeDetails" element={<ViewEmployeedetails isSidebarOpen={isSidebarOpen}/>}/>
         
          {/* <Route path="/projects"  element={<Projects/>} />
          {/* <Route path="/projects"  element={<Projects/>} />
          <Route path="/Attendence" element={<Attendence/>} />
          <Route path="/payroll" element={<Payroll/>} />
          <Route path="/jobs" element={<jobs/>} />
          <Route path="/candidates" element={<Candidates/>} />
          <Route path="/Leaves" element={<Leaves/>} />
          <Route path="/Holidays" element={<Holidays/>} />
          <Route path="/Settings" element={<Settings/>} /> */}
      </Routes>
    </div>
    </div>
  )
}

export default Mainscreen;
