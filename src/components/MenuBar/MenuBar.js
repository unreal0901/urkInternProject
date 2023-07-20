import React from "react";
import Logo from "../../Assets/Logo.png";

const MenuBar = () => {
  return (
    <div className="text-center fixed bottom-0 h-10 w-full md:w-min md:static md:h-screen bg-white order-last md:order-none flex md:flex-col md:justify-between  md:py-4 md:px-2 z-10">
      <div className="grp1 hidden md:flex gap-5 mx-auto text-xl text-gray-500 md:flex-col md:mx-0">
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <img src={Logo} alt="Logo" className="py-2" />
        </div>
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="grp2 flex gap-5 mx-auto text-xl text-gray-500 md:flex-col md:mx-0">
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bx-home"></i>
        </div>
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bxs-message-square-dots"></i>
        </div>
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bx-file"></i>
        </div>
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bx-user"></i>
        </div>
      </div>
      <div className="grp3 hidden md:flex gap-5 mx-auto text-xl text-gray-500 md:flex-col md:mx-0">
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <div className="max-w-min relative ">
            <span className="absolute w-[6px] h-[6px] rounded-lg bg-blue-500 right-0 top-[0px]"></span>
            <i className="bx bx-bell text-gray-500 text-lg font-normal"></i>
          </div>
        </div>
        <div className="ic1 h-min px-2  rounded-md  hover:bg-[#3F2DDF] hover:text-white ">
          <i className="bx bx-log-in"></i>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
