import { useState } from "react";
import { IoHeart, IoStar } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import Page3 from "./Page3";

const Page2 = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  // const [visible3,setVisible3]=useState(false)
  // const [visible4,setVisible4]=useState(false)
  const buttonVisible = () => {
    setVisible(true);
  };
  const buttonVisible2 = () => {
    setVisible2(true);
  };

  const buttonHidden = () => {
    setVisible(false);
    setVisible2(false);
  };
  const buttonHidden2 = () => {
    setVisible2(false);
  };

  const [hover1, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleIcon1Hover = () => {
    setHover(true);
    setHover2(false);
    setHover3(false);
  };

  const handleIcon2Hover = () => {
    setHover(false);
    setHover2(true);
    setHover3(false);
  };

  const handleIcon3Hover = () => {
    setHover(false);
    setHover2(false);
    setHover3(true);
  };

  const handleIconLeave = () => {
    setHover(false);
    setHover2(false);
    setHover3(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row my-10">
        <div
          className=" flex flex-row "
          onMouseEnter={buttonVisible}
          onMouseLeave={buttonHidden}
        >
          <div className="flex-1 hover:bg-slate-400 rounded-xl">
            <div className="w-96 h-80 flex flex-row mt-3">
              <p className="w-10 ml-3 h-10 rounded-full bg-orange-400 mt-2 -p-2 text-3xl text-white text-center items-center">
                -5
              </p>
              <img
                className="w-80 h-72 mt-6  hover:bg-slate-400"
                src="https://i.ibb.co/sH4tShX/3d5ccdfabcc7ab965e412bcef692413c.png"
                alt=""
              />
            </div>

            {visible ? (
              <div className="-my-44 mx-28 flex flex-row ">
                <div
                  className={`${
                    hover1
                      ? "bg-white w-8 h-8 mr-3 rounded-full"
                      : "bg-white mr-3  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon1Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <IoHeart className="   p-1  w-8 h-8  text-center items-center rounded-full hover:text-orange-500" />
                </div>
                <div
                  className={`${
                    hover2
                      ? "bg-white w-8 h-8 mr-3 rounded-full"
                      : "bg-white mr-3  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon2Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <TfiReload className="p-1  text-xl w-8 h-8 items-center  text-center rounded-full hover:text-orange-500" />
                </div>
                <div
                  className={`${
                    hover3
                      ? "bg-white w-8 h-8  rounded-full"
                      : "bg-white  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon3Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <CiSearch className=" p-1 text-xl w-8 h-8 items-center  text-center rounded-full hover:text-orange-500" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex-1 ml-5">
            <div className="flex flex-row mb-3">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold text-2xl mb-3">Microlab 15A speaker </h1>
              <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                500{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>550</del>
                </span>
              </h1>
              <p className="mt-3 mb-2">
                The journey of Microlab Started in June 1998 as a Microlab
                laboratory to analyze and research quality multimedia audio.
                Further, they have achieved “Great Wall certification” &
                “British NQA of ISO9001: 2000 quality management system
                certification” on their way.
                </p>
              {visible && (
                <button className="w-3/4  my-7 bg-blue-500 p-2 shadow-xl rounded-xl justify-center hover:bg-orange-400">
                  Add To Cart
                </button>
              )}
            </div>
          </div>
          <div></div>
        </div>

        <div
          className=" flex flex-row "
          onMouseEnter={buttonVisible2}
          onMouseLeave={buttonHidden2}
        >
          <div className="flex-1 hover:bg-slate-400 rounded-xl">
            <div className="w-96 h-80 flex flex-row ">
              <p className="w-10 ml-3 h-10 rounded-full bg-orange-400 mt-4 -p-2 text-3xl text-white text-center items-center">
                -7
              </p>
              <img
                className="w-80 h-72 mt-10  hover:bg-slate-400"
                src="https://i.ibb.co/30ny0WL/Photocopier-Machine-Equipment-PNG-Photo.png"
                alt=""
              />
            </div>

            {visible2 ? (
              <div className="-my-44 mx-28 flex flex-row ">
                <div
                  className={`${
                    hover1
                      ? "bg-white w-8 h-8 mr-3 rounded-full"
                      : "bg-white mr-3  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon1Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <IoHeart className="   p-1  w-8 h-8  text-center items-center rounded-full hover:text-orange-500" />
                </div>
                <div
                  className={`${
                    hover2
                      ? "bg-white w-8 h-8 mr-3 rounded-full"
                      : "bg-white mr-3  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon2Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <TfiReload className="p-1  text-xl w-8 h-8 items-center  text-center rounded-full hover:text-orange-500" />
                </div>
                <div
                  className={`${
                    hover3
                      ? "bg-white w-8 h-8  rounded-full"
                      : "bg-white  w-8 h-8  rounded-full"
                  }`}
                  onMouseEnter={handleIcon3Hover}
                  onMouseLeave={handleIconLeave}
                >
                  <CiSearch className=" p-1 text-xl w-8 h-8 items-center  text-center rounded-full hover:text-orange-500" />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="flex-1 ml-5">
            <div className="flex flex-row mb-3">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className=" text-slate-300 " />
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold text-2xl mb-3">Photo Copy Machine </h1>
              <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                1240{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>1350</del>
                </span>
              </h1>
              <p className="mt-3 mb-2">
                A photocopier (also called copier or copy machine, and formerly
                Xerox machine, the generic trademark) is a machine that makes
                copies of documents and other visual images onto paper or
                plastic film quickly and cheaply.
              </p>
              {visible2 && (
                <button className="w-3/4  my-7 bg-blue-500 p-2 shadow-xl rounded-xl justify-center hover:bg-orange-400">
                  Add To Cart
                </button>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="my-20">
        <Page3></Page3>
      </div>
    </div>
  );
};

export default Page2;