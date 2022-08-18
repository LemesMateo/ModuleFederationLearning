import React from "react";
import ReactDOM from "react-dom";
import mountHeader from 'home/mountHeader';

import "./index.css";

mountHeader('#header');

const App = () => <div>Hi there, I'm React from Webpack 5.</div>;

ReactDOM.render(<App />, document.getElementById("app"));
