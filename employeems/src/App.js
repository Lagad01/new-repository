import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Navbar from './Mainscreen/Navbar';
import Sidebar from './Mainscreen/Sidebar';
import AllEmployees from './Mainscreen/Employees/AllEmployees';
import Mainscreen from './Mainscreen/MainScreen/Mainscreen';


function App() {
  return (
    <div className="App">
  {/* <Navbar/> */}
      
      <Routes>
      <Route  path="/*" element={<Mainscreen/>} />
      {/* <Route path="/dashboard/employees" element={<AllEmployees/>}/> */}
   
   {/* <Route  index path="/employees" element={<AllEmployees/>} /> */}
   </Routes>
   
    {/* <Dashboard/> */}
    </div>
  );
}

export default App;
