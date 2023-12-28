import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";

const myCreateRoute=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>
    }
])


export default myCreateRoute