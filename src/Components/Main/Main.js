import React from "react";
import svg1 from "../img/mastercard.svg";
import svg2 from "../img/airbnb.svg";
import svg3 from "../img/uber.svg";
import svg4 from "../img/paypal.svg";
import svg5 from "../img/visa.svg";
import svg6 from "../img/stripe.svg";
import homes from "../img/home.png";
// import svg7 from "../img/security.svg";
// import svg8 from "../img/galochka.svg";
// import svg9 from "../img/free.svg";

function Main() {
  return (
      <div className=" w-[100%] h-auto flex justify-center items-center flex-col">
        <div>
        <h1 className="font-bold md:text-4xl sm:text-sm  text-[#244D4D]">
          Trusted by 20,000+ companies
        </h1>
        </div>
        <div className=" w-[100%] sm:mt-10 md:w-[100%] bg-white flex items-center justify-evenly lg:flex-nowrap sm:flex-wrap md:flex-wrap">
          <div className=" sm:w-[100%] flex sm:justify-evenly md:justify-evenly">
          <div className="md:mt-10 sm:mt-0 ">
          <a href="https://www.mastercard.com">
            <img src={svg1} alt="" />
          </a>
          </div>
          <div className="md:mt-10 lg:mt-12">
          <a href="https://www.airbnb.com">
            <img src={svg2} alt="" />
          </a>
          </div>
          </div>

          <div className=" sm:w-[100%] sm:flex justify-evenly">
          <div className="md:mt-10 sm:mt-10 ">
            <a href="https://www.uber.com">
            <img src={svg3} alt="" />
          </a>
          </div>
         <div className="md:mt-10 sm:mt-10">
           <a href="https://www.paypal.com">
            {" "}
            <img src={svg4} alt="" />
          </a></div>
          </div>

          <div className=" sm:w-[100%] sm:flex justify-evenly">
          <div className="md:mt-10 sm:mt-10 ">
          <a href="https://www.visa.com">
            {" "}
            <img src={svg5} alt="" />
          </a>
          </div>
          <div className="md:mt-10 sm:mt-10 md:mb-0 sm:mb-8">
          <a href="https://www.stripe.com">
            {" "}
            <img src={svg6} alt="" />
          </a>
          </div>
          </div>
        </div>

        
        <div className="md:w-[100%] main md:flex md:mt-10">
          <div className="md:w-[50%]  sm:flex sm:justify-center  h-auto md:ml-5">
            <img className=" object-cover md:w-[100%] sm:w-[90%]" src={homes} alt="" />
          </div>
          <div className="lg:w-[50%]  h-auto flex flex-col items-center text-center md:ml-0 sm:ml-0 sm:mt-[30px]">
            <div className=" md:w-[100%] sm:w-[80%] lg:w-[90%] lg:h-[45%] flex sm:justify-evenly md:justify-evenly md:mt-10 md:ml-14">
            <div className="w-[50%] ">
            <h1 className="font-bold lg:text-4xl  md:text-xl sm:text-2xl text-[#244D4D]">
              About Us
            </h1>
            <p className="font-medium lg:text-3xl lg:pt-3 md:text-sm text-[#444444]">
              All of our furniture <br /> uses the best <br /> materials{" "}
            </p>
            </div>
              <div className="w-[50%]">
              <p className="font-bold lg:text-4xl md:text-xl sm:text-2xl text-[#244D4D]  ">
                  Best Quality
                </p>
                <h6 className="font-medium lg:text-3xl lg:pt-3 md:text-sm text-[#444444]">
                  All of our furniture <br /> uses the best <br /> materials
                </h6>
              </div>
              </div>
                <div className="md:w-[100%] sm:w-[80%] lg:w-[90%] lg:h-[45%]  flex md:justify-evenly sm:justify-evenly sm:mt-6 md:mt-10 md:ml-14">
                  <div className="w-[50%]">
                <p className="font-bold lg:text-4xl  md:text-xl sm:text-2xl text-[#244D4D] ">
                   Secured
                </p>
                <h6 className="font-medium lg:text-3xl lg:pt-3 md:text-sm text-[#444444]">
                  All of our furniture <br /> uses the best <br /> materials and
                </h6>
                </div>
                <div className="w-[50%]">
                <p className="font-bold sm:ml-5 lg:text-4xl md:text-xl sm:text-2xl text-[#244D4D]">
                 Shoping
                </p>
                <h6 className="font-medium lg:text-3xl lg:pt-3 md:text-sm text-[#444444] ">
                  All of our furniture <br /> uses the best <br /> materials
                </h6>
                </div>
                </div>
          </div>
        </div>
      </div>
  );
}
export default Main;
