


import React, { useState } from 'react';
import './AddEmployee.css';

import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';


 const AddEmployee = () => {
  const [showarrow, setShowarrow] = useState(false);
  const navigate= useNavigate();
 
  const handleArrowClick = () => {
    setShowarrow(true);
    navigate(`/employees/addemployee/Addemployeemanual`);

  };
  // const router = useRouter();
  return (
    <div className="container-fluid bg-purple">
       <img src="addemployee.png" className='logo' alt="Employeeimage" />
      <h2 className="text-center mt-5 mb-4  ml-100 text-lightblack">Add Employee</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {/* <div className="row mb-4"> */}
            <div className="row-md-4">
              <div className="box purple-box mb-4">
              <span className="bi bi-chevron-right arrow-icon text-purple" onClick={handleArrowClick} style={{ fontSize: '2rem',marginLeft:"88%", color: 'white', cursor: 'pointer' }}></span>
                <h2 className="box-heading">Import Add Employee</h2>
               
                <p className="box-text">Some text describing the import add employee feature.</p>
              
                
              </div>
            </div>
            <div className="row-md-4">
              <div className="box white-box mb-4">
              <span className="bi bi-chevron-right arrow-icon text-purple" onClick={handleArrowClick} style={{ fontSize: '2rem',marginLeft:"88%", color: 'white', cursor: 'pointer' }}></span>
                <h2 className="box-heading1">Request via Link</h2>
                <p className="box-text2">Some text describing the request via link feature. </p>
               
              </div>
            </div>
            <div className="row-md-4">
              <div className="box purple-box mb-4">
              <span className="bi bi-chevron-right arrow-icon text-purple" onClick={handleArrowClick} style={{ fontSize: '2rem',marginLeft:"88%", color: 'white', cursor: 'pointer' }}></span>
                <h2 className="box-heading2">Enter Manually</h2>
                <p className="box-text3">Some text describing the enter manually feature.
                </p>
               
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
 }
export default AddEmployee;
