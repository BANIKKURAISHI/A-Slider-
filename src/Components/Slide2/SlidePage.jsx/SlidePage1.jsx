import { IoStar } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";


const SlidePage1 = () => {
    return (
        <div className="my-10">
            <div className="flex flex-row  mb-3">
                <div className="flex mx-0 md:mx-5 lg:mx-12 " >
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
          <div className="flex flex-row mt-3 ">
                <div className="flex mx-0 md:mx-5 lg:mx-12 mt-5 mb-3">
                    <img className="w-40 h-40" src="https://i.ibb.co/1m5K5cm/41p-ZXkt-EVj-L-AC-UF894-1000-QL80.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Walton Web Cam pro </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                110{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>150</del>
                </span>
              </h1>
                </div>
            </div>
            {/* This is 3rd card */}
            <div className="flex flex-row  mt-5 mb-3">
                <div className="flex mx-0 md:mx-5 lg:mx-12">
                    <img className="w-40 h-40" src="https://i.ibb.co/cxcccwQ/64c64ff046f7180f51234158-beats-solo3-wireless-on-ear-headphones.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Mi HeadPhone 7A  </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                130{" "}
                
              </h1>
                </div>
            </div>
        </div>
    );
};

export default SlidePage1;