


import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import './AddEmployeemanual.css'; 
import { TbMathGreater } from "react-icons/tb";

import { BiNotepad } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

// import Link from "next/link";
// import EducationAndSkillSet from './education';
// import DocumentComponent from './Documents';
import Immigration from './Immigration/Immigration';

import Card from 'react-bootstrap/Card';
import { BorderBottom } from 'react-bootstrap-icons';
import Education from './EducationProfessional/Education';
import {Personal} from './Personal/personal';
import Documents from './Documents/Documents';



const CustomTab = ({ title, isActive, onClick }) => (
  <div className={`custom-tab ${isActive ? 'active' : ''}`} onClick={onClick}>
    {title}
  </div>
);


 const Addemployeemanual = ({isSidebarOpen}) => {
  const [activeTab, setActiveTab] = useState("personal");
  // const [immigrationStatus, setImmigrationStatus] = useState(null);
  const [selectedImmigrationOption, setSelectedImmigrationOption] = useState(null);
  const [isImmigrationOptionsOpen, setIsImmigrationOptionsOpen] = useState(false);
  const handleTabClick = (tabKey) => {
    if (tabKey === 'immigration' && !isImmigrationOptionsOpen) {
    
      setIsImmigrationOptionsOpen(true);
    } else {
      setActiveTab(tabKey);
      setIsImmigrationOptionsOpen(false); 
    }
  };
  
  const handleImmigrationOptionChange = (option) => {
    setSelectedImmigrationOption(option);
    setActiveTab('immigration'); 
    setIsImmigrationOptionsOpen(false); 
  };

  const toggleImmigrationOptions = () => {
    setIsImmigrationOptionsOpen(!isImmigrationOptionsOpen);
  };
  return (
    <div className='mainaddemployee' style={{transform:isSidebarOpen ? "translateX(5%)":"translateX(-4%)"}}>
      <h3 className='addemp'>Add  New Employee</h3>
      <p className='spanemployee'>
          All Employees &nbsp;<TbMathGreater/>&nbsp;Add New Employee 
        </p>
        <div className="custom-tabs-container" style={{width:isSidebarOpen ? "93%":"100%"}}>
      <div className="custom-tabs"  style={{borderBottom:"1px solid lightgrey"}}>
        <CustomTab
          title={<><IoPerson /> Personal Information</>}
          isActive={activeTab === 'personal'}
          onClick={() => handleTabClick('personal')}
        />
<div className="immigration-tab-wrapper">
        <CustomTab
          title={<><BsGlobe />
          Immigration Status</>}
          // isActive={activeTab === 'immigration' && !isImmigrationOptionsOpen}
          isActive={activeTab === 'immigration'}
          onClick={() => handleTabClick('immigration')}
          // onClick={() => window.open("/employees/add-employee/Immigration", "_self")}
        />
        <div className="dropdown-icon" onClick={() => setIsImmigrationOptionsOpen(!isImmigrationOptionsOpen)}>
        <RiArrowDropDownLine />
            </div>
            {activeTab === 'immigration' && isImmigrationOptionsOpen && (
              <div className="immigration-options">
                
                <div className="options-container">
                  <div className="option" onClick={() => handleImmigrationOptionChange("OPT")}>OPT</div>
                  <div className="option" onClick={() => handleImmigrationOptionChange("STEM-OPT")}>STEM-OPT</div>
                  <div className="option" onClick={() => handleImmigrationOptionChange("H1B")}>H1B</div>
                  <div className="option" onClick={() => handleImmigrationOptionChange("PERM")}>PERM</div>
                  <div className="option" onClick={() => handleImmigrationOptionChange("I-140")}>I-140</div>
                  <div className="option" onClick={() => handleImmigrationOptionChange("I-485")}>I-485</div>
                </div>
              </div>
            )}
          </div>

        <CustomTab
          title={<><IoBagCheckOutline /> Educational And Professional SkillSet</>}
          isActive={activeTab === 'professional'}
          onClick={() => handleTabClick('professional')}
        />

        <CustomTab
          title={<><IoDocumentTextOutline/> Documents</>}
          isActive={activeTab === 'documents'}
          onClick={() => handleTabClick('documents')}
        />
        {/* <CustomTab
          title={<><BiNotepad  /> Summary Set</>}
          isActive={activeTab === 'summary'}
          onClick={() => handleTabClick('summary')}
        /> */}
      </div>

      <div className="tab-content" >
       
        {activeTab === 'personal' &&  (
              <Personal/>
           ) }
        {activeTab === 'immigration' && (
             <div className="immigration-content">
             <Immigration selectedOption={selectedImmigrationOption} />
          
           </div>
              
            
          )}
        {activeTab === 'professional' &&  < Card sticky="top" className='doccard'>
              <Card.Body> 
              
<Education/>
              </Card.Body>
            </Card>
            }
           
            
        {activeTab === 'documents' && <div>{
           
           < Card sticky="top" className='doccard'>
              <Card.Body> 
              <Documents/>
              </Card.Body>
            </Card>
            }
            </div>}
            {/* {activeTab === 'summary' && <div>
            Summary Set
            </div>}
             */}

      </div>
    </div>
    </div>
  );
};
export default Addemployeemanual;
