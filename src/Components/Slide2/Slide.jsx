import Slider from "./Slider/Slider";



const Slide = () => {
    return (
        <div className="flex flex-row justify-between max-w-11/12 mx-auto">
           <div className="flex w-2/3">
            <img src="https://i.ibb.co/qj47SgN/360-F-462391120-7r-Kj3im-ICo-AKHx1g-EK6a-LVu7-SFCXUc-Qh.jpg" alt="" />
            </div> 
            <div className="flex w-1/3">
           <Slider></Slider>
            </div>
        </div>
    );
};

export default Slide;