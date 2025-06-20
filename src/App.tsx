import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./components/navbar";
import Reducer from "./pages/Reducer";
import UseCallBack from "./pages/UseCallBack";
import UseMemo from "./pages/UseMemo";
import UseCustomHook from "./pages/UseCustomHook";
import useAutoLogout from "./components/UseCustomHooks.tsx/UseAutoLogout";
import Images from "./pages/images";
import UseContext from "./pages/UseContext";
import { ThemeProvider } from "./components/UseContext/ThemeContext";
import { AuthProvider } from "./components/UseContext/AuthContext";

function App() {
  // auto logout after no user moment
  // useAutoLogout(() => alert("You are logged out"), 2000);

  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/reducer" element={<Reducer />} />
              <Route path="/usecallback" element={<UseCallBack />} />
              <Route path="/usememo" element={<UseMemo />} />
              <Route path="/usecustomhook" element={<UseCustomHook />} />
              <Route path="/images" element={<Images />} />
              <Route path="/usecontext" element={<UseContext />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
