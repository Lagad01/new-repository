

import React, { useState } from 'react';
import { IoPerson } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiNotepad } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

import { RiArrowDropDownLine } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import './Viewemployee.css';
// import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import { AiOutlineMail } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
// import { useSearchParams } from 'next/navigation';
// import A from '@public/A.png';
import { Modal, Button } from 'react-bootstrap';
// import { IoBagHandleSharp } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
// import '@styles/viewemployee.css';
import { CiEdit } from "react-icons/ci";
import ViewProfile from './viewprofile';
import { useParams } from 'react-router-dom';

import { AiOutlinePlusCircle } from "react-icons/ai";
const ViewEmployeeDetails = ({isSidebarOpen}) => {
  const [activeMainTab, setActiveMainTab] = useState("profile");
  const [activeInnerTab, setActiveInnerTab] = useState("personal");
  const [activeContactTab, setActiveContactTab] = useState("personal");
  //   const searchParams = useSearchParams()
  const params = useParams(); 
  const name = params.name;

  //   const search = searchParams.get('search');
  const [showEmergencyContactModal, setShowEmergencyContactModal] = useState(false);

  const handleEmergencyContactClick = () => {
    setShowEmergencyContactModal(true);
  };

  const handleCloseEmergencyContactModal = () => {
    setShowEmergencyContactModal(false);
  };


  const handleMainTabClick = (tabKey) => {
    setActiveMainTab(tabKey);
    setActiveInnerTab("personal");
  };

  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState([
    { label: 'First Name', value: 'Employee A' },
    { label: 'Middle Name', value: 'XXXX' },
    { label: 'Last Name', value: 'AXXXX' },
    { label: 'Designation', value: 'Manager' },
    { label: 'Gender', value: 'Male' },
    { label: 'Date of Birth', value: 'N/A' },
    { label: 'Mobile Number', value: 'John' },
    { label: 'Email', value: 'john@example.com' },
  ]);
  const [employmentDetailsFields, setemploymentDetailsFields] = useState([
    { label: 'Employee Type', value: 'Full Time' },
    { label: 'Employee Start Date', value: 'N/A' },
    { label: 'Period of Employement', value: 'N/A' },
    { label: 'Employee ID', value: '23333' },
    { label: 'Wage Rate', value: 'N/A' },
    { label: ' Department', value: 'IT' },
    { label: 'Benefits Status', value: 'N/A' },
    { label: 'Benefits Type', value: 'N/A' },
  ]);
  const [currentAddressFields, setcurrentAddressFields] = useState([
    { label: 'Address Line 1', value: 'N/A' },
    { label: 'Address Line 2', value: 'N/A' },
    { label: 'City', value: 'N/A' },
    { label: 'State', value: 'N/A' },
    { label: 'Zip Code', value: 'N/A' },
    { label: 'Period of Stay', value: 'N/A' },

  ]);

  const [personalContactFields, setpersonalContactFields] = useState([
    { label: 'Home Address 1', value: 'N/A' },
    { label: 'Home Addrss 2', value: 'N/A' },
    { label: 'Home City', value: 'N/A' },
    { label: 'Home State', value: 'N/A' },

    { label: 'Home Country', value: 'N/A' },
    { label: 'Home Phone', value: 'N/A' },
    { label: 'Personal Cell ', value: 'N/A' },
    { label: 'Personal Email', value: 'N/A' },
    { label: 'Personal Fax', value: 'N/A' },

  ]);

  const [secondaryContactFields, setsecondaryContactFields] = useState([
    { label: 'First Name', value: 'Employee A' },
    { label: 'Middle Name', value: 'XXXX' },
    { label: 'Last Name', value: 'AXXXX' },
    { label: 'Mobile Number', value: 'John' },
    { label: 'Email', value: 'john@example.com' },
    // Add more secondary contact fields as needed
  ]);

  const [workContactFields, setworkContactFields] = useState([
    { label: 'First Name', value: 'Employee A' },
    { label: 'Middle Name', value: 'XXXX' },
    { label: 'Last Name', value: 'AXXXX' },
    { label: 'Email', value: 'john@example.com' },
  ]);
  const [emergencyContactFields, setemergencyContactFields] = useState([
    { label: 'Name', value: 'N/A' },


    { label: 'Contact Number', value: 'N/A' },
    { label: 'Email', value: 'N/A' },
    { label: 'Relationship', value: 'N/A' },
  ]);
  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    // Perform save action to update profile data in the backend
    console.log("Profile Data:", profile);

    // Log the employment details data
    console.log("Employment Details Data:", employmentDetailsFields);
    console.log("address Data:", currentAddressFields);
    console.log("work Data:", workContactFields);
    console.log("Emergency Data:", emergencyContactFields);

    setEditMode(false);
    // You may also update the profile state with the new values from the input fields if needed
  };

  const handleCancelEdit = () => {
    // Reset the profile data to its original state
    setEditMode(false);
    // You may also revert any changes made to the profile state if needed
  };
  const handleChange = (index, newValue) => {
    const updatedProfile = [...profile];
    updatedProfile[index].value = newValue;
    setProfile(updatedProfile);


  };
  const handleChange2 = (index, newValue) => {

    const updatedEmployee = [...employmentDetailsFields];
    updatedEmployee[index].value = newValue;
    setemploymentDetailsFields(updatedEmployee);

  };
  const handleChangeAddress = (index, newValue) => {

    const updatedAddress = [...currentAddressFields];
    updatedAddress[index].value = newValue;
    setcurrentAddressFields(updatedAddress);

  };
  const handleChangePrimary = (index, newValue) => {

    const updatedcontact = [...personalContactFields];
    updatedcontact[index].value = newValue;
    setpersonalContactFields(updatedcontact);

  };
  const handleChangeSecondary = (index, newValue) => {

    const updatedsecondary = [...secondaryContactFields];
    updatedsecondary[index].value = newValue;
    setsecondaryContactFields(updatedsecondary);

  };
  const handleChangeWork = (index, newValue) => {

    const updatedwork = [...workContactFields];
    updatedwork[index].value = newValue;
    setworkContactFields(updatedwork);

  };
  const handleChangeEmergency = (index, newValue) => {

    const updatedEmergency = [...emergencyContactFields];
    updatedEmergency[index].value = newValue;
    setemergencyContactFields(updatedEmergency);

  };








  // const allFields = [...profile, ...employmentDetailsFields, ...currentAddressFields];

  const handleInnerTabClick = (tabKey) => {
    setActiveInnerTab(tabKey);
  };
  const handleContactTabClick = (tabKey) => {
    setActiveContactTab(tabKey);
  };
  return (
    <div style={{ marginLeft:isSidebarOpen ? "15%" :"6.5%"}}>
      <h2 className='addemp1'>EMPLOYEE A
        {name}
      </h2>
      <p className='spanemployee1'>
        All Employees &nbsp;<span>&gt;</span>&nbsp;
        {/* {search} */}
      </p>
      <Card className='card'>
        <Card.Header className='headerclass'>
          <div className="image-section">
            <img src="/A.png" className='imgemp' alt="EmployeeImage"  />
            {/* <Image src={arohak} alt='Arohak Logo' width={300} height={100} /> */}

            <div className="employee-details">
              <h3 className="empdedit">
                {/* {search} */}
              </h3>

              <div className="designation6">
                <BsBagCheck className="icon8" />
                <span>Project Manager</span>
              </div>
              <div className="email6">
                <AiOutlineMail className="icon3" />
                <span>Employee@gmail.com</span>
              </div>

            </div>
            {/* <button className='edibtn'> <CiEdit/> Edit Profile</button> */}

            <button className='edibtn' onClick={handleEditProfile}> <CiEdit /> Edit Profile</button>

          </div>
        </Card.Header>
        <Card.Body style={{ border: "none" }}>
          <div className="main-tabs-container">
            <Tab.Container id="main-tabs" activeKey={activeMainTab}>
              <Nav variant="pills" className="main-tabs">
                <Nav.Item>
                  <Nav.Link eventKey="profile" active={activeMainTab === 'profile'} onClick={() => handleMainTabClick('profile')}>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="attendance" active={activeMainTab === 'attendance'} onClick={() => handleMainTabClick('attendance')}>Attendance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="projects" active={activeMainTab === 'projects'} onClick={() => handleMainTabClick('projects')}>Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="leave" active={activeMainTab === 'leave'} onClick={() => handleMainTabClick('leave')}>Leave</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="main-tabs-content">
                <Tab.Pane eventKey="profile">
                  <div className="inner-tabs-container" >
                    <Nav variant="pills" className="inner-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="personal" active={activeInnerTab === 'personal'} onClick={() => handleInnerTabClick('personal')}><IoPerson className='iconper' />Personal Information </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="immigration" active={activeInnerTab === 'immigration'} onClick={() => handleInnerTabClick('immigration')}><BsGlobe className='iconimmi' /> Immigration Status</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="professional" active={activeInnerTab === 'professional'} onClick={() => handleInnerTabClick('professional')}><IoBagCheckOutline className='iconedu' /> Educational And Professional SkillSet</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="documents" active={activeInnerTab === 'documents'} onClick={() => handleInnerTabClick('documents')}><IoDocumentTextOutline className='icondoc' /> Documents</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="summary" active={activeInnerTab === 'summary'} onClick={() => handleInnerTabClick('summary')}><BiNotepad className='iconsumm' /> Summary Set</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <div className="inner-tabs-content">
                      {activeInnerTab === 'personal' && (
                        <Card className='crbdy'>
                          <Card.Body >
                            {/* <ViewProfile profile={allFields} />. */}

                            <div className="inner-tabs-content">

                              <ViewProfile profile={profile} editMode={editMode} handleChange={handleChange} />

                              <div>
                                <h3 className='sectionhe'>Employment Details</h3>
                                <ViewProfile profile={employmentDetailsFields} editMode={editMode} handleChange={handleChange2} />
                              </div>
                              <div>
                                <h3 className='sectionhe'>Current Home Address</h3>
                                <ViewProfile profile={currentAddressFields} editMode={editMode} handleChange={handleChangeAddress} />
                              </div>
                              <div className="contact-information">
                                <h3 className='sectionhe'>Contact Information</h3>
                                <div style={{ marginTop: "3%" }}>
                                  <Tab.Container id="contact-tabs" activeKey={activeContactTab} >
                                    <Nav variant="pills" className="contact-tabs ">
                                      <Nav.Item>
                                        <Nav.Link eventKey="personal" active={activeContactTab === 'personal'} onClick={() => handleContactTabClick('personal')}>Personal Contact</Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="secondary" active={activeContactTab === 'secondary'} onClick={() => handleContactTabClick('secondary')}>Secondary Contact</Nav.Link>
                                      </Nav.Item>
                                      <Nav.Item>
                                        <Nav.Link eventKey="work" active={activeContactTab === 'work'} onClick={() => handleContactTabClick('work')}>Work</Nav.Link>
                                      </Nav.Item>
                                    </Nav>
                                    <Tab.Content className="contact-tabs-content">

                                      <Tab.Pane eventKey="personal">

                                        <ViewProfile profile={personalContactFields} editMode={editMode} handleChange={handleChangePrimary} />
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="secondary">

                                        <ViewProfile profile={secondaryContactFields} editMode={editMode} handleChange={handleChangeSecondary} />
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="work">


                                        <ViewProfile profile={workContactFields} editMode={editMode} handleChange={handleChangeWork} />
                                      </Tab.Pane>
                                    </Tab.Content>
                                  </Tab.Container>
                                </div>
                              </div>
                            </div>
                            <div className='additiondetails'>
                              <h6 className='ecdetails' onClick={handleEmergencyContactClick}>
                                <AiOutlinePlusCircle fontSize={18} />&nbsp;<span>Emergency Contact Details</span>
                              </h6>
                              {/* <h6 className='hadetails'><AiOutlinePlusCircle />Home Address Details</h6> */}
                            </div>
                            <Modal show={showEmergencyContactModal} onHide={handleCloseEmergencyContactModal} dialogClassName="custom-modal-dialog">
                              <Modal.Header closeButton>
                                <Modal.Title>Emergency Contact Details</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <ViewProfile profile={emergencyContactFields}  editMode={editMode} handleChange={handleChangeEmergency } />
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseEmergencyContactModal}>
                                  Close
                                </Button>

                              </Modal.Footer>
                            </Modal>
                            {editMode && (
                              <div className='btneditprofile'>
                                <Button variant="primary" onClick={handleSaveProfile}>Save</Button>&emsp;
                                <Button variant="secondary" onClick={handleCancelEdit}>Cancel</Button>
                              </div>
                            )}

                          </Card.Body>
                        </Card>
                      )}

                      {activeInnerTab === 'immigration' && (
                        <div className="immigration-content">
                          Immigration
                        </div>
                      )}
                      {activeInnerTab === 'professional' && (
                        <div>
                          Education
                        </div>
                      )}
                      {activeInnerTab === 'documents' && (
                        <div>
                          Documents
                        </div>
                      )}
                      {activeInnerTab === 'summary' && (
                        <div>
                          Summary Set
                        </div>
                      )}
                    </div>

                  </div>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewEmployeeDetails;
