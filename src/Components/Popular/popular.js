import React from "react";
import imag1 from "../img/first.png";
import imag2 from "../img/kopm 1.jpg";
import imag3 from "../img/komp2.jpg";

function Popular() {
  return (
      <div className="w-full h-full mt-10 flex sm:flex-wrap">
        <div className="top w-full text-center">
          <h1 className="font-bold leading-[52px] sm:text-[32px] lg:text-[40px]  text-[#244D4D]">
            White Swan Chair{" "}
          </h1>
          <p className="font-medium pt-[20px] leading-[45px] sm:text-[18px] lg:text-[35px] md:text-[25px] text-[#383738]">
            All of our furniture uses the best materials <br /> and choices for our{" "}
            customers.All of our <br /> furniture uses the best materials and <br />
            choices for our customers.
          </p>
        </div>
        <div className=" w-[100%] flex items-center justify-evenly sm:justify-evenly sm:flex-wrap">
        <div class="lg:w-auto md:w-80 sm:w-96 bg-white rounded-lg  shadow-sm shadow-black  sm:mt-10">
            <img className="w-full h-[246px]" src={imag1} alt="" />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-[20px] leading-[27px] font-medium tracking-tight text-gray-900 dark:text-black">
                  With Friends!{" "}
                </h5>
              </a>
              <div className="flex justify-between">
                <span class="text-[24px] font-medium leading-[31px] text-[#154444]">
                  $1200
                </span>{" "}
                <button className=" w-[78.85px] h-[32px] bg-[#244D4D] text-[12px] text-[#ffffff] active:bg-[#fff] active:text-[#154444] border-[1px] border-[#154444]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div class="lg:w-auto md:w-80 sm:w-96 bg-white rounded-lg  shadow-sm shadow-black sm:mt-10">
            <img className="w-full h-[246px]" src={imag2} alt="" />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-[20px] leading-[27px] font-medium tracking-tight text-gray-900 dark:text-black">
                  For your Job{" "}
                </h5>
              </a>
              <div className=" flex justify-between">
                <span class="text-[24px] font-medium leading-[31px] text-[#154444]">
                  $3400
                </span>{" "}
                <button className=" w-[78.85px] h-[32px] bg-[#244D4D] text-[12px] text-[#ffffff] active:bg-[#fff] active:text-[#154444] border-[1px] border-[#154444]">
                  Buy Now
                </button>
                </div>
            </div>
          </div>
          <div class="lg:w-auto md:w-80 sm:w-96 bg-white rounded-lg   shadow-sm shadow-black sm:mt-10">
            <img className="w-full h-[246px]" src={imag3} alt="" />
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-[20px] leading-[27px] font-medium tracking-tight text-gray-900 dark:text-black">
                  For Thinking!{" "}
                </h5>
              </a>
              <div className="flex justify-between">
                <span class="text-[24px] font-medium leading-[31px] text-[#154444]">
                  $4100
                </span>{" "}
                <button className=" sm:w-[78.85px] h-[32px] bg-[#244D4D] text-[12px] text-[#ffffff] active:bg-[#fff] active:text-[#154444] border-[1px] border-[#154444]">
                  Buy Now
                </button>
                </div>
            </div>
          </div>
          </div>
        </div>
  );
}

export default Popular;
