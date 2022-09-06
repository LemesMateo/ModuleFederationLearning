import React from "react";
import ReactDOM from "react-dom";
import Footer from "reactApp/Footer"
import "./index.scss";
import Header from 'vue3host/Header'
import Feature from "vue2App/Feature"
import Card from 'vue3App/Card'



const App = () => (
  <>
  <div id="header"></div>
  <div id="feature"></div>
  <div id="card"></div>
  <Footer/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Header/>, document.getElementById("header"));
ReactDOM.render(<Feature/>, document.getElementById("feature"));
ReactDOM.render(<Card/>, document.getElementById("card"));
