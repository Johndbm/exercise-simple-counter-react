//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "font-awesome/css/font-awesome.min.css"

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;

setInterval(() => {
    counter++
    const one = counter / 1
    const two = counter / 10
    const three = counter / 100
    const four = counter / 1000

    ReactDOM.render(<Home one={one} two={two} three={three} four={four} counter={counter} />, document.querySelector("#app"));
}, 1000);