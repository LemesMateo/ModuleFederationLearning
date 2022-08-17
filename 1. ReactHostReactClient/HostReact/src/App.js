import React, { lazy, Suspense} from "react";

const SubAAppLazy = lazy( () => import('./SubAApp'));

const App = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <h1 className="text-center bg-dark text-white">Sanitarios Lemes</h1>
        <hr/>
        <SubAAppLazy />
    </Suspense>
);

export default App;