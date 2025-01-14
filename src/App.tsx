import {Suspense, lazy } from "react";

const Homepage = lazy(() => import("./Pages/Homepage"));

function App() {
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
