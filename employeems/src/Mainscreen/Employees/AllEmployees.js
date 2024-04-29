

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import AImage from '../logo.svg'; 
import { GrView } from "react-icons/gr";
import { RiEditFill } from "react-icons/ri";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { GrAddCircle } from "react-icons/gr";
import { GoFilter } from "react-icons/go";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useNavigate} from 'react-router-dom';





import { useState } from 'react';

import './AllEmployees.css';
// import { useRouter } from 'next/navigation'

// import imageA from '@public/A.png';
// import ViewEmployeeDetails from './ViewEmployeeDetails/page';

const AllEmployees= ({isSidebarOpen}) => {
    const initialEmployeeData = [
        { id: 1, name: 'Employee A', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 2, name: 'Employee B', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },

        { id: 3, name: 'Employee C', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 4, name: 'Employee D', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 5, name: 'Employee E', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },

        { id: 6, name: 'Employee F', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 7, name: 'Employee G', department: 'IT', designation: 'Developer', type: 'Full-time', status: 'Active', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 8, name: 'Employee H', department: 'HR', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },

        { id: 9, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 10, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' },
        { id: 11, name: 'Employee I', department: 'IT', designation: 'Manager', type: 'Part-time', status: 'Inactive', image: process.env.PUBLIC_URL + '/A.png' }

    ];
    const [employeeData, setEmployeeData] = useState(initialEmployeeData);
    const [searchTerm, setSearchTerm] = useState('');
    const [gridApi, setGridApi] = useState(null);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const pagination = true;
    const paginationPageSize = 10;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [employeeToDelete, setEmployeeToDelete] = useState(null);
    const paginationPageSizeSelector = [10, 20, 30];
    const navigate = useNavigate();

    const NameRenderer = (props) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
              src={props.data.image} 
              alt={props.data.name}
              className="img-fluid rounded-circle"
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
          />
          <span>{props.value}</span> 
      </div>
  );
  const [isViewVisible, setIsViewVisible] = useState(false); 

  const handleViewClick = (name) => {
    setSelectedEmployeeId(name);
    navigate(`/employees/ViewEmployeeDetails`);

  };
//   const handleEditClick = (name) => {
//     // Construct the URL with the employee ID and the query parameter for edit mode
//     router.push(`/employees/ViewEmployeeDetails?search=${name}`);

   
//   };
  const handleDeleteClick = (employeeId) => {
    setEmployeeToDelete(employeeId);
    setShowDeleteModal(true);
};
const handleDeleteConfirm = () => {
  // Perform deletion logic here
  // Once the deletion is successful, close the dialog
  setShowDeleteModal(false);
};
  
   
    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredData = initialEmployeeData.filter(
            (employee) =>
                
       
                employee.name.toLowerCase().includes(term) ||
                employee.department.toLowerCase().includes(term) ||
                employee.designation.toLowerCase().includes(term) ||
                employee.type.toLowerCase().includes(term) ||
                employee.status.toLowerCase().includes(term) ||
                employee.id.toString().toLowerCase().includes(term)         );

        setEmployeeData(filteredData);
    };

    var FilterParams = {
        suppressAndOrCondition:true,
        numAlwaysVisibleConditions:1
    };
    
    const columnDefs = [
        // { headerName: 'Image', field: 'image', cellRenderer: 'imageRenderer' },
        { 
          headerName: 'Employee Name',
           field: 'name',
           sortable: true,
           resizable: true,
           cellRendererFramework: NameRenderer,
           filter: 'agTextColumnFilter',
           filterParams: FilterParams,
           width:170,
           
         },
        { 
          headerName: 'Employee ID',
         field: 'id',
         sortable: true,
         resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: FilterParams,
        width:170
       
      },
        { headerName: 'Department', 
        field: 'department',
        sortable: true,
        resizable: true,
        filter: 'agTextColumnFilter' ,
        filterParams: FilterParams,
        width:170
       
    },
        { 
          headerName: 'Designation',
           field: 'designation',
           sortable: true,
           resizable: true,
        filter: 'agTextColumnFilter',
        filterParams: FilterParams,
        width:200
       
       },
        {
           headerName: 'Type',
         field: 'type',
         sortable: true,
        resizable: true,
        filter: 'agTextColumnFilter',
        width:170, 
        
        filterParams: FilterParams,
       
      },
        {
           headerName: 'Status',
            field: 'status',
            sortable: true,
             resizable: true,
            filter: 'agTextColumnFilter',
        filterParams: FilterParams,
        width:170
       
       },
        // {
        //   headerName: 'Action',
        //   cellRendererFramework: ActionRenderer,
        //   cellRendererParams: {
        //     edit: <RiEditFill />,
        //     view: <GrView />,
        //     delete: <RiDeleteBin5Line/>
        //   },
        {
          headerName: 'Action',
          sortable: false,
            resizable: true,
            // width:170,
            flex:1,
         
            // filter: 'agTextColumnFilter',
          cellRendererFramework: (params)=> (
            <div>
              
              <GrView  style={{cursor:"pointer"}} onClick={handleViewClick}/> &nbsp;
              
             
              <RiEditFill style={{cursor:"pointer"}} onClick={{}}/> &nbsp;
              <RiDeleteBin5Line style={{ cursor: 'pointer' }}
            onClick={() => handleDeleteClick(params.data._id)} />
    
              
            </div>
          ),

          
        },
        
      ];
    
      
    const frameworkComponents = {
        imageRenderer: ImageRenderer,
        actionRenderer: ActionRenderer,
    };
    const onGridReady = (params) => {
      setGridApi(params.api);
  };
    return (
        <div style={{ height: '500px',marginLeft: isSidebarOpen ? '15%' : '7%' , transition: 'width 0.2s ease' }}>
           <div>
            <h2 className="allemp">
                All Employees
                <br />
                <span className='spanemp'>
                    All Employee Information
                </span>
            </h2>
            </div>
          {/* <div style={{ width: isSidebarOpen ? 'calc(100% - 250px)' : '100%' }}></div> */}
            <div  className="spldiv">
                <div  className="searchinput" >
                    <IoIosSearch className="searchicon" style={{marginTop:isSidebarOpen ? '-2%':'1'}}/>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{
                            padding: '10px 10px 10px 30px',
                            width: '60%',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                    />


            



                    <Link to="/employees/addemployee">
                        <button className='addempbtn' style={{marginLeft: isSidebarOpen ? '76%' : '8%',transform:isSidebarOpen ? 'translateY(-108%)' : 'translateY(-5%)'}}
                           
                        >
                            <GrAddCircle size={15} style={{ marginRight: "3px", marginTop: "0.5px"}} />
                            Add Employee
                        </button>
                    </Link>
                    {/* <button className='filter' ><GoFilter size={18} style={{ marginRight: "3px" }} />Filter</button> */}
                </div>
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <i className="bi bi-exclamation-triangle-fill text-danger mr-2"></i>  Are you sure you want to delete employee permanently?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            </div>

<div className='ag-theme-alpine' style={{height:"500px"}}>

            <AgGridReact
                columnDefs={columnDefs}
                rowData={employeeData}
                
                pagination={pagination}
                paginationPageSize={paginationPageSize}
                // paginationPageSizeSelector={paginationPageSizeSelector}

            />
            </div>
            {/* {selectedEmployeeId && <ViewEmployeeDetails employeeId={selectedEmployeeId} />} */}
        </div>
    );
};

const ImageRenderer = (props) => (
    <img
        src={props.value}
        alt={props.data.name}
        className="employee-img"
        // style={{ width: '20px', height: '20px',marginTop:"30px" }}
    />
);

const ActionRenderer = (props) => (
    <div>
        <span style={{ marginRight: '8px' }}>{props.value.edit}</span>
        <span style={{ marginRight: '8px' }}>{props.value.view}</span>
        <span>{props.value.delete}</span>
    </div>
);


export default AllEmployees;