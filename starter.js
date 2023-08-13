/**
 * created a server
 HMR- hot module replacement
 file watcher algorithm- in c++
 BUNDLEING
 MINIFYING
 dev and production build
 image optimisaion
 Super fast build Algorithm
 Caching while developmet
 compression 
 cleaing our code -((get rid of consol.log))
 compatible with older browser- ((browser list))
 htpps on dev
 port number
 consistent hasing algorithm
 zero configuration needed
 Tree shaking
 **/
import React from "react";
import ReactDOM from "react-dom/client";

//functional component
const Heading = () => {
  return (
    <h1 id="title" key="h">
      {" "}
      heading in a react element
    </h1>
  );
};
//functional component
const HeaderComponent = () => {
  return (
    <div>
      <Heading />
      <h1 id="title" key="2">
        {" "}
        heading in a functional component
      </h1>
    </div>
  );
};

//react element
// const heading= (<h1 id="title" key="h"> heading in a react element</h1>);
// //functional component
// const HeaderComponent =()=>{
//   return (
//     <div>
//     {heading},
//     <h1 id="title" key="2"> heading in a functional component</h1>
//     </div>
//     ) ;
// };

//giving entry point to react dom
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
// root.render(heading)

// Method 2 using js
// const heading= document.createElement("h1");
// heading.innerHTML="hello react";
// const root=document.getElementById("root");
// root.appendChild(heading);

// Method 3 using react
// firstly we have to import the cdn link of react
// secondly we will be render our heading using react
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "tittle1",
//     className: "upper heading",
//     key:"h1",
//   },
//   "hello react in h1"
// );
// const heading2 = React.createElement("div", {key:"h2",}, "hello react in div tag");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([heading1, heading2]);
// root.render[heading1];