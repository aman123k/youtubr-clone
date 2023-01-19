import React from "react";
import { Link } from "react-router-dom";
import { headerSidebar } from "./data/Navbardata";
function Navbar() {
  return (
    <>
      <ul className=" max-[800px]:hidden w-[7.5%] text-center mt-4 fixed">
        {headerSidebar.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="text-center">
              <li
                className=" items-center hover:bg-[#ECECEC]
               py-3 px-1 "
              >
                <div
                  className=" text-2xl 
                text-[#0A0A0A] flex justify-center"
                >
                  {item.icon}
                </div>
                <span className=" text-[11px] xl:text-base">{item.title}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default Navbar;
