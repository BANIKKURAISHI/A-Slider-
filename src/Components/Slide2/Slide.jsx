import Slider from "./Slider/Slider";



const Slide = () => {
    return (
        <div className="flex flex-row justify-between">
           <div className="flex flex-1">
            <img src="https://i.ibb.co/qj47SgN/360-F-462391120-7r-Kj3im-ICo-AKHx1g-EK6a-LVu7-SFCXUc-Qh.jpg" alt="" />
            </div> 
            <div className="flex flex-1">
           <Slider></Slider>
            </div>
        </div>
    );
};

export default Slide;