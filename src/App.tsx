import {Suspense, lazy } from "react";

import "./App.css";
const Homepage = lazy(() => import("./Pages/Homepage"));

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
