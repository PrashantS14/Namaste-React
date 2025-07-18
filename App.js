import React from "react";
import ReactDOM from "react-dom/client";

//create an element

/*const heading= React.createElement(
  "h1",
   {id:"heading",xyz:"abc"},
   "Hello World from React!"
);

 console.log(heading);

 const root = ReactDOM.createRoot(document.getElementById("root"));

 console.log(root);

 root.render(heading);

 */

//creating nested elements

/*const parent = React.createElement("div",
  {id:"parent"},
  React.createElement("div",{id:"child"},
    React.createElement("h1",{},"I'm an h1 tag")
  )

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
*/

/*
const parent = React.createElement("div",
  {id:"parent"},
  [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm an h1 tag"),
     React.createElement("h2",{},"I'm h2 tag") ]
  ),
  React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")]
  )]
  

);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
*/


//creating React element using jsx

// const jsxHeading = <h1 id="heading">Namaste React Using JSX🚀 </h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//React Functional Component

/*
const HeadingComponent = () =>{
  return <h1 id="heading">This is React Functional Component🚀 </h1>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
*/


//React Functional Component without using Return 
/*
const HeadingComponent = () =>  (<h1 id="heading">This is React Functional Component🚀</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
*/

//React Functional Component without using Return Ex2
/*
const HeadingComponent = () =>(
      <div id="container">
        <h1 className="heading">
          Namaste React from h1 inside div in Functional Component
          </h1>
        </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
*/

//Component Composition

const TitleComponent = () => (
  <h1 className="title">Namaste React from Title Component</h1>
);

const HeadingComponent = () =>(
  <div id="container">
    <TitleComponent/>
    <h1 className="Heading">Namaste React from Heading Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

