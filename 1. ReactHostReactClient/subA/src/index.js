import React from "react";
import "./styles.css"
import ReactDOM from "react-dom";
import App from './App'

const mount = (el) => {
    ReactDOM.render(<App/>, el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_sub-a-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
