import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("./Pages/Homepage"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
