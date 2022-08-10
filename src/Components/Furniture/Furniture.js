import React, { useState } from "react";
import svg10 from "../img/divan.svg";
import svg11 from "../img/stul.svg";
import svg12 from "../img/kreslo.svg";
import shelf from "../img/shkaf.png";
import svg13 from "../img/human.svg";
import svg14 from "../img/star.svg";
import childroom from "../img/childroom.jpg";
import dinnerroom from "../img/dinner.jpg";
import bedroom from "../img/bedroom.jpg";
import gostroom from "../img/gostroom.webp";
import outside from "../img/outside.jpg";
import gamer from "../img/gamerroom.jpg";
import villas from "../img/villa.jpg";
import villas2 from "../img/villa2.jpg";
import jack from "../img/daa.webp";
import phone from "../img/call.svg";

function Furniture() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [pageState, setPageState] = useState(1);
  const pageTab = (index) => {
    setPageState(index);
  };

  return (
    <div>
      <div className=" furniture w-[100%] h-auto flex flex-col flex-wrap items-center">
        <div className="top text-center pt-10">
          <h1 className="font-bold leading-[48px] sm:text-[32px] text-[#242424] cursor-pointer">
            All our Villas!
          </h1>
        </div>
          <div className="sm:w-[100%]  md:h-auto mb-3 flex sm:justify-evenly md:justify-evenly items-center mt-5">
            <h1 className="text-[#919090] hover:text-[#154444] hover:underline  border-[#154444] md:text-[24px] sm:text-[13px] leading-[20px] font-medium cursor-pointer" 
            onClick={() => pageTab(1)}>
              Shop By Room
            </h1>
            <h1 className="text-[#919090] hover:text-[#154444] hover:underline   border-[#154444] md:text-[24px] sm:text-[13px] leading-[20px] font-medium cursor-pointer"
             onClick={() => pageTab(2)}>
              Shop By Category
            </h1>
            <h1 className="text-[#919090] hover:text-[#154444]  hover:underline  border-[#154444] md:text-[24px] sm:text-[13px] leading-[20px] font-medium cursor-pointer"
            onClick={() => pageTab(3)}>
              Shop By Style
            </h1>
          </div>

          <div className="w-full">
          {pageState !== 2 ? ("") : (<div className=" w-[100%] h-full flex lg:flex-nowrap  sm:flex-wrap justify-center items-center">
          <div className="lg:w-[60%] lg:h-[100%] flex justify-center lg:mt-5 lg:ml-5">
            <img className=" lg:w-[100%] lg:h-[100%] md:w-[95%]  md:h-[60%] sm:w-[95%] md:h- cursor-pointer" src={villas2} alt="" />
           </div>
           <div className=" lg:w-[40%] md:w-[700] lg:ml-28 sm:w-[95%] h-[100%] flex flex-col flex-wrap sm:items-center lg:items-start md:items-center text-center ">
           <h1 className="lg:text-left sm:text-[17px] md:text-[21px] lg:text-[22px] font-bold lg:pt-[80px] md:pt-5 sm:pt-5 text-[#4a4a4a]  cursor-pointer">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Porro tempora deserunt <br /> cupiditate numquam  nesciunt architecto aliquam, <br /> earum eaque aliquid cum? Laudantium, <br /> temporibus, autem hic enim pariatur, <br /> quia ratione velit est odio commodi beatae <br /> fuga! Laudantium rerum cupiditate aut minus eum!</h1>
           <p className=" lg:text-[30px] md:text-[20px] font-medium lg:pt-[30px] md:pt-5 sm:pt-5 text-[#1c1c1c] uppercase  cursor-pointer">Do you want buy this Villa?</p>
           <p className="pt-[10px]  cursor-pointer">To order phone number for you!</p>
          <a href="tel.+998990011528"> <button className="w-[225px] h-[52px] bg-[#305F64] active:bg-white active:border-[1px] active:text-[#000] active:border-black lg:mt-[90px] md:mt-5 sm:mt-5 text-[28px] text-[#fff] flex items-center justify-center font-semibold" >To order <img className="w-[45px] pt-[5px] pl-[20px]" src={phone} alt="" /> </button></a>
           </div>
          </div>)}
          </div>

          <div className="w-full">
          {pageState !== 3 ? ("") : (<div className=" w-[100%] h-full flex lg:flex-nowrap  sm:flex-wrap justify-center items-center">
          <div className="lg:w-[60%] lg:h-[100%] flex justify-center lg:mt-5 lg:ml-5">
            <img className=" lg:w-[100%] lg:h-[100%] md:w-[95%]  md:h-[60%] sm:w-[95%] md:h- cursor-pointer" src={villas} alt="" />
           </div>
           <div className=" lg:w-[40%] md:w-[700] lg:ml-28 sm:w-[95%] h-[100%] flex flex-col flex-wrap sm:items-center lg:items-start md:items-center text-center ">
           <h1 className="lg:text-left sm:text-[17px] md:text-[21px] lg:text-[22px] font-bold lg:pt-[80px] md:pt-5 sm:pt-5 text-[#4a4a4a]  cursor-pointer">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Porro tempora deserunt <br /> cupiditate numquam  nesciunt architecto aliquam, <br /> earum eaque aliquid cum? Laudantium, <br /> temporibus, autem hic enim pariatur, <br /> quia ratione velit est odio commodi beatae <br /> fuga! Laudantium rerum cupiditate aut minus eum!</h1>
           <p className=" lg:text-[30px] md:text-[20px] font-medium lg:pt-[30px] md:pt-5 sm:pt-5 text-[#1c1c1c] uppercase  cursor-pointer">Do you want buy this Villa?</p>
           <p className="pt-[10px]  cursor-pointer">To order phone number for you!</p>
          <a href="tel.+998990011528"> <button className="w-[225px] h-[52px] bg-[#305F64] active:bg-white active:border-[1px] active:text-[#000] active:border-black lg:mt-[90px] md:mt-5 sm:mt-5 text-[28px] text-[#fff] flex items-center justify-center font-semibold" >To order <img className="w-[45px] pt-[5px] pl-[20px]" src={phone} alt="" /> </button></a>
           </div>
          </div>)}
          </div>


          {pageState !== 1 ? ("") : ( <div className="w-[100%] h-auto flex lg:mt-10 lg:justify-between sm:justify-center lg:flex-nowrap md:flex-wrap sm:flex-wrap">
            <div className=" lg:w-[60%] lg:ml-5">
            <div className="content-tabs flex lg:w-full justify-center">
              {toggleState !== 1 ? (
                ""
              ) : (
                <img
                  className=" lg:w-[100%] md:w-[95%] md:h-[95%] sm:sm:w-[390px] sm:h-[250px] object-cover  "
                  src={dinnerroom}
                  alt=""
                />
              )}

              {toggleState !== 2 ? ("") : (<img className=" lg:w-[100%]  md:w-[95%] md:h-[500px] sm:sm:w-[390px] sm:h-[250px]  object-cover" src={gostroom} alt="" />)}

              {toggleState !== 3 ? (
                ""
              ) : (
                <img className=" lg:w-[100%]   md:w-[95%] md:h-[500px] sm:sm:w-[390px] sm:h-[250px]  object-cover" src={bedroom} alt="" />
              )}
              {toggleState !== 4 ? (
                ""
              ) : (
                <img className=" lg:w-[100%] md:w-[95%]  md:h-[500px] sm:sm:w-[390px] sm:h-[250px] object-cover" src={childroom} alt="" />
              )}
              {toggleState !== 5 ? (
                ""
              ) : (
                <img className=" lg:w-[100%]  md:w-[95%]  md:h-[500px] sm:sm:w-[390px] sm:h-[250px]  object-cover" src={outside} alt="" />
              )}
              {toggleState !== 6 ? (
                ""
              ) : (
                <img className=" lg:w-[100%]  md:w-[95%]  md:h-[500px] sm:sm:w-[390px] sm:h-[250px] object-cover" src={gamer} alt="" />
              )}
            </div>
            </div>



            <div className="lg:w-[40%] lg:mt-20  h-auto flex sm:justify-center md:justify-center lg:justify-center ">
            <div className=" bloc-tabs w-auto h-auto sm:mt-5">
                <div onClick={() => toggleTab(1)}>
                  <div className=" md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] md:ml-14 bg[#154444] border-2 border-[#808080] text-center hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 hover:stroke-white cursor-pointer"
                      src={svg10}
                      alt=""
                    />{" "}
                    <p className="sm:text-[16px]  pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px] cursor-pointer">
                      Living Room
                    </p>
                  </div>
                </div>
                <div onClick={() => toggleTab(2)}>
                  <div className=" md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] bg[#154444]  md:ml-14 border-2 border-[#808080] text-center sm:mt-[50px]  hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 hover:stroke-white cursor-pointer"
                      src={svg11}
                      alt=""
                    />{" "}
                    <p className="text-[16px]  pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px] cursor-pointer">
                      Dining Room
                    </p>
                  </div>
                </div>
                <div onClick={() => toggleTab(3)}>
                  <div className="  md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] bg[#154444] border-2  md:ml-14 border-[#808080] text-center mt-[50px] hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 hover:stroke-white cursor-pointer"
                      src={svg11}
                      alt=""
                    />{" "}
                    <p className="text-[16px]  pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px] cursor-pointer">
                      Bedroom Room
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-auto h-auto sm:mt-5">
                <div onClick={() => toggleTab(4)}>
                  <div className="  md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] bg[#154444] md:mr-14  border-2 border-[#808080] text-center md:ml-[20px] sm:ml-[60px] hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 cursor-pointer"
                      src={svg10}
                      alt=""
                    />{" "}
                    <p className="text-[16px]  pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px] cursor-pointer">
                      Child Room
                    </p>
                  </div>
                </div>
                <div onClick={() => toggleTab(5)}>
                  <div className=" md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] bg[#154444] border-2 border-[#808080] text-center mt-[50px] md:ml-[20px] sm:ml-[60px]  hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 cursor-pointer"
                      src={svg11}
                      alt=""
                    />{" "}
                    <p className="text-[16px]  pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px] cursor-pointer">
                      Appearence
                    </p>
                  </div>
                </div>
                <div onClick={() => toggleTab(6)}>
                  <div className=" md:w-[222px] md:h-[90px] sm:w-[150px] sm:h-[60px] bg[#154444] border-2 border-[#808080] text-center mt-[50px] md:ml-[20px] sm:ml-[60px] hover:bg-[#154444] hover:border-[0px] cursor-pointer">
                    {" "}
                    <img
                      className=" md:pt-[18px] md:pl-[100px] sm:pt-1 sm:pl-14 cursor-pointer"
                      src={svg12}
                      alt=""
                    />{" "}
                    <p className="text-[16px] pt-1.5 text-[#808080] hover:text-[#ffffff] leading-[27px]cursor-pointer">
                      Playing Room
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> )}

          </div>

        <div className="w-[100%] h-[80vh] flex lg:flex-nowrap sm:flex-wrap md:flex-wrap sm:justify-center">
          <div className=" lg:w-[60%] sm:w-[100%] md:w-[100%] md:h-[100%]  flex md:justify-center lg:justify-start md:mx-3 lg:mt-5 sm:ml-5">
            <img
              className="lg:w-[100%]  md:w-[100%] lg:h-[100%] md:mt-4 sm:mt-5  sm:w-[95%] object-cover"
              src={jack}
              alt=""
            />
          </div>
          <div className="lg:w-[40%] h-[100%] sm:w-[95%] flex flex-col items-center text-center mt-18 ">
            <h1 className="md:text-[32px] sm:text-[20px] sm:pt-10 md:pt-26 lg:pt-[150px] font-bold text-[#242424] md:leading-[48px] ">
              Our customers are very <br /> importan to us
            </h1>
            <p className="md:text-[18px] sm:text-[13px] font-normal text-[#383738] md:leading-[27px] md:pt-5">
              All of our furniture uses the best materials and choices for{" "}
              <br /> our customers.All of our furniture uses the best materials{" "}
              <br /> and choices for our customers.
              
            </p>
            <div className="w-[100%] h-[9%] flex lg:justify-center sm:justify-center lg:items-center sm:items-center">
              <img className=" lg:mt-[60px]  sm:w-6 sm:h-6 object-cover" src={svg13} alt="" />
              <h1 className="sm:text-[10px] md:text-[30px] text-[#000000] font-medium leading-[19px] lg:pt-[55px] pl-[20px]">Mh Jibon</h1>
              <img className="lg:mt-[50px] sm:mt-[1px] pl-[20px] sm:w-12 sm:h-6 " src={svg14} alt="" />
            </div>
          </div>
        </div>

        <div className="lg:w-[100%] h-[40vh] flex flex-col items-center lg:mt-14">
          <div className="md:w-[98%] h-[40vh] sm:w-[95%] bg-[#F4F6F6] flex flex-col items-center">
            <h1 className="md:text-[32px] sm:text-[24px] text-[#222222] md:leading-[48px] font-bold text-center pt-[48px]">
              Subscribe to get the latest <br /> news about us
            </h1>
            <p className="md:text-[18px] sm:text-sm text-[#222222] leading-[24px] font-normal text-center pt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br /> eiusmod tempor incididunt ut labore at dolore.
            </p>
            <div className="md:w-[50%] sm:w-[90%] h-[67px] bg-white mt-[30px] flex items-center">
              <input
                className="w-[60%] h-[60px] text-[#000] text-[16px] ml-[5px] outline-0 "
                type="text"
                placeholder="Enter your Email"
                minLength={6}
                maxLength={20}
              />
              <button className="w-[110px] h-[40px] sm:ml-4 lg:ml-[210px] bg-[#305F64] hover:bg-[#4a8a91] text-[#ffffff] text-[16px] font-[medium] leanding-[22px] active:border-[1px] active:border-[#154444] active:bg-[#fff] active:text-[#154444]">
                Register
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Furniture;
