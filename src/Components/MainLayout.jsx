import Slide1 from "./Slide1";
import Slide from "./Slide2/Slide";



const MainLayout = () => {

    return (
        <div className="min-h-screen">
           <Slide1></Slide1>
           <div className="mb-10">
           <Slide></Slide>
  
           </div>
           
      </div>
    );
};

export default MainLayout;