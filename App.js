import React  from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import { lazy, Suspense } from "react";
// import Instamart from "./src/Components/Instamart";


// lazy loading the instamart component
const Instamart= lazy(()=> import("./src/Components/Instamart"))


const AppLayout = () => { 
  return (
    <>
      <HeaderComponent />
      <Outlet />  
       <Footer />
    </>
  );
};
const appRouter= createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path: "/about",
        element: <About />,
        errorElement:<Error />,
      },
      {
        path: "/",
        element: <Body />,
        errorElement:<Error />,
      },
      {
        path: "/contact" ,
        element: <Contact/>,
        errorElement:<Error />,
      },
      {
        path: "/restaurants/:resid" ,
        element: <RestaurantMenu/>,
      },
      {
        path: "/Instamart" ,
        element: <Suspense fallback={<h1>loading....</h1>}>
        <Instamart/> </Suspense>,
      },
    ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
