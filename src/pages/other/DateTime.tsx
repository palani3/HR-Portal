import React from "react";

export default function DateTime({ name }) {
  return (
    <div className="grid grid-cols-3  h-28 text-center content-center bg-slate-500 rounded-lg mx-5 p-5 ">
      <div className="">Date and time</div>
      <div>01 {name}</div>
      <div>03</div>
      {/* <div>Date and time</div> */}
    </div>
  );
}
