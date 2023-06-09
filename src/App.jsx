import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BeerCollection from "./pages/BeerCollection";
import BeerDetails from "./pages/BeerDetails";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? "/" : "/react-beer-api/"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/beercollection" element={<BeerCollection />} />
          <Route path="/beercollection/:beerid" element={<BeerDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
