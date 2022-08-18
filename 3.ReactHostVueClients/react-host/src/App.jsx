import React from "react";
import ReactDOM from "react-dom";
import mountHeader from 'home/mountHeader';
import mountCarousel from 'dogDetail/mountCarousel';
import mountHomeInfo from "home/mountHomeInfo";


import "./index.css";

mountHeader('#header');
mountHomeInfo('#homeinfo')
mountCarousel('#carousel')

const App = () => <div>Hello there, I'm the React host</div>;

ReactDOM.render(<App />, document.getElementById("app"));
