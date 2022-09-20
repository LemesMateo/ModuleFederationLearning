import React from "react";
import ReactDOM from "react-dom";
import reactcard from "reactApp/reactcard"

export default (el) => {
    ReactDOM.render(<reactcard/>, document.getElementById(el))
}