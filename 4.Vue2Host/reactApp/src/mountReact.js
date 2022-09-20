import React from "react";
import ReactDOM from "react-dom";
import { lazy, Suspense } from "react";
import ErrorBoundary from './ErrorBoundary';



export default (el, componentName) => {
    const Component = React.lazy(() => import(`./views/${componentName}`));
    try {
      ReactDOM.render(
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
      <Component/>
      </Suspense>
      </ErrorBoundary>
      , document.getElementById(el));
  }
    catch {
      console.log("se rompió")
    }
}


