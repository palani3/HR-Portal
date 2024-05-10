import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgetpassword from "./pages/forget/Forgetpassword";
import SidebarNavbar from "./pages/Sidebar/SidebarNavbar";
import DarkModeToggle from "./pages/other/DarkModeToggle";
// import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/Sidebar/Sidebar";



export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen flex">
      {/* <DarkModeToggle/> */}
      <Sidebar/>
     
      {/* {isLoggedIn && <SidebarNavbar />}  */}
      <Routes>
      
        <Route path="/"  element={<Dashboard/>}/>
        <Route path="reset" element={<Forgetpassword/>}/>
        {/* <Route path="dashboard" element={<Dashboard />}/> */}
        <Route path="sidebar" element={<SidebarNavbar />}/>
      </Routes>
    </div>
  );
}
