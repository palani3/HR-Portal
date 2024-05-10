// import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import DateTime from './other/DateTime'

import Calenderpick from '../components/Calenderpick'
import Leavetable from '../components/Leavetable'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3">
    <div className=" col-span-2">
      <DateTime name="palani"/>
      <Leavetable/>
      </div>
      <div className="col-span-1 ">
      <Calenderpick/>
      </div>
      
 
        
      
      {/* <div className="col-start-2 bg-zinc-950">dasds</div> */}
        {/* <Sidebar /> */}
       
{/* <div className=""> <Calenderpick/></div> */}
      




    
    
    </div>

  )
}
