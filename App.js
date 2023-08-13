import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";
import {createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";


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
    ]
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
