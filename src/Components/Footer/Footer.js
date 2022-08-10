import React from "react";
import svg16 from "../img/strelka.svg";
import face from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
import insta from "../img/instagram 1.svg";
import youtube from "../img/youtube 1.svg";
import {Link} from "react-scroll";

function Footer() {
  return (
    <div>
      <div className=" footer md:w-[98%] sm:w-[95%] sm:ml-2.5 md:ml-2 lg:ml-4 h-auto bg-[#305F64] flex md:flex-wrap sm:flex-wrap lg:flex-nowrap">
        <div className="w-[100%] h-auto flex flex-col items-center text-center">
          <h1 className="md:text-[24px] sm:text-[28px] text-[#fff] leading-[29px] font-bold md:pt-[70px] sm:pt-[50px] hover:underline cursor-pointer ">
            DudeShape
          </h1>
          <p className="md:text-[18px] sm:text-[15px] text-[#fff] leading-[26px] font-medium pt-[24px]  hover:underline cursor-pointer ">
            Lorem ipsum dolor sit amet, conse <br />
            ctetur adipiscing elit, sed eiusmod <br /> tempor incididunt ut
            labore .
          </p>
          <h2 className="md:text-[20px] sm:text-[28px]  text-[#fff] leading-[29px] font-bold pt-[40px] hover:underline cursor-pointer ">
            Follow Us :
          </h2>
          <div className="flex mt-[21px] cursor-pointer mb-5">
            <a href="https://www.facebook.com"><img src={face} alt="" /></a>
            <a href="https://www.twitter.com"><img className="ml-[15px]" src={twitter} alt="" /></a>
            <a href="https://www.instagram.com"><img className="ml-[15px]" src={insta} alt="" /></a>
            <a href="https://www.youtube.com"><img className="ml-[15px]" src={youtube} alt="" /></a>
          </div>
        </div>
        <div className="w-[100%] h-auto flex flex-col items-center text-center">
          <h1 className="md:text-[24px] sm:text-[28px] text-[#fff] leading-[29px] font-bold pt-[50px] hover:underline cursor-pointer ">
            Take a tour
          </h1>
          <ul className="list-none text-[white] pt-[24px] text-[18px] leading-[40px] text-medium cursor-pointer ">
            <li className="hover:underline" >Features</li>
            <li className="hover:underline" >Pricing</li>
            <li className="hover:underline" >Product</li>
            <li className="hover:underline" >Support</li>
          </ul>
        </div>
        <div className="w-[100%] h-auto flex flex-col items-center text-center">
          <h1 className="md:text-[24px] sm:text-[28px] text-[#fff] leading-[29px] font-bold pt-[50px] hover:underline cursor-pointer ">
            Our company
          </h1>
          <ul className="list-none text-[white] pt-[24px] text-[18px] leading-[40px] text-medium cursor-pointer ">
            <li className="hover:underline" >About Us</li>
            <li className="hover:underline" >Blog</li>
            <li className="hover:underline" >Media</li>
            <li className="hover:underline" >Contact Us</li>
          </ul>
        </div>
        <div className="w-[100%] h-auto flex flex-col items-center text-center">
          <h1 className="md:text-[24px] sm:text-[28px] text-[#fff] leading-[29px] font-bold pt-[50px] hover:underline cursor-pointer ">
            Subscribe
          </h1>
          <p className="md:text-[24px] sm:text-[16px] text-[#fff] leading-[26px] font-medium pt-[16px] hover:underline cursor-pointer ">
            Subscribe to get the <br /> latest news from us
          </p>
          <div className="w-[253px] h-[48px] bg-white mt-[40px] flex items-center mb-2">
            <input
              className="w-[120px] h-[22px] text-[#000] text-[16px] ml-[22px] outline-0"
              type="text"
              placeholder="Enter your Email"
              minLength={6}
              maxLength={20}
            />
            <button className="w-[30px] h-[30px] bg-[#FFB624] active:bg-[#4a8a91] text-[#ffffff] text-[16px] font-[medium] leanding-[22px]  ml-[60px] rounded-[100px] cursor-pointer ">
              <img className="ml-[6px] cursor-pointer " src={svg16} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[98%] sm:w-[95%] sm:ml-2.5 md:ml-2 lg:ml-4  h-[10vh] bg-[#305F64] flex justify-center items-center border-t-[1px]">
        <h1>
          <Link  className="text-[18px] text-[#fff] leading-[23px] font-medium cursor-pointer uppercase hover:underline " to="head" exact="true" duration={30000}>Back to the  first page</Link>
        </h1>
      </div>
    </div>
  );
}
export default Footer;
