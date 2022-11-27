//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "font-awesome/css/font-awesome.min.css"

//import your own components
import Home from "./component/home.jsx";

//render your react application
const counter = 0;



ReactDOM.render(<Home />, document.querySelector("#app"));
