import React,{StrictMode} from "react";
import {createRoot} from "react-dom";
import App from "./component/App";
const root=createRoot(document.getElementById("root"));
root.render(
    <StrictMode><App /></StrictMode>
);