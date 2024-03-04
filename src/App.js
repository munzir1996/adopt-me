import React from "react";
// import { render } from "react-dom";
import { createRoot } from 'react-dom/client';
import SearchParams from "./SearchParams";
 
const App = () => {

    return (

      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
      
    );

};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

// render(<App />, document.getElementById("root"));
