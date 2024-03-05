import React from "react";
// import { Router, Link } from "@gatsbyjs/reach-router";
import { createRoot } from 'react-dom/client';
import SearchParams from "./SearchParams";
import { StrictMode } from 'react';
import Details from "./Details";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const App = () => {

    return (
        <div>
          <header>
            <Link to="/">
              Adopt Me!
            </Link>
          </header>
          {/* <link to="/">
            <h1 id="something-important">Adopt Me!</h1>
          </link> */}
          <Routes>
            <Route path="/" element={<SearchParams />} />
            <Route path="/details/:id" element={<Details />} />
            
          </Routes>
        </div>
    );

};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
