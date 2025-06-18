import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Reducer from "./pages/Reducer";
import UseCallBack from "./pages/UseCallBack";
import UseMemo from "./pages/UseMemo";
import UseCustomHook from "./pages/UseCustomHook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/usecallback" element={<UseCallBack />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usecustomhook" element={<UseCustomHook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
