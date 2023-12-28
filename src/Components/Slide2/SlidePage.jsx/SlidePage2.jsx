import { IoStar } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";


const SlidePage2 = () => {
    return (
        <div className="my-10">
            <div className="flex flex-row  ">
                <div className="flex mx-20">
                    <img className="w-40 h-40" src="https://i.ibb.co/L9k68nX/qcy-m10-tws-01-500x500-1.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Samsung M10 </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                70{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>100</del>
                </span>
              </h1>
                </div>
            </div>
          {/* this is 2nd cart */}
          <div className="flex flex-row  ">
                <div className="flex mx-20">
                    <img className="w-40 h-40" src="https://i.ibb.co/L9k68nX/qcy-m10-tws-01-500x500-1.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Samsung M10 </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                70{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>100</del>
                </span>
              </h1>
                </div>
            </div>
            {/* This is 3rd card */}
            <div className="flex flex-row  ">
                <div className="flex mx-20">
                    <img className="w-40 h-40" src="https://i.ibb.co/L9k68nX/qcy-m10-tws-01-500x500-1.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Samsung M10 </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                70{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>100</del>
                </span>
              </h1>
                </div>
            </div>
        </div>
    );
};

export default SlidePage2;