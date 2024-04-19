import { Routes, Route } from "react-router-dom"
import About from "./Pages/About"
import Home from "./Pages/Home"





export default function App() {
  
  return (
    <div>
      <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </>
    </div>
  )
}
