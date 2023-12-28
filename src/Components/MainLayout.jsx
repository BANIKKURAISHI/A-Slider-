import Slide1 from "./Slide1";
import Slide from "./Slide2/Slide";



const MainLayout = () => {

    return (
        <div className="min-h-screen">
            <h1 className="w-11/12 text-5xl mx-auto my-3 text-black">Welcome to our Brand shop.  </h1>
           <Slide1></Slide1>
           <div className="mb-10">
           <Slide></Slide>
  
           </div>
           
      </div>
    );
};

export default MainLayout;