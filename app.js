import React from 'react';
import ReactDOM from 'react-dom/client';



const Heading = () => (<h1 className = "random" tabIndex= "1">
    Namste Random
    </h1>);

const Heading2 = () =>  (
     <div>
         < Heading />
        <h1 className = "random" tabIndex= "1">Namste Adesh </h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />);
