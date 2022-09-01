import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar"

export default (el) => {
    ReactDOM.render(<Navbar/>, document.getElementById(el))
}