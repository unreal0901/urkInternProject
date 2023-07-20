import React from "react";
import ProfileImg from "../../Assets/profile.jpg";

const Profile = () => {
  return (
    <div className="profile flex flex-col p-2 px-5 md:w-[30%]  md:py-10 md:bg-[#FAFAFA] md:h-screen">
      <div className="bell text-right p-2 md:hidden">
        <div className="max-w-min relative float-right">
          <span className="absolute w-[6px] h-[6px] rounded-lg bg-blue-500 right-0 top-[-2px]"></span>
          <i class="bx bx-bell text-gray-500 text-lg font-normal"></i>
        </div>
      </div>
      <div className="profile_info flex gap-2 ">
        <div>
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={ProfileImg}
            alt="profile"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="info text-2xl font-semibold text-gray-800">
            Hi Mike,
          </div>
          <div className="intro text-[13px] font-semibold text-gray-600">
            Welcome back
          </div>
        </div>
      </div>
      <div className="profile__stats mt-7 flex flex-col gap-5 bg-[#FAFAFA] p-4 py-7 rounded-md mx-auto w-full ">
        <div>
          <p className="font-bold text-gray-600 text-[14px]">Today</p>
          <div className="account_balance">
            <p className="text-3xl font-bold text-gray-800">$19,892</p>
            <p className="text-gray-500 text-[10px] font-bold">
              Account Balance
            </p>
          </div>
        </div>
        <div className="balance__meta flex gap-7">
          <div>
            <p className="font-bold text-gray-800 text-1xl">$4,000</p>
            <p className="text-gray-500 text-[10px] font-bold">Year-to-Date</p>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-1xl">$1,892</p>
            <p className="text-gray-500 text-[10px] font-bold">
              Total Interest
            </p>
          </div>
        </div>
        <div className="w-full flex ">
          <button className="bg-[#4935FF] w-[90%] h-10 text-white font-bold text-sm rounded-lg md:w-[50%]">
            I want to
            <span>
              <i className="bx bxs-down-arrow ml-2 text-[10px]"></i>
            </span>
          </button>
        </div>
      </div>
      <div className="profile__meta mt-7 flex flex-col gap-5 bg-[#fafafa] p-4 py-7 rounded-md mx-auto w-full">
        <div>
          <p className="text-gray-600 font-bold text-[14px]">
            Recent Transactions
          </p>
        </div>
        <div>
          <p className="data text-[10px] text-gray-500">2020-07-01</p>
          <p className="text-gray-600  text-[12px] font-bold md:border-b-2 md:pb-3">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div>
          <p className="data text-[10px] text-gray-500">2020-07-01</p>
          <p className="text-gray-600  text-[12px] font-bold md:border-b-2 md:pb-3">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div>
          <p className="data text-[10px] text-gray-500">2020-07-01</p>
          <p className="text-gray-600  text-[12px] font-bold md:border-b-2 md:pb-3">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div className="hidden md:block">
          <p className="data text-[10px] text-gray-500">2020-07-01</p>
          <p className="text-gray-600  text-[12px] font-bold md:border-b-2 md:pb-3">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
        <div className="hidden md:block">
          <p className="data text-[10px] text-gray-500">2020-07-01</p>
          <p className="text-gray-600  text-[12px] font-bold md:border-b-2 md:pb-3">
            Withdrawl Transfer to Bank-XX11
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
