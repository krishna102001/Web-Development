// var React = require("react");
// var ReactDOM = require("react-dom");
// instead of creating a var variable and then require it we can simply use a import module methods to
//import a package
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT TO SHOW,WHERE TO SHOW it,CALLBACK FUNCTION);

//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById("root")); // it always take one html element only

ReactDOM.render(
  <div>
    <h1>HELLO WORLD!!</h1>
    <p>This is my first react app.</p>
  </div>,
  document.getElementById("root")
);
