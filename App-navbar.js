import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/Components/Header";
import Body from "./src/Components/Body";
import Footer from "./src/Components/Footer";


const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
