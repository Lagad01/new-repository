import React, { useState } from 'react';

import './Documents.css';
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
// import Payrolldocuments from './Personaldocuments';
import Personaldocuments from './Personaldocuments';

import OnboardDocuments from './onBoarding';
import ProfessionalDocuemnts from './Professional';
// import Personaldocuments from '.Documents/Personaldocuments';

const Document= () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [selectedReportType, setSelectedReportType] = useState('general');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // const handleTabChange = (tab: string) => {
  //   setActiveTab(tab);
  // };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'reports') {
      setDropdownOpen(!dropdownOpen); // Toggle dropdown on Reports tab click
    } else {
      setDropdownOpen(false); // Close dropdown if another tab is clicked
    }
  };

  const handleReportOptionChange = (option) => {
    setSelectedReportType(option);
    setActiveTab('reports'); // Switch to Reports tab
    setDropdownOpen(false); // Close dropdown after option selection
  };

  
 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // const handleReportOptionChange = (option:any) => {
  //   setSelectedReportType(option);
  //   setActiveTab('reports');
  //   setDropdownOpen(false);
  // };


  return (
    <div className="document-container">
      <div className="custom-tabs-document">
        <button className={`custom-tab-document ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => handleTabChange('personal')}>Personal Documents</button>
        <button className={`custom-tab-document ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => handleTabChange('professional')}>Professional Documents</button>
        <button className={`custom-tab-document ${activeTab === 'onboarding' ? 'active' : ''}`} onClick={() => handleTabChange('onboarding')}>Onboarding Documents</button>
        {/* <button className={`custom-tab-document ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => handleTabChange('reports')}>Reports</button> */}
        
        {/* <button className={`custom-tab-document ${activeTab === 'o' ? 'active' : ''}`} onClick={() => handleTabChange('onboarding')}>Onboarding Documents</button> */}
       
                
        
      </div>

      <div className="tab-content-document">
        <div className={`tab-pane-document ${activeTab === 'personal' ? 'active' : ''}`}>
          
          <Personaldocuments/>
          {/* <PersonalDocuments/> */}
          
        </div>
        <div className={`tab-pane-document ${activeTab === 'professional' ? 'active' : ''}`}>
        <ProfessionalDocuemnts/>
       
        </div>
        <div className={`tab-pane-document ${activeTab === 'onboarding' ? 'active' : ''}`}>
        <OnboardDocuments/>
          
        </div>
        
         

         
               
             
        
        
      </div>
    </div>
  );
};

export default Document;
