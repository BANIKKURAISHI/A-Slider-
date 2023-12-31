import { IoStar } from "react-icons/io5";
import { PiCurrencyDollarBold } from "react-icons/pi";


const SlidePage3 = () => {
    return (
        <div className="my-10">
            <div className="flex flex-row  ">
                <div className="flex mx-20 mb-3">
                    <img className="w-40 h-40" src="https://i.ibb.co/0cCw6rj/Lenovo-Tab-M10-Plus-Gen-3-tablet-sale.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Mi Note Book </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                430{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>520</del>
                </span>
              </h1>
                </div>
            </div>
          {/* this is 2nd cart */}
          <div className="flex flex-row mt-5 mb-3 ">
                <div className="flex mx-20">
                    <img className="w-40 h-40" src="https://i.ibb.co/zSS6L6B/0543987-mens-gabardine-pant-3-pcs-combo.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-slate-300 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Mens-gabardine </h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                220{" "}
                <span className="text-xl text-slate-600 ml-2 my-1">
                  <del>250</del>
                </span>
              </h1>
                </div>
            </div>
            {/* This is 3rd card */}
            <div className="flex flex-row  mt-5 mb-3 ">
                <div className="flex mx-20">
                    <img className="w-40 h-40" src="https://i.ibb.co/DbLFjTY/web-adventurer-sand-rollable-mens-panama-hat-sun-pachacuti-002-category-v2-1920x1329.jpg" alt="" />
                </div>
                <div className="flex flex-col mt-10">
                <div className="flex flex-row mb-1">
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500" />
              <IoStar className="text-yellow-500 " />
            </div>
            <h1 className="text-2xl mb-1 font-semibold">Panama-Hat-Sun</h1>
            <h1 className="flex flex-row text-justify text-orange-500 text-2xl font-semibold mb-3">
                <PiCurrencyDollarBold className="my-1 mr-1" />
                100{" "}
               
              </h1>
                </div>
            </div>
        </div>
    );
};

export default SlidePage3;