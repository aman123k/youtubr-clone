import React from "react";
import { Link } from "react-router-dom";
import { lowerNaverdata, upperNavbardata } from "./data/Navbardata";
function Slidebar() {
  return (
    <>
      <ul className=" mt-4">
        {upperNavbardata.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="text-center">
              <li
                className=" items-center 
              flex gap-5 pl-6 hover:bg-[#ECECEC] p-2"
              >
                <div
                  className=" text-2xl 
                text-[#0A0A0A] "
                >
                  {item.icon}
                </div>
                <span className=" text-[1rem]">{item.title}</span>
              </li>
            </Link>
          );
        })}
        <hr className=" mr-3 my-3 " />
        {lowerNaverdata.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="text-center">
              <li
                className=" items-center 
              flex gap-5 pl-6 hover:bg-[#ECECEC] p-2"
              >
                <div
                  className=" text-2xl 
                text-[#0A0A0A] "
                >
                  {item.icon}
                </div>
                <span className=" text-[1rem]">{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Slidebar;
