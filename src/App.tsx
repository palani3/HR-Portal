import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forgetpassword from "./pages/forget/Forgetpassword";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="reset" element={<Forgetpassword/>}/>
      </Routes>
    </div>
  );
}
