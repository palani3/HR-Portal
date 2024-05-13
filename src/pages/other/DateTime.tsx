import React from "react";
import moment from 'moment';

export default function DateTime({ name }) {
  const currentDate = moment().format('DD-MMM-YYYY');
  return (
    <div className="grid grid-cols-3  bg-gradient-to-br from-green-200 via-blue-400 to-blue-800 h-28 text-center content-center rounded-lg mx-5 p-5 ">
      <div className="text-white">Date and time</div>
      <div className="grid justify-start text-white"><p className="text-white"> {currentDate}</p>
      <p className="text-xl  font-bold ">Today</p></div>

      <div className="grid  text-sm"> 
             <div className="flex justify-end text-white">
              <div className="">
        <p className=" mx-4 ">Present-on time</p>
       <p className="text-lg mt-3">80</p>
        </div>
        <div className="">
        <p className=" mx-4 ">Late</p>
       <p className="text-lg mt-3 ">20</p>
        </div>
        <div className="">
        <p className=" mx-4 ">Absent</p>
       <p className="text-lg mt-3">7</p>
        </div>
        <div className="">
        <p className=" mx-4 ">Leave</p>
       <p className="text-lg mt-3">3</p>
        </div>
        </div>
       
        
        
      </div>
      {/* <div>Date and time</div> */}
    </div>
  );
}
