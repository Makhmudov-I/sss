import React from "react";
// import img from "../img/menu.svg" 
import image from "../img/search.svg" 
import imagee from "../img/sofa.png" 
import {Link} from "react-scroll";


function Header() {
  return (
      <div className=" head w-full flex flex-col flex-wrap p-5 items-center ">
        <div className=" md:w-[100%] md:flex md:flex-row md:flex-wrap md:justify-between text-center">
          <div className=" sm:flex sm:text-center sm:justify-center">
          <h1 className="font-bold md:text-lg sm:text-2xl text-[#244D4D] md:pt-6 sm:pt-4  cursor-pointer hover:underline">
          <a href="https://www.DudeShape.com/">DudeShape </a>
          </h1> 
          </div>
          <div className="mt-2  flex md:justify-center sm:justify-evenly ">
                <a href="#" className="font-medium   lg:text-lg text-[#161616] hover:underline active:text-[#154444] active:no-underline pt-4 cursor-pointer"><Link  to="navbar" exact="true" duration={30000}>Home</Link></a>
                <a href="#" className="font-medium   lg:text-lg text-[#161616] hover:underline active:text-[#154444] active:no-underline pt-4 lg:pl-20 md:pl-8 sm:pl-10 cursor-pointer"><Link  to="main" exact="true" duration={30000}>About</Link></a>
                <a href="#" className="font-medium   lg:text-lg text-[#161616] hover:underline active:text-[#154444] active:no-underline pt-4 lg:pl-20 md:pl-8 sm:pl-10 cursor-pointer"><Link  to="furniture" exact="true" duration={30000}>Features</Link></a>
                <a href="#" className="font-medium   lg:text-lg text-[#161616] hover:underline active:text-[#154444] active:no-underline pt-4 lg:pl-20 md:pl-8 sm:pl-10 cursor-pointer"><Link  to="footer" exact="true" duration={30000}>Contact</Link></a>
        </div>
        <div className=" sm:p-5 flex justify-center"> <button className=" bg-[#154444] sm:w-40 sm:h-10  text-white sm:text-xl font-normal "><a href="https://www.google.com/search?keywords=My+Search+Parameters">Search</a></button></div>
        </div> 


        <div className=" md:w-[100%] 2xl:h-[80vh] md:flex sm:justify-center">
        <div className=" md:w-[40%] 2xl:h-[100%] ">
        <img className=" md:w-[100%] 2xl:h-[100%]" src={imagee}  alt="" />
        </div>
        <div className=" md:w-[60%] 2xl:h-[100%] flex flex-col justify-center items-center bg-[#154444]">
          <h1 className="font-bold leading-12 md:text-4xl sm:text-xl  text-white mb-4 text-center cursor-pointer">We Help You Make <br /> Modern Furniture</h1>
          <p className=" font-medium md:text-xl sm:text-[13px] text-white mb-4 text-center  cursor-pointer tracking-wide ">All of our furniture uses the best materials <br /> and  choices for our customers. All of <br /> our furniture uses the best materials </p>
          <button className=" 2xl:my-5  rounded-full py-4 px-8 border-2 text-center border-[#fff] active:bg-[#fff] active:border-none active:text-[#154444] active:border-[2px] active:border-black text-white text-xl font-normal leading-6 mb-4 "><a href="tel:+998990011528">Call to order</a></button>
       </div>
      </div>




      </div>
  );
}

export default Header;
