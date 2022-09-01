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
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: reactApp</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
  </>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
