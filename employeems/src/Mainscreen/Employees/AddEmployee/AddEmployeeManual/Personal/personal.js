

import React, { useState,useEffect, forwardRef } from 'react';

import './personal.css';

import { LiaCameraSolid } from "react-icons/lia";
import PhoneInput from 'react-phone-number-input'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { LuChevronUpCircle } from "react-icons/lu";
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Card, Button, Form , FormSelect} from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import {
  CitySelect,
  CountrySelect,
  StateSelect,

} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";



export const Personal = () => {

  const [firstName, setFirstName] = useState('');
  const [firstName2, setFirstName2] = useState('');
  const [homemail, sethomemail] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [designation, setDesignation] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileNumber2, setMobileNumber2] = useState('');
  const [homeAddress1, setHomeaddress1] = useState('');
  const [value,setValue]=useState('');

  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState("");
  const [email2, setEmail2] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [homeCity, sethomeCity] = useState('');
  const [homeState, sethomeState] = useState('');
  // const[homeCountry,sethomeCounntry]=useState('');
  const [homePhn, setHomePhn] = useState('');
  const [homeCountry1, sethomeCountry] = useState('');
  const [homeStateError, sethomeStateError] = useState('');
  const [empType, setEmpType] = useState('');
  const [pem, setPem] = useState('');
  const [benefitsStatus, setBenefitsStatus] = useState('');
  const [benefitsType, setBenefitsType] = useState('');
  const [homecity, setHomecity] = useState('');
  const [homecityError, setHomeCityError] = useState('');
  const [homeCountryError, sethomeCountryError] = useState('');
  const [homecellError, sethomecellError] = useState('');
  const [department, setDepartment] = useState('');
  const [empId, setEmpId] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [wageRate, setWageRate] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [dob, setDob] = useState(null);
  const [empstart, setEmpStart] = useState();
  const [podto, setPodto] = useState(null);
  const [startpod, setStartpod] = useState(null);
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [podStay, setPodStay] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [homeZip, setHomeZip] = useState('');
  const [errors, setErrors] = useState({});
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [activeTab1, setActiveTab1] = useState('primary');
  const [contactError, setcontactError] = useState('');

  const [emergencyContact, setEmergencyContact] = useState({
    contactName: '',
    phoneNumber: '',
    emailAddress: '',
    relationship: ''
  });
  const [countryCodesList, setCountryCodesList] = useState([]);

  
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  
  
  const today = new Date();
  const [homecell, setHomecell] = useState('');
  const [cellError, setcellError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [middleNameError, setMiddleNameError] = useState('');
  const [lastNameError, setlastNameError] = useState('');
  const [designationError, setDesignationError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [wageError, setWageError] = useState('');
  const [homephn, sethomePhn] = useState('');
  const [phnError, setPhnError] = useState('');
  const [empiderror, setEmpiIdError] = useState('');
  const [phError, setphError] = useState('');
  const [relError, setrelError] = useState('');
  const [profileOpen, setProfileOpen] = useState(true);
  const [employmentOpen, setEmploymentOpen] = useState(true);
  const [addressOpen, setAddressOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  // Function to handle file selection
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   if (!selectedFile) return; 
  //   setImage(selectedFile);
  // };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return; // If no file selected, do nothing
  
    // Convert the selected file to a data URL
    const imageUrl = URL.createObjectURL(selectedFile);
  
    // Log the URL to the console for debugging
    console.log("Selected image URL:", imageUrl);
  
    // Set the image URL to the component's state
    setImage(imageUrl);
  };
  

  const handleCameraClick = () => {
    document.getElementById('imageInput').click();
  };

  const [showTabs, setShowTabs] = useState(true);
  const options = [
    { value: '', label: 'Select Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
  const toggleTabs = () => {
    setShowTabs(!showTabs);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
      errors.firstName = 'First name should not contain numbers';
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      errors.lastName = 'Last name should not contain numbers';
      isValid = false;
    }

    if (!mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = 'Mobile number is invalid';
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!wageRate.trim()) {
      errors.wageRate = 'Wage rate is required';
      isValid = false;
    } else if (isNaN(wageRate)) {
      errors.wageRate = 'Wage rate must be a number';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {

      console.log('Form submitted successfully');
    }
    const phoneNumber = countryCode + mobileNumber;

    console.log("Phone Number:", phoneNumber);
  };
  const changeTab = (tab) => {
    setActiveTab1(tab);
  };

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleEmployment = () => {
    setEmploymentOpen(!employmentOpen);
  };

  const toggleAddress = () => {
    setAddressOpen(!addressOpen);
  };

  const toggleContact = () => {
    setContactOpen(!contactOpen);
  };



  const handleResetForm = () => {

    setFirstName('');
    setMiddleName('');
    setLastName('');
    setDesignation('');
    setMobileNumber('');
    setEmail('');
    setEmpType('');
    setPem('');
    setBenefitsStatus('');
    setBenefitsType('');
    setHomecity('');
    setDepartment('');
    setEmpId('');
    setGender('');
    setNationality('');
    setAddress('');
    setAddress2('');
    setCity('');
    setWageRate('');
    setState('');
    setZipCode('');
    setDob('');
    setEmpStart(null);
    setPodto(null);
    setStartpod(null);
    setAddressLine1('');
    setAddressLine2('');
    setPodStay('');
    setHomeZip('');
    setEmergencyContact({
      contactName: '',
      phoneNumber: '',
      emailAddress: '',
      relationship: ''
    });


  };


  const handleFirstNameChange = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setFirstName(value);
      setFirstNameError('');
    } else {
      setFirstNameError('First name cannot contain numbers');
      setTimeout(() => {
        setFirstNameError('');
      }, 3000);
    }
  }
  const handleCityChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      setHomeCityError('City cannot be empty');
      setTimeout(() => {
        setHomeCityError('');
      }, 3000);
    } else {
      sethomeCity(value);
      setHomeCityError('');
    }
  }
  const handleStateChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      sethomeStateError('State cannot be empty');
      setTimeout(() => {
        sethomeStateError('');
      }, 3000);
    } else {
      sethomeState(value);
      sethomeStateError('');
    }
  }
  const handleCountryChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      sethomeCountryError('State cannot be empty');
      setTimeout(() => {
        sethomeCountryError('');
      }, 3000);
    } else {
      sethomeCountry(value);
      sethomeCountryError('');
    }
  }
  const handleCellChange = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      sethomecellError('State cannot be empty');

    } else if (!/\D/.test(value)) {
      setHomecell(value);
      setcellError('');

    }
    else {
      sethomecellError('mobile cannot contain Characters');
      setTimeout(() => {
        sethomecellError('');
      }, 3000);

    }
  }
  const handlepersonalemailChange = (e) => {
    const value = e.target.value;
    sethomemail(value);

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (!emailPattern.test(value)) {
      setEmailError('Invalid email format');
      setTimeout(() => {
        setEmailError('');
      }, 3000);
    } else {

      setEmailError('');

    }
  }


  const handleFirstNameChange2 = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setFirstName2(value);
      setFirstNameError('');
    } else {
      setFirstNameError('First name cannot contain numbers');
      setTimeout(() => {
        setFirstNameError('');
      }, 3000);
    }
  }
  const handlemiddleNameChange = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setMiddleName(value);
      setMiddleNameError('');

    }
    else {
      setMiddleNameError('Middle name cannot contain numbers');
      setTimeout(() => {
        setWageError('');
      }, 3000);
    }

  };
  const handlelastNameChange = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setLastName(value);
      setlastNameError('');

    }
    else {
      setlastNameError('last name cannot contain numbers');
      setTimeout(() => {
        setWageError('');
      }, 3000);
    }

  };
  const handlelastNameChange2 = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setLastName2(value);
      setlastNameError('');

    }
    else {
      setlastNameError('last name cannot contain numbers');
      setTimeout(() => {
        setlastNameError('');
      }, 3000);
    }

  };
  const handleDesignationChange = (e) => {
    const value = e.target.value;

    if (!/\d/.test(value)) {
      setDesignation(value);
      setDesignationError('');

    }
    else {
      setDesignationError('Designation cannot contain numbers');
      setTimeout(() => {
        setWageError('');
      }, 3000);
    }


  };
  const handleEmpidChange = (e) => {
    const value = e.target.value;

    if (!/\D/.test(value)) {
      setEmpId(value);
      setEmpiIdError('');

    }
    else {
      setEmpiIdError('Empid cannot contain Characters');
      setTimeout(() => {
        setWageError('');
      }, 3000);
    }


  };
  const handleMobilenumberChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, '');


    if (numericValue.length <= 10) {
      setMobileNumber(numericValue);
      setMobileError('');

    }
    else {
      setMobileError('mobile cannot contain Characters & should not exceed 10 characters');
      setTimeout(() => {
        setMobileError('');
      }, 3000);
    }
  }
  const handleMobilenumberChange2 = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, '');


    if (numericValue.length <= 10) {
      setMobileNumber2(numericValue);
      setMobileError('');

    }
    else {
      setMobileError('mobile cannot contain Characters & should not exceed 10 characters');
      setTimeout(() => {
        setMobileError('');
      }, 3000);
    }
  }
  const handlehomephnChange = (e) => {
    const value = e.target.value;

    if (!/\D/.test(value)) {
      sethomePhn(value);
      setPhnError('');

    }
    else {
      setPhnError('mobile cannot contain Characters');
      setTimeout(() => {
        setWageError('');
      }, 3000);

    }
  }



  const handleWegRateChange = (e) => {
    const value = e.target.value;

    if (!/\D/.test(value)) {
      setWageRate(value);
      setWageError('');

    }
    else {
      setWageError('Salary cannot contain Characters');
      setTimeout(() => {
        setWageError('');
      }, 3000);
    }


  };
  const [emailError, setEmailError] = useState('');

  const handleEmailIdChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (!emailPattern.test(value)) {
      setEmailError('Invalid email format');
      setTimeout(() => {
        setEmailError('');
      }, 3000);
    } else {

      setEmailError('');

    }
  }

  const handleEmailIdChange2 = (e) => {
    const value = e.target.value;
    setEmail2(value);

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    if (!emailPattern.test(value)) {
      setEmailError('Invalid email format');
      setTimeout(() => {
        setEmailError('');
      }, 3000);
    } else {

      setEmailError('');

    }
  }
  const handlegenderChange = (e) => {
    const value = e.target.value;
    setGender(value);
  };
  const handleEmpTypeChange = (e) => {
    const value = e.target.value;
    setEmpType(value);
  };
  const handleDateChange = (date) => {
    setDob(date);
  }
  const homecountryChange = (e) => {
    sethomeCountry(e.target.value);
  }


  



  const [showHomeAddressDialog, setShowHomeAddressDialog] = useState(false);
  const [showcurrentAddress, setShowCurrentAddress] = useState(true);
  const [iconDirection, setIconDirection] = useState('down');
  const [iconDirection1, setIconDirection1] = useState('down');
  const [showEmpdetails, setShowEmpdetails] = useState(true);

  const toggleHomeAddress = () => {
    setShowCurrentAddress(!showcurrentAddress);
    // setIconDirection1(showEmpdetails ? 'up' : 'down');

  };
  const toggleEmpdetails = () => {
    setShowEmpdetails(!showEmpdetails);
    // setIconDirection1(showEmpdetails ? 'up' : 'down');
  };


  const handleAddEmergencyContact = () => {

    console.log("Emergency contact added:", emergencyContact);

    setShowDialog(false);
  };
  const toggleHomeAddressDialog = () => {
    setShowHomeAddressDialog(!showHomeAddressDialog);
  };
  const handleAddHomeAddress = () => {

    toggleHomeAddressDialog();
  };


  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange6 = (date) => {
    setSelectedDate(date);
  };

  // const customHeader = () => {
  //   return (
  //     <div>
  //       {/* <select
  //         value={selectedDate ? selectedDate.getDate() : ''}
  //         onChange={(e) => {
  //           const newDate = new Date(selectedDate);
  //           newDate.setDate(parseInt(e.target.value));
  //           handleDateChange6(newDate);
  //         }}
  //       >
  //         {[...Array(31).keys()].map((day) => (
  //           <option key={day + 1} value={day + 1}>
  //             {day + 1}
  //           </option>
  //         ))}
  //       </select> */}
  //       <select
  //         value={selectedDate ? selectedDate.getMonth() + 1 : ''}
  //         onChange={(e) => {
  //           const newDate = new Date(selectedDate);
  //           newDate.setMonth(parseInt(e.target.value) - 1);
  //           handleDateChange6(newDate);
  //         }}
  //       >
  //         {[...Array(12).keys()].map((month) => (
  //           <option key={month + 1} value={month + 1}>
  //             {month + 1}
  //           </option>
  //         ))}
  //       </select>
  //       <select
  //         value={selectedDate ? selectedDate.getFullYear() : ''}
  //         onChange={(e) => {
  //           const newDate = new Date(selectedDate);
  //           newDate.setFullYear(parseInt(e.target.value));
  //           handleDateChange6(newDate);
  //         }}
  //       >
  //         {[...Array(100).keys()].map((year) => (
  //           <option key={new Date().getFullYear() - year} value={new Date().getFullYear() - year}>
  //             {new Date().getFullYear() - year}
  //           </option>
  //         ))}
  //       </select>
  //     </div>
  //   );
  // };
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  // Function to render custom month dropdown options
  const renderCustomMonthOptions = () => {
    return months.map((month, index) => (
      <option key={index} value={index}>
        {month}
      </option>
    ));
  };
  const renderCustomYearOptions = () => {
    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };
  const CustomDatePickerInput = forwardRef(({ value, onClick }, ref) => {
    const showAsterisk = value.length === 0;

    return (
      <div className="custom-datepicker-input">
        <input
          type="text"
          defaultValue={value}
          onClick={onClick}
          ref={ref}
          // placeholder="Date Of Birth"
          className="Dob input 23"
          readOnly
        />
        {/* {showAsterisk && <span className="dobastrik">*</span>} */}
        <FaCalendarAlt className="calendar-icon" onClick={onClick} />
      </div>
    );
  });

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input">
      <input
        type="text"
        className="form-control form-control-with-margin input23"
        onClick={onClick}
        value={value}
        readOnly
        placeholder="DD/MM/YYYY"
        // placeholder="Date Of Birth"
        ref={ref}
      />

      <FaCalendarAlt className="calendar-icon" onClick={onClick} />
    </div>
  ));



  const CustomDatePickerInput1 = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input1">
      <input
        type="text"
        defaultValue={value}
        onClick={onClick}
        placeholder="DD/MM/YYYY"
        // placeholder="Employee Start Date"
        className=" form-control form-control-with-margin"
        readOnly
      />
      {/* {value.length === 0 && (    <span className='empstartastrik' > *</span>)} */}
      <FaCalendarAlt className="calendar-icon" onClick={onClick} />
    </div>
  ));
  const CustomDatePickerInput2 = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input2">
      <input
        type="text"
        defaultValue={value}
        onClick={onClick}
        placeholder="DD/MM/YYYY"
        className="empstart"
      />
      <FaCalendarAlt className="calendar-icon" onClick={onClick} />
    </div>
  ));
  const CustomDatePickerInput3 = forwardRef(({ value, onClick }, ref) => (
    <div className="custom-datepicker-input3">
      <input
        type="text"
        defaultValue={value}
        onClick={onClick}
        placeholder="DD/MM/YYYY"
        className="empstart"
      />
      <FaCalendarAlt className="calendar-icon" onClick={onClick} />
    </div>
  ));


  return (


    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <Card style={{ marginBottom: '0.5em' }} className='profilecard'>

            <Card.Header className='headprofile'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 className='headprofile'>Profile</h5>
                <Button variant="link" onClick={toggleProfile}>
                  {profileOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </Card.Header>
            {profileOpen && (
              <Card.Body>
                      <div onClick={handleCameraClick}>
                      {image ? (
          <img src={image}  className="camera" alt="Uploaded Image"  style={{ maxWidth: '10%', maxHeight: '10%', objectFit: 'cover' }}  />
        ) : (
          <LiaCameraSolid  size={85} color="blueviolet" style={{ marginTop:"2%",transform:"translateX(45%)",border:"1px solid blueviolet",padding:"20px",borderRadius:"5px"}} />
        )}
        <input
          id="imageInput"
          type="file"
          accept="image/jpeg"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {/* Render the selected image */}


      </div>
      <div className="camera-info">
        <p>Only JPEG images are accepted.</p>
        <p>Maximum file size: 25KB.</p>
        <p>Image dimensions must be 2x2 pixels.</p>
      </div>

                {/* <div className="camera">
                  <LiaCameraSolid size={25} color="blueviolet" />

                </div>
                <div className="camera-info">

                  <p>Only JPEG images are accepted.</p>
                  <p>Maximum file size: 25KB.</p>
                </div> */}



                <div className="form-row">
                  <div className="form-group col-md-4">
                 

{/* 
                 <div>
                  <ReactFlagsSelect
    selected={selected}
    onSelect={(code) => setSelected(code)}
  />
                 </div> */}
                    <Form.Label className='label' >First Name<span className="required">*</span></Form.Label>
                    
     

                    <Form.Control
                      type="text"

                      value={firstName}
                      onChange={handleFirstNameChange}
                      // placeholder="First Name" 
                      required
                      className={`form-control ${firstNameError ? 'is-invalid' : ''} form-control-with-margin`}
                    />
                    {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={middleName}
                      onChange={handlemiddleNameChange}
                      // placeholder="Middle Name" 
                      className='form-control-with-margin'
                    />
                    {middleNameError && <div className="invalid-feedback">{middleNameError}</div>}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Last Name<span className="required">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={handlelastNameChange}
                      // placeholder="Last Name" 
                      required
                      className={`form-control ${lastNameError ? 'is-invalid' : ''} form-control-with-margin`}
                    />
                    {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Designation<span className="required">*</span></Form.Label>
                    <Form.Control
                      type="text"
                      value={designation}
                      onChange={handleDesignationChange}
                      // placeholder="Designation" 
                      required

                      className={`form-control ${designationError ? 'is-invalid' : ''} form-control-with-margin`}
                    />
                    {designationError && <div className="invalid-feedback">{designationError}</div>}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Gender<span className="required">*</span></Form.Label>
                    <FormSelect
                      as="select"
                      value={gender}
                      onChange={handlegenderChange}
                      required
                      className='form-control-with-margin input23'
                    // className={genderError ? 'is-invalid' : ''} 
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </FormSelect>

                    {/* {genderError && <div className="invalid-feedback">{genderError}</div>} */}
                  </div>

                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Date of Birth<span className="required">*</span></Form.Label>
                    {/* Add your date picker component here */}



                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange6}
                      dateFormat="MM/dd/yyyy"
                      maxDate={new Date()}
                      showMonthYearPicker={false}
                      className='form-control-with-margin'

                      dropdownMode="select"
                      customInput={<CustomInput />}
                      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                        <div className="custom-header">

                          <select className="custom-select7 mr-2"
                            value={selectedDate ? months[selectedDate.getMonth() + 1] : ''}
                            onChange={(e) => {
                              const newDate = new Date(selectedDate);
                              const selectedMonthIndex = months.indexOf(e.target.value);
                              newDate.setMonth(selectedMonthIndex);
                              handleDateChange6(newDate);
                            }}
                          >

                            {months.map((month, index) => (
                              <option key={index} value={month}>
                                {month}
                              </option>
                            ))}
                          </select>

                          <select className="custom-selec1t"
                            value={selectedDate ? selectedDate.getFullYear() : ''}
                            onChange={(e) => {
                              const newDate = new Date(selectedDate);
                              newDate.setFullYear(parseInt(e.target.value));
                              handleDateChange6(newDate);
                            }}
                          >
                            {[...Array(100).keys()].map((year) => (
                              <option key={new Date().getFullYear() - year} value={new Date().getFullYear() - year}>
                                {new Date().getFullYear() - year}
                              </option>
                            ))}
                          </select>

                        </div>
                      )}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <Form.Label className='custom-label-mobilen'>Mobile Number<span className="required">*</span></Form.Label>
                    {/* <div>

                      <select
                        className="custom-select"
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                      >

                         {countryCodesList.map((country, index) => (
            <option key={index} value={code}>
              {code} 
            </option>
          ))}
                       
                      </select>

                      <input
                        type="text"
                        className="form-control custom-input-number"
                        value={mobileNumber}
                        onChange={handleMobilenumberChange}
                        maxLength={10}
                        required
                      />
                    </div> */}
 <PhoneInput 
  // international
  // defaultCountry="RU"
  className=" form-control custom-input-number"
  value={value}
  onChange={setValue}/>
  <div>Mobilenumber:{value}</div>
                    {/* {mobileNumber.length === 0 && <span className="mnumberastrik">*</span>} */}
                    {mobileError && <div className="invalid-feedback">{mobileError}</div>}
                  </div>
                  {/* <button onClick={handleGetCountryCode}>Get Country Code</button> */}
    
                  <div className="form-group">
                    <Form.Label className='custom-label-mail'>Email<span className="required">*</span></Form.Label>
                    <input
                      type="email"
                      className="form-control custom-input-mail"
                      // placeholder="Email" 
                      value={email}
                      onChange={handleEmailIdChange}
                      required
                    />
                    {/* {email.length === 0 && <span className="emailastrik">*</span>} */}
                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                  </div>
                </div>



                {/* <button type="submit" className="btn btn-primary">Submit</button> */}

              </Card.Body>
            )}
          </Card>

          <Card style={{ marginBottom: '0.5em' }} className='profilecard1'>
            <Card.Header className='headprofile1'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5>Employment Details</h5>
                <Button variant="link" onClick={toggleEmployment}>
                  {employmentOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </Card.Header>
            {employmentOpen && (
              <Card.Body>
                <div className="form-row1">
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Employee Type<span className="required">*</span></Form.Label>
                    <Form.Select className="form-control input23 form-control-with-margin " value={empType} onChange={handleEmpTypeChange}>
                      <option value="" >Select Employee type</option>
                      <option value="fulltime">Full Time</option>
                      <option value="parttime">Part time</option>
                      <option value="Remote">Remote</option>
                    </Form.Select>
                    {/* {empType.length === 0 && (<span className='emptypeastrik'> *</span>)} */}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Employee Start Date<span className="required">*</span></Form.Label>

                    <DatePicker
                      selected={empstart}
                      onChange={(date) => setEmpStart(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/MM/yyyy"
                      // showMonthYearPicker

                      className="form-control input23"
                      customInput={<CustomDatePickerInput1 />}

                    />
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Wage Rate (offered Salary)</Form.Label>
                    <input className="form-control form-control-with-margin" type="text" value={wageRate} onChange={handleWegRateChange}
                      //  placeholder="Wage Rate"
                      required />
                    {wageError && <div style={{ color: 'red' }}>{wageError}</div>}
                  </div>

                </div>
                <div className="form-row">


                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Department</Form.Label>
                    <Form.Select className="form-control form-control-with-margin input23" value={department} onChange={(e) => setDepartment(e.target.value)}>
                      <option value="">Select Department</option>
                      <option value="HR">HR</option>
                      <option value="Development">Development</option>
                    </Form.Select>
                  </div>


                  <div className="form-group col-md-4">
                 
                    <Form.Label className='label' >Benefits Type</Form.Label>
                    <Form.Select className="form-control  form-control-with-margin input23" value={benefitsType} onChange={(e) => setBenefitsType(e.target.value)}>
                      <option value="">Select Benefits Type</option>
                      <option value="Andh">Medical</option>
                      <option value="Telegana">Dental</option>
                          <option value="Telegana">Vision</option>
                              <option value="Telegana">401K</option>
                                  <option value="Telegana">Life Benefits</option>
                                  <option value="Telegana">Vaccation</option>
                    </Form.Select>
                  </div>
                   <div className="form-group col-md-4">
                    <Form.Label className='label'>Benefits Status</Form.Label>
                    <Form.Select className="form-control  form-control-with-margin input23" value={benefitsStatus} onChange={(e) => setBenefitsStatus(e.target.value)}>
                      <option value="">Select Benefits Status</option>
                      <option value="Andh">Available</option>
                      <option value="Telegana">Not Available</option>
                    </Form.Select>
                  </div>
                  
                </div>

              </Card.Body>
            )}
          </Card>

          <Card style={{ marginBottom: '0.5em' }} className='profilecard2'>
            <Card.Header className='headprofile2'>

              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <h5>Current Home Address</h5>
                <Button variant="link" onClick={toggleAddress}>
                  {addressOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </Card.Header>
            {addressOpen && (
              <Card.Body>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Address Line 1<span className="required">*</span></Form.Label>
                    <textarea
                      className="form-control "
                      value={address}
                      style={{width:"600px"}}
                      onChange={(e) => setAddress(e.target.value)}
                    //  placeholder="Address Line 1"
                    />
                    {/* {address.length === 0 && (<span className="adrastrick"> *</span>)} */}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label' style={{marginLeft:"-33%"}}>Address Line 2</Form.Label>
                    <textarea
                      className="form-control "
                      value={address2}
                      style={{width:"600px",marginLeft:"-33%"}}
                      onChange={(e) => setAddress2(e.target.value)}
                    //  placeholder="Address Line 2"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Country<span className="required">*</span></Form.Label>
                    {/* <Form.Select className=" form-control-with-margin input23" value={city} onChange={(e) => setCity(e.target.value)}>
                      <option value="">Select Country</option>
                      <option value="Hyd">Hyd</option>
                      <option value="Benglore">Benglore</option>
                      <option value="Vijayawada">Vijayawada</option>
                    </Form.Select> */}
                     <div className="react-country-select-container">

                     <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
         className="custom-select89"
        placeHolder="Select Country"
      />
      </div>
                    {/* {city.length === 0 && (<span className="countryastrik"> *</span>)} */}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>State<span className="required">*</span></Form.Label>
                    {/* <Form.Select className="form-control-with-margin input23" value={city} onChange={(e) => setCity(e.target.value)}>
                      <option value="">Select City</option>
                      <option value="Hyd">Hyd</option>
                      <option value="Benglore">Benglore</option>
                      <option value="Vijayawada">Vijayawada</option>
                    </Form.Select> */}
  <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
                    {/* {city.length === 0 && (<span className="cityastrik"> *</span>)} */}
                  </div>
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>City<span className="required">*</span></Form.Label>
                    {/* <Form.Select className="form-control form-control-with-margin input23" value={state} onChange={(e) => setState(e.target.value)}>
                      <option value="">Select State</option>
                      <option value="Andhra">Andhra</option>
                      <option value="Telegana">Telegana</option>
                      <option value="UP">Uttar Pradesh</option>
                    </Form.Select> */}
                     <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
                    {/* {state.length === 0 && (<span className="stateastrik"> *</span>)} */}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <Form.Label className='label'>Zip Code<span className="required">*</span></Form.Label>
                    <Form.Control className="form-control custom-input-zip form-control-with-margin"
                      type="text" value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    // placeholder="Zip Code" 
                    />
                    {/* {zipCode.length === 0 && (<span className="znameastrik"> *</span>)} */}
                  </div>

                </div>

              </Card.Body>

            )}
          </Card>

          <Card style={{ marginBottom: '0.5em' }} className='profilecard3'>
            <Card.Header className='headprofile3'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5>Contact Information</h5>
                <Button variant="link" onClick={toggleContact}>
                  {contactOpen ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
            </Card.Header>
            {contactOpen && (
              <Card.Body>
                <>
                <div className="tabs">
                  <div className={`tab ${activeTab1 === 'primary' && 'active'}`} onClick={() => changeTab('primary')}>Primary Contact</div>
                  <div className={`tab ${activeTab1 === 'secondary' && 'active'}`} onClick={() => changeTab('secondary')}>Secondary Contact</div>
                  <div className={`tab ${activeTab1 === 'work' && 'active'}`} onClick={() => changeTab('work')}>Work Contact</div>
                </div>

                  <div className="tab-content1" id="myTabContent">
                    {activeTab1 === 'primary' && (
                      <div className="tab-pane fade show active" id="primary" role="tabpanel" aria-labelledby="primary-tab">

                        <div className="form-row">
                          <div className="form-group col-md-6">
                            <Form.Label className='label'>Home Address 1<span className="required">*</span></Form.Label>
                            <textarea
                              className="form-control form-control-with-margin"
                              value={homeAddress1}
                              id="homeAddress1"
                              // placeholder="Home Address 1"
                              onChange={(e) => setHomeaddress1(e.target.value)}
                              required
                            ></textarea>
                            {/* {homeAddress1.length === 0 && (<span className='primaryadrastrik'> *</span>)} */}
                          </div>
                          <div className="form-group col-md-6">
                            <Form.Label className='label'>Home Address 2</Form.Label>
                            <textarea
                              className="form-control form-control-with-margin"
                              value={homeAddress1}
                              id="homeAddress2"
                              // placeholder="Home Address 2"
                              onChange={(e) => setHomeaddress1(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Home Country<span className="required">*</span></Form.Label>
                            {/* <Form.Select
                              className={`form-control ${homecityError ? 'is-invalid' : ''} form-control-with-margin input23`}
                              type="text"
                             
                              value={homeCity}
                              onChange={handleCityChange}
                              required
                            >
                              <option value="">Select Home Country</option>
                              <option value="US">AP</option>
                              <option value="IND">TS</option>
                            </Form.Select> */}
                             <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />

                            {homecityError && <div className="invalid-feedback">Please enter Home City</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>State/Province<span className="required">*</span></Form.Label>
                            {/* <Form.Select
                              className={`form-control ${homeStateError === 0 ? 'is-invalid' : ''} form-control-with-margin input23`}
                              type="text"
                              
                              value={homeState}
                              onChange={handleStateChange}
                              required
                            >
                              <option value="">Select Home Country</option>
                              <option value="US">AP</option>
                              <option value="IND">TS</option>
                            </Form.Select> */}
                             <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
                            {/* {homeStateError && <div className="invalid-feedback">Please enter State/Province</div>} */}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Home Country<span className="required">*</span></Form.Label>
                            {/* <Form.Select
                              className={`form-control ${homeCountryError ? 'is-invalid' : ''} form-control-with-margin input23`}
                              value={homeCountry1}
                              onChange={handleCountryChange}
                              required
                            >
                              <option value="">Select Home Country</option>
                              <option value="US">US</option>
                              <option value="IND">IND</option>
                            </Form.Select> */}
                            {/* {homeCountryError && <div className="invalid-feedback">Please select Home Country</div>} */}
                            <CitySelect
        countryid={countryid}
        stateid={stateid}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Home Phone</Form.Label>
                            <Form.Control
                              className="form-control form-control-with-margin"
                              type="tel"
                              id="homePhone"
                              // placeholder="Home Phone"
                              value={homephn}
                              onChange={(e) => sethomePhn(e.target.value)}
                            />
                            {phnError && <div style={{ color: 'red' }}>{phnError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Personal Cell<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${homecellError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="tel"
                              // placeholder="Personal Cell"
                              value={homecell}
                              onChange={handleCellChange}
                              required
                            />
                            {homecellError && <div className="invalid-feedback">Please enter Personal Cell</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Personal Fax</Form.Label>
                            <Form.Control className="form-control form-control-with-margin" type="tel"
                              //  placeholder="Personal Fax"
                              id="personalFax" />
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Personal Email<span className="required">*</span></Form.Label>
                            <Form.Control
                              style={{ width: "30.1%" }}
                              className={`form-control ${emailError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="email"
                              // placeholder="Personal Email"
                              id="personalEmail"
                              value={homemail}
                              onChange={handlepersonalemailChange}
                              required
                            />
                            {emailError && <div className="invalid-feedback">Please enter Personal Email</div>}
                          </div>
                        </div>





                      </div>
                    )}
                    {activeTab1 === 'secondary' && (
                      <div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                        
                   <Form.Label className='label'>First Name<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${firstNameError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={firstName2}
                              onChange={handleFirstNameChange2}
                              // placeholder="First Name"
                              required
                            />
                            {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Last Name<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${lastNameError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={lastName2}
                              onChange={handlelastNameChange2}
                              // placeholder="Last Name"
                              required
                            />
                            {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Email<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${emailError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="email"
                              value={email2}
                              onChange={handleEmailIdChange2}
                              // placeholder="Email"
                              required
                            />
                            {emailError && <div className="invalid-feedback">{emailError}</div>}
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Mobile Number<span className="required">*</span></Form.Label>

                            <div>
                              <select
                                className="custom-select2"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                              >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                {/* Add other country codes if needed */}
                              </select>
                            </div>
                            <Form.Control
                              style={{ width: "26.1%", marginTop: "-47px", marginLeft: "4%" }}
                              className={`form-control ${mobileError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={mobileNumber2}
                              maxLength={10}
                              onChange={handleMobilenumberChange2}
                              // placeholder="Mobile Number"
                              required
                            />
                            {mobileError && <div className="invalid-feedback">{mobileError}</div>}

                          </div>
                        </div>



                      </div>
                    )}
                    {activeTab1 === 'work' && (
                      <div>
                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>First Name<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${firstNameError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={firstName2}
                              onChange={handleFirstNameChange2}
                              // placeholder="First Name"
                              required
                            />
                            {firstNameError && <div className="invalid-feedback">{firstNameError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Last Name<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${lastNameError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={lastName2}
                              onChange={handlelastNameChange2}
                              // placeholder="Last Name"
                              required
                            />
                            {lastNameError && <div className="invalid-feedback">{lastNameError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Email<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${emailError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="email"
                              value={email2}
                              onChange={handleEmailIdChange2}
                              // placeholder="Email"
                              required
                            />
                            {emailError && <div className="invalid-feedback">{emailError}</div>}
                          </div>
                        </div>

                        <div className="form-row">
                          <div className="form-group col-md-4">
                            <Form.Label className='label' >Mobile Number</Form.Label>

                            <div>
                              <select
                                className="custom-select3"
                                value={countryCode}
                                onChange={handleCountryCodeChange}
                              >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                {/* Add other country codes if needed */}
                              </select>

                              <Form.Control
                                style={{ width: "26.3%", marginTop: "-47px", marginLeft: "4%" }}
                                className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                                type="text"
                                value={mobileNumber2}
                                maxLength={10}
                                onChange={handleMobilenumberChange2}
                                // placeholder="Mobile Number"
                                required
                              />
                              {mobileError && <div className="invalid-feedback">{mobileError}</div>}
                            </div>
                          </div>
                        </div>


                      </div>
                    )}


                  </div>
                </>
              </Card.Body>
            )}
          </Card>
          <div>
            <div className="form-row" style={{ borderTop: "3px solid lightgray", paddingTop: "10px" ,marginLeft:"-1%"}}>

              <div className="form-group">

                <h6 className='emglabel' onClick={() => setShowDialog(true)}><AiOutlinePlusCircle className='emericon' />Add Emergency Contact</h6>
                {/* <dd> <textarea className='address' value={address} onChange={(e) => setAddress(e.target.value)}  /></dd> */}
              </div>

              {/* <div className="form-group">

  <h6 className='contactlabel' onClick={toggleContactDialog}><AiOutlinePlusCircle className='contacticon'  />Add Contact information</h6>
  {/* <dd> <textarea className='address' value={address} onChange={(e) => setAddress(e.target.value)}  /></dd> */}
              {/* </div> */}
              {/* {showContactDialog && <ContactDialog />} */}

              {
                showDialog && (
                  <div className="dialog-container">
                    <div className="dialog">
                      <h2 className='emrheading'>Add Emergency Contact</h2>
                      <div className="form-row">
                      <div className="form-group col-md-4">
                            <Form.Label className='label'>Contact Name<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${contactError? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={emergencyContact.contactName}
                              onChange={(e) => {
                                if (!/\d/.test(e.target.value)) {
                                  setEmergencyContact({ ...emergencyContact, contactName: e.target.value })
                                  setcontactError('');
    
                                }
                                else {
                                  setcontactError('contact name cannot contain numbers');
    
                                }
    
                              }} required />
                            {contactError && <div className="invalid-feedback">{contactError}</div>}
                          </div>
                        
                        
                        
                        
                        
                        
                        
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Phone Number<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${phError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="text"
                              value={emergencyContact.phoneNumber}
                              
                              onChange={(e) => {
                                if (!/\D/.test(e.target.value)) {
                                  setEmergencyContact({ ...emergencyContact, phoneNumber: e.target.value })
                                  setphError('');
    
                                }
                                else {
                                  setphError('Phn number cannot contain characters');
    
                                }
                              }} required/>
                            {phError && <div className="invalid-feedback">{phError}</div>}
                          </div>    
                        
         
                      </div>
                      <div className="form-row" style={{ borderBottom: "3px solid lightgray", paddingBottom: "55px" }}>
                      <div className="form-group col-md-4">
                            <Form.Label className='label'>Email<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${emailError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="email"
                              value={emergencyContact.emailAddress}
                              onChange={(e) =>


                                setEmergencyContact({ ...emergencyContact, emailAddress: e.target.value })
    
                              } required />
                            {emailError && <div className="invalid-feedback">{emailError}</div>}
                          </div>
                          <div className="form-group col-md-4">
                            <Form.Label className='label'>Relationship<span className="required">*</span></Form.Label>
                            <Form.Control
                              className={`form-control ${relError ? 'is-invalid' : ''} form-control-with-margin`}
                              type="email"
                              value={email2}
                              onChange={(e) => {
                                if (!/\d/.test(e.target.value)) {
                                  setEmergencyContact({ ...emergencyContact, relationship: e.target.value })
                                  setrelError('');
    
                                }
                                else {
                                  setrelError('Reltionship name cannot contain numbers');
    
                                }
                              }
    
                              } />
                            {relError && <div className="invalid-feedback">{relError}</div>}
                          </div>
                        
                        </div>

                        
                        
                          {/* <span  className="emerelastrik" style={{}}> *</span> */}
                         
                    
                      <div className='btncon'>
                        <button onClick={handleAddEmergencyContact} className='custom-button23 mr-2'>Add</button>
                        <button onClick={() => setShowDialog(false)} className='custom-cancel-button'>Cancel</button>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            <div className='peradd' >
              <button className='custom-button23 mr-2' type="Submit">Add</button> &emsp;

              <button className='custom-cancel-button' onClick={handleResetForm}>Reset</button>
            </div>
          </div>
        </div>
      </Form>

    </div>
  );
};
