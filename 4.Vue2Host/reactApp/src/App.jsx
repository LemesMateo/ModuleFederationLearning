import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar"
import "./index.scss";
import mountFooter from "vue3App/mountFooter";
import mountFeature from "host/mountFeature";



const App = () => {
  mountFooter('#footer')
  return (
  <>
    <Navbar/>
  </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
