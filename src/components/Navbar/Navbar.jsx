import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-red-700 top min-h-[95px] py-[25px] px-[150px] ">
      <div className="flex items-center justify-between w-[95%]">
          <Link to={"/"} className="text-white text-[28px]">Todo List</Link>
          <div className="flex gap-5">
            <Link to={"/to-do"} className=" text-white text-[20px] "> To-Do-Lists </Link>
            <Link to={"/add-to-do"} className=" text-white text-[20px]">  Add A New Task </Link>
          </div>
      </div>
     
    </div>
  );
};

export default Navbar;
